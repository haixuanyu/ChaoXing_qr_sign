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
  default: () => stdin_default,
  props: () => props
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
const props = {
  figureArr: (0, import_utils.makeArrayProp)(),
  delay: Number,
  duration: (0, import_utils.makeNumberProp)(2),
  isStart: Boolean,
  direction: (0, import_utils.makeStringProp)("down"),
  height: (0, import_utils.makeNumberProp)(40)
};
const [name, bem] = (0, import_utils.createNamespace)("rolling-text-item");
var stdin_default = (0, import_vue.defineComponent)({
  name,
  props,
  setup(props2) {
    const newFigureArr = (0, import_vue.computed)(() => props2.direction === "down" ? props2.figureArr.slice().reverse() : props2.figureArr);
    const translatePx = (0, import_vue.computed)(() => {
      const totalHeight = props2.height * (props2.figureArr.length - 1);
      return `-${totalHeight}px`;
    });
    const itemStyle = (0, import_vue.computed)(() => ({
      lineHeight: (0, import_utils.addUnit)(props2.height)
    }));
    const rootStyle = (0, import_vue.computed)(() => ({
      height: (0, import_utils.addUnit)(props2.height),
      "--van-translate": translatePx.value,
      "--van-duration": props2.duration + "s",
      "--van-delay": props2.delay + "s"
    }));
    return () => (0, import_vue.createVNode)("div", {
      "class": bem([props2.direction]),
      "style": rootStyle.value
    }, [(0, import_vue.createVNode)("div", {
      "class": bem("box", {
        animate: props2.isStart
      })
    }, [Array.isArray(newFigureArr.value) && newFigureArr.value.map((figure) => (0, import_vue.createVNode)("div", {
      "class": bem("item"),
      "style": itemStyle.value
    }, [figure]))])]);
  }
});
