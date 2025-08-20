var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
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
  default: () => stdin_default,
  signatureProps: () => signatureProps
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
var import_use = require("@vant/use");
var import_use_expose = require("../composables/use-expose");
var import_button = require("../button");
const [name, bem, t] = (0, import_utils.createNamespace)("signature");
const signatureProps = {
  tips: String,
  type: (0, import_utils.makeStringProp)("png"),
  penColor: (0, import_utils.makeStringProp)("#000"),
  lineWidth: (0, import_utils.makeNumberProp)(3),
  clearButtonText: String,
  backgroundColor: (0, import_utils.makeStringProp)(""),
  confirmButtonText: String
};
const hasCanvasSupport = () => {
  var _a;
  const canvas = document.createElement("canvas");
  return !!((_a = canvas.getContext) == null ? void 0 : _a.call(canvas, "2d"));
};
var stdin_default = (0, import_vue.defineComponent)({
  name,
  props: signatureProps,
  emits: ["submit", "clear", "start", "end", "signing"],
  setup(props, {
    emit,
    slots
  }) {
    const canvasRef = (0, import_vue.ref)();
    const wrapRef = (0, import_vue.ref)();
    const ctx = (0, import_vue.computed)(() => {
      if (!canvasRef.value) return null;
      return canvasRef.value.getContext("2d");
    });
    const isRenderCanvas = import_utils.inBrowser ? hasCanvasSupport() : true;
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
      canvasRect = (0, import_use.useRect)(canvasRef);
      emit("start");
    };
    const touchMove = (event) => {
      if (!ctx.value) {
        return false;
      }
      (0, import_utils.preventDefault)(event);
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
      (0, import_utils.preventDefault)(event);
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
        const dpr = import_utils.inBrowser ? window.devicePixelRatio : 1;
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
    (0, import_vue.watch)(import_utils.windowWidth, resize);
    (0, import_vue.onMounted)(initialize);
    (0, import_use_expose.useExpose)({
      resize,
      clear,
      submit
    });
    return () => (0, import_vue.createVNode)("div", {
      "class": bem()
    }, [(0, import_vue.createVNode)("div", {
      "class": bem("content"),
      "ref": wrapRef
    }, [isRenderCanvas ? (0, import_vue.createVNode)("canvas", {
      "ref": canvasRef,
      "onTouchstartPassive": touchStart,
      "onTouchmove": touchMove,
      "onTouchend": touchEnd
    }, null) : slots.tips ? slots.tips() : (0, import_vue.createVNode)("p", null, [props.tips])]), (0, import_vue.createVNode)("div", {
      "class": bem("footer")
    }, [(0, import_vue.createVNode)(import_button.Button, {
      "size": "small",
      "onClick": clear
    }, {
      default: () => [props.clearButtonText || t("clear")]
    }), (0, import_vue.createVNode)(import_button.Button, {
      "type": "primary",
      "size": "small",
      "onClick": submit
    }, {
      default: () => [props.confirmButtonText || t("confirm")]
    })])]);
  }
});
