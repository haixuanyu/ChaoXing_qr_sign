import { ref, defineComponent, computed, watch, createVNode as _createVNode } from "vue";
import { raf } from "@vant/use";
import { createNamespace, makeArrayProp, makeNumberProp, makeStringProp, truthProp, padZero } from "../utils/index.mjs";
import { useExpose } from "../composables/use-expose.mjs";
import RollingTextItem from "./RollingTextItem.mjs";
const [name, bem] = createNamespace("rolling-text");
const rollingTextProps = {
  startNum: makeNumberProp(0),
  targetNum: Number,
  textList: makeArrayProp(),
  duration: makeNumberProp(2),
  autoStart: truthProp,
  direction: makeStringProp("down"),
  stopOrder: makeStringProp("ltr"),
  height: makeNumberProp(40)
};
const CIRCLE_NUM = 2;
var stdin_default = defineComponent({
  name,
  props: rollingTextProps,
  setup(props) {
    const isCustomType = computed(() => Array.isArray(props.textList) && props.textList.length);
    const itemLength = computed(() => {
      if (isCustomType.value) return props.textList[0].length;
      return `${Math.max(props.startNum, props.targetNum)}`.length;
    });
    const getTextArrByIdx = (idx) => {
      const result = [];
      for (let i = 0; i < props.textList.length; i++) {
        result.push(props.textList[i][idx]);
      }
      return result;
    };
    const targetNumArr = computed(() => {
      if (isCustomType.value) return new Array(itemLength.value).fill("");
      return padZero(props.targetNum, itemLength.value).split("");
    });
    const startNumArr = computed(() => padZero(props.startNum, itemLength.value).split(""));
    const getFigureArr = (i) => {
      const start2 = +startNumArr.value[i];
      const target = +targetNumArr.value[i];
      const result = [];
      for (let i2 = start2; i2 <= 9; i2++) {
        result.push(i2);
      }
      for (let i2 = 0; i2 <= CIRCLE_NUM; i2++) {
        for (let j = 0; j <= 9; j++) {
          result.push(j);
        }
      }
      for (let i2 = 0; i2 <= target; i2++) {
        result.push(i2);
      }
      return result;
    };
    const getDelay = (i, len) => {
      if (props.stopOrder === "ltr") return 0.2 * i;
      return 0.2 * (len - 1 - i);
    };
    const rolling = ref(props.autoStart);
    const start = () => {
      rolling.value = true;
    };
    const reset = () => {
      rolling.value = false;
      if (props.autoStart) {
        raf(() => start());
      }
    };
    watch(() => props.autoStart, (value) => {
      if (value) {
        start();
      }
    });
    useExpose({
      start,
      reset
    });
    return () => _createVNode("div", {
      "class": bem()
    }, [targetNumArr.value.map((_, i) => _createVNode(RollingTextItem, {
      "figureArr": isCustomType.value ? getTextArrByIdx(i) : getFigureArr(i),
      "duration": props.duration,
      "direction": props.direction,
      "isStart": rolling.value,
      "height": props.height,
      "delay": getDelay(i, itemLength.value)
    }, null))]);
  }
});
export {
  stdin_default as default,
  rollingTextProps
};
