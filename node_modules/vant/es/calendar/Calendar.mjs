import { ref, watch, computed, defineComponent, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { pick, isDate, truthProp, numericProp, getScrollTop, makeStringProp, makeNumericProp } from "../utils/index.mjs";
import { t, bem, name, getToday, cloneDate, cloneDates, getPrevDay, getNextDay, compareDay, calcDateNum, compareMonth, getDayByOffset, getMonthByOffset } from "./utils.mjs";
import { raf, useRect, onMountedOrActivated } from "@vant/use";
import { useRefs } from "../composables/use-refs.mjs";
import { useExpose } from "../composables/use-expose.mjs";
import { Popup } from "../popup/index.mjs";
import { Button } from "../button/index.mjs";
import { showToast } from "../toast/index.mjs";
import CalendarMonth from "./CalendarMonth.mjs";
import CalendarHeader from "./CalendarHeader.mjs";
const calendarProps = {
  show: Boolean,
  type: makeStringProp("single"),
  switchMode: makeStringProp("none"),
  title: String,
  color: String,
  round: truthProp,
  readonly: Boolean,
  poppable: truthProp,
  maxRange: makeNumericProp(null),
  position: makeStringProp("bottom"),
  teleport: [String, Object],
  showMark: truthProp,
  showTitle: truthProp,
  formatter: Function,
  rowHeight: numericProp,
  confirmText: String,
  rangePrompt: String,
  lazyRender: truthProp,
  showConfirm: truthProp,
  defaultDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: truthProp,
  closeOnPopstate: truthProp,
  showRangePrompt: truthProp,
  confirmDisabledText: String,
  closeOnClickOverlay: truthProp,
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: truthProp,
  minDate: {
    type: Date,
    validator: isDate
  },
  maxDate: {
    type: Date,
    validator: isDate
  },
  firstDayOfWeek: {
    type: numericProp,
    default: 0,
    validator: (val) => val >= 0 && val <= 6
  }
};
var stdin_default = defineComponent({
  name,
  props: calendarProps,
  emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate", "clickOverlay", "panelChange"],
  setup(props, {
    emit,
    slots
  }) {
    const canSwitch = computed(() => props.switchMode !== "none");
    const minDate = computed(() => {
      if (!props.minDate && !canSwitch.value) {
        return getToday();
      }
      return props.minDate;
    });
    const maxDate = computed(() => {
      if (!props.maxDate && !canSwitch.value) {
        return getMonthByOffset(getToday(), 6);
      }
      return props.maxDate;
    });
    const limitDateRange = (date, min = minDate.value, max = maxDate.value) => {
      if (min && compareDay(date, min) === -1) {
        return min;
      }
      if (max && compareDay(date, max) === 1) {
        return max;
      }
      return date;
    };
    const getInitialDate = (defaultDate = props.defaultDate) => {
      const {
        type,
        allowSameDay
      } = props;
      if (defaultDate === null) {
        return defaultDate;
      }
      const now = getToday();
      if (type === "range") {
        if (!Array.isArray(defaultDate)) {
          defaultDate = [];
        }
        if (defaultDate.length === 1 && compareDay(defaultDate[0], now) === 1) {
          defaultDate = [];
        }
        const min = minDate.value;
        const max = maxDate.value;
        const start = limitDateRange(defaultDate[0] || now, min, max ? allowSameDay ? max : getPrevDay(max) : void 0);
        const end = limitDateRange(defaultDate[1] || (allowSameDay ? now : getNextDay(now)), min ? allowSameDay ? min : getNextDay(min) : void 0);
        return [start, end];
      }
      if (type === "multiple") {
        if (Array.isArray(defaultDate)) {
          return defaultDate.map((date) => limitDateRange(date));
        }
        return [limitDateRange(now)];
      }
      if (!defaultDate || Array.isArray(defaultDate)) {
        defaultDate = now;
      }
      return limitDateRange(defaultDate);
    };
    const getInitialPanelDate = () => {
      const date = Array.isArray(currentDate.value) ? currentDate.value[0] : currentDate.value;
      return date ? date : limitDateRange(getToday());
    };
    let bodyHeight;
    const bodyRef = ref();
    const currentDate = ref(getInitialDate());
    const currentPanelDate = ref(getInitialPanelDate());
    const currentMonthRef = ref();
    const [monthRefs, setMonthRefs] = useRefs();
    const dayOffset = computed(() => props.firstDayOfWeek ? +props.firstDayOfWeek % 7 : 0);
    const months = computed(() => {
      const months2 = [];
      if (!minDate.value || !maxDate.value) {
        return months2;
      }
      const cursor = new Date(minDate.value);
      cursor.setDate(1);
      do {
        months2.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, maxDate.value) !== 1);
      return months2;
    });
    const buttonDisabled = computed(() => {
      if (currentDate.value) {
        if (props.type === "range") {
          return !currentDate.value[0] || !currentDate.value[1];
        }
        if (props.type === "multiple") {
          return !currentDate.value.length;
        }
      }
      return !currentDate.value;
    });
    const getSelectedDate = () => currentDate.value;
    const onScroll = () => {
      const top = getScrollTop(bodyRef.value);
      const bottom = top + bodyHeight;
      const heights = months.value.map((item, index) => monthRefs.value[index].getHeight());
      const heightSum = heights.reduce((a, b) => a + b, 0);
      if (bottom > heightSum && top > 0) {
        return;
      }
      let height = 0;
      let currentMonth;
      const visibleRange = [-1, -1];
      for (let i = 0; i < months.value.length; i++) {
        const month = monthRefs.value[i];
        const visible = height <= bottom && height + heights[i] >= top;
        if (visible) {
          visibleRange[1] = i;
          if (!currentMonth) {
            currentMonth = month;
            visibleRange[0] = i;
          }
          if (!monthRefs.value[i].showed) {
            monthRefs.value[i].showed = true;
            emit("monthShow", {
              date: month.date,
              title: month.getTitle()
            });
          }
        }
        height += heights[i];
      }
      months.value.forEach((month, index) => {
        const visible = index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
        monthRefs.value[index].setVisible(visible);
      });
      if (currentMonth) {
        currentMonthRef.value = currentMonth;
      }
    };
    const scrollToDate = (targetDate) => {
      if (canSwitch.value) {
        currentPanelDate.value = targetDate;
      } else {
        raf(() => {
          months.value.some((month, index) => {
            if (compareMonth(month, targetDate) === 0) {
              if (bodyRef.value) {
                monthRefs.value[index].scrollToDate(bodyRef.value, targetDate);
              }
              return true;
            }
            return false;
          });
          onScroll();
        });
      }
    };
    const scrollToCurrentDate = () => {
      if (props.poppable && !props.show) {
        return;
      }
      if (currentDate.value) {
        const targetDate = props.type === "single" ? currentDate.value : currentDate.value[0];
        if (isDate(targetDate)) {
          scrollToDate(targetDate);
        }
      } else if (!canSwitch.value) {
        raf(onScroll);
      }
    };
    const init = () => {
      if (props.poppable && !props.show) {
        return;
      }
      if (!canSwitch.value) {
        raf(() => {
          bodyHeight = Math.floor(useRect(bodyRef).height);
        });
      }
      scrollToCurrentDate();
    };
    const reset = (date = getInitialDate()) => {
      currentDate.value = date;
      scrollToCurrentDate();
    };
    const checkRange = (date) => {
      const {
        maxRange,
        rangePrompt,
        showRangePrompt
      } = props;
      if (maxRange && calcDateNum(date) > +maxRange) {
        if (showRangePrompt) {
          showToast(rangePrompt || t("rangePrompt", maxRange));
        }
        emit("overRange");
        return false;
      }
      return true;
    };
    const onPanelChange = (date) => {
      currentPanelDate.value = date;
      emit("panelChange", {
        date
      });
    };
    const onConfirm = () => {
      var _a;
      return emit("confirm", (_a = currentDate.value) != null ? _a : cloneDates(currentDate.value));
    };
    const select = (date, complete) => {
      const setCurrentDate = (date2) => {
        currentDate.value = date2;
        emit("select", cloneDates(date2));
      };
      if (complete && props.type === "range") {
        const valid = checkRange(date);
        if (!valid) {
          setCurrentDate([date[0], getDayByOffset(date[0], +props.maxRange - 1)]);
          return;
        }
      }
      setCurrentDate(date);
      if (complete && !props.showConfirm) {
        onConfirm();
      }
    };
    const getDisabledDate = (disabledDays2, startDay, date) => {
      var _a;
      return (_a = disabledDays2.find((day) => compareDay(startDay, day.date) === -1 && compareDay(day.date, date) === -1)) == null ? void 0 : _a.date;
    };
    const disabledDays = computed(() => monthRefs.value.reduce((arr, ref2) => {
      var _a, _b;
      arr.push(...(_b = (_a = ref2.disabledDays) == null ? void 0 : _a.value) != null ? _b : []);
      return arr;
    }, []));
    const onClickDay = (item) => {
      if (props.readonly || !item.date) {
        return;
      }
      const {
        date
      } = item;
      const {
        type
      } = props;
      if (type === "range") {
        if (!currentDate.value) {
          select([date]);
          return;
        }
        const [startDay, endDay] = currentDate.value;
        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);
          if (compareToStart === 1) {
            const disabledDay = getDisabledDate(disabledDays.value, startDay, date);
            if (disabledDay) {
              const endDay2 = getPrevDay(disabledDay);
              if (compareDay(startDay, endDay2) === -1) {
                select([startDay, endDay2]);
              } else {
                select([date]);
              }
            } else {
              select([startDay, date], true);
            }
          } else if (compareToStart === -1) {
            select([date]);
          } else if (props.allowSameDay) {
            select([date, date], true);
          }
        } else {
          select([date]);
        }
      } else if (type === "multiple") {
        if (!currentDate.value) {
          select([date]);
          return;
        }
        const dates = currentDate.value;
        const selectedIndex = dates.findIndex((dateItem) => compareDay(dateItem, date) === 0);
        if (selectedIndex !== -1) {
          const [unselectedDate] = dates.splice(selectedIndex, 1);
          emit("unselect", cloneDate(unselectedDate));
        } else if (props.maxRange && dates.length >= +props.maxRange) {
          showToast(props.rangePrompt || t("rangePrompt", props.maxRange));
        } else {
          select([...dates, date]);
        }
      } else {
        select(date, true);
      }
    };
    const onClickOverlay = (event) => emit("clickOverlay", event);
    const updateShow = (value) => emit("update:show", value);
    const renderMonth = (date, index) => {
      const showMonthTitle = index !== 0 || !props.showSubtitle;
      return _createVNode(CalendarMonth, _mergeProps({
        "ref": canSwitch.value ? currentMonthRef : setMonthRefs(index),
        "date": date,
        "currentDate": currentDate.value,
        "showMonthTitle": showMonthTitle,
        "firstDayOfWeek": dayOffset.value,
        "lazyRender": canSwitch.value ? false : props.lazyRender,
        "maxDate": maxDate.value,
        "minDate": minDate.value
      }, pick(props, ["type", "color", "showMark", "formatter", "rowHeight", "showSubtitle", "allowSameDay"]), {
        "onClick": onClickDay,
        "onClickDisabledDate": (item) => emit("clickDisabledDate", item)
      }), pick(slots, ["top-info", "bottom-info", "month-title", "text"]));
    };
    const renderFooterButton = () => {
      if (slots.footer) {
        return slots.footer();
      }
      if (props.showConfirm) {
        const slot = slots["confirm-text"];
        const disabled = buttonDisabled.value;
        const text = disabled ? props.confirmDisabledText : props.confirmText;
        return _createVNode(Button, {
          "round": true,
          "block": true,
          "type": "primary",
          "color": props.color,
          "class": bem("confirm"),
          "disabled": disabled,
          "nativeType": "button",
          "onClick": onConfirm
        }, {
          default: () => [slot ? slot({
            disabled
          }) : text || t("confirm")]
        });
      }
    };
    const renderFooter = () => _createVNode("div", {
      "class": [bem("footer"), {
        "van-safe-area-bottom": props.safeAreaInsetBottom
      }]
    }, [renderFooterButton()]);
    const renderCalendar = () => {
      var _a, _b;
      return _createVNode("div", {
        "class": bem()
      }, [_createVNode(CalendarHeader, {
        "date": (_a = currentMonthRef.value) == null ? void 0 : _a.date,
        "maxDate": maxDate.value,
        "minDate": minDate.value,
        "title": props.title,
        "subtitle": (_b = currentMonthRef.value) == null ? void 0 : _b.getTitle(),
        "showTitle": props.showTitle,
        "showSubtitle": props.showSubtitle,
        "switchMode": props.switchMode,
        "firstDayOfWeek": dayOffset.value,
        "onClickSubtitle": (event) => emit("clickSubtitle", event),
        "onPanelChange": onPanelChange
      }, pick(slots, ["title", "subtitle", "prev-month", "prev-year", "next-month", "next-year"])), _createVNode("div", {
        "ref": bodyRef,
        "class": bem("body"),
        "onScroll": canSwitch.value ? void 0 : onScroll
      }, [canSwitch.value ? renderMonth(currentPanelDate.value, 0) : months.value.map(renderMonth)]), renderFooter()]);
    };
    watch(() => props.show, init);
    watch(() => [props.type, props.minDate, props.maxDate, props.switchMode], () => reset(getInitialDate(currentDate.value)));
    watch(() => props.defaultDate, (value) => {
      reset(value);
    });
    useExpose({
      reset,
      scrollToDate,
      getSelectedDate
    });
    onMountedOrActivated(init);
    return () => {
      if (props.poppable) {
        return _createVNode(Popup, {
          "show": props.show,
          "class": bem("popup"),
          "round": props.round,
          "position": props.position,
          "closeable": props.showTitle || props.showSubtitle,
          "teleport": props.teleport,
          "closeOnPopstate": props.closeOnPopstate,
          "safeAreaInsetTop": props.safeAreaInsetTop,
          "closeOnClickOverlay": props.closeOnClickOverlay,
          "onClickOverlay": onClickOverlay,
          "onUpdate:show": updateShow
        }, {
          default: renderCalendar
        });
      }
      return renderCalendar();
    };
  }
});
export {
  calendarProps,
  stdin_default as default
};
