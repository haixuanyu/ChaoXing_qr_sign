import { ref, watch, computed, onActivated, onMounted, defineComponent, nextTick, createVNode as _createVNode } from "vue";
import { makeNumericProp, makeStringProp, createNamespace, windowWidth } from "../utils/index.mjs";
import { useExpose } from "../composables/use-expose.mjs";
const [name, bem] = createNamespace("text-ellipsis");
const textEllipsisProps = {
  rows: makeNumericProp(1),
  dots: makeStringProp("..."),
  content: makeStringProp(""),
  expandText: makeStringProp(""),
  collapseText: makeStringProp(""),
  position: makeStringProp("end")
};
var stdin_default = defineComponent({
  name,
  props: textEllipsisProps,
  emits: ["clickAction"],
  setup(props, {
    emit,
    slots
  }) {
    const text = ref(props.content);
    const expanded = ref(false);
    const hasAction = ref(false);
    const root = ref();
    const actionRef = ref();
    let needRecalculate = false;
    const actionText = computed(() => expanded.value ? props.collapseText : props.expandText);
    const pxToNum = (value) => {
      if (!value) return 0;
      const match = value.match(/^\d*(\.\d*)?/);
      return match ? Number(match[0]) : 0;
    };
    const cloneContainer = () => {
      if (!root.value || !root.value.isConnected) return;
      const originStyle = window.getComputedStyle(root.value);
      const container = document.createElement("div");
      const styleNames = Array.prototype.slice.apply(originStyle);
      styleNames.forEach((name2) => {
        container.style.setProperty(name2, originStyle.getPropertyValue(name2));
      });
      container.style.position = "fixed";
      container.style.zIndex = "-9999";
      container.style.top = "-9999px";
      container.style.height = "auto";
      container.style.minHeight = "auto";
      container.style.maxHeight = "auto";
      container.innerText = props.content;
      document.body.appendChild(container);
      return container;
    };
    const calcEllipsisText = (container, maxHeight) => {
      var _a, _b;
      const {
        content,
        position,
        dots
      } = props;
      const end = content.length;
      const middle = 0 + end >> 1;
      const actionHTML = slots.action ? (_b = (_a = actionRef.value) == null ? void 0 : _a.outerHTML) != null ? _b : "" : props.expandText;
      const calcEllipse = () => {
        const tail = (left, right) => {
          if (right - left <= 1) {
            if (position === "end") {
              return content.slice(0, left) + dots;
            }
            return dots + content.slice(right, end);
          }
          const middle2 = Math.round((left + right) / 2);
          if (position === "end") {
            container.innerText = content.slice(0, middle2) + dots;
          } else {
            container.innerText = dots + content.slice(middle2, end);
          }
          container.innerHTML += actionHTML;
          if (container.offsetHeight > maxHeight) {
            if (position === "end") {
              return tail(left, middle2);
            }
            return tail(middle2, right);
          }
          if (position === "end") {
            return tail(middle2, right);
          }
          return tail(left, middle2);
        };
        return tail(0, end);
      };
      const middleTail = (leftPart, rightPart) => {
        if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
          return content.slice(0, leftPart[0]) + dots + content.slice(rightPart[1], end);
        }
        const leftMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2);
        const rightMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2);
        container.innerText = props.content.slice(0, leftMiddle) + props.dots + props.content.slice(rightMiddle, end);
        container.innerHTML += actionHTML;
        if (container.offsetHeight >= maxHeight) {
          return middleTail([leftPart[0], leftMiddle], [rightMiddle, rightPart[1]]);
        }
        return middleTail([leftMiddle, leftPart[1]], [rightPart[0], rightMiddle]);
      };
      return props.position === "middle" ? middleTail([0, middle], [middle, end]) : calcEllipse();
    };
    const calcEllipsised = () => {
      const container = cloneContainer();
      if (!container) {
        needRecalculate = true;
        return;
      }
      const {
        paddingBottom,
        paddingTop,
        lineHeight
      } = container.style;
      const maxHeight = Math.ceil((Number(props.rows) + 0.5) * pxToNum(lineHeight) + pxToNum(paddingTop) + pxToNum(paddingBottom));
      if (maxHeight < container.offsetHeight) {
        hasAction.value = true;
        text.value = calcEllipsisText(container, maxHeight);
      } else {
        hasAction.value = false;
        text.value = props.content;
      }
      document.body.removeChild(container);
    };
    const toggle = (isExpanded = !expanded.value) => {
      expanded.value = isExpanded;
    };
    const onClickAction = (event) => {
      toggle();
      emit("clickAction", event);
    };
    const renderAction = () => {
      const action = slots.action ? slots.action({
        expanded: expanded.value
      }) : actionText.value;
      return _createVNode("span", {
        "ref": actionRef,
        "class": bem("action"),
        "onClick": onClickAction
      }, [action]);
    };
    onMounted(() => {
      calcEllipsised();
      if (slots.action) {
        nextTick(calcEllipsised);
      }
    });
    onActivated(() => {
      if (needRecalculate) {
        needRecalculate = false;
        calcEllipsised();
      }
    });
    watch([windowWidth, () => [props.content, props.rows, props.position]], calcEllipsised);
    useExpose({
      toggle
    });
    return () => _createVNode("div", {
      "ref": root,
      "class": bem()
    }, [expanded.value ? props.content : text.value, hasAction.value ? renderAction() : null]);
  }
});
export {
  stdin_default as default,
  textEllipsisProps
};
