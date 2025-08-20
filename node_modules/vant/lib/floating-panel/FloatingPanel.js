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
  floatingPanelProps: () => floatingPanelProps
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
var import_use = require("@vant/use");
var import_use_lock_scroll = require("../composables/use-lock-scroll");
var import_use_touch = require("../composables/use-touch");
var import_use_sync_prop_ref = require("../composables/use-sync-prop-ref");
const floatingPanelProps = {
  height: (0, import_utils.makeNumericProp)(0),
  anchors: (0, import_utils.makeArrayProp)(),
  duration: (0, import_utils.makeNumericProp)(0.3),
  contentDraggable: import_utils.truthProp,
  lockScroll: Boolean,
  safeAreaInsetBottom: import_utils.truthProp
};
const [name, bem] = (0, import_utils.createNamespace)("floating-panel");
var stdin_default = (0, import_vue.defineComponent)({
  name,
  props: floatingPanelProps,
  emits: ["heightChange", "update:height"],
  setup(props, {
    emit,
    slots
  }) {
    const DAMP = 0.2;
    const rootRef = (0, import_vue.ref)();
    const contentRef = (0, import_vue.ref)();
    const height = (0, import_use_sync_prop_ref.useSyncPropRef)(() => +props.height, (value) => emit("update:height", value));
    const boundary = (0, import_vue.computed)(() => {
      var _a, _b;
      return {
        min: (_a = props.anchors[0]) != null ? _a : 100,
        max: (_b = props.anchors[props.anchors.length - 1]) != null ? _b : Math.round(import_utils.windowHeight.value * 0.6)
      };
    });
    const anchors = (0, import_vue.computed)(() => props.anchors.length >= 2 ? props.anchors : [boundary.value.min, boundary.value.max]);
    const dragging = (0, import_vue.ref)(false);
    const rootStyle = (0, import_vue.computed)(() => ({
      height: (0, import_utils.addUnit)(boundary.value.max),
      transform: `translateY(calc(100% + ${(0, import_utils.addUnit)(-height.value)}))`,
      transition: !dragging.value ? `transform ${props.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)` : "none"
    }));
    const ease = (moveY) => {
      const absDistance = Math.abs(moveY);
      const {
        min,
        max
      } = boundary.value;
      if (absDistance > max) {
        return -(max + (absDistance - max) * DAMP);
      }
      if (absDistance < min) {
        return -(min - (min - absDistance) * DAMP);
      }
      return moveY;
    };
    let startY;
    let maxScroll = -1;
    const touch = (0, import_use_touch.useTouch)();
    const onTouchstart = (e) => {
      touch.start(e);
      dragging.value = true;
      startY = -height.value;
      maxScroll = -1;
    };
    const onTouchmove = (e) => {
      var _a;
      touch.move(e);
      const target = e.target;
      if (contentRef.value === target || ((_a = contentRef.value) == null ? void 0 : _a.contains(target))) {
        const {
          scrollTop
        } = contentRef.value;
        maxScroll = Math.max(maxScroll, scrollTop);
        if (!props.contentDraggable) return;
        if (-startY < boundary.value.max) {
          (0, import_utils.preventDefault)(e, true);
        } else if (!(scrollTop <= 0 && touch.deltaY.value > 0) || maxScroll > 0) {
          return;
        }
      }
      const moveY = touch.deltaY.value + startY;
      height.value = -ease(moveY);
    };
    const onTouchend = () => {
      maxScroll = -1;
      dragging.value = false;
      height.value = (0, import_utils.closest)(anchors.value, height.value);
      if (height.value !== -startY) {
        emit("heightChange", {
          height: height.value
        });
      }
    };
    (0, import_vue.watch)(boundary, () => {
      height.value = (0, import_utils.closest)(anchors.value, height.value);
    }, {
      immediate: true
    });
    (0, import_use_lock_scroll.useLockScroll)(rootRef, () => props.lockScroll || dragging.value);
    (0, import_use.useEventListener)("touchmove", onTouchmove, {
      target: rootRef
    });
    const renderHeader = () => {
      if (slots.header) {
        return slots.header();
      }
      return (0, import_vue.createVNode)("div", {
        "class": bem("header")
      }, [(0, import_vue.createVNode)("div", {
        "class": bem("header-bar")
      }, null)]);
    };
    return () => {
      var _a;
      return (0, import_vue.createVNode)("div", {
        "class": [bem(), {
          "van-safe-area-bottom": props.safeAreaInsetBottom
        }],
        "ref": rootRef,
        "style": rootStyle.value,
        "onTouchstartPassive": onTouchstart,
        "onTouchend": onTouchend,
        "onTouchcancel": onTouchend
      }, [renderHeader(), (0, import_vue.createVNode)("div", {
        "class": bem("content"),
        "ref": contentRef
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
  }
});
