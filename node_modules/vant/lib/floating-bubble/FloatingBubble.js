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
  floatingBubbleProps: () => floatingBubbleProps
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
var import_use = require("@vant/use");
var import_use_touch = require("../composables/use-touch");
var import_icon = __toESM(require("../icon"));
const floatingBubbleProps = {
  gap: {
    type: [Number, Object],
    default: 24
  },
  icon: String,
  axis: (0, import_utils.makeStringProp)("y"),
  magnetic: String,
  offset: Object,
  teleport: {
    type: [String, Object],
    default: "body"
  }
};
const [name, bem] = (0, import_utils.createNamespace)("floating-bubble");
var stdin_default = (0, import_vue.defineComponent)({
  name,
  inheritAttrs: false,
  props: floatingBubbleProps,
  emits: ["click", "update:offset", "offsetChange"],
  setup(props, {
    slots,
    emit,
    attrs
  }) {
    const rootRef = (0, import_vue.ref)();
    const state = (0, import_vue.ref)({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
    const gapX = (0, import_vue.computed)(() => (0, import_utils.isObject)(props.gap) ? props.gap.x : props.gap);
    const gapY = (0, import_vue.computed)(() => (0, import_utils.isObject)(props.gap) ? props.gap.y : props.gap);
    const boundary = (0, import_vue.computed)(() => ({
      top: gapY.value,
      right: import_utils.windowWidth.value - state.value.width - gapX.value,
      bottom: import_utils.windowHeight.value - state.value.height - gapY.value,
      left: gapX.value
    }));
    const dragging = (0, import_vue.ref)(false);
    let initialized = false;
    const rootStyle = (0, import_vue.computed)(() => {
      const style = {};
      const x = (0, import_utils.addUnit)(state.value.x);
      const y = (0, import_utils.addUnit)(state.value.y);
      style.transform = `translate3d(${x}, ${y}, 0)`;
      if (dragging.value || !initialized) {
        style.transition = "none";
      }
      return style;
    });
    const updateState = () => {
      if (!show.value) return;
      const {
        width,
        height
      } = (0, import_use.useRect)(rootRef.value);
      const {
        offset
      } = props;
      state.value = {
        x: offset ? offset.x : import_utils.windowWidth.value - width - gapX.value,
        y: offset ? offset.y : import_utils.windowHeight.value - height - gapY.value,
        width,
        height
      };
    };
    const touch = (0, import_use_touch.useTouch)();
    let prevX = 0;
    let prevY = 0;
    const onTouchStart = (e) => {
      touch.start(e);
      dragging.value = true;
      prevX = state.value.x;
      prevY = state.value.y;
    };
    const onTouchMove = (e) => {
      e.preventDefault();
      touch.move(e);
      if (props.axis === "lock") return;
      if (!touch.isTap.value) {
        if (props.axis === "x" || props.axis === "xy") {
          let nextX = prevX + touch.deltaX.value;
          if (nextX < boundary.value.left) nextX = boundary.value.left;
          if (nextX > boundary.value.right) nextX = boundary.value.right;
          state.value.x = nextX;
        }
        if (props.axis === "y" || props.axis === "xy") {
          let nextY = prevY + touch.deltaY.value;
          if (nextY < boundary.value.top) nextY = boundary.value.top;
          if (nextY > boundary.value.bottom) nextY = boundary.value.bottom;
          state.value.y = nextY;
        }
        const offset = (0, import_utils.pick)(state.value, ["x", "y"]);
        emit("update:offset", offset);
      }
    };
    (0, import_use.useEventListener)("touchmove", onTouchMove, {
      target: rootRef
    });
    const onTouchEnd = () => {
      dragging.value = false;
      (0, import_vue.nextTick)(() => {
        if (props.magnetic === "x") {
          const nextX = (0, import_utils.closest)([boundary.value.left, boundary.value.right], state.value.x);
          state.value.x = nextX;
        }
        if (props.magnetic === "y") {
          const nextY = (0, import_utils.closest)([boundary.value.top, boundary.value.bottom], state.value.y);
          state.value.y = nextY;
        }
        if (!touch.isTap.value) {
          const offset = (0, import_utils.pick)(state.value, ["x", "y"]);
          emit("update:offset", offset);
          if (prevX !== offset.x || prevY !== offset.y) {
            emit("offsetChange", offset);
          }
        }
      });
    };
    const onClick = (e) => {
      if (touch.isTap.value) emit("click", e);
      else e.stopPropagation();
    };
    (0, import_vue.onMounted)(() => {
      updateState();
      (0, import_vue.nextTick)(() => {
        initialized = true;
      });
    });
    (0, import_vue.watch)([import_utils.windowWidth, import_utils.windowHeight, gapX, gapY, () => props.offset], updateState, {
      deep: true
    });
    const show = (0, import_vue.ref)(true);
    (0, import_vue.onActivated)(() => {
      show.value = true;
    });
    (0, import_vue.onDeactivated)(() => {
      if (props.teleport) {
        show.value = false;
      }
    });
    return () => {
      const Content = (0, import_vue.withDirectives)((0, import_vue.createVNode)("div", (0, import_vue.mergeProps)({
        "class": bem(),
        "ref": rootRef,
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd,
        "onClickCapture": onClick,
        "style": rootStyle.value
      }, attrs), [slots.default ? slots.default() : (0, import_vue.createVNode)(import_icon.default, {
        "name": props.icon,
        "class": bem("icon")
      }, null)]), [[import_vue.vShow, show.value]]);
      return props.teleport ? (0, import_vue.createVNode)(import_vue.Teleport, {
        "to": props.teleport
      }, {
        default: () => [Content]
      }) : Content;
    };
  }
});
