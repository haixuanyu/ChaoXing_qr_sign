import { defineComponent, createVNode as _createVNode } from "vue";
import { bem, t } from "./utils.mjs";
import { createNamespace, HAPTICS_FEEDBACK } from "../utils/index.mjs";
const [name] = createNamespace("picker-toolbar");
const pickerToolbarProps = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String
};
const pickerToolbarSlots = ["cancel", "confirm", "title", "toolbar"];
const pickerToolbarPropKeys = Object.keys(pickerToolbarProps);
var stdin_default = defineComponent({
  name,
  props: pickerToolbarProps,
  emits: ["confirm", "cancel"],
  setup(props, {
    emit,
    slots
  }) {
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return _createVNode("div", {
          "class": [bem("title"), "van-ellipsis"]
        }, [props.title]);
      }
    };
    const onCancel = () => emit("cancel");
    const onConfirm = () => emit("confirm");
    const renderCancel = () => {
      var _a;
      const text = (_a = props.cancelButtonText) != null ? _a : t("cancel");
      if (!slots.cancel && !text) {
        return;
      }
      return _createVNode("button", {
        "type": "button",
        "class": [bem("cancel"), HAPTICS_FEEDBACK],
        "onClick": onCancel
      }, [slots.cancel ? slots.cancel() : text]);
    };
    const renderConfirm = () => {
      var _a;
      const text = (_a = props.confirmButtonText) != null ? _a : t("confirm");
      if (!slots.confirm && !text) {
        return;
      }
      return _createVNode("button", {
        "type": "button",
        "class": [bem("confirm"), HAPTICS_FEEDBACK],
        "onClick": onConfirm
      }, [slots.confirm ? slots.confirm() : text]);
    };
    return () => _createVNode("div", {
      "class": bem("toolbar")
    }, [slots.toolbar ? slots.toolbar() : [renderCancel(), renderTitle(), renderConfirm()]]);
  }
});
export {
  stdin_default as default,
  pickerToolbarPropKeys,
  pickerToolbarProps,
  pickerToolbarSlots
};
