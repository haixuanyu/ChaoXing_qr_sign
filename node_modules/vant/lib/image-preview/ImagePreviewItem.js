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
  default: () => stdin_default
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
var import_use_expose = require("../composables/use-expose");
var import_use_touch = require("../composables/use-touch");
var import_use = require("@vant/use");
var import_image = require("../image");
var import_loading = require("../loading");
var import_swipe_item = require("../swipe-item");
const getDistance = (touches) => Math.sqrt((touches[0].clientX - touches[1].clientX) ** 2 + (touches[0].clientY - touches[1].clientY) ** 2);
const getCenter = (touches) => ({
  x: (touches[0].clientX + touches[1].clientX) / 2,
  y: (touches[0].clientY + touches[1].clientY) / 2
});
const bem = (0, import_utils.createNamespace)("image-preview")[1];
const longImageRatio = 2.6;
const imagePreviewItemProps = {
  src: String,
  show: Boolean,
  active: Number,
  minZoom: (0, import_utils.makeRequiredProp)(import_utils.numericProp),
  maxZoom: (0, import_utils.makeRequiredProp)(import_utils.numericProp),
  rootWidth: (0, import_utils.makeRequiredProp)(Number),
  rootHeight: (0, import_utils.makeRequiredProp)(Number),
  disableZoom: Boolean,
  doubleScale: Boolean,
  closeOnClickImage: Boolean,
  closeOnClickOverlay: Boolean,
  vertical: Boolean
};
var stdin_default = (0, import_vue.defineComponent)({
  props: imagePreviewItemProps,
  emits: ["scale", "close", "longPress"],
  setup(props, {
    emit,
    slots
  }) {
    const state = (0, import_vue.reactive)({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      initializing: false,
      imageRatio: 0
    });
    const touch = (0, import_use_touch.useTouch)();
    const imageRef = (0, import_vue.ref)();
    const swipeItem = (0, import_vue.ref)();
    const vertical = (0, import_vue.ref)(false);
    const isLongImage = (0, import_vue.ref)(false);
    let initialMoveY = 0;
    const imageStyle = (0, import_vue.computed)(() => {
      const {
        scale,
        moveX,
        moveY,
        moving,
        zooming,
        initializing
      } = state;
      const style = {
        transitionDuration: zooming || moving || initializing ? "0s" : ".3s"
      };
      if (scale !== 1 || isLongImage.value) {
        style.transform = `matrix(${scale}, 0, 0, ${scale}, ${moveX}, ${moveY})`;
      }
      return style;
    });
    const maxMoveX = (0, import_vue.computed)(() => {
      if (state.imageRatio) {
        const {
          rootWidth,
          rootHeight
        } = props;
        const displayWidth = vertical.value ? rootHeight / state.imageRatio : rootWidth;
        return Math.max(0, (state.scale * displayWidth - rootWidth) / 2);
      }
      return 0;
    });
    const maxMoveY = (0, import_vue.computed)(() => {
      if (state.imageRatio) {
        const {
          rootWidth,
          rootHeight
        } = props;
        const displayHeight = vertical.value ? rootHeight : rootWidth * state.imageRatio;
        return Math.max(0, (state.scale * displayHeight - rootHeight) / 2);
      }
      return 0;
    });
    const setScale = (scale, center) => {
      var _a;
      scale = (0, import_utils.clamp)(scale, +props.minZoom, +props.maxZoom + 1);
      if (scale !== state.scale) {
        const ratio = scale / state.scale;
        state.scale = scale;
        if (center) {
          const imageRect = (0, import_use.useRect)((_a = imageRef.value) == null ? void 0 : _a.$el);
          const origin = {
            x: imageRect.width * 0.5,
            y: imageRect.height * 0.5
          };
          const moveX = state.moveX - (center.x - imageRect.left - origin.x) * (ratio - 1);
          const moveY = state.moveY - (center.y - imageRect.top - origin.y) * (ratio - 1);
          state.moveX = (0, import_utils.clamp)(moveX, -maxMoveX.value, maxMoveX.value);
          state.moveY = (0, import_utils.clamp)(moveY, -maxMoveY.value, maxMoveY.value);
        } else {
          state.moveX = 0;
          state.moveY = isLongImage.value ? initialMoveY : 0;
        }
        emit("scale", {
          scale,
          index: props.active
        });
      }
    };
    const resetScale = () => {
      setScale(1);
    };
    const toggleScale = () => {
      const scale = state.scale > 1 ? 1 : 2;
      setScale(scale, scale === 2 || isLongImage.value ? {
        x: touch.startX.value,
        y: touch.startY.value
      } : void 0);
    };
    let fingerNum;
    let startMoveX;
    let startMoveY;
    let startScale;
    let startDistance;
    let lastCenter;
    let doubleTapTimer;
    let touchStartTime;
    let isImageMoved = false;
    const onTouchStart = (event) => {
      const {
        touches
      } = event;
      fingerNum = touches.length;
      if (fingerNum === 2 && props.disableZoom) {
        return;
      }
      const {
        offsetX
      } = touch;
      touch.start(event);
      startMoveX = state.moveX;
      startMoveY = state.moveY;
      touchStartTime = Date.now();
      isImageMoved = false;
      state.moving = fingerNum === 1 && (state.scale !== 1 || isLongImage.value);
      state.zooming = fingerNum === 2 && !offsetX.value;
      if (state.zooming) {
        startScale = state.scale;
        startDistance = getDistance(touches);
      }
    };
    const onTouchMove = (event) => {
      const {
        touches
      } = event;
      touch.move(event);
      if (state.moving) {
        const {
          deltaX,
          deltaY
        } = touch;
        const moveX = deltaX.value + startMoveX;
        const moveY = deltaY.value + startMoveY;
        if ((props.vertical ? touch.isVertical() && Math.abs(moveY) > maxMoveY.value : touch.isHorizontal() && Math.abs(moveX) > maxMoveX.value) && !isImageMoved) {
          state.moving = false;
          return;
        }
        isImageMoved = true;
        (0, import_utils.preventDefault)(event, true);
        state.moveX = (0, import_utils.clamp)(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = (0, import_utils.clamp)(moveY, -maxMoveY.value, maxMoveY.value);
      }
      if (state.zooming) {
        (0, import_utils.preventDefault)(event, true);
        if (touches.length === 2) {
          const distance = getDistance(touches);
          const scale = startScale * distance / startDistance;
          lastCenter = getCenter(touches);
          setScale(scale, lastCenter);
        }
      }
    };
    const checkClose = (event) => {
      var _a;
      const swipeItemEl = (_a = swipeItem.value) == null ? void 0 : _a.$el;
      if (!swipeItemEl) return;
      const imageEl = swipeItemEl.firstElementChild;
      const isClickOverlay = event.target === swipeItemEl;
      const isClickImage = imageEl == null ? void 0 : imageEl.contains(event.target);
      if (!props.closeOnClickImage && isClickImage) return;
      if (!props.closeOnClickOverlay && isClickOverlay) return;
      emit("close");
    };
    const checkTap = (event) => {
      if (fingerNum > 1) {
        return;
      }
      const deltaTime = Date.now() - touchStartTime;
      const TAP_TIME = 250;
      if (touch.isTap.value) {
        if (deltaTime < TAP_TIME) {
          if (props.doubleScale) {
            if (doubleTapTimer) {
              clearTimeout(doubleTapTimer);
              doubleTapTimer = null;
              toggleScale();
            } else {
              doubleTapTimer = setTimeout(() => {
                checkClose(event);
                doubleTapTimer = null;
              }, TAP_TIME);
            }
          } else {
            checkClose(event);
          }
        } else if (deltaTime > import_utils.LONG_PRESS_START_TIME) {
          emit("longPress");
        }
      }
    };
    const onTouchEnd = (event) => {
      let stopPropagation = false;
      if (state.moving || state.zooming) {
        stopPropagation = true;
        if (state.moving && startMoveX === state.moveX && startMoveY === state.moveY) {
          stopPropagation = false;
        }
        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = (0, import_utils.clamp)(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = (0, import_utils.clamp)(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }
          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;
          if (state.scale < 1) {
            resetScale();
          }
          const maxZoom = +props.maxZoom;
          if (state.scale > maxZoom) {
            setScale(maxZoom, lastCenter);
          }
        }
      }
      (0, import_utils.preventDefault)(event, stopPropagation);
      checkTap(event);
      touch.reset();
    };
    const resize = () => {
      const {
        rootWidth,
        rootHeight
      } = props;
      const rootRatio = rootHeight / rootWidth;
      const {
        imageRatio
      } = state;
      vertical.value = state.imageRatio > rootRatio && imageRatio < longImageRatio;
      isLongImage.value = state.imageRatio > rootRatio && imageRatio >= longImageRatio;
      if (isLongImage.value) {
        initialMoveY = (imageRatio * rootWidth - rootHeight) / 2;
        state.moveY = initialMoveY;
        state.initializing = true;
        (0, import_use.raf)(() => {
          state.initializing = false;
        });
      }
      resetScale();
    };
    const onLoad = (event) => {
      const {
        naturalWidth,
        naturalHeight
      } = event.target;
      state.imageRatio = naturalHeight / naturalWidth;
      resize();
    };
    (0, import_vue.watch)(() => props.active, resetScale);
    (0, import_vue.watch)(() => props.show, (value) => {
      if (!value) {
        resetScale();
      }
    });
    (0, import_vue.watch)(() => [props.rootWidth, props.rootHeight], resize);
    (0, import_use.useEventListener)("touchmove", onTouchMove, {
      target: (0, import_vue.computed)(() => {
        var _a;
        return (_a = swipeItem.value) == null ? void 0 : _a.$el;
      })
    });
    (0, import_use_expose.useExpose)({
      resetScale
    });
    return () => {
      const imageSlots = {
        loading: () => (0, import_vue.createVNode)(import_loading.Loading, {
          "type": "spinner"
        }, null)
      };
      return (0, import_vue.createVNode)(import_swipe_item.SwipeItem, {
        "ref": swipeItem,
        "class": bem("swipe-item"),
        "onTouchstartPassive": onTouchStart,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, {
        default: () => [slots.image ? (0, import_vue.createVNode)("div", {
          "class": bem("image-wrap")
        }, [slots.image({
          src: props.src,
          onLoad,
          style: imageStyle.value
        })]) : (0, import_vue.createVNode)(import_image.Image, {
          "ref": imageRef,
          "src": props.src,
          "fit": "contain",
          "class": bem("image", {
            vertical: vertical.value
          }),
          "style": imageStyle.value,
          "onLoad": onLoad
        }, imageSlots)]
      });
    };
  }
});
