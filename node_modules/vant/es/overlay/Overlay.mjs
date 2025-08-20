import { ref, defineComponent, Teleport, Transition, vShow as _vShow, mergeProps as _mergeProps, createVNode as _createVNode, withDirectives as _withDirectives } from "vue";
import { isDef, extend, truthProp, numericProp, unknownProp, preventDefault, createNamespace, getZIndexStyle } from "../utils/index.mjs";
import { useEventListener } from "@vant/use";
import { useLazyRender } from "../composables/use-lazy-render.mjs";
const [name, bem] = createNamespace("overlay");
const overlayProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  className: unknownProp,
  lockScroll: truthProp,
  lazyRender: truthProp,
  customStyle: Object,
  teleport: [String, Object]
};
var stdin_default = defineComponent({
  name,
  inheritAttrs: false,
  props: overlayProps,
  setup(props, {
    attrs,
    slots
  }) {
    const root = ref();
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
    const onTouchMove = (event) => {
      if (props.lockScroll) {
        preventDefault(event, true);
      }
    };
    const renderOverlay = lazyRender(() => {
      var _a;
      const style = extend(getZIndexStyle(props.zIndex), props.customStyle);
      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`;
      }
      return _withDirectives(_createVNode("div", _mergeProps({
        "ref": root,
        "style": style,
        "class": [bem(), props.className]
      }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[_vShow, props.show]]);
    });
    useEventListener("touchmove", onTouchMove, {
      target: root
    });
    return () => {
      const Content = _createVNode(Transition, {
        "name": "van-fade",
        "appear": true
      }, {
        default: renderOverlay
      });
      if (props.teleport) {
        return _createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [Content]
        });
      }
      return Content;
    };
  }
});
export {
  stdin_default as default,
  overlayProps
};
