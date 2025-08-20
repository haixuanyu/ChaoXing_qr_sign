import { reactive, Teleport, defineComponent, ref, createVNode as _createVNode, vShow as _vShow, mergeProps as _mergeProps, withDirectives as _withDirectives } from "vue";
import { truthProp, unknownProp, getZIndexStyle, createNamespace, makeArrayProp, getContainingBlock } from "../utils/index.mjs";
import { DROPDOWN_KEY } from "../dropdown-menu/DropdownMenu.mjs";
import { useParent, useRect } from "@vant/use";
import { useExpose } from "../composables/use-expose.mjs";
import { Cell } from "../cell/index.mjs";
import { Icon } from "../icon/index.mjs";
import { Popup } from "../popup/index.mjs";
const [name, bem] = createNamespace("dropdown-item");
const dropdownItemProps = {
  title: String,
  options: makeArrayProp(),
  disabled: Boolean,
  teleport: [String, Object],
  lazyRender: truthProp,
  modelValue: unknownProp,
  titleClass: unknownProp
};
var stdin_default = defineComponent({
  name,
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const state = reactive({
      showPopup: false,
      transition: true,
      showWrapper: false
    });
    const wrapperRef = ref();
    const {
      parent,
      index
    } = useParent(DROPDOWN_KEY);
    if (!parent) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[Vant] <DropdownItem> must be a child component of <DropdownMenu>.");
      }
      return;
    }
    const getEmitter = (name2) => () => emit(name2);
    const onOpen = getEmitter("open");
    const onClose = getEmitter("close");
    const onOpened = getEmitter("opened");
    const onClosed = () => {
      state.showWrapper = false;
      emit("closed");
    };
    const onClickWrapper = (event) => {
      if (props.teleport) {
        event.stopPropagation();
      }
    };
    const toggle = (show = !state.showPopup, options = {}) => {
      if (show === state.showPopup) {
        return;
      }
      state.showPopup = show;
      state.transition = !options.immediate;
      if (show) {
        parent.updateOffset();
        state.showWrapper = true;
      }
    };
    const renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }
      if (props.title) {
        return props.title;
      }
      const match = props.options.find((option) => option.value === props.modelValue);
      return match ? match.text : "";
    };
    const renderOption = (option) => {
      const {
        activeColor
      } = parent.props;
      const {
        disabled
      } = option;
      const active = option.value === props.modelValue;
      const onClick = () => {
        if (disabled) {
          return;
        }
        state.showPopup = false;
        if (option.value !== props.modelValue) {
          emit("update:modelValue", option.value);
          emit("change", option.value);
        }
      };
      const renderIcon = () => {
        if (active) {
          return _createVNode(Icon, {
            "class": bem("icon"),
            "color": disabled ? void 0 : activeColor,
            "name": "success"
          }, null);
        }
      };
      return _createVNode(Cell, {
        "role": "menuitem",
        "key": String(option.value),
        "icon": option.icon,
        "title": option.text,
        "class": bem("option", {
          active,
          disabled
        }),
        "style": {
          color: active ? activeColor : ""
        },
        "tabindex": active ? 0 : -1,
        "clickable": !disabled,
        "onClick": onClick
      }, {
        value: renderIcon
      });
    };
    const renderContent = () => {
      const {
        offset
      } = parent;
      const {
        autoLocate,
        zIndex,
        overlay,
        duration,
        direction,
        closeOnClickOverlay
      } = parent.props;
      const style = getZIndexStyle(zIndex);
      let offsetValue = offset.value;
      if (autoLocate && wrapperRef.value) {
        const offsetParent = getContainingBlock(wrapperRef.value);
        if (offsetParent) {
          offsetValue -= useRect(offsetParent).top;
        }
      }
      if (direction === "down") {
        style.top = `${offsetValue}px`;
      } else {
        style.bottom = `${offsetValue}px`;
      }
      return _withDirectives(_createVNode("div", _mergeProps({
        "ref": wrapperRef,
        "style": style,
        "class": bem([direction]),
        "onClick": onClickWrapper
      }, attrs), [_createVNode(Popup, {
        "show": state.showPopup,
        "onUpdate:show": ($event) => state.showPopup = $event,
        "role": "menu",
        "class": bem("content"),
        "overlay": overlay,
        "overlayProps": {
          duration: state.transition && !parent.opened.value ? duration : 0
        },
        "position": direction === "down" ? "top" : "bottom",
        "duration": state.transition ? duration : 0,
        "lazyRender": props.lazyRender,
        "overlayStyle": {
          position: "absolute"
        },
        "aria-labelledby": `${parent.id}-${index.value}`,
        "data-allow-mismatch": "attribute",
        "closeOnClickOverlay": closeOnClickOverlay,
        "onOpen": onOpen,
        "onClose": onClose,
        "onOpened": onOpened,
        "onClosed": onClosed
      }, {
        default: () => {
          var _a;
          return [props.options.map(renderOption), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      })]), [[_vShow, state.showWrapper]]);
    };
    useExpose({
      state,
      toggle,
      renderTitle
    });
    return () => {
      if (props.teleport) {
        return _createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderContent()]
        });
      }
      return renderContent();
    };
  }
});
export {
  stdin_default as default,
  dropdownItemProps
};
