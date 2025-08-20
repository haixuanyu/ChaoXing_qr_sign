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
  colProps: () => colProps,
  default: () => stdin_default
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
var import_use = require("@vant/use");
var import_Row = require("../row/Row");
const [name, bem] = (0, import_utils.createNamespace)("col");
const colProps = {
  tag: (0, import_utils.makeStringProp)("div"),
  span: (0, import_utils.makeNumericProp)(0),
  offset: import_utils.numericProp
};
var stdin_default = (0, import_vue.defineComponent)({
  name,
  props: colProps,
  setup(props, {
    slots
  }) {
    const {
      parent,
      index
    } = (0, import_use.useParent)(import_Row.ROW_KEY);
    const style = (0, import_vue.computed)(() => {
      if (!parent) {
        return;
      }
      const {
        spaces,
        verticalSpaces
      } = parent;
      let styles = {};
      if (spaces && spaces.value && spaces.value[index.value]) {
        const {
          left,
          right
        } = spaces.value[index.value];
        styles = {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null
        };
      }
      const {
        bottom
      } = verticalSpaces.value[index.value] || {};
      return (0, import_utils.extend)(styles, {
        marginBottom: bottom ? `${bottom}px` : null
      });
    });
    return () => {
      const {
        tag,
        span,
        offset
      } = props;
      return (0, import_vue.createVNode)(tag, {
        "style": style.value,
        "class": bem({
          [span]: span,
          [`offset-${offset}`]: offset
        })
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
