import { defineComponent, Comment, Fragment, createVNode as _createVNode } from "vue";
import { flat, pick, extend, makeArrayProp, makeNumericProp, createNamespace, truthProp } from "../utils/index.mjs";
import { useChildren } from "@vant/use";
import { useSyncPropRef } from "../composables/use-sync-prop-ref.mjs";
import { Tab } from "../tab/index.mjs";
import { Tabs } from "../tabs/index.mjs";
import Toolbar, { pickerToolbarProps, pickerToolbarSlots } from "../picker/PickerToolbar.mjs";
const [name, bem] = createNamespace("picker-group");
const PICKER_GROUP_KEY = Symbol(name);
const pickerGroupProps = extend({
  tabs: makeArrayProp(),
  activeTab: makeNumericProp(0),
  nextStepText: String,
  showToolbar: truthProp
}, pickerToolbarProps);
var stdin_default = defineComponent({
  name,
  props: pickerGroupProps,
  emits: ["confirm", "cancel", "update:activeTab"],
  setup(props, {
    emit,
    slots
  }) {
    const activeTab = useSyncPropRef(() => props.activeTab, (value) => emit("update:activeTab", value));
    const {
      children,
      linkChildren
    } = useChildren(PICKER_GROUP_KEY);
    linkChildren();
    const showNextButton = () => +activeTab.value < props.tabs.length - 1 && props.nextStepText;
    const onConfirm = () => {
      if (showNextButton()) {
        activeTab.value = +activeTab.value + 1;
      } else {
        emit("confirm", children.map((item) => item.confirm()));
      }
    };
    const onCancel = () => emit("cancel");
    return () => {
      var _a, _b;
      let childNodes = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b.filter((node) => node.type !== Comment).map((node) => {
        if (node.type === Fragment) {
          return node.children;
        }
        return node;
      });
      if (childNodes) {
        childNodes = flat(childNodes);
      }
      const confirmButtonText = showNextButton() ? props.nextStepText : props.confirmButtonText;
      return _createVNode("div", {
        "class": bem()
      }, [props.showToolbar ? _createVNode(Toolbar, {
        "title": props.title,
        "cancelButtonText": props.cancelButtonText,
        "confirmButtonText": confirmButtonText,
        "onConfirm": onConfirm,
        "onCancel": onCancel
      }, pick(slots, pickerToolbarSlots)) : null, _createVNode(Tabs, {
        "active": activeTab.value,
        "onUpdate:active": ($event) => activeTab.value = $event,
        "class": bem("tabs"),
        "shrink": true,
        "animated": true,
        "lazyRender": false
      }, {
        default: () => [props.tabs.map((title, index) => _createVNode(Tab, {
          "title": title,
          "titleClass": bem("tab-title")
        }, {
          default: () => [childNodes == null ? void 0 : childNodes[index]]
        }))]
      })]);
    };
  }
});
export {
  PICKER_GROUP_KEY,
  stdin_default as default,
  pickerGroupProps
};
