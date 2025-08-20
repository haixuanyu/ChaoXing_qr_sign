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
  ROW_KEY: () => ROW_KEY,
  default: () => stdin_default,
  rowProps: () => rowProps
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
var import_use = require("@vant/use");
const [name, bem] = (0, import_utils.createNamespace)("row");
const ROW_KEY = Symbol(name);
const rowProps = {
  tag: (0, import_utils.makeStringProp)("div"),
  wrap: import_utils.truthProp,
  align: String,
  gutter: {
    type: [String, Number, Array],
    default: 0
  },
  justify: String
};
var stdin_default = (0, import_vue.defineComponent)({
  name,
  props: rowProps,
  setup(props, {
    slots
  }) {
    const {
      children,
      linkChildren
    } = (0, import_use.useChildren)(ROW_KEY);
    const groups = (0, import_vue.computed)(() => {
      const groups2 = [[]];
      let totalSpan = 0;
      children.forEach((child, index) => {
        totalSpan += Number(child.span);
        if (totalSpan > 24) {
          groups2.push([index]);
          totalSpan -= 24;
        } else {
          groups2[groups2.length - 1].push(index);
        }
      });
      return groups2;
    });
    const spaces = (0, import_vue.computed)(() => {
      let gutter = 0;
      if (Array.isArray(props.gutter)) {
        gutter = Number(props.gutter[0]) || 0;
      } else {
        gutter = Number(props.gutter);
      }
      const spaces2 = [];
      if (!gutter) {
        return spaces2;
      }
      groups.value.forEach((group) => {
        const averagePadding = gutter * (group.length - 1) / group.length;
        group.forEach((item, index) => {
          if (index === 0) {
            spaces2.push({
              right: averagePadding
            });
          } else {
            const left = gutter - spaces2[item - 1].right;
            const right = averagePadding - left;
            spaces2.push({
              left,
              right
            });
          }
        });
      });
      return spaces2;
    });
    const verticalSpaces = (0, import_vue.computed)(() => {
      const {
        gutter
      } = props;
      const spaces2 = [];
      if (Array.isArray(gutter) && gutter.length > 1) {
        const bottom = Number(gutter[1]) || 0;
        if (bottom <= 0) {
          return spaces2;
        }
        groups.value.forEach((group, index) => {
          if (index === groups.value.length - 1) return;
          group.forEach(() => {
            spaces2.push({
              bottom
            });
          });
        });
      }
      return spaces2;
    });
    linkChildren({
      spaces,
      verticalSpaces
    });
    return () => {
      const {
        tag,
        wrap,
        align,
        justify
      } = props;
      return (0, import_vue.createVNode)(tag, {
        "class": bem({
          [`align-${align}`]: align,
          [`justify-${justify}`]: justify,
          nowrap: !wrap
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
