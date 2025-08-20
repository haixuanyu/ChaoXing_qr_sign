var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => stdin_default,
  rollingTextProps: () => rollingTextProps
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_use = require("@vant/use");
var import_utils = require("../utils");
var import_use_expose = require("../composables/use-expose");
var import_RollingTextItem = __toESM(require("./RollingTextItem"));
const [name, bem] = (0, import_utils.createNamespace)("rolling-text");
const rollingTextProps = {
  startNum: (0, import_utils.makeNumberProp)(0),
  targetNum: Number,
  textList: (0, import_utils.makeArrayProp)(),
  duration: (0, import_utils.makeNumberProp)(2),
  autoStart: import_utils.truthProp,
  direction: (0, import_utils.makeStringProp)("down"),
  stopOrder: (0, import_utils.makeStringProp)("ltr"),
  height: (0, import_utils.makeNumberProp)(40)
};
const CIRCLE_NUM = 2;
var stdin_default = (0, import_vue.defineComponent)({
  name,
  props: rollingTextProps,
  setup(props) {
    const isCustomType = (0, import_vue.computed)(() => Array.isArray(props.textList) && props.textList.length);
    const itemLength = (0, import_vue.computed)(() => {
      if (isCustomType.value) return props.textList[0].length;
      return `${Math.max(props.startNum, props.targetNum)}`.length;
    });
    const getTextArrByIdx = (idx) => {
      const result = [];
      for (let i = 0; i < props.textList.length; i++) {
        result.push(props.textList[i][idx]);
      }
      return result;
    };
    const targetNumArr = (0, import_vue.computed)(() => {
      if (isCustomType.value) return new Array(itemLength.value).fill("");
      return (0, import_utils.padZero)(props.targetNum, itemLength.value).split("");
    });
    const startNumArr = (0, import_vue.computed)(() => (0, import_utils.padZero)(props.startNum, itemLength.value).split(""));
    const getFigureArr = (i) => {
      const start2 = +startNumArr.value[i];
      const target = +targetNumArr.value[i];
      const result = [];
      for (let i2 = start2; i2 <= 9; i2++) {
        result.push(i2);
      }
      for (let i2 = 0; i2 <= CIRCLE_NUM; i2++) {
        for (let j = 0; j <= 9; j++) {
          result.push(j);
        }
      }
      for (let i2 = 0; i2 <= target; i2++) {
        result.push(i2);
      }
      return result;
    };
    const getDelay = (i, len) => {
      if (props.stopOrder === "ltr") return 0.2 * i;
      return 0.2 * (len - 1 - i);
    };
    const rolling = (0, import_vue.ref)(props.autoStart);
    const start = () => {
      rolling.value = true;
    };
    const reset = () => {
      rolling.value = false;
      if (props.autoStart) {
        (0, import_use.raf)(() => start());
      }
    };
    (0, import_vue.watch)(() => props.autoStart, (value) => {
      if (value) {
        start();
      }
    });
    (0, import_use_expose.useExpose)({
      start,
      reset
    });
    return () => (0, import_vue.createVNode)("div", {
      "class": bem()
    }, [targetNumArr.value.map((_, i) => (0, import_vue.createVNode)(import_RollingTextItem.default, {
      "figureArr": isCustomType.value ? getTextArrByIdx(i) : getFigureArr(i),
      "duration": props.duration,
      "direction": props.direction,
      "isStart": rolling.value,
      "height": props.height,
      "delay": getDelay(i, itemLength.value)
    }, null))]);
  }
});
