var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
  checkerProps: () => checkerProps,
  default: () => stdin_default
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
var import_icon = require("../icon");
const checkerProps = {
  name: import_utils.unknownProp,
  disabled: Boolean,
  iconSize: import_utils.numericProp,
  modelValue: import_utils.unknownProp,
  checkedColor: String,
  labelPosition: String,
  labelDisabled: Boolean
};
var stdin_default = (0, import_vue.defineComponent)({
  props: (0, import_utils.extend)({}, checkerProps, {
    bem: (0, import_utils.makeRequiredProp)(Function),
    role: String,
    shape: String,
    parent: Object,
    checked: Boolean,
    bindGroup: import_utils.truthProp,
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
    const iconRef = (0, import_vue.ref)();
    const getParentProp = (name) => {
      if (props.parent && props.bindGroup) {
        return props.parent.props[name];
      }
    };
    const disabled = (0, import_vue.computed)(() => {
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
    const direction = (0, import_vue.computed)(() => getParentProp("direction"));
    const iconStyle = (0, import_vue.computed)(() => {
      const checkedColor = props.checkedColor || getParentProp("checkedColor");
      if (checkedColor && (props.checked || props.indeterminate) && !disabled.value) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    });
    const shape = (0, import_vue.computed)(() => {
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
      return (0, import_vue.createVNode)("div", {
        "ref": iconRef,
        "class": bem("icon", [shape.value, {
          disabled: disabled.value,
          checked,
          indeterminate
        }]),
        "style": shape.value !== "dot" ? {
          fontSize: (0, import_utils.addUnit)(iconSize)
        } : {
          width: (0, import_utils.addUnit)(iconSize),
          height: (0, import_utils.addUnit)(iconSize),
          borderColor: (_a = iconStyle.value) == null ? void 0 : _a.borderColor
        }
      }, [slots.icon ? slots.icon({
        checked,
        disabled: disabled.value
      }) : shape.value !== "dot" ? (0, import_vue.createVNode)(import_icon.Icon, {
        "name": indeterminate ? "minus" : "success",
        "style": iconStyle.value
      }, null) : (0, import_vue.createVNode)("div", {
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
        return (0, import_vue.createVNode)("span", {
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
      return (0, import_vue.createVNode)("div", {
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
