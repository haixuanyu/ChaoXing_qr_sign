var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => stdin_default
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
var import_utils2 = require("./utils");
var import_icon = require("../icon");
const [name] = (0, import_utils.createNamespace)("calendar-header");
var stdin_default = (0, import_vue.defineComponent)({
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
    switchMode: (0, import_utils.makeStringProp)("none")
  },
  emits: ["clickSubtitle", "panelChange"],
  setup(props, {
    slots,
    emit
  }) {
    const prevMonthDisabled = (0, import_vue.computed)(() => props.date && props.minDate && (0, import_utils2.compareMonth)((0, import_utils2.getPrevMonth)(props.date), props.minDate) < 0);
    const prevYearDisabled = (0, import_vue.computed)(() => props.date && props.minDate && (0, import_utils2.compareMonth)((0, import_utils2.getPrevYear)(props.date), props.minDate) < 0);
    const nextMonthDisabled = (0, import_vue.computed)(() => props.date && props.maxDate && (0, import_utils2.compareMonth)((0, import_utils2.getNextMonth)(props.date), props.maxDate) > 0);
    const nextYearDisabled = (0, import_vue.computed)(() => props.date && props.maxDate && (0, import_utils2.compareMonth)((0, import_utils2.getNextYear)(props.date), props.maxDate) > 0);
    const renderTitle = () => {
      if (props.showTitle) {
        const text = props.title || (0, import_utils2.t)("title");
        const title = slots.title ? slots.title() : text;
        return (0, import_vue.createVNode)("div", {
          "class": (0, import_utils2.bem)("header-title")
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
      const onMonthChange = () => onPanelChange((isNext ? import_utils2.getNextMonth : import_utils2.getPrevMonth)(props.date));
      const onYearChange = () => onPanelChange((isNext ? import_utils2.getNextYear : import_utils2.getPrevYear)(props.date));
      const MonthAction = (0, import_vue.createVNode)("view", {
        "class": (0, import_utils2.bem)("header-action", {
          disabled: monthDisabled
        }),
        "onClick": monthDisabled ? void 0 : onMonthChange
      }, [monthSlot ? monthSlot({
        disabled: monthDisabled
      }) : (0, import_vue.createVNode)(import_icon.Icon, {
        "class": {
          [import_utils.HAPTICS_FEEDBACK]: !monthDisabled
        },
        "name": monthIconName
      }, null)]);
      const YearAction = showYearAction && (0, import_vue.createVNode)("view", {
        "class": (0, import_utils2.bem)("header-action", {
          disabled: yearDisabled
        }),
        "onClick": yearDisabled ? void 0 : onYearChange
      }, [yearSlot ? yearSlot({
        disabled: yearDisabled
      }) : (0, import_vue.createVNode)(import_icon.Icon, {
        "class": {
          [import_utils.HAPTICS_FEEDBACK]: !yearDisabled
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
        return (0, import_vue.createVNode)("div", {
          "class": (0, import_utils2.bem)("header-subtitle", {
            "with-switch": canSwitch
          }),
          "onClick": onClickSubtitle
        }, [canSwitch ? [renderAction(), (0, import_vue.createVNode)("div", {
          "class": (0, import_utils2.bem)("header-subtitle-text")
        }, [title]), renderAction(true)] : title]);
      }
    };
    const renderWeekDays = () => {
      const {
        firstDayOfWeek
      } = props;
      const weekdays = (0, import_utils2.t)("weekdays");
      const renderWeekDays2 = [...weekdays.slice(firstDayOfWeek, 7), ...weekdays.slice(0, firstDayOfWeek)];
      return (0, import_vue.createVNode)("div", {
        "class": (0, import_utils2.bem)("weekdays")
      }, [renderWeekDays2.map((text) => (0, import_vue.createVNode)("span", {
        "class": (0, import_utils2.bem)("weekday")
      }, [text]))]);
    };
    return () => (0, import_vue.createVNode)("div", {
      "class": (0, import_utils2.bem)("header")
    }, [renderTitle(), renderSubtitle(), renderWeekDays()]);
  }
});
