import { ref, computed, defineComponent, createVNode as _createVNode } from "vue";
import { extend, addUnit, truthProp, numericProp, unknownProp, makeRequiredProp } from "../utils/index.mjs";
import { Icon } from "../icon/index.mjs";
const checkerProps = {
  name: unknownProp,
  disabled: Boolean,
  iconSize: numericProp,
  modelValue: unknownProp,
  checkedColor: String,
  labelPosition: String,
  labelDisabled: Boolean
};
var stdin_default = defineComponent({
  props: extend({}, checkerProps, {
    bem: makeRequiredProp(Function),
    role: String,
    shape: String,
    parent: Object,
    checked: Boolean,
    bindGroup: truthProp,
    indeterminate: {
      type: Boolean,
      default: null
    }
  }),
  emits: ["click", "toggle"],
  setup(props, {
    emit,
    slots
  }) {
    const iconRef = ref();
    const getParentProp = (name) => {
      if (props.parent && props.bindGroup) {
        return props.parent.props[name];
      }
    };
    const disabled = computed(() => {
      if (props.parent && props.bindGroup) {
        const disabled2 = getParentProp("disabled") || props.disabled;
        if (props.role === "checkbox") {
          const checkedCount = getParentProp("modelValue").length;
          const max = getParentProp("max");
          const overlimit = max && checkedCount >= +max;
          return disabled2 || overlimit && !props.checked;
        }
        return disabled2;
      }
      return props.disabled;
    });
    const direction = computed(() => getParentProp("direction"));
    const iconStyle = computed(() => {
      const checkedColor = props.checkedColor || getParentProp("checkedColor");
      if (checkedColor && (props.checked || props.indeterminate) && !disabled.value) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    });
    const shape = computed(() => {
      return props.shape || getParentProp("shape") || "round";
    });
    const onClick = (event) => {
      const {
        target
      } = event;
      const icon = iconRef.value;
      const iconClicked = icon === target || (icon == null ? void 0 : icon.contains(target));
      if (!disabled.value && (iconClicked || !props.labelDisabled)) {
        emit("toggle");
      }
      emit("click", event);
    };
    const renderIcon = () => {
      var _a, _b;
      const {
        bem,
        checked,
        indeterminate
      } = props;
      const iconSize = props.iconSize || getParentProp("iconSize");
      return _createVNode("div", {
        "ref": iconRef,
        "class": bem("icon", [shape.value, {
          disabled: disabled.value,
          checked,
          indeterminate
        }]),
        "style": shape.value !== "dot" ? {
          fontSize: addUnit(iconSize)
        } : {
          width: addUnit(iconSize),
          height: addUnit(iconSize),
          borderColor: (_a = iconStyle.value) == null ? void 0 : _a.borderColor
        }
      }, [slots.icon ? slots.icon({
        checked,
        disabled: disabled.value
      }) : shape.value !== "dot" ? _createVNode(Icon, {
        "name": indeterminate ? "minus" : "success",
        "style": iconStyle.value
      }, null) : _createVNode("div", {
        "class": bem("icon--dot__icon"),
        "style": {
          backgroundColor: (_b = iconStyle.value) == null ? void 0 : _b.backgroundColor
        }
      }, null)]);
    };
    const renderLabel = () => {
      const {
        checked
      } = props;
      if (slots.default) {
        return _createVNode("span", {
          "class": props.bem("label", [props.labelPosition, {
            disabled: disabled.value
          }])
        }, [slots.default({
          checked,
          disabled: disabled.value
        })]);
      }
    };
    return () => {
      const nodes = props.labelPosition === "left" ? [renderLabel(), renderIcon()] : [renderIcon(), renderLabel()];
      return _createVNode("div", {
        "role": props.role,
        "class": props.bem([{
          disabled: disabled.value,
          "label-disabled": props.labelDisabled
        }, direction.value]),
        "tabindex": disabled.value ? void 0 : 0,
        "aria-checked": props.checked,
        "onClick": onClick
      }, [nodes]);
    };
  }
});
export {
  checkerProps,
  stdin_default as default
};
