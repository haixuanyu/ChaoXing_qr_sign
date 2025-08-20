import { defineComponent, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { pick, extend, numericProp, unknownProp, makeStringProp, createNamespace } from "../utils/index.mjs";
import { Popup } from "../popup/index.mjs";
import { popupSharedProps } from "../popup/shared.mjs";
const [name, bem] = createNamespace("notify");
const popupInheritProps = ["lockScroll", "position", "show", "teleport", "zIndex"];
const notifyProps = extend({}, popupSharedProps, {
  type: makeStringProp("danger"),
  color: String,
  message: numericProp,
  position: makeStringProp("top"),
  className: unknownProp,
  background: String,
  lockScroll: Boolean
});
var stdin_default = defineComponent({
  name,
  props: notifyProps,
  emits: ["update:show"],
  setup(props, {
    emit,
    slots
  }) {
    const updateShow = (show) => emit("update:show", show);
    return () => _createVNode(Popup, _mergeProps({
      "class": [bem([props.type]), props.className],
      "style": {
        color: props.color,
        background: props.background
      },
      "overlay": false,
      "duration": 0.2,
      "onUpdate:show": updateShow
    }, pick(props, popupInheritProps)), {
      default: () => [slots.default ? slots.default() : props.message]
    });
  }
});
export {
  stdin_default as default,
  notifyProps
};
