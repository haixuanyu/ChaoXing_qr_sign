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
  textEllipsisProps: () => textEllipsisProps
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
var import_use_expose = require("../composables/use-expose");
const [name, bem] = (0, import_utils.createNamespace)("text-ellipsis");
const textEllipsisProps = {
  rows: (0, import_utils.makeNumericProp)(1),
  dots: (0, import_utils.makeStringProp)("..."),
  content: (0, import_utils.makeStringProp)(""),
  expandText: (0, import_utils.makeStringProp)(""),
  collapseText: (0, import_utils.makeStringProp)(""),
  position: (0, import_utils.makeStringProp)("end")
};
var stdin_default = (0, import_vue.defineComponent)({
  name,
  props: textEllipsisProps,
  emits: ["clickAction"],
  setup(props, {
    emit,
    slots
  }) {
    const text = (0, import_vue.ref)(props.content);
    const expanded = (0, import_vue.ref)(false);
    const hasAction = (0, import_vue.ref)(false);
    const root = (0, import_vue.ref)();
    const actionRef = (0, import_vue.ref)();
    let needRecalculate = false;
    const actionText = (0, import_vue.computed)(() => expanded.value ? props.collapseText : props.expandText);
    const pxToNum = (value) => {
      if (!value) return 0;
      const match = value.match(/^\d*(\.\d*)?/);
      return match ? Number(match[0]) : 0;
    };
    const cloneContainer = () => {
      if (!root.value || !root.value.isConnected) return;
      const originStyle = window.getComputedStyle(root.value);
      const container = document.createElement("div");
      const styleNames = Array.prototype.slice.apply(originStyle);
      styleNames.forEach((name2) => {
        container.style.setProperty(name2, originStyle.getPropertyValue(name2));
      });
      container.style.position = "fixed";
      container.style.zIndex = "-9999";
      container.style.top = "-9999px";
      container.style.height = "auto";
      container.style.minHeight = "auto";
      container.style.maxHeight = "auto";
      container.innerText = props.content;
      document.body.appendChild(container);
      return container;
    };
    const calcEllipsisText = (container, maxHeight) => {
      var _a, _b;
      const {
        content,
        position,
        dots
      } = props;
      const end = content.length;
      const middle = 0 + end >> 1;
      const actionHTML = slots.action ? (_b = (_a = actionRef.value) == null ? void 0 : _a.outerHTML) != null ? _b : "" : props.expandText;
      const calcEllipse = () => {
        const tail = (left, right) => {
          if (right - left <= 1) {
            if (position === "end") {
              return content.slice(0, left) + dots;
            }
            return dots + content.slice(right, end);
          }
          const middle2 = Math.round((left + right) / 2);
          if (position === "end") {
            container.innerText = content.slice(0, middle2) + dots;
          } else {
            container.innerText = dots + content.slice(middle2, end);
          }
          container.innerHTML += actionHTML;
          if (container.offsetHeight > maxHeight) {
            if (position === "end") {
              return tail(left, middle2);
            }
            return tail(middle2, right);
          }
          if (position === "end") {
            return tail(middle2, right);
          }
          return tail(left, middle2);
        };
        return tail(0, end);
      };
      const middleTail = (leftPart, rightPart) => {
        if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
          return content.slice(0, leftPart[0]) + dots + content.slice(rightPart[1], end);
        }
        const leftMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
        const rightMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);
        container.innerText = props.content.slice(0, leftMiddle) + props.dots + props.content.slice(rightMiddle, end);
        container.innerHTML += actionHTML;
        if (container.offsetHeight >= maxHeight) {
          return middleTail([leftPart[0], leftMiddle], [rightMiddle, rightPart[1]]);
        }
        return middleTail([leftMiddle, leftPart[1]], [rightPart[0], rightMiddle]);
      };
      return props.position === "middle" ? middleTail([0, middle], [middle, end]) : calcEllipse();
    };
    const calcEllipsised = () => {
      const container = cloneContainer();
      if (!container) {
        needRecalculate = true;
        return;
      }
      const {
        paddingBottom,
        paddingTop,
        lineHeight
      } = container.style;
      const maxHeight = Math.ceil((Number(props.rows) + 0.5) * pxToNum(lineHeight) + pxToNum(paddingTop) + pxToNum(paddingBottom));
      if (maxHeight < container.offsetHeight) {
        hasAction.value = true;
        text.value = calcEllipsisText(container, maxHeight);
      } else {
        hasAction.value = false;
        text.value = props.content;
      }
      document.body.removeChild(container);
    };
    const toggle = (isExpanded = !expanded.value) => {
      expanded.value = isExpanded;
    };
    const onClickAction = (event) => {
      toggle();
      emit("clickAction", event);
    };
    const renderAction = () => {
      const action = slots.action ? slots.action({
        expanded: expanded.value
      }) : actionText.value;
      return (0, import_vue.createVNode)("span", {
        "ref": actionRef,
        "class": bem("action"),
        "onClick": onClickAction
      }, [action]);
    };
    (0, import_vue.onMounted)(() => {
      calcEllipsised();
      if (slots.action) {
        (0, import_vue.nextTick)(calcEllipsised);
      }
    });
    (0, import_vue.onActivated)(() => {
      if (needRecalculate) {
        needRecalculate = false;
        calcEllipsised();
      }
    });
    (0, import_vue.watch)([import_utils.windowWidth, () => [props.content, props.rows, props.position]], calcEllipsised);
    (0, import_use_expose.useExpose)({
      toggle
    });
    return () => (0, import_vue.createVNode)("div", {
      "ref": root,
      "class": bem()
    }, [expanded.value ? props.content : text.value, hasAction.value ? renderAction() : null]);
  }
});
