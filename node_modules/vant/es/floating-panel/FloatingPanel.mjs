import { ref, watch, computed, defineComponent, createVNode as _createVNode } from "vue";
import { addUnit, closest, createNamespace, makeArrayProp, makeNumericProp, preventDefault, truthProp, windowHeight } from "../utils/index.mjs";
import { useEventListener } from "@vant/use";
import { useLockScroll } from "../composables/use-lock-scroll.mjs";
import { useTouch } from "../composables/use-touch.mjs";
import { useSyncPropRef } from "../composables/use-sync-prop-ref.mjs";
const floatingPanelProps = {
  height: makeNumericProp(0),
  anchors: makeArrayProp(),
  duration: makeNumericProp(0.3),
  contentDraggable: truthProp,
  lockScroll: Boolean,
  safeAreaInsetBottom: truthProp
};
const [name, bem] = createNamespace("floating-panel");
var stdin_default = defineComponent({
  name,
  props: floatingPanelProps,
  emits: ["heightChange", "update:height"],
  setup(props, {
    emit,
    slots
  }) {
    const DAMP = 0.2;
    const rootRef = ref();
    const contentRef = ref();
    const height = useSyncPropRef(() => +props.height, (value) => emit("update:height", value));
    const boundary = computed(() => {
      var _a, _b;
      return {
        min: (_a = props.anchors[0]) != null ? _a : 100,
        max: (_b = props.anchors[props.anchors.length - 1]) != null ? _b : Math.round(windowHeight.value * 0.6)
      };
    });
    const anchors = computed(() => props.anchors.length >= 2 ? props.anchors : [boundary.value.min, boundary.value.max]);
    const dragging = ref(false);
    const rootStyle = computed(() => ({
      height: addUnit(boundary.value.max),
      transform: `translateY(calc(100% + ${addUnit(-height.value)}))`,
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
    const touch = useTouch();
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
          preventDefault(e, true);
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
      height.value = closest(anchors.value, height.value);
      if (height.value !== -startY) {
        emit("heightChange", {
          height: height.value
        });
      }
    };
    watch(boundary, () => {
      height.value = closest(anchors.value, height.value);
    }, {
      immediate: true
    });
    useLockScroll(rootRef, () => props.lockScroll || dragging.value);
    useEventListener("touchmove", onTouchmove, {
      target: rootRef
    });
    const renderHeader = () => {
      if (slots.header) {
        return slots.header();
      }
      return _createVNode("div", {
        "class": bem("header")
      }, [_createVNode("div", {
        "class": bem("header-bar")
      }, null)]);
    };
    return () => {
      var _a;
      return _createVNode("div", {
        "class": [bem(), {
          "van-safe-area-bottom": props.safeAreaInsetBottom
        }],
        "ref": rootRef,
        "style": rootStyle.value,
        "onTouchstartPassive": onTouchstart,
        "onTouchend": onTouchend,
        "onTouchcancel": onTouchend
      }, [renderHeader(), _createVNode("div", {
        "class": bem("content"),
        "ref": contentRef
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
  }
});
export {
  stdin_default as default,
  floatingPanelProps
};
