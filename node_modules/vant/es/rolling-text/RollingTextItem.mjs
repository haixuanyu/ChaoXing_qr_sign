import { defineComponent, computed, createVNode as _createVNode } from "vue";
import { createNamespace, makeNumberProp, makeArrayProp, makeStringProp, addUnit } from "../utils/index.mjs";
const props = {
  figureArr: makeArrayProp(),
  delay: Number,
  duration: makeNumberProp(2),
  isStart: Boolean,
  direction: makeStringProp("down"),
  height: makeNumberProp(40)
};
const [name, bem] = createNamespace("rolling-text-item");
var stdin_default = defineComponent({
  name,
  props,
  setup(props2) {
    const newFigureArr = computed(() => props2.direction === "down" ? props2.figureArr.slice().reverse() : props2.figureArr);
    const translatePx = computed(() => {
      const totalHeight = props2.height * (props2.figureArr.length - 1);
      return `-${totalHeight}px`;
    });
    const itemStyle = computed(() => ({
      lineHeight: addUnit(props2.height)
    }));
    const rootStyle = computed(() => ({
      height: addUnit(props2.height),
      "--van-translate": translatePx.value,
      "--van-duration": props2.duration + "s",
      "--van-delay": props2.delay + "s"
    }));
    return () => _createVNode("div", {
      "class": bem([props2.direction]),
      "style": rootStyle.value
    }, [_createVNode("div", {
      "class": bem("box", {
        animate: props2.isStart
      })
    }, [Array.isArray(newFigureArr.value) && newFigureArr.value.map((figure) => _createVNode("div", {
      "class": bem("item"),
      "style": itemStyle.value
    }, [figure]))])]);
  }
});
export {
  stdin_default as default,
  props
};
