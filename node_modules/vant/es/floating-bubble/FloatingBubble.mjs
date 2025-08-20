import { Teleport, computed, defineComponent, nextTick, onMounted, ref, watch, onActivated, onDeactivated, createVNode as _createVNode, vShow as _vShow, mergeProps as _mergeProps, withDirectives as _withDirectives } from "vue";
import { pick, addUnit, closest, createNamespace, isObject, makeStringProp, windowWidth, windowHeight } from "../utils/index.mjs";
import { useRect, useEventListener } from "@vant/use";
import { useTouch } from "../composables/use-touch.mjs";
import Icon from "../icon/index.mjs";
const floatingBubbleProps = {
  gap: {
    type: [Number, Object],
    default: 24
  },
  icon: String,
  axis: makeStringProp("y"),
  magnetic: String,
  offset: Object,
  teleport: {
    type: [String, Object],
    default: "body"
  }
};
const [name, bem] = createNamespace("floating-bubble");
var stdin_default = defineComponent({
  name,
  inheritAttrs: false,
  props: floatingBubbleProps,
  emits: ["click", "update:offset", "offsetChange"],
  setup(props, {
    slots,
    emit,
    attrs
  }) {
    const rootRef = ref();
    const state = ref({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
    const gapX = computed(() => isObject(props.gap) ? props.gap.x : props.gap);
    const gapY = computed(() => isObject(props.gap) ? props.gap.y : props.gap);
    const boundary = computed(() => ({
      top: gapY.value,
      right: windowWidth.value - state.value.width - gapX.value,
      bottom: windowHeight.value - state.value.height - gapY.value,
      left: gapX.value
    }));
    const dragging = ref(false);
    let initialized = false;
    const rootStyle = computed(() => {
      const style = {};
      const x = addUnit(state.value.x);
      const y = addUnit(state.value.y);
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
      } = useRect(rootRef.value);
      const {
        offset
      } = props;
      state.value = {
        x: offset ? offset.x : windowWidth.value - width - gapX.value,
        y: offset ? offset.y : windowHeight.value - height - gapY.value,
        width,
        height
      };
    };
    const touch = useTouch();
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
        const offset = pick(state.value, ["x", "y"]);
        emit("update:offset", offset);
      }
    };
    useEventListener("touchmove", onTouchMove, {
      target: rootRef
    });
    const onTouchEnd = () => {
      dragging.value = false;
      nextTick(() => {
        if (props.magnetic === "x") {
          const nextX = closest([boundary.value.left, boundary.value.right], state.value.x);
          state.value.x = nextX;
        }
        if (props.magnetic === "y") {
          const nextY = closest([boundary.value.top, boundary.value.bottom], state.value.y);
          state.value.y = nextY;
        }
        if (!touch.isTap.value) {
          const offset = pick(state.value, ["x", "y"]);
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
    onMounted(() => {
      updateState();
      nextTick(() => {
        initialized = true;
      });
    });
    watch([windowWidth, windowHeight, gapX, gapY, () => props.offset], updateState, {
      deep: true
    });
    const show = ref(true);
    onActivated(() => {
      show.value = true;
    });
    onDeactivated(() => {
      if (props.teleport) {
        show.value = false;
      }
    });
    return () => {
      const Content = _withDirectives(_createVNode("div", _mergeProps({
        "class": bem(),
        "ref": rootRef,
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd,
        "onClickCapture": onClick,
        "style": rootStyle.value
      }, attrs), [slots.default ? slots.default() : _createVNode(Icon, {
        "name": props.icon,
        "class": bem("icon")
      }, null)]), [[_vShow, show.value]]);
      return props.teleport ? _createVNode(Teleport, {
        "to": props.teleport
      }, {
        default: () => [Content]
      }) : Content;
    };
  }
});
export {
  stdin_default as default,
  floatingBubbleProps
};
