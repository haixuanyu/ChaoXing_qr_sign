import { computed, defineComponent, createVNode as _createVNode } from "vue";
import { createNamespace, HAPTICS_FEEDBACK, makeStringProp } from "../utils/index.mjs";
import { t, bem, compareMonth, getPrevMonth, getPrevYear, getNextMonth, getNextYear } from "./utils.mjs";
import { Icon } from "../icon/index.mjs";
const [name] = createNamespace("calendar-header");
var stdin_default = defineComponent({
  name,
  props: {
    date: Date,
    minDate: Date,
    maxDate: Date,
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number,
    switchMode: makeStringProp("none")
  },
  emits: ["clickSubtitle", "panelChange"],
  setup(props, {
    slots,
    emit
  }) {
    const prevMonthDisabled = computed(() => props.date && props.minDate && compareMonth(getPrevMonth(props.date), props.minDate) < 0);
    const prevYearDisabled = computed(() => props.date && props.minDate && compareMonth(getPrevYear(props.date), props.minDate) < 0);
    const nextMonthDisabled = computed(() => props.date && props.maxDate && compareMonth(getNextMonth(props.date), props.maxDate) > 0);
    const nextYearDisabled = computed(() => props.date && props.maxDate && compareMonth(getNextYear(props.date), props.maxDate) > 0);
    const renderTitle = () => {
      if (props.showTitle) {
        const text = props.title || t("title");
        const title = slots.title ? slots.title() : text;
        return _createVNode("div", {
          "class": bem("header-title")
        }, [title]);
      }
    };
    const onClickSubtitle = (event) => emit("clickSubtitle", event);
    const onPanelChange = (date) => emit("panelChange", date);
    const renderAction = (isNext) => {
      const showYearAction = props.switchMode === "year-month";
      const monthSlot = slots[isNext ? "next-month" : "prev-month"];
      const yearSlot = slots[isNext ? "next-year" : "prev-year"];
      const monthDisabled = isNext ? nextMonthDisabled.value : prevMonthDisabled.value;
      const yearDisabled = isNext ? nextYearDisabled.value : prevYearDisabled.value;
      const monthIconName = isNext ? "arrow" : "arrow-left";
      const yearIconName = isNext ? "arrow-double-right" : "arrow-double-left";
      const onMonthChange = () => onPanelChange((isNext ? getNextMonth : getPrevMonth)(props.date));
      const onYearChange = () => onPanelChange((isNext ? getNextYear : getPrevYear)(props.date));
      const MonthAction = _createVNode("view", {
        "class": bem("header-action", {
          disabled: monthDisabled
        }),
        "onClick": monthDisabled ? void 0 : onMonthChange
      }, [monthSlot ? monthSlot({
        disabled: monthDisabled
      }) : _createVNode(Icon, {
        "class": {
          [HAPTICS_FEEDBACK]: !monthDisabled
        },
        "name": monthIconName
      }, null)]);
      const YearAction = showYearAction && _createVNode("view", {
        "class": bem("header-action", {
          disabled: yearDisabled
        }),
        "onClick": yearDisabled ? void 0 : onYearChange
      }, [yearSlot ? yearSlot({
        disabled: yearDisabled
      }) : _createVNode(Icon, {
        "class": {
          [HAPTICS_FEEDBACK]: !yearDisabled
        },
        "name": yearIconName
      }, null)]);
      return isNext ? [MonthAction, YearAction] : [YearAction, MonthAction];
    };
    const renderSubtitle = () => {
      if (props.showSubtitle) {
        const title = slots.subtitle ? slots.subtitle({
          date: props.date,
          text: props.subtitle
        }) : props.subtitle;
        const canSwitch = props.switchMode !== "none";
        return _createVNode("div", {
          "class": bem("header-subtitle", {
            "with-switch": canSwitch
          }),
          "onClick": onClickSubtitle
        }, [canSwitch ? [renderAction(), _createVNode("div", {
          "class": bem("header-subtitle-text")
        }, [title]), renderAction(true)] : title]);
      }
    };
    const renderWeekDays = () => {
      const {
        firstDayOfWeek
      } = props;
      const weekdays = t("weekdays");
      const renderWeekDays2 = [...weekdays.slice(firstDayOfWeek, 7), ...weekdays.slice(0, firstDayOfWeek)];
      return _createVNode("div", {
        "class": bem("weekdays")
      }, [renderWeekDays2.map((text) => _createVNode("span", {
        "class": bem("weekday")
      }, [text]))]);
    };
    return () => _createVNode("div", {
      "class": bem("header")
    }, [renderTitle(), renderSubtitle(), renderWeekDays()]);
  }
});
export {
  stdin_default as default
};
