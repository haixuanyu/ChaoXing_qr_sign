import { computed, ref, onMounted, defineComponent, watch, createVNode as _createVNode } from "vue";
import { inBrowser, makeNumberProp, makeStringProp, createNamespace, preventDefault, windowWidth } from "../utils/index.mjs";
import { useRect } from "@vant/use";
import { useExpose } from "../composables/use-expose.mjs";
import { Button } from "../button/index.mjs";
const [name, bem, t] = createNamespace("signature");
const signatureProps = {
  tips: String,
  type: makeStringProp("png"),
  penColor: makeStringProp("#000"),
  lineWidth: makeNumberProp(3),
  clearButtonText: String,
  backgroundColor: makeStringProp(""),
  confirmButtonText: String
};
const hasCanvasSupport = () => {
  var _a;
  const canvas = document.createElement("canvas");
  return !!((_a = canvas.getContext) == null ? void 0 : _a.call(canvas, "2d"));
};
var stdin_default = defineComponent({
  name,
  props: signatureProps,
  emits: ["submit", "clear", "start", "end", "signing"],
  setup(props, {
    emit,
    slots
  }) {
    const canvasRef = ref();
    const wrapRef = ref();
    const ctx = computed(() => {
      if (!canvasRef.value) return null;
      return canvasRef.value.getContext("2d");
    });
    const isRenderCanvas = inBrowser ? hasCanvasSupport() : true;
    let canvasWidth = 0;
    let canvasHeight = 0;
    let canvasRect;
    const touchStart = () => {
      if (!ctx.value) {
        return false;
      }
      ctx.value.beginPath();
      ctx.value.lineWidth = props.lineWidth;
      ctx.value.strokeStyle = props.penColor;
      canvasRect = useRect(canvasRef);
      emit("start");
    };
    const touchMove = (event) => {
      if (!ctx.value) {
        return false;
      }
      preventDefault(event);
      const touch = event.touches[0];
      const mouseX = touch.clientX - ((canvasRect == null ? void 0 : canvasRect.left) || 0);
      const mouseY = touch.clientY - ((canvasRect == null ? void 0 : canvasRect.top) || 0);
      ctx.value.lineCap = "round";
      ctx.value.lineJoin = "round";
      ctx.value.lineTo(mouseX, mouseY);
      ctx.value.stroke();
      emit("signing", event);
    };
    const touchEnd = (event) => {
      preventDefault(event);
      emit("end");
    };
    const isCanvasEmpty = (canvas) => {
      const empty = document.createElement("canvas");
      empty.width = canvas.width;
      empty.height = canvas.height;
      if (props.backgroundColor) {
        const emptyCtx = empty.getContext("2d");
        setCanvasBgColor(emptyCtx);
      }
      return canvas.toDataURL() === empty.toDataURL();
    };
    const setCanvasBgColor = (ctx2) => {
      if (ctx2 && props.backgroundColor) {
        ctx2.fillStyle = props.backgroundColor;
        ctx2.fillRect(0, 0, canvasWidth, canvasHeight);
      }
    };
    const submit = () => {
      var _a, _b;
      const canvas = canvasRef.value;
      if (!canvas) {
        return;
      }
      const isEmpty = isCanvasEmpty(canvas);
      const image = isEmpty ? "" : ((_b = (_a = {
        jpg: () => canvas.toDataURL("image/jpeg", 0.8),
        jpeg: () => canvas.toDataURL("image/jpeg", 0.8)
      })[props.type]) == null ? void 0 : _b.call(_a)) || canvas.toDataURL(`image/${props.type}`);
      emit("submit", {
        image,
        canvas
      });
    };
    const clear = () => {
      if (ctx.value) {
        ctx.value.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.value.closePath();
        setCanvasBgColor(ctx.value);
      }
      emit("clear");
    };
    const initialize = () => {
      var _a, _b, _c;
      if (isRenderCanvas && canvasRef.value) {
        const canvas = canvasRef.value;
        const dpr = inBrowser ? window.devicePixelRatio : 1;
        canvasWidth = canvas.width = (((_a = wrapRef.value) == null ? void 0 : _a.offsetWidth) || 0) * dpr;
        canvasHeight = canvas.height = (((_b = wrapRef.value) == null ? void 0 : _b.offsetHeight) || 0) * dpr;
        (_c = ctx.value) == null ? void 0 : _c.scale(dpr, dpr);
        setCanvasBgColor(ctx.value);
      }
    };
    const resize = () => {
      if (ctx.value) {
        const data = ctx.value.getImageData(0, 0, canvasWidth, canvasHeight);
        initialize();
        ctx.value.putImageData(data, 0, 0);
      }
    };
    watch(windowWidth, resize);
    onMounted(initialize);
    useExpose({
      resize,
      clear,
      submit
    });
    return () => _createVNode("div", {
      "class": bem()
    }, [_createVNode("div", {
      "class": bem("content"),
      "ref": wrapRef
    }, [isRenderCanvas ? _createVNode("canvas", {
      "ref": canvasRef,
      "onTouchstartPassive": touchStart,
      "onTouchmove": touchMove,
      "onTouchend": touchEnd
    }, null) : slots.tips ? slots.tips() : _createVNode("p", null, [props.tips])]), _createVNode("div", {
      "class": bem("footer")
    }, [_createVNode(Button, {
      "size": "small",
      "onClick": clear
    }, {
      default: () => [props.clearButtonText || t("clear")]
    }), _createVNode(Button, {
      "type": "primary",
      "size": "small",
      "onClick": submit
    }, {
      default: () => [props.confirmButtonText || t("confirm")]
    })])]);
  }
});
export {
  stdin_default as default,
  signatureProps
};
