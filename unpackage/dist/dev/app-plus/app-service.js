if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_LOAD = "onLoad";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function requireNativePlugin(name2) {
    return weex.requireModule(name2);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createLifeCycleHook(
    ON_LOAD,
    2
    /* HookFlags.PAGE */
  );
  const onPullDownRefresh = /* @__PURE__ */ createLifeCycleHook(
    ON_PULL_DOWN_REFRESH,
    2
    /* HookFlags.PAGE */
  );
  function noop() {
  }
  const extend = Object.assign;
  const inBrowser$1 = typeof window !== "undefined";
  const isObject = (val) => val !== null && typeof val === "object";
  const isDef = (val) => val !== void 0 && val !== null;
  const isFunction = (val) => typeof val === "function";
  const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch);
  const isNumeric = (val) => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
  const isIOS = () => inBrowser$1 ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
  function get(object, path) {
    const keys = path.split(".");
    let result = object;
    keys.forEach((key) => {
      var _a;
      result = isObject(result) ? (_a = result[key]) != null ? _a : "" : "";
    });
    return result;
  }
  function pick(obj, keys, ignoreUndefined) {
    return keys.reduce(
      (ret, key) => {
        if (!ignoreUndefined || obj[key] !== void 0) {
          ret[key] = obj[key];
        }
        return ret;
      },
      {}
    );
  }
  const unknownProp = null;
  const numericProp = [Number, String];
  const truthProp = {
    type: Boolean,
    default: true
  };
  const makeNumberProp = (defaultVal) => ({
    type: Number,
    default: defaultVal
  });
  const makeStringProp = (defaultVal) => ({
    type: String,
    default: defaultVal
  });
  var inBrowser = typeof window !== "undefined";
  function onMountedOrActivated(hook) {
    let mounted;
    vue.onMounted(() => {
      hook();
      vue.nextTick(() => {
        mounted = true;
      });
    });
    vue.onActivated(() => {
      if (mounted) {
        hook();
      }
    });
  }
  function useEventListener(type, listener, options = {}) {
    if (!inBrowser) {
      return;
    }
    const { target = window, passive = false, capture = false } = options;
    let cleaned = false;
    let attached;
    const add = (target2) => {
      if (cleaned) {
        return;
      }
      const element = vue.unref(target2);
      if (element && !attached) {
        element.addEventListener(type, listener, {
          capture,
          passive
        });
        attached = true;
      }
    };
    const remove = (target2) => {
      if (cleaned) {
        return;
      }
      const element = vue.unref(target2);
      if (element && attached) {
        element.removeEventListener(type, listener, capture);
        attached = false;
      }
    };
    vue.onUnmounted(() => remove(target));
    vue.onDeactivated(() => remove(target));
    onMountedOrActivated(() => add(target));
    let stopWatch;
    if (vue.isRef(target)) {
      stopWatch = vue.watch(target, (val, oldVal) => {
        remove(oldVal);
        add(val);
      });
    }
    return () => {
      stopWatch == null ? void 0 : stopWatch();
      remove(target);
      cleaned = true;
    };
  }
  var width;
  var height;
  function useWindowSize() {
    if (!width) {
      width = vue.ref(0);
      height = vue.ref(0);
      if (inBrowser) {
        const update = () => {
          width.value = window.innerWidth;
          height.value = window.innerHeight;
        };
        update();
        window.addEventListener("resize", update, { passive: true });
        window.addEventListener("orientationchange", update, { passive: true });
      }
    }
    return { width, height };
  }
  var overflowScrollReg = /scroll|auto|overlay/i;
  var defaultRoot = inBrowser ? window : void 0;
  function isElement(node) {
    const ELEMENT_NODE_TYPE = 1;
    return node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === ELEMENT_NODE_TYPE;
  }
  function getScrollParent(el, root = defaultRoot) {
    let node = el;
    while (node && node !== root && isElement(node)) {
      const { overflowY } = window.getComputedStyle(node);
      if (overflowScrollReg.test(overflowY)) {
        return node;
      }
      node = node.parentNode;
    }
    return root;
  }
  isIOS();
  const stopPropagation = (event) => event.stopPropagation();
  function preventDefault(event, isStopPropagation) {
    if (typeof event.cancelable !== "boolean" || event.cancelable) {
      event.preventDefault();
    }
    if (isStopPropagation) {
      stopPropagation(event);
    }
  }
  useWindowSize();
  function addUnit(value) {
    if (isDef(value)) {
      return isNumeric(value) ? `${value}px` : String(value);
    }
    return void 0;
  }
  function getSizeStyle(originSize) {
    if (isDef(originSize)) {
      if (Array.isArray(originSize)) {
        return {
          width: addUnit(originSize[0]),
          height: addUnit(originSize[1])
        };
      }
      const size = addUnit(originSize);
      return {
        width: size,
        height: size
      };
    }
  }
  function getZIndexStyle(zIndex) {
    const style = {};
    if (zIndex !== void 0) {
      style.zIndex = +zIndex;
    }
    return style;
  }
  const camelizeRE = /-(\w)/g;
  const camelize = (str) => str.replace(camelizeRE, (_2, c2) => c2.toUpperCase());
  const kebabCase = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  const { hasOwnProperty } = Object.prototype;
  function assignKey(to, from, key) {
    const val = from[key];
    if (!isDef(val)) {
      return;
    }
    if (!hasOwnProperty.call(to, key) || !isObject(val)) {
      to[key] = val;
    } else {
      to[key] = deepAssign(Object(to[key]), val);
    }
  }
  function deepAssign(to, from) {
    Object.keys(from).forEach((key) => {
      assignKey(to, from, key);
    });
    return to;
  }
  var stdin_default$7 = {
    name: "姓名",
    tel: "电话",
    save: "保存",
    clear: "清空",
    cancel: "取消",
    confirm: "确认",
    delete: "删除",
    loading: "加载中...",
    noCoupon: "暂无优惠券",
    nameEmpty: "请填写姓名",
    addContact: "添加联系人",
    telInvalid: "请填写正确的电话",
    vanCalendar: {
      end: "结束",
      start: "开始",
      title: "日期选择",
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      monthTitle: (year, month) => `${year}年${month}月`,
      rangePrompt: (maxRange) => `最多选择 ${maxRange} 天`
    },
    vanCascader: {
      select: "请选择"
    },
    vanPagination: {
      prev: "上一页",
      next: "下一页"
    },
    vanPullRefresh: {
      pulling: "下拉即可刷新...",
      loosing: "释放即可刷新..."
    },
    vanSubmitBar: {
      label: "合计:"
    },
    vanCoupon: {
      unlimited: "无门槛",
      discount: (discount) => `${discount}折`,
      condition: (condition) => `满${condition}元可用`
    },
    vanCouponCell: {
      title: "优惠券",
      count: (count) => `${count}张可用`
    },
    vanCouponList: {
      exchange: "兑换",
      close: "不使用",
      enable: "可用",
      disabled: "不可用",
      placeholder: "输入优惠码"
    },
    vanAddressEdit: {
      area: "地区",
      areaEmpty: "请选择地区",
      addressEmpty: "请填写详细地址",
      addressDetail: "详细地址",
      defaultAddress: "设为默认收货地址"
    },
    vanAddressList: {
      add: "新增地址"
    }
  };
  const lang = vue.ref("zh-CN");
  const messages = vue.reactive({
    "zh-CN": stdin_default$7
  });
  const Locale = {
    messages() {
      return messages[lang.value];
    },
    use(newLang, newMessages) {
      lang.value = newLang;
      this.add({ [newLang]: newMessages });
    },
    add(newMessages = {}) {
      deepAssign(messages, newMessages);
    }
  };
  var stdin_default$6 = Locale;
  function createTranslate(name2) {
    const prefix = camelize(name2) + ".";
    return (path, ...args) => {
      const messages2 = stdin_default$6.messages();
      const message = get(messages2, prefix + path) || get(messages2, path);
      return isFunction(message) ? message(...args) : message;
    };
  }
  function genBem(name2, mods) {
    if (!mods) {
      return "";
    }
    if (typeof mods === "string") {
      return ` ${name2}--${mods}`;
    }
    if (Array.isArray(mods)) {
      return mods.reduce(
        (ret, item) => ret + genBem(name2, item),
        ""
      );
    }
    return Object.keys(mods).reduce(
      (ret, key) => ret + (mods[key] ? genBem(name2, key) : ""),
      ""
    );
  }
  function createBEM(name2) {
    return (el, mods) => {
      if (el && typeof el !== "string") {
        mods = el;
        el = "";
      }
      el = el ? `${name2}__${el}` : name2;
      return `${el}${genBem(el, mods)}`;
    };
  }
  function createNamespace(name2) {
    const prefixedName = `van-${name2}`;
    return [
      prefixedName,
      createBEM(prefixedName),
      createTranslate(prefixedName)
    ];
  }
  const HAPTICS_FEEDBACK = "van-haptics-feedback";
  const TAP_OFFSET = 5;
  function callInterceptor(interceptor, {
    args = [],
    done,
    canceled,
    error
  }) {
    if (interceptor) {
      const returnVal = interceptor.apply(null, args);
      if (isPromise(returnVal)) {
        returnVal.then((value) => {
          if (value) {
            done();
          } else if (canceled) {
            canceled();
          }
        }).catch(error || noop);
      } else if (returnVal) {
        done();
      } else if (canceled) {
        canceled();
      }
    } else {
      done();
    }
  }
  function withInstall(options) {
    options.install = (app) => {
      const { name: name2 } = options;
      if (name2) {
        app.component(name2, options);
        app.component(camelize(`-${name2}`), options);
      }
    };
    return options;
  }
  const POPUP_TOGGLE_KEY = Symbol();
  function useExpose(apis) {
    const instance = vue.getCurrentInstance();
    if (instance) {
      extend(instance.proxy, apis);
    }
  }
  const [name$6, bem$6] = createNamespace("badge");
  const badgeProps = {
    dot: Boolean,
    max: numericProp,
    tag: makeStringProp("div"),
    color: String,
    offset: Array,
    content: numericProp,
    showZero: truthProp,
    position: makeStringProp("top-right")
  };
  var stdin_default$5 = vue.defineComponent({
    name: name$6,
    props: badgeProps,
    setup(props, {
      slots
    }) {
      const hasContent = () => {
        if (slots.content) {
          return true;
        }
        const {
          content,
          showZero
        } = props;
        return isDef(content) && content !== "" && (showZero || content !== 0 && content !== "0");
      };
      const renderContent = () => {
        const {
          dot,
          max,
          content
        } = props;
        if (!dot && hasContent()) {
          if (slots.content) {
            return slots.content();
          }
          if (isDef(max) && isNumeric(content) && +content > +max) {
            return `${max}+`;
          }
          return content;
        }
      };
      const getOffsetWithMinusString = (val) => val.startsWith("-") ? val.replace("-", "") : `-${val}`;
      const style = vue.computed(() => {
        const style2 = {
          background: props.color
        };
        if (props.offset) {
          const [x, y2] = props.offset;
          const {
            position
          } = props;
          const [offsetY, offsetX] = position.split("-");
          if (slots.default) {
            if (typeof y2 === "number") {
              style2[offsetY] = addUnit(offsetY === "top" ? y2 : -y2);
            } else {
              style2[offsetY] = offsetY === "top" ? addUnit(y2) : getOffsetWithMinusString(y2);
            }
            if (typeof x === "number") {
              style2[offsetX] = addUnit(offsetX === "left" ? x : -x);
            } else {
              style2[offsetX] = offsetX === "left" ? addUnit(x) : getOffsetWithMinusString(x);
            }
          } else {
            style2.marginTop = addUnit(y2);
            style2.marginLeft = addUnit(x);
          }
        }
        return style2;
      });
      const renderBadge = () => {
        if (hasContent() || props.dot) {
          return vue.createVNode("div", {
            "class": bem$6([props.position, {
              dot: props.dot,
              fixed: !!slots.default
            }]),
            "style": style.value
          }, [renderContent()]);
        }
      };
      return () => {
        if (slots.default) {
          const {
            tag
          } = props;
          return vue.createVNode(tag, {
            "class": bem$6("wrapper")
          }, {
            default: () => [slots.default(), renderBadge()]
          });
        }
        return renderBadge();
      };
    }
  });
  const Badge = withInstall(stdin_default$5);
  let globalZIndex = 2e3;
  const useGlobalZIndex = () => ++globalZIndex;
  const setGlobalZIndex = (val) => {
    globalZIndex = val;
  };
  const [name$5, bem$5] = createNamespace("config-provider");
  const CONFIG_PROVIDER_KEY = Symbol(name$5);
  const configProviderProps = {
    tag: makeStringProp("div"),
    theme: makeStringProp("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    themeVarsScope: makeStringProp("local"),
    iconPrefix: String
  };
  function insertDash(str) {
    return str.replace(/([a-zA-Z])(\d)/g, "$1-$2");
  }
  function mapThemeVarsToCSSVars(themeVars) {
    const cssVars = {};
    Object.keys(themeVars).forEach((key) => {
      const formattedKey = insertDash(kebabCase(key));
      cssVars[`--van-${formattedKey}`] = themeVars[key];
    });
    return cssVars;
  }
  function syncThemeVarsOnRoot(newStyle = {}, oldStyle = {}) {
    Object.keys(newStyle).forEach((key) => {
      if (newStyle[key] !== oldStyle[key]) {
        document.documentElement.style.setProperty(key, newStyle[key]);
      }
    });
    Object.keys(oldStyle).forEach((key) => {
      if (!newStyle[key]) {
        document.documentElement.style.removeProperty(key);
      }
    });
  }
  vue.defineComponent({
    name: name$5,
    props: configProviderProps,
    setup(props, {
      slots
    }) {
      const style = vue.computed(() => mapThemeVarsToCSSVars(extend({}, props.themeVars, props.theme === "dark" ? props.themeVarsDark : props.themeVarsLight)));
      if (inBrowser$1) {
        const addTheme = () => {
          document.documentElement.classList.add(`van-theme-${props.theme}`);
        };
        const removeTheme = (theme = props.theme) => {
          document.documentElement.classList.remove(`van-theme-${theme}`);
        };
        vue.watch(() => props.theme, (newVal, oldVal) => {
          if (oldVal) {
            removeTheme(oldVal);
          }
          addTheme();
        }, {
          immediate: true
        });
        vue.onActivated(addTheme);
        vue.onDeactivated(removeTheme);
        vue.onBeforeUnmount(removeTheme);
        vue.watch(style, (newStyle, oldStyle) => {
          if (props.themeVarsScope === "global") {
            syncThemeVarsOnRoot(newStyle, oldStyle);
          }
        });
        vue.watch(() => props.themeVarsScope, (newScope, oldScope) => {
          if (oldScope === "global") {
            syncThemeVarsOnRoot({}, style.value);
          }
          if (newScope === "global") {
            syncThemeVarsOnRoot(style.value, {});
          }
        });
        if (props.themeVarsScope === "global") {
          syncThemeVarsOnRoot(style.value, {});
        }
      }
      vue.provide(CONFIG_PROVIDER_KEY, props);
      vue.watchEffect(() => {
        if (props.zIndex !== void 0) {
          setGlobalZIndex(props.zIndex);
        }
      });
      return () => vue.createVNode(props.tag, {
        "class": bem$5(),
        "style": props.themeVarsScope === "local" ? style.value : void 0
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    }
  });
  const [name$4, bem$4] = createNamespace("icon");
  const isImage = (name2) => name2 == null ? void 0 : name2.includes("/");
  const iconProps = {
    dot: Boolean,
    tag: makeStringProp("i"),
    name: String,
    size: numericProp,
    badge: numericProp,
    color: String,
    badgeProps: Object,
    classPrefix: String
  };
  var stdin_default$4 = vue.defineComponent({
    name: name$4,
    props: iconProps,
    setup(props, {
      slots
    }) {
      const config = vue.inject(CONFIG_PROVIDER_KEY, null);
      const classPrefix = vue.computed(() => props.classPrefix || (config == null ? void 0 : config.iconPrefix) || bem$4());
      return () => {
        const {
          tag,
          dot,
          name: name2,
          size,
          badge,
          color
        } = props;
        const isImageIcon = isImage(name2);
        return vue.createVNode(Badge, vue.mergeProps({
          "dot": dot,
          "tag": tag,
          "class": [classPrefix.value, isImageIcon ? "" : `${classPrefix.value}-${name2}`],
          "style": {
            color,
            fontSize: addUnit(size)
          },
          "content": badge
        }, props.badgeProps), {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots), isImageIcon && vue.createVNode("img", {
              "class": bem$4("image"),
              "src": name2
            }, null)];
          }
        });
      };
    }
  });
  const Icon = withInstall(stdin_default$4);
  const [name$3, bem$3] = createNamespace("loading");
  const SpinIcon = Array(12).fill(null).map((_2, index) => vue.createVNode("i", {
    "class": bem$3("line", String(index + 1))
  }, null));
  const CircularIcon = vue.createVNode("svg", {
    "class": bem$3("circular"),
    "viewBox": "25 25 50 50"
  }, [vue.createVNode("circle", {
    "cx": "50",
    "cy": "50",
    "r": "20",
    "fill": "none"
  }, null)]);
  const loadingProps = {
    size: numericProp,
    type: makeStringProp("circular"),
    color: String,
    vertical: Boolean,
    textSize: numericProp,
    textColor: String
  };
  var stdin_default$3 = vue.defineComponent({
    name: name$3,
    props: loadingProps,
    setup(props, {
      slots
    }) {
      const spinnerStyle = vue.computed(() => extend({
        color: props.color
      }, getSizeStyle(props.size)));
      const renderIcon = () => {
        const DefaultIcon = props.type === "spinner" ? SpinIcon : CircularIcon;
        return vue.createVNode("span", {
          "class": bem$3("spinner", props.type),
          "style": spinnerStyle.value
        }, [slots.icon ? slots.icon() : DefaultIcon]);
      };
      const renderText = () => {
        var _a;
        if (slots.default) {
          return vue.createVNode("span", {
            "class": bem$3("text"),
            "style": {
              fontSize: addUnit(props.textSize),
              color: (_a = props.textColor) != null ? _a : props.color
            }
          }, [slots.default()]);
        }
      };
      return () => {
        const {
          type,
          vertical
        } = props;
        return vue.createVNode("div", {
          "class": bem$3([type, {
            vertical
          }]),
          "aria-live": "polite",
          "aria-busy": true
        }, [renderIcon(), renderText()]);
      };
    }
  });
  const Loading = withInstall(stdin_default$3);
  const popupSharedProps = {
    // whether to show popup
    show: Boolean,
    // z-index
    zIndex: numericProp,
    // whether to show overlay
    overlay: truthProp,
    // transition duration
    duration: numericProp,
    // teleport
    teleport: [String, Object],
    // prevent body scroll
    lockScroll: truthProp,
    // whether to lazy render
    lazyRender: truthProp,
    // callback function before close
    beforeClose: Function,
    // overlay props
    overlayProps: Object,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: unknownProp,
    // Initial rendering animation
    transitionAppear: Boolean,
    // whether to close popup when overlay is clicked
    closeOnClickOverlay: truthProp
  };
  function getDirection(x, y2) {
    if (x > y2) {
      return "horizontal";
    }
    if (y2 > x) {
      return "vertical";
    }
    return "";
  }
  function useTouch() {
    const startX = vue.ref(0);
    const startY = vue.ref(0);
    const deltaX = vue.ref(0);
    const deltaY = vue.ref(0);
    const offsetX = vue.ref(0);
    const offsetY = vue.ref(0);
    const direction = vue.ref("");
    const isTap = vue.ref(true);
    const isVertical = () => direction.value === "vertical";
    const isHorizontal = () => direction.value === "horizontal";
    const reset = () => {
      deltaX.value = 0;
      deltaY.value = 0;
      offsetX.value = 0;
      offsetY.value = 0;
      direction.value = "";
      isTap.value = true;
    };
    const start = (event) => {
      reset();
      startX.value = event.touches[0].clientX;
      startY.value = event.touches[0].clientY;
    };
    const move = (event) => {
      const touch = event.touches[0];
      deltaX.value = (touch.clientX < 0 ? 0 : touch.clientX) - startX.value;
      deltaY.value = touch.clientY - startY.value;
      offsetX.value = Math.abs(deltaX.value);
      offsetY.value = Math.abs(deltaY.value);
      const LOCK_DIRECTION_DISTANCE = 10;
      if (!direction.value || offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE) {
        direction.value = getDirection(offsetX.value, offsetY.value);
      }
      if (isTap.value && (offsetX.value > TAP_OFFSET || offsetY.value > TAP_OFFSET)) {
        isTap.value = false;
      }
    };
    return {
      move,
      start,
      reset,
      startX,
      startY,
      deltaX,
      deltaY,
      offsetX,
      offsetY,
      direction,
      isVertical,
      isHorizontal,
      isTap
    };
  }
  let totalLockCount = 0;
  const BODY_LOCK_CLASS = "van-overflow-hidden";
  function useLockScroll(rootRef, shouldLock) {
    const touch = useTouch();
    const DIRECTION_UP = "01";
    const DIRECTION_DOWN = "10";
    const onTouchMove = (event) => {
      touch.move(event);
      const direction = touch.deltaY.value > 0 ? DIRECTION_DOWN : DIRECTION_UP;
      const el = getScrollParent(
        event.target,
        rootRef.value
      );
      const { scrollHeight, offsetHeight, scrollTop } = el;
      let status = "11";
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? "00" : "01";
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = "10";
      }
      if (status !== "11" && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
        preventDefault(event, true);
      }
    };
    const lock = () => {
      document.addEventListener("touchstart", touch.start);
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      if (!totalLockCount) {
        document.body.classList.add(BODY_LOCK_CLASS);
      }
      totalLockCount++;
    };
    const unlock = () => {
      if (totalLockCount) {
        document.removeEventListener("touchstart", touch.start);
        document.removeEventListener("touchmove", onTouchMove);
        totalLockCount--;
        if (!totalLockCount) {
          document.body.classList.remove(BODY_LOCK_CLASS);
        }
      }
    };
    const init = () => shouldLock() && lock();
    const destroy = () => shouldLock() && unlock();
    onMountedOrActivated(init);
    vue.onDeactivated(destroy);
    vue.onBeforeUnmount(destroy);
    vue.watch(shouldLock, (value) => {
      value ? lock() : unlock();
    });
  }
  function useLazyRender(show) {
    const inited = vue.ref(false);
    vue.watch(
      show,
      (value) => {
        if (value) {
          inited.value = value;
        }
      },
      { immediate: true }
    );
    return (render) => () => inited.value ? render() : null;
  }
  const useScopeId = () => {
    var _a;
    const { scopeId } = ((_a = vue.getCurrentInstance()) == null ? void 0 : _a.vnode) || {};
    return scopeId ? { [scopeId]: "" } : null;
  };
  const [name$2, bem$2] = createNamespace("overlay");
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
  var stdin_default$2 = vue.defineComponent({
    name: name$2,
    inheritAttrs: false,
    props: overlayProps,
    setup(props, {
      attrs,
      slots
    }) {
      const root = vue.ref();
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
        return vue.withDirectives(vue.createVNode("div", vue.mergeProps({
          "ref": root,
          "style": style,
          "class": [bem$2(), props.className]
        }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vue.vShow, props.show]]);
      });
      useEventListener("touchmove", onTouchMove, {
        target: root
      });
      return () => {
        const Content = vue.createVNode(vue.Transition, {
          "name": "van-fade",
          "appear": true
        }, {
          default: renderOverlay
        });
        if (props.teleport) {
          return vue.createVNode(vue.Teleport, {
            "to": props.teleport
          }, {
            default: () => [Content]
          });
        }
        return Content;
      };
    }
  });
  const Overlay = withInstall(stdin_default$2);
  const popupProps = extend({}, popupSharedProps, {
    round: Boolean,
    position: makeStringProp("center"),
    closeIcon: makeStringProp("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: makeStringProp("top-right"),
    destroyOnClose: Boolean,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
  });
  const [name$1, bem$1] = createNamespace("popup");
  var stdin_default$1 = vue.defineComponent({
    name: name$1,
    inheritAttrs: false,
    props: popupProps,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(props, {
      emit,
      attrs,
      slots
    }) {
      let opened;
      let shouldReopen;
      const zIndex = vue.ref();
      const popupRef = vue.ref();
      const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
      const style = vue.computed(() => {
        const style2 = {
          zIndex: zIndex.value
        };
        if (isDef(props.duration)) {
          const key = props.position === "center" ? "animationDuration" : "transitionDuration";
          style2[key] = `${props.duration}s`;
        }
        return style2;
      });
      const open = () => {
        if (!opened) {
          opened = true;
          zIndex.value = props.zIndex !== void 0 ? +props.zIndex : useGlobalZIndex();
          emit("open");
        }
      };
      const close = () => {
        if (opened) {
          callInterceptor(props.beforeClose, {
            done() {
              opened = false;
              emit("close");
              emit("update:show", false);
            }
          });
        }
      };
      const onClickOverlay = (event) => {
        emit("clickOverlay", event);
        if (props.closeOnClickOverlay) {
          close();
        }
      };
      const renderOverlay = () => {
        if (props.overlay) {
          const overlayProps2 = extend({
            show: props.show,
            class: props.overlayClass,
            zIndex: zIndex.value,
            duration: props.duration,
            customStyle: props.overlayStyle,
            role: props.closeOnClickOverlay ? "button" : void 0,
            tabindex: props.closeOnClickOverlay ? 0 : void 0
          }, props.overlayProps);
          return vue.createVNode(Overlay, vue.mergeProps(overlayProps2, useScopeId(), {
            "onClick": onClickOverlay
          }), {
            default: slots["overlay-content"]
          });
        }
      };
      const onClickCloseIcon = (event) => {
        emit("clickCloseIcon", event);
        close();
      };
      const renderCloseIcon = () => {
        if (props.closeable) {
          return vue.createVNode(Icon, {
            "role": "button",
            "tabindex": 0,
            "name": props.closeIcon,
            "class": [bem$1("close-icon", props.closeIconPosition), HAPTICS_FEEDBACK],
            "classPrefix": props.iconPrefix,
            "onClick": onClickCloseIcon
          }, null);
        }
      };
      let timer;
      const onOpened = () => {
        if (timer)
          clearTimeout(timer);
        timer = setTimeout(() => {
          emit("opened");
        });
      };
      const onClosed = () => emit("closed");
      const onKeydown = (event) => emit("keydown", event);
      const renderPopup = lazyRender(() => {
        var _a;
        const {
          destroyOnClose,
          round,
          position,
          safeAreaInsetTop,
          safeAreaInsetBottom,
          show
        } = props;
        if (!show && destroyOnClose) {
          return;
        }
        return vue.withDirectives(vue.createVNode("div", vue.mergeProps({
          "ref": popupRef,
          "style": style.value,
          "role": "dialog",
          "tabindex": 0,
          "class": [bem$1({
            round,
            [position]: position
          }), {
            "van-safe-area-top": safeAreaInsetTop,
            "van-safe-area-bottom": safeAreaInsetBottom
          }],
          "onKeydown": onKeydown
        }, attrs, useScopeId()), [(_a = slots.default) == null ? void 0 : _a.call(slots), renderCloseIcon()]), [[vue.vShow, show]]);
      });
      const renderTransition = () => {
        const {
          position,
          transition,
          transitionAppear
        } = props;
        const name2 = position === "center" ? "van-fade" : `van-popup-slide-${position}`;
        return vue.createVNode(vue.Transition, {
          "name": transition || name2,
          "appear": transitionAppear,
          "onAfterEnter": onOpened,
          "onAfterLeave": onClosed
        }, {
          default: renderPopup
        });
      };
      vue.watch(() => props.show, (show) => {
        if (show && !opened) {
          open();
          if (attrs.tabindex === 0) {
            vue.nextTick(() => {
              var _a;
              (_a = popupRef.value) == null ? void 0 : _a.focus();
            });
          }
        }
        if (!show && opened) {
          opened = false;
          emit("close");
        }
      });
      useExpose({
        popupRef
      });
      useLockScroll(popupRef, () => props.show && props.lockScroll);
      useEventListener("popstate", () => {
        if (props.closeOnPopstate) {
          close();
          shouldReopen = false;
        }
      });
      vue.onMounted(() => {
        if (props.show) {
          open();
        }
      });
      vue.onActivated(() => {
        if (shouldReopen) {
          emit("update:show", true);
          shouldReopen = false;
        }
      });
      vue.onDeactivated(() => {
        if (props.show && props.teleport) {
          close();
          shouldReopen = true;
        }
      });
      vue.provide(POPUP_TOGGLE_KEY, () => props.show);
      return () => {
        if (props.teleport) {
          return vue.createVNode(vue.Teleport, {
            "to": props.teleport
          }, {
            default: () => [renderOverlay(), renderTransition()]
          });
        }
        return vue.createVNode(vue.Fragment, null, [renderOverlay(), renderTransition()]);
      };
    }
  });
  const Popup = withInstall(stdin_default$1);
  let lockCount = 0;
  function lockClick(lock) {
    if (lock) {
      if (!lockCount) {
        document.body.classList.add("van-toast--unclickable");
      }
      lockCount++;
    } else if (lockCount) {
      lockCount--;
      if (!lockCount) {
        document.body.classList.remove("van-toast--unclickable");
      }
    }
  }
  const [name, bem] = createNamespace("toast");
  const popupInheritProps = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"];
  const toastProps = {
    icon: String,
    show: Boolean,
    type: makeStringProp("text"),
    overlay: Boolean,
    message: numericProp,
    iconSize: numericProp,
    duration: makeNumberProp(2e3),
    position: makeStringProp("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: unknownProp,
    iconPrefix: String,
    transition: makeStringProp("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: unknownProp,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: numericProp
  };
  var stdin_default = vue.defineComponent({
    name,
    props: toastProps,
    emits: ["update:show"],
    setup(props, {
      emit,
      slots
    }) {
      let timer;
      let clickable = false;
      const toggleClickable = () => {
        const newValue = props.show && props.forbidClick;
        if (clickable !== newValue) {
          clickable = newValue;
          lockClick(clickable);
        }
      };
      const updateShow = (show) => emit("update:show", show);
      const onClick = () => {
        if (props.closeOnClick) {
          updateShow(false);
        }
      };
      const clearTimer = () => clearTimeout(timer);
      const renderIcon = () => {
        const {
          icon,
          type,
          iconSize,
          iconPrefix,
          loadingType
        } = props;
        const hasIcon = icon || type === "success" || type === "fail";
        if (hasIcon) {
          return vue.createVNode(Icon, {
            "name": icon || type,
            "size": iconSize,
            "class": bem("icon"),
            "classPrefix": iconPrefix
          }, null);
        }
        if (type === "loading") {
          return vue.createVNode(Loading, {
            "class": bem("loading"),
            "size": iconSize,
            "type": loadingType
          }, null);
        }
      };
      const renderMessage = () => {
        const {
          type,
          message
        } = props;
        if (slots.message) {
          return vue.createVNode("div", {
            "class": bem("text")
          }, [slots.message()]);
        }
        if (isDef(message) && message !== "") {
          return type === "html" ? vue.createVNode("div", {
            "key": 0,
            "class": bem("text"),
            "innerHTML": String(message)
          }, null) : vue.createVNode("div", {
            "class": bem("text")
          }, [message]);
        }
      };
      vue.watch(() => [props.show, props.forbidClick], toggleClickable);
      vue.watch(() => [props.show, props.type, props.message, props.duration], () => {
        clearTimer();
        if (props.show && props.duration > 0) {
          timer = setTimeout(() => {
            updateShow(false);
          }, props.duration);
        }
      });
      vue.onMounted(toggleClickable);
      vue.onUnmounted(toggleClickable);
      return () => vue.createVNode(Popup, vue.mergeProps({
        "class": [bem([props.position, props.wordBreak === "normal" ? "break-normal" : props.wordBreak, {
          [props.type]: !props.icon
        }]), props.className],
        "lockScroll": false,
        "onClick": onClick,
        "onClosed": clearTimer,
        "onUpdate:show": updateShow
      }, pick(props, popupInheritProps)), {
        default: () => [renderIcon(), renderMessage()]
      });
    }
  });
  function usePopupState() {
    const state = vue.reactive({
      show: false
    });
    const toggle = (show) => {
      state.show = show;
    };
    const open = (props) => {
      extend(state, props, { transitionAppear: true });
      toggle(true);
    };
    const close = () => toggle(false);
    useExpose({ open, close, toggle });
    return {
      open,
      close,
      state,
      toggle
    };
  }
  function mountComponent(RootComponent) {
    const app = vue.createApp(RootComponent);
    const root = document.createElement("div");
    document.body.appendChild(root);
    return {
      instance: app.mount(root),
      unmount() {
        app.unmount();
        document.body.removeChild(root);
      }
    };
  }
  const defaultOptions = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: false,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: false,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: false,
    closeOnClickOverlay: false
  };
  let queue = [];
  let allowMultiple = false;
  let currentOptions = extend({}, defaultOptions);
  const defaultOptionsMap = /* @__PURE__ */ new Map();
  function parseOptions(message) {
    if (isObject(message)) {
      return message;
    }
    return {
      message
    };
  }
  function createInstance() {
    const {
      instance,
      unmount
    } = mountComponent({
      setup() {
        const message = vue.ref("");
        const {
          open,
          state,
          close,
          toggle
        } = usePopupState();
        const onClosed = () => {
        };
        const render = () => {
          const attrs = {
            onClosed,
            "onUpdate:show": toggle
          };
          return vue.createVNode(stdin_default, vue.mergeProps(state, attrs), null);
        };
        vue.watch(message, (val) => {
          state.message = val;
        });
        vue.getCurrentInstance().render = render;
        return {
          open,
          close,
          message
        };
      }
    });
    return instance;
  }
  function getInstance() {
    if (!queue.length || allowMultiple) {
      const instance = createInstance();
      queue.push(instance);
    }
    return queue[queue.length - 1];
  }
  function showToast(options = {}) {
    if (!inBrowser$1) {
      return {};
    }
    const toast = getInstance();
    const parsedOptions = parseOptions(options);
    toast.open(extend({}, currentOptions, defaultOptionsMap.get(parsedOptions.type || currentOptions.type), parsedOptions));
    return toast;
  }
  withInstall(stdin_default);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function getAugmentedNamespace(n2) {
    if (n2.__esModule)
      return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
      var a2 = function a3() {
        if (this instanceof a3) {
          return Reflect.construct(f2, arguments, this.constructor);
        }
        return f2.apply(this, arguments);
      };
      a2.prototype = f2.prototype;
    } else
      a2 = {};
    Object.defineProperty(a2, "__esModule", { value: true });
    Object.keys(n2).forEach(function(k) {
      var d2 = Object.getOwnPropertyDescriptor(n2, k);
      Object.defineProperty(a2, k, d2.get ? d2 : {
        enumerable: true,
        get: function() {
          return n2[k];
        }
      });
    });
    return a2;
  }
  var cryptoJs = { exports: {} };
  var lookup = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    62,
    0,
    62,
    0,
    63,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    0,
    0,
    0,
    0,
    63,
    0,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51
  ];
  function base64Decode(source, target) {
    var sourceLength = source.length;
    var paddingLength = source[sourceLength - 2] === "=" ? 2 : source[sourceLength - 1] === "=" ? 1 : 0;
    var tmp;
    var byteIndex = 0;
    var baseLength = sourceLength - paddingLength & 4294967292;
    for (var i2 = 0; i2 < baseLength; i2 += 4) {
      tmp = lookup[source.charCodeAt(i2)] << 18 | lookup[source.charCodeAt(i2 + 1)] << 12 | lookup[source.charCodeAt(i2 + 2)] << 6 | lookup[source.charCodeAt(i2 + 3)];
      target[byteIndex++] = tmp >> 16 & 255;
      target[byteIndex++] = tmp >> 8 & 255;
      target[byteIndex++] = tmp & 255;
    }
    if (paddingLength === 1) {
      tmp = lookup[source.charCodeAt(i2)] << 10 | lookup[source.charCodeAt(i2 + 1)] << 4 | lookup[source.charCodeAt(i2 + 2)] >> 2;
      target[byteIndex++] = tmp >> 8 & 255;
      target[byteIndex++] = tmp & 255;
    }
    if (paddingLength === 2) {
      tmp = lookup[source.charCodeAt(i2)] << 2 | lookup[source.charCodeAt(i2 + 1)] >> 4;
      target[byteIndex++] = tmp & 255;
    }
  }
  const $inject_window_crypto = {
    getRandomValues(arr) {
      if (!(arr instanceof Int8Array || arr instanceof Uint8Array || arr instanceof Int16Array || arr instanceof Uint16Array || arr instanceof Int32Array || arr instanceof Uint32Array || arr instanceof Uint8ClampedArray)) {
        throw new Error("Expected an integer array");
      }
      if (arr.byteLength > 65536) {
        throw new Error("Can only request a maximum of 65536 bytes");
      }
      var crypto = requireNativePlugin("DCloud-Crypto");
      base64Decode(crypto.getRandomValues(arr.byteLength), new Uint8Array(
        arr.buffer,
        arr.byteOffset,
        arr.byteLength
      ));
      return arr;
    }
  };
  function commonjsRequire(path) {
    throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var core = { exports: {} };
  const __viteBrowserExternal = new Proxy({}, {
    get(_2, key) {
      throw new Error(`Module "" has been externalized for browser compatibility. Cannot access ".${key}" in client code.  See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
    }
  });
  const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
  var hasRequiredCore;
  function requireCore() {
    if (hasRequiredCore)
      return core.exports;
    hasRequiredCore = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory();
        }
      })(commonjsGlobal, function() {
        var CryptoJS2 = CryptoJS2 || function(Math2, undefined$1) {
          var crypto;
          if (typeof window !== "undefined" && $inject_window_crypto) {
            crypto = $inject_window_crypto;
          }
          if (typeof self !== "undefined" && self.crypto) {
            crypto = self.crypto;
          }
          if (typeof globalThis !== "undefined" && globalThis.crypto) {
            crypto = globalThis.crypto;
          }
          if (!crypto && typeof window !== "undefined" && window.msCrypto) {
            crypto = window.msCrypto;
          }
          if (!crypto && typeof commonjsGlobal !== "undefined" && commonjsGlobal.crypto) {
            crypto = commonjsGlobal.crypto;
          }
          if (!crypto && typeof commonjsRequire === "function") {
            try {
              crypto = require$$0;
            } catch (err) {
            }
          }
          var cryptoSecureRandomInt = function() {
            if (crypto) {
              if (typeof crypto.getRandomValues === "function") {
                try {
                  return crypto.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {
                }
              }
              if (typeof crypto.randomBytes === "function") {
                try {
                  return crypto.randomBytes(4).readInt32LE();
                } catch (err) {
                }
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          };
          var create = Object.create || /* @__PURE__ */ function() {
            function F2() {
            }
            return function(obj) {
              var subtype;
              F2.prototype = obj;
              subtype = new F2();
              F2.prototype = null;
              return subtype;
            };
          }();
          var C2 = {};
          var C_lib = C2.lib = {};
          var Base = C_lib.Base = /* @__PURE__ */ function() {
            return {
              /**
               * Creates a new object that inherits from this object.
               *
               * @param {Object} overrides Properties to copy into the new object.
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         field: 'value',
               *
               *         method: function () {
               *         }
               *     });
               */
              extend: function(overrides) {
                var subtype = create(this);
                if (overrides) {
                  subtype.mixIn(overrides);
                }
                if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                  subtype.init = function() {
                    subtype.$super.init.apply(this, arguments);
                  };
                }
                subtype.init.prototype = subtype;
                subtype.$super = this;
                return subtype;
              },
              /**
               * Extends this object and runs the init method.
               * Arguments to create() will be passed to init().
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var instance = MyType.create();
               */
              create: function() {
                var instance = this.extend();
                instance.init.apply(instance, arguments);
                return instance;
              },
              /**
               * Initializes a newly created object.
               * Override this method to add some logic when your objects are created.
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         init: function () {
               *             // ...
               *         }
               *     });
               */
              init: function() {
              },
              /**
               * Copies properties into this object.
               *
               * @param {Object} properties The properties to mix in.
               *
               * @example
               *
               *     MyType.mixIn({
               *         field: 'value'
               *     });
               */
              mixIn: function(properties) {
                for (var propertyName in properties) {
                  if (properties.hasOwnProperty(propertyName)) {
                    this[propertyName] = properties[propertyName];
                  }
                }
                if (properties.hasOwnProperty("toString")) {
                  this.toString = properties.toString;
                }
              },
              /**
               * Creates a copy of this object.
               *
               * @return {Object} The clone.
               *
               * @example
               *
               *     var clone = instance.clone();
               */
              clone: function() {
                return this.init.prototype.extend(this);
              }
            };
          }();
          var WordArray = C_lib.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of 32-bit words.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.create();
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
             */
            init: function(words, sigBytes) {
              words = this.words = words || [];
              if (sigBytes != undefined$1) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 4;
              }
            },
            /**
             * Converts this word array to a string.
             *
             * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
             *
             * @return {string} The stringified word array.
             *
             * @example
             *
             *     var string = wordArray + '';
             *     var string = wordArray.toString();
             *     var string = wordArray.toString(CryptoJS.enc.Utf8);
             */
            toString: function(encoder) {
              return (encoder || Hex).stringify(this);
            },
            /**
             * Concatenates a word array to this word array.
             *
             * @param {WordArray} wordArray The word array to append.
             *
             * @return {WordArray} This word array.
             *
             * @example
             *
             *     wordArray1.concat(wordArray2);
             */
            concat: function(wordArray) {
              var thisWords = this.words;
              var thatWords = wordArray.words;
              var thisSigBytes = this.sigBytes;
              var thatSigBytes = wordArray.sigBytes;
              this.clamp();
              if (thisSigBytes % 4) {
                for (var i2 = 0; i2 < thatSigBytes; i2++) {
                  var thatByte = thatWords[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                  thisWords[thisSigBytes + i2 >>> 2] |= thatByte << 24 - (thisSigBytes + i2) % 4 * 8;
                }
              } else {
                for (var j2 = 0; j2 < thatSigBytes; j2 += 4) {
                  thisWords[thisSigBytes + j2 >>> 2] = thatWords[j2 >>> 2];
                }
              }
              this.sigBytes += thatSigBytes;
              return this;
            },
            /**
             * Removes insignificant bits.
             *
             * @example
             *
             *     wordArray.clamp();
             */
            clamp: function() {
              var words = this.words;
              var sigBytes = this.sigBytes;
              words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
              words.length = Math2.ceil(sigBytes / 4);
            },
            /**
             * Creates a copy of this word array.
             *
             * @return {WordArray} The clone.
             *
             * @example
             *
             *     var clone = wordArray.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              clone.words = this.words.slice(0);
              return clone;
            },
            /**
             * Creates a word array filled with random bytes.
             *
             * @param {number} nBytes The number of random bytes to generate.
             *
             * @return {WordArray} The random word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.random(16);
             */
            random: function(nBytes) {
              var words = [];
              for (var i2 = 0; i2 < nBytes; i2 += 4) {
                words.push(cryptoSecureRandomInt());
              }
              return new WordArray.init(words, nBytes);
            }
          });
          var C_enc = C2.enc = {};
          var Hex = C_enc.Hex = {
            /**
             * Converts a word array to a hex string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The hex string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var hexChars = [];
              for (var i2 = 0; i2 < sigBytes; i2++) {
                var bite = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 15).toString(16));
              }
              return hexChars.join("");
            },
            /**
             * Converts a hex string to a word array.
             *
             * @param {string} hexStr The hex string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
             */
            parse: function(hexStr) {
              var hexStrLength = hexStr.length;
              var words = [];
              for (var i2 = 0; i2 < hexStrLength; i2 += 2) {
                words[i2 >>> 3] |= parseInt(hexStr.substr(i2, 2), 16) << 24 - i2 % 8 * 4;
              }
              return new WordArray.init(words, hexStrLength / 2);
            }
          };
          var Latin1 = C_enc.Latin1 = {
            /**
             * Converts a word array to a Latin1 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Latin1 string.
             *
             * @static
             *
             * @example
             *
             *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var latin1Chars = [];
              for (var i2 = 0; i2 < sigBytes; i2++) {
                var bite = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                latin1Chars.push(String.fromCharCode(bite));
              }
              return latin1Chars.join("");
            },
            /**
             * Converts a Latin1 string to a word array.
             *
             * @param {string} latin1Str The Latin1 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
             */
            parse: function(latin1Str) {
              var latin1StrLength = latin1Str.length;
              var words = [];
              for (var i2 = 0; i2 < latin1StrLength; i2++) {
                words[i2 >>> 2] |= (latin1Str.charCodeAt(i2) & 255) << 24 - i2 % 4 * 8;
              }
              return new WordArray.init(words, latin1StrLength);
            }
          };
          var Utf8 = C_enc.Utf8 = {
            /**
             * Converts a word array to a UTF-8 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-8 string.
             *
             * @static
             *
             * @example
             *
             *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
             */
            stringify: function(wordArray) {
              try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
              } catch (e2) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            /**
             * Converts a UTF-8 string to a word array.
             *
             * @param {string} utf8Str The UTF-8 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
             */
            parse: function(utf8Str) {
              return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
          };
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            /**
             * Resets this block algorithm's data buffer to its initial state.
             *
             * @example
             *
             *     bufferedBlockAlgorithm.reset();
             */
            reset: function() {
              this._data = new WordArray.init();
              this._nDataBytes = 0;
            },
            /**
             * Adds new data to this block algorithm's buffer.
             *
             * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
             *
             * @example
             *
             *     bufferedBlockAlgorithm._append('data');
             *     bufferedBlockAlgorithm._append(wordArray);
             */
            _append: function(data) {
              if (typeof data == "string") {
                data = Utf8.parse(data);
              }
              this._data.concat(data);
              this._nDataBytes += data.sigBytes;
            },
            /**
             * Processes available data blocks.
             *
             * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
             *
             * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
             *
             * @return {WordArray} The processed data.
             *
             * @example
             *
             *     var processedData = bufferedBlockAlgorithm._process();
             *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
             */
            _process: function(doFlush) {
              var processedWords;
              var data = this._data;
              var dataWords = data.words;
              var dataSigBytes = data.sigBytes;
              var blockSize = this.blockSize;
              var blockSizeBytes = blockSize * 4;
              var nBlocksReady = dataSigBytes / blockSizeBytes;
              if (doFlush) {
                nBlocksReady = Math2.ceil(nBlocksReady);
              } else {
                nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
              }
              var nWordsReady = nBlocksReady * blockSize;
              var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
              if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                  this._doProcessBlock(dataWords, offset);
                }
                processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
              }
              return new WordArray.init(processedWords, nBytesReady);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = bufferedBlockAlgorithm.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              clone._data = this._data.clone();
              return clone;
            },
            _minBufferSize: 0
          });
          C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
             * Configuration options.
             */
            cfg: Base.extend(),
            /**
             * Initializes a newly created hasher.
             *
             * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
             *
             * @example
             *
             *     var hasher = CryptoJS.algo.SHA256.create();
             */
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
              this.reset();
            },
            /**
             * Resets this hasher to its initial state.
             *
             * @example
             *
             *     hasher.reset();
             */
            reset: function() {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            /**
             * Updates this hasher with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {Hasher} This hasher.
             *
             * @example
             *
             *     hasher.update('message');
             *     hasher.update(wordArray);
             */
            update: function(messageUpdate) {
              this._append(messageUpdate);
              this._process();
              return this;
            },
            /**
             * Finalizes the hash computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The hash.
             *
             * @example
             *
             *     var hash = hasher.finalize();
             *     var hash = hasher.finalize('message');
             *     var hash = hasher.finalize(wordArray);
             */
            finalize: function(messageUpdate) {
              if (messageUpdate) {
                this._append(messageUpdate);
              }
              var hash = this._doFinalize();
              return hash;
            },
            blockSize: 512 / 32,
            /**
             * Creates a shortcut function to a hasher's object interface.
             *
             * @param {Hasher} hasher The hasher to create a helper for.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
             */
            _createHelper: function(hasher) {
              return function(message, cfg) {
                return new hasher.init(cfg).finalize(message);
              };
            },
            /**
             * Creates a shortcut function to the HMAC's object interface.
             *
             * @param {Hasher} hasher The hasher to use in this HMAC helper.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
             */
            _createHmacHelper: function(hasher) {
              return function(message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
              };
            }
          });
          var C_algo = C2.algo = {};
          return C2;
        }(Math);
        return CryptoJS2;
      });
    })(core);
    return core.exports;
  }
  var x64Core = { exports: {} };
  var hasRequiredX64Core;
  function requireX64Core() {
    if (hasRequiredX64Core)
      return x64Core.exports;
    hasRequiredX64Core = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function(undefined$1) {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var Base = C_lib.Base;
          var X32WordArray = C_lib.WordArray;
          var C_x64 = C2.x64 = {};
          C_x64.Word = Base.extend({
            /**
             * Initializes a newly created 64-bit word.
             *
             * @param {number} high The high 32 bits.
             * @param {number} low The low 32 bits.
             *
             * @example
             *
             *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
             */
            init: function(high, low) {
              this.high = high;
              this.low = low;
            }
            /**
             * Bitwise NOTs this word.
             *
             * @return {X64Word} A new x64-Word object after negating.
             *
             * @example
             *
             *     var negated = x64Word.not();
             */
            // not: function () {
            // var high = ~this.high;
            // var low = ~this.low;
            // return X64Word.create(high, low);
            // },
            /**
             * Bitwise ANDs this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to AND with this word.
             *
             * @return {X64Word} A new x64-Word object after ANDing.
             *
             * @example
             *
             *     var anded = x64Word.and(anotherX64Word);
             */
            // and: function (word) {
            // var high = this.high & word.high;
            // var low = this.low & word.low;
            // return X64Word.create(high, low);
            // },
            /**
             * Bitwise ORs this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to OR with this word.
             *
             * @return {X64Word} A new x64-Word object after ORing.
             *
             * @example
             *
             *     var ored = x64Word.or(anotherX64Word);
             */
            // or: function (word) {
            // var high = this.high | word.high;
            // var low = this.low | word.low;
            // return X64Word.create(high, low);
            // },
            /**
             * Bitwise XORs this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to XOR with this word.
             *
             * @return {X64Word} A new x64-Word object after XORing.
             *
             * @example
             *
             *     var xored = x64Word.xor(anotherX64Word);
             */
            // xor: function (word) {
            // var high = this.high ^ word.high;
            // var low = this.low ^ word.low;
            // return X64Word.create(high, low);
            // },
            /**
             * Shifts this word n bits to the left.
             *
             * @param {number} n The number of bits to shift.
             *
             * @return {X64Word} A new x64-Word object after shifting.
             *
             * @example
             *
             *     var shifted = x64Word.shiftL(25);
             */
            // shiftL: function (n) {
            // if (n < 32) {
            // var high = (this.high << n) | (this.low >>> (32 - n));
            // var low = this.low << n;
            // } else {
            // var high = this.low << (n - 32);
            // var low = 0;
            // }
            // return X64Word.create(high, low);
            // },
            /**
             * Shifts this word n bits to the right.
             *
             * @param {number} n The number of bits to shift.
             *
             * @return {X64Word} A new x64-Word object after shifting.
             *
             * @example
             *
             *     var shifted = x64Word.shiftR(7);
             */
            // shiftR: function (n) {
            // if (n < 32) {
            // var low = (this.low >>> n) | (this.high << (32 - n));
            // var high = this.high >>> n;
            // } else {
            // var low = this.high >>> (n - 32);
            // var high = 0;
            // }
            // return X64Word.create(high, low);
            // },
            /**
             * Rotates this word n bits to the left.
             *
             * @param {number} n The number of bits to rotate.
             *
             * @return {X64Word} A new x64-Word object after rotating.
             *
             * @example
             *
             *     var rotated = x64Word.rotL(25);
             */
            // rotL: function (n) {
            // return this.shiftL(n).or(this.shiftR(64 - n));
            // },
            /**
             * Rotates this word n bits to the right.
             *
             * @param {number} n The number of bits to rotate.
             *
             * @return {X64Word} A new x64-Word object after rotating.
             *
             * @example
             *
             *     var rotated = x64Word.rotR(7);
             */
            // rotR: function (n) {
            // return this.shiftR(n).or(this.shiftL(64 - n));
            // },
            /**
             * Adds this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to add with this word.
             *
             * @return {X64Word} A new x64-Word object after adding.
             *
             * @example
             *
             *     var added = x64Word.add(anotherX64Word);
             */
            // add: function (word) {
            // var low = (this.low + word.low) | 0;
            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
            // var high = (this.high + word.high + carry) | 0;
            // return X64Word.create(high, low);
            // }
          });
          C_x64.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.x64.WordArray.create();
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ]);
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ], 10);
             */
            init: function(words, sigBytes) {
              words = this.words = words || [];
              if (sigBytes != undefined$1) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 8;
              }
            },
            /**
             * Converts this 64-bit word array to a 32-bit word array.
             *
             * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
             *
             * @example
             *
             *     var x32WordArray = x64WordArray.toX32();
             */
            toX32: function() {
              var x64Words = this.words;
              var x64WordsLength = x64Words.length;
              var x32Words = [];
              for (var i2 = 0; i2 < x64WordsLength; i2++) {
                var x64Word = x64Words[i2];
                x32Words.push(x64Word.high);
                x32Words.push(x64Word.low);
              }
              return X32WordArray.create(x32Words, this.sigBytes);
            },
            /**
             * Creates a copy of this word array.
             *
             * @return {X64WordArray} The clone.
             *
             * @example
             *
             *     var clone = x64WordArray.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              var words = clone.words = this.words.slice(0);
              var wordsLength = words.length;
              for (var i2 = 0; i2 < wordsLength; i2++) {
                words[i2] = words[i2].clone();
              }
              return clone;
            }
          });
        })();
        return CryptoJS2;
      });
    })(x64Core);
    return x64Core.exports;
  }
  var libTypedarrays = { exports: {} };
  var hasRequiredLibTypedarrays;
  function requireLibTypedarrays() {
    if (hasRequiredLibTypedarrays)
      return libTypedarrays.exports;
    hasRequiredLibTypedarrays = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          if (typeof ArrayBuffer != "function") {
            return;
          }
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var superInit = WordArray.init;
          var subInit = WordArray.init = function(typedArray) {
            if (typedArray instanceof ArrayBuffer) {
              typedArray = new Uint8Array(typedArray);
            }
            if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
              typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
            }
            if (typedArray instanceof Uint8Array) {
              var typedArrayByteLength = typedArray.byteLength;
              var words = [];
              for (var i2 = 0; i2 < typedArrayByteLength; i2++) {
                words[i2 >>> 2] |= typedArray[i2] << 24 - i2 % 4 * 8;
              }
              superInit.call(this, words, typedArrayByteLength);
            } else {
              superInit.apply(this, arguments);
            }
          };
          subInit.prototype = WordArray;
        })();
        return CryptoJS2.lib.WordArray;
      });
    })(libTypedarrays);
    return libTypedarrays.exports;
  }
  var encUtf16 = { exports: {} };
  var hasRequiredEncUtf16;
  function requireEncUtf16() {
    if (hasRequiredEncUtf16)
      return encUtf16.exports;
    hasRequiredEncUtf16 = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C2.enc;
          C_enc.Utf16 = C_enc.Utf16BE = {
            /**
             * Converts a word array to a UTF-16 BE string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-16 BE string.
             *
             * @static
             *
             * @example
             *
             *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var utf16Chars = [];
              for (var i2 = 0; i2 < sigBytes; i2 += 2) {
                var codePoint = words[i2 >>> 2] >>> 16 - i2 % 4 * 8 & 65535;
                utf16Chars.push(String.fromCharCode(codePoint));
              }
              return utf16Chars.join("");
            },
            /**
             * Converts a UTF-16 BE string to a word array.
             *
             * @param {string} utf16Str The UTF-16 BE string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
             */
            parse: function(utf16Str) {
              var utf16StrLength = utf16Str.length;
              var words = [];
              for (var i2 = 0; i2 < utf16StrLength; i2++) {
                words[i2 >>> 1] |= utf16Str.charCodeAt(i2) << 16 - i2 % 2 * 16;
              }
              return WordArray.create(words, utf16StrLength * 2);
            }
          };
          C_enc.Utf16LE = {
            /**
             * Converts a word array to a UTF-16 LE string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-16 LE string.
             *
             * @static
             *
             * @example
             *
             *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var utf16Chars = [];
              for (var i2 = 0; i2 < sigBytes; i2 += 2) {
                var codePoint = swapEndian(words[i2 >>> 2] >>> 16 - i2 % 4 * 8 & 65535);
                utf16Chars.push(String.fromCharCode(codePoint));
              }
              return utf16Chars.join("");
            },
            /**
             * Converts a UTF-16 LE string to a word array.
             *
             * @param {string} utf16Str The UTF-16 LE string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
             */
            parse: function(utf16Str) {
              var utf16StrLength = utf16Str.length;
              var words = [];
              for (var i2 = 0; i2 < utf16StrLength; i2++) {
                words[i2 >>> 1] |= swapEndian(utf16Str.charCodeAt(i2) << 16 - i2 % 2 * 16);
              }
              return WordArray.create(words, utf16StrLength * 2);
            }
          };
          function swapEndian(word) {
            return word << 8 & 4278255360 | word >>> 8 & 16711935;
          }
        })();
        return CryptoJS2.enc.Utf16;
      });
    })(encUtf16);
    return encUtf16.exports;
  }
  var encBase64 = { exports: {} };
  var hasRequiredEncBase64;
  function requireEncBase64() {
    if (hasRequiredEncBase64)
      return encBase64.exports;
    hasRequiredEncBase64 = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C2.enc;
          C_enc.Base64 = {
            /**
             * Converts a word array to a Base64 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Base64 string.
             *
             * @static
             *
             * @example
             *
             *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = this._map;
              wordArray.clamp();
              var base64Chars = [];
              for (var i2 = 0; i2 < sigBytes; i2 += 3) {
                var byte1 = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                var byte2 = words[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255;
                var byte3 = words[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255;
                var triplet = byte1 << 16 | byte2 << 8 | byte3;
                for (var j2 = 0; j2 < 4 && i2 + j2 * 0.75 < sigBytes; j2++) {
                  base64Chars.push(map.charAt(triplet >>> 6 * (3 - j2) & 63));
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                while (base64Chars.length % 4) {
                  base64Chars.push(paddingChar);
                }
              }
              return base64Chars.join("");
            },
            /**
             * Converts a Base64 string to a word array.
             *
             * @param {string} base64Str The Base64 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
             */
            parse: function(base64Str) {
              var base64StrLength = base64Str.length;
              var map = this._map;
              var reverseMap = this._reverseMap;
              if (!reverseMap) {
                reverseMap = this._reverseMap = [];
                for (var j2 = 0; j2 < map.length; j2++) {
                  reverseMap[map.charCodeAt(j2)] = j2;
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex !== -1) {
                  base64StrLength = paddingIndex;
                }
              }
              return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          };
          function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;
            for (var i2 = 0; i2 < base64StrLength; i2++) {
              if (i2 % 4) {
                var bits1 = reverseMap[base64Str.charCodeAt(i2 - 1)] << i2 % 4 * 2;
                var bits2 = reverseMap[base64Str.charCodeAt(i2)] >>> 6 - i2 % 4 * 2;
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                nBytes++;
              }
            }
            return WordArray.create(words, nBytes);
          }
        })();
        return CryptoJS2.enc.Base64;
      });
    })(encBase64);
    return encBase64.exports;
  }
  var encBase64url = { exports: {} };
  var hasRequiredEncBase64url;
  function requireEncBase64url() {
    if (hasRequiredEncBase64url)
      return encBase64url.exports;
    hasRequiredEncBase64url = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C2.enc;
          C_enc.Base64url = {
            /**
             * Converts a word array to a Base64url string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @param {boolean} urlSafe Whether to use url safe
             *
             * @return {string} The Base64url string.
             *
             * @static
             *
             * @example
             *
             *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
             */
            stringify: function(wordArray, urlSafe) {
              if (urlSafe === void 0) {
                urlSafe = true;
              }
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = urlSafe ? this._safe_map : this._map;
              wordArray.clamp();
              var base64Chars = [];
              for (var i2 = 0; i2 < sigBytes; i2 += 3) {
                var byte1 = words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
                var byte2 = words[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255;
                var byte3 = words[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255;
                var triplet = byte1 << 16 | byte2 << 8 | byte3;
                for (var j2 = 0; j2 < 4 && i2 + j2 * 0.75 < sigBytes; j2++) {
                  base64Chars.push(map.charAt(triplet >>> 6 * (3 - j2) & 63));
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                while (base64Chars.length % 4) {
                  base64Chars.push(paddingChar);
                }
              }
              return base64Chars.join("");
            },
            /**
             * Converts a Base64url string to a word array.
             *
             * @param {string} base64Str The Base64url string.
             *
             * @param {boolean} urlSafe Whether to use url safe
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
             */
            parse: function(base64Str, urlSafe) {
              if (urlSafe === void 0) {
                urlSafe = true;
              }
              var base64StrLength = base64Str.length;
              var map = urlSafe ? this._safe_map : this._map;
              var reverseMap = this._reverseMap;
              if (!reverseMap) {
                reverseMap = this._reverseMap = [];
                for (var j2 = 0; j2 < map.length; j2++) {
                  reverseMap[map.charCodeAt(j2)] = j2;
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex !== -1) {
                  base64StrLength = paddingIndex;
                }
              }
              return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
          };
          function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;
            for (var i2 = 0; i2 < base64StrLength; i2++) {
              if (i2 % 4) {
                var bits1 = reverseMap[base64Str.charCodeAt(i2 - 1)] << i2 % 4 * 2;
                var bits2 = reverseMap[base64Str.charCodeAt(i2)] >>> 6 - i2 % 4 * 2;
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                nBytes++;
              }
            }
            return WordArray.create(words, nBytes);
          }
        })();
        return CryptoJS2.enc.Base64url;
      });
    })(encBase64url);
    return encBase64url.exports;
  }
  var md5 = { exports: {} };
  var hasRequiredMd5;
  function requireMd5() {
    if (hasRequiredMd5)
      return md5.exports;
    hasRequiredMd5 = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function(Math2) {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C2.algo;
          var T2 = [];
          (function() {
            for (var i2 = 0; i2 < 64; i2++) {
              T2[i2] = Math2.abs(Math2.sin(i2 + 1)) * 4294967296 | 0;
            }
          })();
          var MD5 = C_algo.MD5 = Hasher.extend({
            _doReset: function() {
              this._hash = new WordArray.init([
                1732584193,
                4023233417,
                2562383102,
                271733878
              ]);
            },
            _doProcessBlock: function(M2, offset) {
              for (var i2 = 0; i2 < 16; i2++) {
                var offset_i = offset + i2;
                var M_offset_i = M2[offset_i];
                M2[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
              }
              var H2 = this._hash.words;
              var M_offset_0 = M2[offset + 0];
              var M_offset_1 = M2[offset + 1];
              var M_offset_2 = M2[offset + 2];
              var M_offset_3 = M2[offset + 3];
              var M_offset_4 = M2[offset + 4];
              var M_offset_5 = M2[offset + 5];
              var M_offset_6 = M2[offset + 6];
              var M_offset_7 = M2[offset + 7];
              var M_offset_8 = M2[offset + 8];
              var M_offset_9 = M2[offset + 9];
              var M_offset_10 = M2[offset + 10];
              var M_offset_11 = M2[offset + 11];
              var M_offset_12 = M2[offset + 12];
              var M_offset_13 = M2[offset + 13];
              var M_offset_14 = M2[offset + 14];
              var M_offset_15 = M2[offset + 15];
              var a2 = H2[0];
              var b2 = H2[1];
              var c2 = H2[2];
              var d2 = H2[3];
              a2 = FF(a2, b2, c2, d2, M_offset_0, 7, T2[0]);
              d2 = FF(d2, a2, b2, c2, M_offset_1, 12, T2[1]);
              c2 = FF(c2, d2, a2, b2, M_offset_2, 17, T2[2]);
              b2 = FF(b2, c2, d2, a2, M_offset_3, 22, T2[3]);
              a2 = FF(a2, b2, c2, d2, M_offset_4, 7, T2[4]);
              d2 = FF(d2, a2, b2, c2, M_offset_5, 12, T2[5]);
              c2 = FF(c2, d2, a2, b2, M_offset_6, 17, T2[6]);
              b2 = FF(b2, c2, d2, a2, M_offset_7, 22, T2[7]);
              a2 = FF(a2, b2, c2, d2, M_offset_8, 7, T2[8]);
              d2 = FF(d2, a2, b2, c2, M_offset_9, 12, T2[9]);
              c2 = FF(c2, d2, a2, b2, M_offset_10, 17, T2[10]);
              b2 = FF(b2, c2, d2, a2, M_offset_11, 22, T2[11]);
              a2 = FF(a2, b2, c2, d2, M_offset_12, 7, T2[12]);
              d2 = FF(d2, a2, b2, c2, M_offset_13, 12, T2[13]);
              c2 = FF(c2, d2, a2, b2, M_offset_14, 17, T2[14]);
              b2 = FF(b2, c2, d2, a2, M_offset_15, 22, T2[15]);
              a2 = GG(a2, b2, c2, d2, M_offset_1, 5, T2[16]);
              d2 = GG(d2, a2, b2, c2, M_offset_6, 9, T2[17]);
              c2 = GG(c2, d2, a2, b2, M_offset_11, 14, T2[18]);
              b2 = GG(b2, c2, d2, a2, M_offset_0, 20, T2[19]);
              a2 = GG(a2, b2, c2, d2, M_offset_5, 5, T2[20]);
              d2 = GG(d2, a2, b2, c2, M_offset_10, 9, T2[21]);
              c2 = GG(c2, d2, a2, b2, M_offset_15, 14, T2[22]);
              b2 = GG(b2, c2, d2, a2, M_offset_4, 20, T2[23]);
              a2 = GG(a2, b2, c2, d2, M_offset_9, 5, T2[24]);
              d2 = GG(d2, a2, b2, c2, M_offset_14, 9, T2[25]);
              c2 = GG(c2, d2, a2, b2, M_offset_3, 14, T2[26]);
              b2 = GG(b2, c2, d2, a2, M_offset_8, 20, T2[27]);
              a2 = GG(a2, b2, c2, d2, M_offset_13, 5, T2[28]);
              d2 = GG(d2, a2, b2, c2, M_offset_2, 9, T2[29]);
              c2 = GG(c2, d2, a2, b2, M_offset_7, 14, T2[30]);
              b2 = GG(b2, c2, d2, a2, M_offset_12, 20, T2[31]);
              a2 = HH(a2, b2, c2, d2, M_offset_5, 4, T2[32]);
              d2 = HH(d2, a2, b2, c2, M_offset_8, 11, T2[33]);
              c2 = HH(c2, d2, a2, b2, M_offset_11, 16, T2[34]);
              b2 = HH(b2, c2, d2, a2, M_offset_14, 23, T2[35]);
              a2 = HH(a2, b2, c2, d2, M_offset_1, 4, T2[36]);
              d2 = HH(d2, a2, b2, c2, M_offset_4, 11, T2[37]);
              c2 = HH(c2, d2, a2, b2, M_offset_7, 16, T2[38]);
              b2 = HH(b2, c2, d2, a2, M_offset_10, 23, T2[39]);
              a2 = HH(a2, b2, c2, d2, M_offset_13, 4, T2[40]);
              d2 = HH(d2, a2, b2, c2, M_offset_0, 11, T2[41]);
              c2 = HH(c2, d2, a2, b2, M_offset_3, 16, T2[42]);
              b2 = HH(b2, c2, d2, a2, M_offset_6, 23, T2[43]);
              a2 = HH(a2, b2, c2, d2, M_offset_9, 4, T2[44]);
              d2 = HH(d2, a2, b2, c2, M_offset_12, 11, T2[45]);
              c2 = HH(c2, d2, a2, b2, M_offset_15, 16, T2[46]);
              b2 = HH(b2, c2, d2, a2, M_offset_2, 23, T2[47]);
              a2 = II(a2, b2, c2, d2, M_offset_0, 6, T2[48]);
              d2 = II(d2, a2, b2, c2, M_offset_7, 10, T2[49]);
              c2 = II(c2, d2, a2, b2, M_offset_14, 15, T2[50]);
              b2 = II(b2, c2, d2, a2, M_offset_5, 21, T2[51]);
              a2 = II(a2, b2, c2, d2, M_offset_12, 6, T2[52]);
              d2 = II(d2, a2, b2, c2, M_offset_3, 10, T2[53]);
              c2 = II(c2, d2, a2, b2, M_offset_10, 15, T2[54]);
              b2 = II(b2, c2, d2, a2, M_offset_1, 21, T2[55]);
              a2 = II(a2, b2, c2, d2, M_offset_8, 6, T2[56]);
              d2 = II(d2, a2, b2, c2, M_offset_15, 10, T2[57]);
              c2 = II(c2, d2, a2, b2, M_offset_6, 15, T2[58]);
              b2 = II(b2, c2, d2, a2, M_offset_13, 21, T2[59]);
              a2 = II(a2, b2, c2, d2, M_offset_4, 6, T2[60]);
              d2 = II(d2, a2, b2, c2, M_offset_11, 10, T2[61]);
              c2 = II(c2, d2, a2, b2, M_offset_2, 15, T2[62]);
              b2 = II(b2, c2, d2, a2, M_offset_9, 21, T2[63]);
              H2[0] = H2[0] + a2 | 0;
              H2[1] = H2[1] + b2 | 0;
              H2[2] = H2[2] + c2 | 0;
              H2[3] = H2[3] + d2 | 0;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
              var nBitsTotalL = nBitsTotal;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
              data.sigBytes = (dataWords.length + 1) * 4;
              this._process();
              var hash = this._hash;
              var H2 = hash.words;
              for (var i2 = 0; i2 < 4; i2++) {
                var H_i = H2[i2];
                H2[i2] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
              }
              return hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          function FF(a2, b2, c2, d2, x, s2, t2) {
            var n2 = a2 + (b2 & c2 | ~b2 & d2) + x + t2;
            return (n2 << s2 | n2 >>> 32 - s2) + b2;
          }
          function GG(a2, b2, c2, d2, x, s2, t2) {
            var n2 = a2 + (b2 & d2 | c2 & ~d2) + x + t2;
            return (n2 << s2 | n2 >>> 32 - s2) + b2;
          }
          function HH(a2, b2, c2, d2, x, s2, t2) {
            var n2 = a2 + (b2 ^ c2 ^ d2) + x + t2;
            return (n2 << s2 | n2 >>> 32 - s2) + b2;
          }
          function II(a2, b2, c2, d2, x, s2, t2) {
            var n2 = a2 + (c2 ^ (b2 | ~d2)) + x + t2;
            return (n2 << s2 | n2 >>> 32 - s2) + b2;
          }
          C2.MD5 = Hasher._createHelper(MD5);
          C2.HmacMD5 = Hasher._createHmacHelper(MD5);
        })(Math);
        return CryptoJS2.MD5;
      });
    })(md5);
    return md5.exports;
  }
  var sha1 = { exports: {} };
  var hasRequiredSha1;
  function requireSha1() {
    if (hasRequiredSha1)
      return sha1.exports;
    hasRequiredSha1 = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C2.algo;
          var W2 = [];
          var SHA1 = C_algo.SHA1 = Hasher.extend({
            _doReset: function() {
              this._hash = new WordArray.init([
                1732584193,
                4023233417,
                2562383102,
                271733878,
                3285377520
              ]);
            },
            _doProcessBlock: function(M2, offset) {
              var H2 = this._hash.words;
              var a2 = H2[0];
              var b2 = H2[1];
              var c2 = H2[2];
              var d2 = H2[3];
              var e2 = H2[4];
              for (var i2 = 0; i2 < 80; i2++) {
                if (i2 < 16) {
                  W2[i2] = M2[offset + i2] | 0;
                } else {
                  var n2 = W2[i2 - 3] ^ W2[i2 - 8] ^ W2[i2 - 14] ^ W2[i2 - 16];
                  W2[i2] = n2 << 1 | n2 >>> 31;
                }
                var t2 = (a2 << 5 | a2 >>> 27) + e2 + W2[i2];
                if (i2 < 20) {
                  t2 += (b2 & c2 | ~b2 & d2) + 1518500249;
                } else if (i2 < 40) {
                  t2 += (b2 ^ c2 ^ d2) + 1859775393;
                } else if (i2 < 60) {
                  t2 += (b2 & c2 | b2 & d2 | c2 & d2) - 1894007588;
                } else {
                  t2 += (b2 ^ c2 ^ d2) - 899497514;
                }
                e2 = d2;
                d2 = c2;
                c2 = b2 << 30 | b2 >>> 2;
                b2 = a2;
                a2 = t2;
              }
              H2[0] = H2[0] + a2 | 0;
              H2[1] = H2[1] + b2 | 0;
              H2[2] = H2[2] + c2 | 0;
              H2[3] = H2[3] + d2 | 0;
              H2[4] = H2[4] + e2 | 0;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              this._process();
              return this._hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          C2.SHA1 = Hasher._createHelper(SHA1);
          C2.HmacSHA1 = Hasher._createHmacHelper(SHA1);
        })();
        return CryptoJS2.SHA1;
      });
    })(sha1);
    return sha1.exports;
  }
  var sha256 = { exports: {} };
  var hasRequiredSha256;
  function requireSha256() {
    if (hasRequiredSha256)
      return sha256.exports;
    hasRequiredSha256 = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function(Math2) {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C2.algo;
          var H2 = [];
          var K2 = [];
          (function() {
            function isPrime(n3) {
              var sqrtN = Math2.sqrt(n3);
              for (var factor = 2; factor <= sqrtN; factor++) {
                if (!(n3 % factor)) {
                  return false;
                }
              }
              return true;
            }
            function getFractionalBits(n3) {
              return (n3 - (n3 | 0)) * 4294967296 | 0;
            }
            var n2 = 2;
            var nPrime = 0;
            while (nPrime < 64) {
              if (isPrime(n2)) {
                if (nPrime < 8) {
                  H2[nPrime] = getFractionalBits(Math2.pow(n2, 1 / 2));
                }
                K2[nPrime] = getFractionalBits(Math2.pow(n2, 1 / 3));
                nPrime++;
              }
              n2++;
            }
          })();
          var W2 = [];
          var SHA256 = C_algo.SHA256 = Hasher.extend({
            _doReset: function() {
              this._hash = new WordArray.init(H2.slice(0));
            },
            _doProcessBlock: function(M2, offset) {
              var H3 = this._hash.words;
              var a2 = H3[0];
              var b2 = H3[1];
              var c2 = H3[2];
              var d2 = H3[3];
              var e2 = H3[4];
              var f2 = H3[5];
              var g2 = H3[6];
              var h2 = H3[7];
              for (var i2 = 0; i2 < 64; i2++) {
                if (i2 < 16) {
                  W2[i2] = M2[offset + i2] | 0;
                } else {
                  var gamma0x = W2[i2 - 15];
                  var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                  var gamma1x = W2[i2 - 2];
                  var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                  W2[i2] = gamma0 + W2[i2 - 7] + gamma1 + W2[i2 - 16];
                }
                var ch = e2 & f2 ^ ~e2 & g2;
                var maj = a2 & b2 ^ a2 & c2 ^ b2 & c2;
                var sigma0 = (a2 << 30 | a2 >>> 2) ^ (a2 << 19 | a2 >>> 13) ^ (a2 << 10 | a2 >>> 22);
                var sigma1 = (e2 << 26 | e2 >>> 6) ^ (e2 << 21 | e2 >>> 11) ^ (e2 << 7 | e2 >>> 25);
                var t1 = h2 + sigma1 + ch + K2[i2] + W2[i2];
                var t2 = sigma0 + maj;
                h2 = g2;
                g2 = f2;
                f2 = e2;
                e2 = d2 + t1 | 0;
                d2 = c2;
                c2 = b2;
                b2 = a2;
                a2 = t1 + t2 | 0;
              }
              H3[0] = H3[0] + a2 | 0;
              H3[1] = H3[1] + b2 | 0;
              H3[2] = H3[2] + c2 | 0;
              H3[3] = H3[3] + d2 | 0;
              H3[4] = H3[4] + e2 | 0;
              H3[5] = H3[5] + f2 | 0;
              H3[6] = H3[6] + g2 | 0;
              H3[7] = H3[7] + h2 | 0;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              this._process();
              return this._hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          C2.SHA256 = Hasher._createHelper(SHA256);
          C2.HmacSHA256 = Hasher._createHmacHelper(SHA256);
        })(Math);
        return CryptoJS2.SHA256;
      });
    })(sha256);
    return sha256.exports;
  }
  var sha224 = { exports: {} };
  var hasRequiredSha224;
  function requireSha224() {
    if (hasRequiredSha224)
      return sha224.exports;
    hasRequiredSha224 = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireSha256());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var C_algo = C2.algo;
          var SHA256 = C_algo.SHA256;
          var SHA224 = C_algo.SHA224 = SHA256.extend({
            _doReset: function() {
              this._hash = new WordArray.init([
                3238371032,
                914150663,
                812702999,
                4144912697,
                4290775857,
                1750603025,
                1694076839,
                3204075428
              ]);
            },
            _doFinalize: function() {
              var hash = SHA256._doFinalize.call(this);
              hash.sigBytes -= 4;
              return hash;
            }
          });
          C2.SHA224 = SHA256._createHelper(SHA224);
          C2.HmacSHA224 = SHA256._createHmacHelper(SHA224);
        })();
        return CryptoJS2.SHA224;
      });
    })(sha224);
    return sha224.exports;
  }
  var sha512 = { exports: {} };
  var hasRequiredSha512;
  function requireSha512() {
    if (hasRequiredSha512)
      return sha512.exports;
    hasRequiredSha512 = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireX64Core());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var Hasher = C_lib.Hasher;
          var C_x64 = C2.x64;
          var X64Word = C_x64.Word;
          var X64WordArray = C_x64.WordArray;
          var C_algo = C2.algo;
          function X64Word_create() {
            return X64Word.create.apply(X64Word, arguments);
          }
          var K2 = [
            X64Word_create(1116352408, 3609767458),
            X64Word_create(1899447441, 602891725),
            X64Word_create(3049323471, 3964484399),
            X64Word_create(3921009573, 2173295548),
            X64Word_create(961987163, 4081628472),
            X64Word_create(1508970993, 3053834265),
            X64Word_create(2453635748, 2937671579),
            X64Word_create(2870763221, 3664609560),
            X64Word_create(3624381080, 2734883394),
            X64Word_create(310598401, 1164996542),
            X64Word_create(607225278, 1323610764),
            X64Word_create(1426881987, 3590304994),
            X64Word_create(1925078388, 4068182383),
            X64Word_create(2162078206, 991336113),
            X64Word_create(2614888103, 633803317),
            X64Word_create(3248222580, 3479774868),
            X64Word_create(3835390401, 2666613458),
            X64Word_create(4022224774, 944711139),
            X64Word_create(264347078, 2341262773),
            X64Word_create(604807628, 2007800933),
            X64Word_create(770255983, 1495990901),
            X64Word_create(1249150122, 1856431235),
            X64Word_create(1555081692, 3175218132),
            X64Word_create(1996064986, 2198950837),
            X64Word_create(2554220882, 3999719339),
            X64Word_create(2821834349, 766784016),
            X64Word_create(2952996808, 2566594879),
            X64Word_create(3210313671, 3203337956),
            X64Word_create(3336571891, 1034457026),
            X64Word_create(3584528711, 2466948901),
            X64Word_create(113926993, 3758326383),
            X64Word_create(338241895, 168717936),
            X64Word_create(666307205, 1188179964),
            X64Word_create(773529912, 1546045734),
            X64Word_create(1294757372, 1522805485),
            X64Word_create(1396182291, 2643833823),
            X64Word_create(1695183700, 2343527390),
            X64Word_create(1986661051, 1014477480),
            X64Word_create(2177026350, 1206759142),
            X64Word_create(2456956037, 344077627),
            X64Word_create(2730485921, 1290863460),
            X64Word_create(2820302411, 3158454273),
            X64Word_create(3259730800, 3505952657),
            X64Word_create(3345764771, 106217008),
            X64Word_create(3516065817, 3606008344),
            X64Word_create(3600352804, 1432725776),
            X64Word_create(4094571909, 1467031594),
            X64Word_create(275423344, 851169720),
            X64Word_create(430227734, 3100823752),
            X64Word_create(506948616, 1363258195),
            X64Word_create(659060556, 3750685593),
            X64Word_create(883997877, 3785050280),
            X64Word_create(958139571, 3318307427),
            X64Word_create(1322822218, 3812723403),
            X64Word_create(1537002063, 2003034995),
            X64Word_create(1747873779, 3602036899),
            X64Word_create(1955562222, 1575990012),
            X64Word_create(2024104815, 1125592928),
            X64Word_create(2227730452, 2716904306),
            X64Word_create(2361852424, 442776044),
            X64Word_create(2428436474, 593698344),
            X64Word_create(2756734187, 3733110249),
            X64Word_create(3204031479, 2999351573),
            X64Word_create(3329325298, 3815920427),
            X64Word_create(3391569614, 3928383900),
            X64Word_create(3515267271, 566280711),
            X64Word_create(3940187606, 3454069534),
            X64Word_create(4118630271, 4000239992),
            X64Word_create(116418474, 1914138554),
            X64Word_create(174292421, 2731055270),
            X64Word_create(289380356, 3203993006),
            X64Word_create(460393269, 320620315),
            X64Word_create(685471733, 587496836),
            X64Word_create(852142971, 1086792851),
            X64Word_create(1017036298, 365543100),
            X64Word_create(1126000580, 2618297676),
            X64Word_create(1288033470, 3409855158),
            X64Word_create(1501505948, 4234509866),
            X64Word_create(1607167915, 987167468),
            X64Word_create(1816402316, 1246189591)
          ];
          var W2 = [];
          (function() {
            for (var i2 = 0; i2 < 80; i2++) {
              W2[i2] = X64Word_create();
            }
          })();
          var SHA512 = C_algo.SHA512 = Hasher.extend({
            _doReset: function() {
              this._hash = new X64WordArray.init([
                new X64Word.init(1779033703, 4089235720),
                new X64Word.init(3144134277, 2227873595),
                new X64Word.init(1013904242, 4271175723),
                new X64Word.init(2773480762, 1595750129),
                new X64Word.init(1359893119, 2917565137),
                new X64Word.init(2600822924, 725511199),
                new X64Word.init(528734635, 4215389547),
                new X64Word.init(1541459225, 327033209)
              ]);
            },
            _doProcessBlock: function(M2, offset) {
              var H2 = this._hash.words;
              var H0 = H2[0];
              var H1 = H2[1];
              var H22 = H2[2];
              var H3 = H2[3];
              var H4 = H2[4];
              var H5 = H2[5];
              var H6 = H2[6];
              var H7 = H2[7];
              var H0h = H0.high;
              var H0l = H0.low;
              var H1h = H1.high;
              var H1l = H1.low;
              var H2h = H22.high;
              var H2l = H22.low;
              var H3h = H3.high;
              var H3l = H3.low;
              var H4h = H4.high;
              var H4l = H4.low;
              var H5h = H5.high;
              var H5l = H5.low;
              var H6h = H6.high;
              var H6l = H6.low;
              var H7h = H7.high;
              var H7l = H7.low;
              var ah = H0h;
              var al = H0l;
              var bh = H1h;
              var bl = H1l;
              var ch = H2h;
              var cl = H2l;
              var dh = H3h;
              var dl = H3l;
              var eh = H4h;
              var el = H4l;
              var fh = H5h;
              var fl = H5l;
              var gh = H6h;
              var gl = H6l;
              var hh = H7h;
              var hl = H7l;
              for (var i2 = 0; i2 < 80; i2++) {
                var Wil;
                var Wih;
                var Wi = W2[i2];
                if (i2 < 16) {
                  Wih = Wi.high = M2[offset + i2 * 2] | 0;
                  Wil = Wi.low = M2[offset + i2 * 2 + 1] | 0;
                } else {
                  var gamma0x = W2[i2 - 15];
                  var gamma0xh = gamma0x.high;
                  var gamma0xl = gamma0x.low;
                  var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                  var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                  var gamma1x = W2[i2 - 2];
                  var gamma1xh = gamma1x.high;
                  var gamma1xl = gamma1x.low;
                  var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                  var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                  var Wi7 = W2[i2 - 7];
                  var Wi7h = Wi7.high;
                  var Wi7l = Wi7.low;
                  var Wi16 = W2[i2 - 16];
                  var Wi16h = Wi16.high;
                  var Wi16l = Wi16.low;
                  Wil = gamma0l + Wi7l;
                  Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                  Wil = Wil + gamma1l;
                  Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                  Wil = Wil + Wi16l;
                  Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                  Wi.high = Wih;
                  Wi.low = Wil;
                }
                var chh = eh & fh ^ ~eh & gh;
                var chl = el & fl ^ ~el & gl;
                var majh = ah & bh ^ ah & ch ^ bh & ch;
                var majl = al & bl ^ al & cl ^ bl & cl;
                var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
                var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
                var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
                var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
                var Ki = K2[i2];
                var Kih = Ki.high;
                var Kil = Ki.low;
                var t1l = hl + sigma1l;
                var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
                var t1l = t1l + chl;
                var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
                var t1l = t1l + Kil;
                var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
                var t1l = t1l + Wil;
                var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
                var t2l = sigma0l + majl;
                var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
                hh = gh;
                hl = gl;
                gh = fh;
                gl = fl;
                fh = eh;
                fl = el;
                el = dl + t1l | 0;
                eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
                dh = ch;
                dl = cl;
                ch = bh;
                cl = bl;
                bh = ah;
                bl = al;
                al = t1l + t2l | 0;
                ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
              }
              H0l = H0.low = H0l + al;
              H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
              H1l = H1.low = H1l + bl;
              H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
              H2l = H22.low = H2l + cl;
              H22.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
              H3l = H3.low = H3l + dl;
              H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
              H4l = H4.low = H4l + el;
              H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
              H5l = H5.low = H5l + fl;
              H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
              H6l = H6.low = H6l + gl;
              H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
              H7l = H7.low = H7l + hl;
              H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
              dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              this._process();
              var hash = this._hash.toX32();
              return hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            },
            blockSize: 1024 / 32
          });
          C2.SHA512 = Hasher._createHelper(SHA512);
          C2.HmacSHA512 = Hasher._createHmacHelper(SHA512);
        })();
        return CryptoJS2.SHA512;
      });
    })(sha512);
    return sha512.exports;
  }
  var sha384 = { exports: {} };
  var hasRequiredSha384;
  function requireSha384() {
    if (hasRequiredSha384)
      return sha384.exports;
    hasRequiredSha384 = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireX64Core(), requireSha512());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_x64 = C2.x64;
          var X64Word = C_x64.Word;
          var X64WordArray = C_x64.WordArray;
          var C_algo = C2.algo;
          var SHA512 = C_algo.SHA512;
          var SHA384 = C_algo.SHA384 = SHA512.extend({
            _doReset: function() {
              this._hash = new X64WordArray.init([
                new X64Word.init(3418070365, 3238371032),
                new X64Word.init(1654270250, 914150663),
                new X64Word.init(2438529370, 812702999),
                new X64Word.init(355462360, 4144912697),
                new X64Word.init(1731405415, 4290775857),
                new X64Word.init(2394180231, 1750603025),
                new X64Word.init(3675008525, 1694076839),
                new X64Word.init(1203062813, 3204075428)
              ]);
            },
            _doFinalize: function() {
              var hash = SHA512._doFinalize.call(this);
              hash.sigBytes -= 16;
              return hash;
            }
          });
          C2.SHA384 = SHA512._createHelper(SHA384);
          C2.HmacSHA384 = SHA512._createHmacHelper(SHA384);
        })();
        return CryptoJS2.SHA384;
      });
    })(sha384);
    return sha384.exports;
  }
  var sha3 = { exports: {} };
  var hasRequiredSha3;
  function requireSha3() {
    if (hasRequiredSha3)
      return sha3.exports;
    hasRequiredSha3 = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireX64Core());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function(Math2) {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_x64 = C2.x64;
          var X64Word = C_x64.Word;
          var C_algo = C2.algo;
          var RHO_OFFSETS = [];
          var PI_INDEXES = [];
          var ROUND_CONSTANTS = [];
          (function() {
            var x = 1, y2 = 0;
            for (var t2 = 0; t2 < 24; t2++) {
              RHO_OFFSETS[x + 5 * y2] = (t2 + 1) * (t2 + 2) / 2 % 64;
              var newX = y2 % 5;
              var newY = (2 * x + 3 * y2) % 5;
              x = newX;
              y2 = newY;
            }
            for (var x = 0; x < 5; x++) {
              for (var y2 = 0; y2 < 5; y2++) {
                PI_INDEXES[x + 5 * y2] = y2 + (2 * x + 3 * y2) % 5 * 5;
              }
            }
            var LFSR = 1;
            for (var i2 = 0; i2 < 24; i2++) {
              var roundConstantMsw = 0;
              var roundConstantLsw = 0;
              for (var j2 = 0; j2 < 7; j2++) {
                if (LFSR & 1) {
                  var bitPosition = (1 << j2) - 1;
                  if (bitPosition < 32) {
                    roundConstantLsw ^= 1 << bitPosition;
                  } else {
                    roundConstantMsw ^= 1 << bitPosition - 32;
                  }
                }
                if (LFSR & 128) {
                  LFSR = LFSR << 1 ^ 113;
                } else {
                  LFSR <<= 1;
                }
              }
              ROUND_CONSTANTS[i2] = X64Word.create(roundConstantMsw, roundConstantLsw);
            }
          })();
          var T2 = [];
          (function() {
            for (var i2 = 0; i2 < 25; i2++) {
              T2[i2] = X64Word.create();
            }
          })();
          var SHA3 = C_algo.SHA3 = Hasher.extend({
            /**
             * Configuration options.
             *
             * @property {number} outputLength
             *   The desired number of bits in the output hash.
             *   Only values permitted are: 224, 256, 384, 512.
             *   Default: 512
             */
            cfg: Hasher.cfg.extend({
              outputLength: 512
            }),
            _doReset: function() {
              var state = this._state = [];
              for (var i2 = 0; i2 < 25; i2++) {
                state[i2] = new X64Word.init();
              }
              this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            },
            _doProcessBlock: function(M2, offset) {
              var state = this._state;
              var nBlockSizeLanes = this.blockSize / 2;
              for (var i2 = 0; i2 < nBlockSizeLanes; i2++) {
                var M2i = M2[offset + 2 * i2];
                var M2i1 = M2[offset + 2 * i2 + 1];
                M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
                M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
                var lane = state[i2];
                lane.high ^= M2i1;
                lane.low ^= M2i;
              }
              for (var round = 0; round < 24; round++) {
                for (var x = 0; x < 5; x++) {
                  var tMsw = 0, tLsw = 0;
                  for (var y2 = 0; y2 < 5; y2++) {
                    var lane = state[x + 5 * y2];
                    tMsw ^= lane.high;
                    tLsw ^= lane.low;
                  }
                  var Tx = T2[x];
                  Tx.high = tMsw;
                  Tx.low = tLsw;
                }
                for (var x = 0; x < 5; x++) {
                  var Tx4 = T2[(x + 4) % 5];
                  var Tx1 = T2[(x + 1) % 5];
                  var Tx1Msw = Tx1.high;
                  var Tx1Lsw = Tx1.low;
                  var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                  var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                  for (var y2 = 0; y2 < 5; y2++) {
                    var lane = state[x + 5 * y2];
                    lane.high ^= tMsw;
                    lane.low ^= tLsw;
                  }
                }
                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                  var tMsw;
                  var tLsw;
                  var lane = state[laneIndex];
                  var laneMsw = lane.high;
                  var laneLsw = lane.low;
                  var rhoOffset = RHO_OFFSETS[laneIndex];
                  if (rhoOffset < 32) {
                    tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                    tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                  } else {
                    tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                    tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                  }
                  var TPiLane = T2[PI_INDEXES[laneIndex]];
                  TPiLane.high = tMsw;
                  TPiLane.low = tLsw;
                }
                var T0 = T2[0];
                var state0 = state[0];
                T0.high = state0.high;
                T0.low = state0.low;
                for (var x = 0; x < 5; x++) {
                  for (var y2 = 0; y2 < 5; y2++) {
                    var laneIndex = x + 5 * y2;
                    var lane = state[laneIndex];
                    var TLane = T2[laneIndex];
                    var Tx1Lane = T2[(x + 1) % 5 + 5 * y2];
                    var Tx2Lane = T2[(x + 2) % 5 + 5 * y2];
                    lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                    lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                  }
                }
                var lane = state[0];
                var roundConstant = ROUND_CONSTANTS[round];
                lane.high ^= roundConstant.high;
                lane.low ^= roundConstant.low;
              }
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              var blockSizeBits = this.blockSize * 32;
              dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
              dataWords[(Math2.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
              data.sigBytes = dataWords.length * 4;
              this._process();
              var state = this._state;
              var outputLengthBytes = this.cfg.outputLength / 8;
              var outputLengthLanes = outputLengthBytes / 8;
              var hashWords = [];
              for (var i2 = 0; i2 < outputLengthLanes; i2++) {
                var lane = state[i2];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
                laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
                hashWords.push(laneLsw);
                hashWords.push(laneMsw);
              }
              return new WordArray.init(hashWords, outputLengthBytes);
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              var state = clone._state = this._state.slice(0);
              for (var i2 = 0; i2 < 25; i2++) {
                state[i2] = state[i2].clone();
              }
              return clone;
            }
          });
          C2.SHA3 = Hasher._createHelper(SHA3);
          C2.HmacSHA3 = Hasher._createHmacHelper(SHA3);
        })(Math);
        return CryptoJS2.SHA3;
      });
    })(sha3);
    return sha3.exports;
  }
  var ripemd160 = { exports: {} };
  var hasRequiredRipemd160;
  function requireRipemd160() {
    if (hasRequiredRipemd160)
      return ripemd160.exports;
    hasRequiredRipemd160 = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        /** @preserve
            			(c) 2012 by Cédric Mesnil. All rights reserved.
        
            			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        
            			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
            			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
            			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            			*/
        (function(Math2) {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C2.algo;
          var _zl = WordArray.create([
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            7,
            4,
            13,
            1,
            10,
            6,
            15,
            3,
            12,
            0,
            9,
            5,
            2,
            14,
            11,
            8,
            3,
            10,
            14,
            4,
            9,
            15,
            8,
            1,
            2,
            7,
            0,
            6,
            13,
            11,
            5,
            12,
            1,
            9,
            11,
            10,
            0,
            8,
            12,
            4,
            13,
            3,
            7,
            15,
            14,
            5,
            6,
            2,
            4,
            0,
            5,
            9,
            7,
            12,
            2,
            10,
            14,
            1,
            3,
            8,
            11,
            6,
            15,
            13
          ]);
          var _zr = WordArray.create([
            5,
            14,
            7,
            0,
            9,
            2,
            11,
            4,
            13,
            6,
            15,
            8,
            1,
            10,
            3,
            12,
            6,
            11,
            3,
            7,
            0,
            13,
            5,
            10,
            14,
            15,
            8,
            12,
            4,
            9,
            1,
            2,
            15,
            5,
            1,
            3,
            7,
            14,
            6,
            9,
            11,
            8,
            12,
            2,
            10,
            0,
            4,
            13,
            8,
            6,
            4,
            1,
            3,
            11,
            15,
            0,
            5,
            12,
            2,
            13,
            9,
            7,
            10,
            14,
            12,
            15,
            10,
            4,
            1,
            5,
            8,
            7,
            6,
            2,
            13,
            14,
            0,
            3,
            9,
            11
          ]);
          var _sl = WordArray.create([
            11,
            14,
            15,
            12,
            5,
            8,
            7,
            9,
            11,
            13,
            14,
            15,
            6,
            7,
            9,
            8,
            7,
            6,
            8,
            13,
            11,
            9,
            7,
            15,
            7,
            12,
            15,
            9,
            11,
            7,
            13,
            12,
            11,
            13,
            6,
            7,
            14,
            9,
            13,
            15,
            14,
            8,
            13,
            6,
            5,
            12,
            7,
            5,
            11,
            12,
            14,
            15,
            14,
            15,
            9,
            8,
            9,
            14,
            5,
            6,
            8,
            6,
            5,
            12,
            9,
            15,
            5,
            11,
            6,
            8,
            13,
            12,
            5,
            12,
            13,
            14,
            11,
            8,
            5,
            6
          ]);
          var _sr = WordArray.create([
            8,
            9,
            9,
            11,
            13,
            15,
            15,
            5,
            7,
            7,
            8,
            11,
            14,
            14,
            12,
            6,
            9,
            13,
            15,
            7,
            12,
            8,
            9,
            11,
            7,
            7,
            12,
            7,
            6,
            15,
            13,
            11,
            9,
            7,
            15,
            11,
            8,
            6,
            6,
            14,
            12,
            13,
            5,
            14,
            13,
            13,
            7,
            5,
            15,
            5,
            8,
            11,
            14,
            14,
            6,
            14,
            6,
            9,
            12,
            9,
            12,
            5,
            15,
            8,
            8,
            5,
            12,
            9,
            12,
            5,
            14,
            6,
            8,
            13,
            6,
            5,
            15,
            13,
            11,
            11
          ]);
          var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
          var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
          var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
            _doReset: function() {
              this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
            },
            _doProcessBlock: function(M2, offset) {
              for (var i2 = 0; i2 < 16; i2++) {
                var offset_i = offset + i2;
                var M_offset_i = M2[offset_i];
                M2[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
              }
              var H2 = this._hash.words;
              var hl = _hl.words;
              var hr = _hr.words;
              var zl = _zl.words;
              var zr = _zr.words;
              var sl = _sl.words;
              var sr = _sr.words;
              var al, bl, cl, dl, el;
              var ar, br, cr, dr, er2;
              ar = al = H2[0];
              br = bl = H2[1];
              cr = cl = H2[2];
              dr = dl = H2[3];
              er2 = el = H2[4];
              var t2;
              for (var i2 = 0; i2 < 80; i2 += 1) {
                t2 = al + M2[offset + zl[i2]] | 0;
                if (i2 < 16) {
                  t2 += f1(bl, cl, dl) + hl[0];
                } else if (i2 < 32) {
                  t2 += f2(bl, cl, dl) + hl[1];
                } else if (i2 < 48) {
                  t2 += f3(bl, cl, dl) + hl[2];
                } else if (i2 < 64) {
                  t2 += f4(bl, cl, dl) + hl[3];
                } else {
                  t2 += f5(bl, cl, dl) + hl[4];
                }
                t2 = t2 | 0;
                t2 = rotl(t2, sl[i2]);
                t2 = t2 + el | 0;
                al = el;
                el = dl;
                dl = rotl(cl, 10);
                cl = bl;
                bl = t2;
                t2 = ar + M2[offset + zr[i2]] | 0;
                if (i2 < 16) {
                  t2 += f5(br, cr, dr) + hr[0];
                } else if (i2 < 32) {
                  t2 += f4(br, cr, dr) + hr[1];
                } else if (i2 < 48) {
                  t2 += f3(br, cr, dr) + hr[2];
                } else if (i2 < 64) {
                  t2 += f2(br, cr, dr) + hr[3];
                } else {
                  t2 += f1(br, cr, dr) + hr[4];
                }
                t2 = t2 | 0;
                t2 = rotl(t2, sr[i2]);
                t2 = t2 + er2 | 0;
                ar = er2;
                er2 = dr;
                dr = rotl(cr, 10);
                cr = br;
                br = t2;
              }
              t2 = H2[1] + cl + dr | 0;
              H2[1] = H2[2] + dl + er2 | 0;
              H2[2] = H2[3] + el + ar | 0;
              H2[3] = H2[4] + al + br | 0;
              H2[4] = H2[0] + bl + cr | 0;
              H2[0] = t2;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
              data.sigBytes = (dataWords.length + 1) * 4;
              this._process();
              var hash = this._hash;
              var H2 = hash.words;
              for (var i2 = 0; i2 < 5; i2++) {
                var H_i = H2[i2];
                H2[i2] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
              }
              return hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          function f1(x, y2, z2) {
            return x ^ y2 ^ z2;
          }
          function f2(x, y2, z2) {
            return x & y2 | ~x & z2;
          }
          function f3(x, y2, z2) {
            return (x | ~y2) ^ z2;
          }
          function f4(x, y2, z2) {
            return x & z2 | y2 & ~z2;
          }
          function f5(x, y2, z2) {
            return x ^ (y2 | ~z2);
          }
          function rotl(x, n2) {
            return x << n2 | x >>> 32 - n2;
          }
          C2.RIPEMD160 = Hasher._createHelper(RIPEMD160);
          C2.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
        })();
        return CryptoJS2.RIPEMD160;
      });
    })(ripemd160);
    return ripemd160.exports;
  }
  var hmac = { exports: {} };
  var hasRequiredHmac;
  function requireHmac() {
    if (hasRequiredHmac)
      return hmac.exports;
    hasRequiredHmac = 1;
    (function(module, exports) {
      (function(root, factory) {
        {
          module.exports = factory(requireCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var Base = C_lib.Base;
          var C_enc = C2.enc;
          var Utf8 = C_enc.Utf8;
          var C_algo = C2.algo;
          C_algo.HMAC = Base.extend({
            /**
             * Initializes a newly created HMAC.
             *
             * @param {Hasher} hasher The hash algorithm to use.
             * @param {WordArray|string} key The secret key.
             *
             * @example
             *
             *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
             */
            init: function(hasher, key) {
              hasher = this._hasher = new hasher.init();
              if (typeof key == "string") {
                key = Utf8.parse(key);
              }
              var hasherBlockSize = hasher.blockSize;
              var hasherBlockSizeBytes = hasherBlockSize * 4;
              if (key.sigBytes > hasherBlockSizeBytes) {
                key = hasher.finalize(key);
              }
              key.clamp();
              var oKey = this._oKey = key.clone();
              var iKey = this._iKey = key.clone();
              var oKeyWords = oKey.words;
              var iKeyWords = iKey.words;
              for (var i2 = 0; i2 < hasherBlockSize; i2++) {
                oKeyWords[i2] ^= 1549556828;
                iKeyWords[i2] ^= 909522486;
              }
              oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
              this.reset();
            },
            /**
             * Resets this HMAC to its initial state.
             *
             * @example
             *
             *     hmacHasher.reset();
             */
            reset: function() {
              var hasher = this._hasher;
              hasher.reset();
              hasher.update(this._iKey);
            },
            /**
             * Updates this HMAC with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {HMAC} This HMAC instance.
             *
             * @example
             *
             *     hmacHasher.update('message');
             *     hmacHasher.update(wordArray);
             */
            update: function(messageUpdate) {
              this._hasher.update(messageUpdate);
              return this;
            },
            /**
             * Finalizes the HMAC computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The HMAC.
             *
             * @example
             *
             *     var hmac = hmacHasher.finalize();
             *     var hmac = hmacHasher.finalize('message');
             *     var hmac = hmacHasher.finalize(wordArray);
             */
            finalize: function(messageUpdate) {
              var hasher = this._hasher;
              var innerHash = hasher.finalize(messageUpdate);
              hasher.reset();
              var hmac2 = hasher.finalize(this._oKey.clone().concat(innerHash));
              return hmac2;
            }
          });
        })();
      });
    })(hmac);
    return hmac.exports;
  }
  var pbkdf2 = { exports: {} };
  var hasRequiredPbkdf2;
  function requirePbkdf2() {
    if (hasRequiredPbkdf2)
      return pbkdf2.exports;
    hasRequiredPbkdf2 = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireSha256(), requireHmac());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var C_algo = C2.algo;
          var SHA256 = C_algo.SHA256;
          var HMAC = C_algo.HMAC;
          var PBKDF2 = C_algo.PBKDF2 = Base.extend({
            /**
             * Configuration options.
             *
             * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
             * @property {Hasher} hasher The hasher to use. Default: SHA256
             * @property {number} iterations The number of iterations to perform. Default: 250000
             */
            cfg: Base.extend({
              keySize: 128 / 32,
              hasher: SHA256,
              iterations: 25e4
            }),
            /**
             * Initializes a newly created key derivation function.
             *
             * @param {Object} cfg (Optional) The configuration options to use for the derivation.
             *
             * @example
             *
             *     var kdf = CryptoJS.algo.PBKDF2.create();
             *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
             *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
             */
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
            },
            /**
             * Computes the Password-Based Key Derivation Function 2.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             *
             * @return {WordArray} The derived key.
             *
             * @example
             *
             *     var key = kdf.compute(password, salt);
             */
            compute: function(password, salt) {
              var cfg = this.cfg;
              var hmac2 = HMAC.create(cfg.hasher, password);
              var derivedKey = WordArray.create();
              var blockIndex = WordArray.create([1]);
              var derivedKeyWords = derivedKey.words;
              var blockIndexWords = blockIndex.words;
              var keySize = cfg.keySize;
              var iterations = cfg.iterations;
              while (derivedKeyWords.length < keySize) {
                var block = hmac2.update(salt).finalize(blockIndex);
                hmac2.reset();
                var blockWords = block.words;
                var blockWordsLength = blockWords.length;
                var intermediate = block;
                for (var i2 = 1; i2 < iterations; i2++) {
                  intermediate = hmac2.finalize(intermediate);
                  hmac2.reset();
                  var intermediateWords = intermediate.words;
                  for (var j2 = 0; j2 < blockWordsLength; j2++) {
                    blockWords[j2] ^= intermediateWords[j2];
                  }
                }
                derivedKey.concat(block);
                blockIndexWords[0]++;
              }
              derivedKey.sigBytes = keySize * 4;
              return derivedKey;
            }
          });
          C2.PBKDF2 = function(password, salt, cfg) {
            return PBKDF2.create(cfg).compute(password, salt);
          };
        })();
        return CryptoJS2.PBKDF2;
      });
    })(pbkdf2);
    return pbkdf2.exports;
  }
  var evpkdf = { exports: {} };
  var hasRequiredEvpkdf;
  function requireEvpkdf() {
    if (hasRequiredEvpkdf)
      return evpkdf.exports;
    hasRequiredEvpkdf = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireSha1(), requireHmac());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var C_algo = C2.algo;
          var MD5 = C_algo.MD5;
          var EvpKDF = C_algo.EvpKDF = Base.extend({
            /**
             * Configuration options.
             *
             * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
             * @property {Hasher} hasher The hash algorithm to use. Default: MD5
             * @property {number} iterations The number of iterations to perform. Default: 1
             */
            cfg: Base.extend({
              keySize: 128 / 32,
              hasher: MD5,
              iterations: 1
            }),
            /**
             * Initializes a newly created key derivation function.
             *
             * @param {Object} cfg (Optional) The configuration options to use for the derivation.
             *
             * @example
             *
             *     var kdf = CryptoJS.algo.EvpKDF.create();
             *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
             *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
             */
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
            },
            /**
             * Derives a key from a password.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             *
             * @return {WordArray} The derived key.
             *
             * @example
             *
             *     var key = kdf.compute(password, salt);
             */
            compute: function(password, salt) {
              var block;
              var cfg = this.cfg;
              var hasher = cfg.hasher.create();
              var derivedKey = WordArray.create();
              var derivedKeyWords = derivedKey.words;
              var keySize = cfg.keySize;
              var iterations = cfg.iterations;
              while (derivedKeyWords.length < keySize) {
                if (block) {
                  hasher.update(block);
                }
                block = hasher.update(password).finalize(salt);
                hasher.reset();
                for (var i2 = 1; i2 < iterations; i2++) {
                  block = hasher.finalize(block);
                  hasher.reset();
                }
                derivedKey.concat(block);
              }
              derivedKey.sigBytes = keySize * 4;
              return derivedKey;
            }
          });
          C2.EvpKDF = function(password, salt, cfg) {
            return EvpKDF.create(cfg).compute(password, salt);
          };
        })();
        return CryptoJS2.EvpKDF;
      });
    })(evpkdf);
    return evpkdf.exports;
  }
  var cipherCore = { exports: {} };
  var hasRequiredCipherCore;
  function requireCipherCore() {
    if (hasRequiredCipherCore)
      return cipherCore.exports;
    hasRequiredCipherCore = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireEvpkdf());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.lib.Cipher || function(undefined$1) {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
          var C_enc = C2.enc;
          C_enc.Utf8;
          var Base64 = C_enc.Base64;
          var C_algo = C2.algo;
          var EvpKDF = C_algo.EvpKDF;
          var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
            /**
             * Configuration options.
             *
             * @property {WordArray} iv The IV to use for this operation.
             */
            cfg: Base.extend(),
            /**
             * Creates this cipher in encryption mode.
             *
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {Cipher} A cipher instance.
             *
             * @static
             *
             * @example
             *
             *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
             */
            createEncryptor: function(key, cfg) {
              return this.create(this._ENC_XFORM_MODE, key, cfg);
            },
            /**
             * Creates this cipher in decryption mode.
             *
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {Cipher} A cipher instance.
             *
             * @static
             *
             * @example
             *
             *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
             */
            createDecryptor: function(key, cfg) {
              return this.create(this._DEC_XFORM_MODE, key, cfg);
            },
            /**
             * Initializes a newly created cipher.
             *
             * @param {number} xformMode Either the encryption or decryption transormation mode constant.
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @example
             *
             *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
             */
            init: function(xformMode, key, cfg) {
              this.cfg = this.cfg.extend(cfg);
              this._xformMode = xformMode;
              this._key = key;
              this.reset();
            },
            /**
             * Resets this cipher to its initial state.
             *
             * @example
             *
             *     cipher.reset();
             */
            reset: function() {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            /**
             * Adds data to be encrypted or decrypted.
             *
             * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
             *
             * @return {WordArray} The data after processing.
             *
             * @example
             *
             *     var encrypted = cipher.process('data');
             *     var encrypted = cipher.process(wordArray);
             */
            process: function(dataUpdate) {
              this._append(dataUpdate);
              return this._process();
            },
            /**
             * Finalizes the encryption or decryption process.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
             *
             * @return {WordArray} The data after final processing.
             *
             * @example
             *
             *     var encrypted = cipher.finalize();
             *     var encrypted = cipher.finalize('data');
             *     var encrypted = cipher.finalize(wordArray);
             */
            finalize: function(dataUpdate) {
              if (dataUpdate) {
                this._append(dataUpdate);
              }
              var finalProcessedData = this._doFinalize();
              return finalProcessedData;
            },
            keySize: 128 / 32,
            ivSize: 128 / 32,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            /**
             * Creates shortcut functions to a cipher's object interface.
             *
             * @param {Cipher} cipher The cipher to create a helper for.
             *
             * @return {Object} An object with encrypt and decrypt shortcut functions.
             *
             * @static
             *
             * @example
             *
             *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
             */
            _createHelper: /* @__PURE__ */ function() {
              function selectCipherStrategy(key) {
                if (typeof key == "string") {
                  return PasswordBasedCipher;
                } else {
                  return SerializableCipher;
                }
              }
              return function(cipher) {
                return {
                  encrypt: function(message, key, cfg) {
                    return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                  },
                  decrypt: function(ciphertext, key, cfg) {
                    return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                  }
                };
              };
            }()
          });
          C_lib.StreamCipher = Cipher.extend({
            _doFinalize: function() {
              var finalProcessedBlocks = this._process(true);
              return finalProcessedBlocks;
            },
            blockSize: 1
          });
          var C_mode = C2.mode = {};
          var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
            /**
             * Creates this mode for encryption.
             *
             * @param {Cipher} cipher A block cipher instance.
             * @param {Array} iv The IV words.
             *
             * @static
             *
             * @example
             *
             *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
             */
            createEncryptor: function(cipher, iv) {
              return this.Encryptor.create(cipher, iv);
            },
            /**
             * Creates this mode for decryption.
             *
             * @param {Cipher} cipher A block cipher instance.
             * @param {Array} iv The IV words.
             *
             * @static
             *
             * @example
             *
             *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
             */
            createDecryptor: function(cipher, iv) {
              return this.Decryptor.create(cipher, iv);
            },
            /**
             * Initializes a newly created mode.
             *
             * @param {Cipher} cipher A block cipher instance.
             * @param {Array} iv The IV words.
             *
             * @example
             *
             *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
             */
            init: function(cipher, iv) {
              this._cipher = cipher;
              this._iv = iv;
            }
          });
          var CBC = C_mode.CBC = function() {
            var CBC2 = BlockCipherMode.extend();
            CBC2.Encryptor = CBC2.extend({
              /**
               * Processes the data block at offset.
               *
               * @param {Array} words The data words to operate on.
               * @param {number} offset The offset where the block starts.
               *
               * @example
               *
               *     mode.processBlock(data.words, offset);
               */
              processBlock: function(words, offset) {
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;
                xorBlock.call(this, words, offset, blockSize);
                cipher.encryptBlock(words, offset);
                this._prevBlock = words.slice(offset, offset + blockSize);
              }
            });
            CBC2.Decryptor = CBC2.extend({
              /**
               * Processes the data block at offset.
               *
               * @param {Array} words The data words to operate on.
               * @param {number} offset The offset where the block starts.
               *
               * @example
               *
               *     mode.processBlock(data.words, offset);
               */
              processBlock: function(words, offset) {
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;
                var thisBlock = words.slice(offset, offset + blockSize);
                cipher.decryptBlock(words, offset);
                xorBlock.call(this, words, offset, blockSize);
                this._prevBlock = thisBlock;
              }
            });
            function xorBlock(words, offset, blockSize) {
              var block;
              var iv = this._iv;
              if (iv) {
                block = iv;
                this._iv = undefined$1;
              } else {
                block = this._prevBlock;
              }
              for (var i2 = 0; i2 < blockSize; i2++) {
                words[offset + i2] ^= block[i2];
              }
            }
            return CBC2;
          }();
          var C_pad = C2.pad = {};
          var Pkcs7 = C_pad.Pkcs7 = {
            /**
             * Pads data using the algorithm defined in PKCS #5/7.
             *
             * @param {WordArray} data The data to pad.
             * @param {number} blockSize The multiple that the data should be padded to.
             *
             * @static
             *
             * @example
             *
             *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
             */
            pad: function(data, blockSize) {
              var blockSizeBytes = blockSize * 4;
              var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
              var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
              var paddingWords = [];
              for (var i2 = 0; i2 < nPaddingBytes; i2 += 4) {
                paddingWords.push(paddingWord);
              }
              var padding = WordArray.create(paddingWords, nPaddingBytes);
              data.concat(padding);
            },
            /**
             * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
             *
             * @param {WordArray} data The data to unpad.
             *
             * @static
             *
             * @example
             *
             *     CryptoJS.pad.Pkcs7.unpad(wordArray);
             */
            unpad: function(data) {
              var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
              data.sigBytes -= nPaddingBytes;
            }
          };
          C_lib.BlockCipher = Cipher.extend({
            /**
             * Configuration options.
             *
             * @property {Mode} mode The block mode to use. Default: CBC
             * @property {Padding} padding The padding strategy to use. Default: Pkcs7
             */
            cfg: Cipher.cfg.extend({
              mode: CBC,
              padding: Pkcs7
            }),
            reset: function() {
              var modeCreator;
              Cipher.reset.call(this);
              var cfg = this.cfg;
              var iv = cfg.iv;
              var mode = cfg.mode;
              if (this._xformMode == this._ENC_XFORM_MODE) {
                modeCreator = mode.createEncryptor;
              } else {
                modeCreator = mode.createDecryptor;
                this._minBufferSize = 1;
              }
              if (this._mode && this._mode.__creator == modeCreator) {
                this._mode.init(this, iv && iv.words);
              } else {
                this._mode = modeCreator.call(mode, this, iv && iv.words);
                this._mode.__creator = modeCreator;
              }
            },
            _doProcessBlock: function(words, offset) {
              this._mode.processBlock(words, offset);
            },
            _doFinalize: function() {
              var finalProcessedBlocks;
              var padding = this.cfg.padding;
              if (this._xformMode == this._ENC_XFORM_MODE) {
                padding.pad(this._data, this.blockSize);
                finalProcessedBlocks = this._process(true);
              } else {
                finalProcessedBlocks = this._process(true);
                padding.unpad(finalProcessedBlocks);
              }
              return finalProcessedBlocks;
            },
            blockSize: 128 / 32
          });
          var CipherParams = C_lib.CipherParams = Base.extend({
            /**
             * Initializes a newly created cipher params object.
             *
             * @param {Object} cipherParams An object with any of the possible cipher parameters.
             *
             * @example
             *
             *     var cipherParams = CryptoJS.lib.CipherParams.create({
             *         ciphertext: ciphertextWordArray,
             *         key: keyWordArray,
             *         iv: ivWordArray,
             *         salt: saltWordArray,
             *         algorithm: CryptoJS.algo.AES,
             *         mode: CryptoJS.mode.CBC,
             *         padding: CryptoJS.pad.PKCS7,
             *         blockSize: 4,
             *         formatter: CryptoJS.format.OpenSSL
             *     });
             */
            init: function(cipherParams) {
              this.mixIn(cipherParams);
            },
            /**
             * Converts this cipher params object to a string.
             *
             * @param {Format} formatter (Optional) The formatting strategy to use.
             *
             * @return {string} The stringified cipher params.
             *
             * @throws Error If neither the formatter nor the default formatter is set.
             *
             * @example
             *
             *     var string = cipherParams + '';
             *     var string = cipherParams.toString();
             *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
             */
            toString: function(formatter) {
              return (formatter || this.formatter).stringify(this);
            }
          });
          var C_format = C2.format = {};
          var OpenSSLFormatter = C_format.OpenSSL = {
            /**
             * Converts a cipher params object to an OpenSSL-compatible string.
             *
             * @param {CipherParams} cipherParams The cipher params object.
             *
             * @return {string} The OpenSSL-compatible string.
             *
             * @static
             *
             * @example
             *
             *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
             */
            stringify: function(cipherParams) {
              var wordArray;
              var ciphertext = cipherParams.ciphertext;
              var salt = cipherParams.salt;
              if (salt) {
                wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
              } else {
                wordArray = ciphertext;
              }
              return wordArray.toString(Base64);
            },
            /**
             * Converts an OpenSSL-compatible string to a cipher params object.
             *
             * @param {string} openSSLStr The OpenSSL-compatible string.
             *
             * @return {CipherParams} The cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
             */
            parse: function(openSSLStr) {
              var salt;
              var ciphertext = Base64.parse(openSSLStr);
              var ciphertextWords = ciphertext.words;
              if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
                salt = WordArray.create(ciphertextWords.slice(2, 4));
                ciphertextWords.splice(0, 4);
                ciphertext.sigBytes -= 16;
              }
              return CipherParams.create({ ciphertext, salt });
            }
          };
          var SerializableCipher = C_lib.SerializableCipher = Base.extend({
            /**
             * Configuration options.
             *
             * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
             */
            cfg: Base.extend({
              format: OpenSSLFormatter
            }),
            /**
             * Encrypts a message.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {WordArray|string} message The message to encrypt.
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {CipherParams} A cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
             */
            encrypt: function(cipher, message, key, cfg) {
              cfg = this.cfg.extend(cfg);
              var encryptor = cipher.createEncryptor(key, cfg);
              var ciphertext = encryptor.finalize(message);
              var cipherCfg = encryptor.cfg;
              return CipherParams.create({
                ciphertext,
                key,
                iv: cipherCfg.iv,
                algorithm: cipher,
                mode: cipherCfg.mode,
                padding: cipherCfg.padding,
                blockSize: cipher.blockSize,
                formatter: cfg.format
              });
            },
            /**
             * Decrypts serialized ciphertext.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {WordArray} The plaintext.
             *
             * @static
             *
             * @example
             *
             *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
             *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
             */
            decrypt: function(cipher, ciphertext, key, cfg) {
              cfg = this.cfg.extend(cfg);
              ciphertext = this._parse(ciphertext, cfg.format);
              var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
              return plaintext;
            },
            /**
             * Converts serialized ciphertext to CipherParams,
             * else assumed CipherParams already and returns ciphertext unchanged.
             *
             * @param {CipherParams|string} ciphertext The ciphertext.
             * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
             *
             * @return {CipherParams} The unserialized ciphertext.
             *
             * @static
             *
             * @example
             *
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
             */
            _parse: function(ciphertext, format) {
              if (typeof ciphertext == "string") {
                return format.parse(ciphertext, this);
              } else {
                return ciphertext;
              }
            }
          });
          var C_kdf = C2.kdf = {};
          var OpenSSLKdf = C_kdf.OpenSSL = {
            /**
             * Derives a key and IV from a password.
             *
             * @param {string} password The password to derive from.
             * @param {number} keySize The size in words of the key to generate.
             * @param {number} ivSize The size in words of the IV to generate.
             * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
             *
             * @return {CipherParams} A cipher params object with the key, IV, and salt.
             *
             * @static
             *
             * @example
             *
             *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
             *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
             */
            execute: function(password, keySize, ivSize, salt, hasher) {
              if (!salt) {
                salt = WordArray.random(64 / 8);
              }
              if (!hasher) {
                var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
              } else {
                var key = EvpKDF.create({ keySize: keySize + ivSize, hasher }).compute(password, salt);
              }
              var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
              key.sigBytes = keySize * 4;
              return CipherParams.create({ key, iv, salt });
            }
          };
          var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
            /**
             * Configuration options.
             *
             * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
             */
            cfg: SerializableCipher.cfg.extend({
              kdf: OpenSSLKdf
            }),
            /**
             * Encrypts a message using a password.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {WordArray|string} message The message to encrypt.
             * @param {string} password The password.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {CipherParams} A cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
             *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
             */
            encrypt: function(cipher, message, password, cfg) {
              cfg = this.cfg.extend(cfg);
              var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);
              cfg.iv = derivedParams.iv;
              var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
              ciphertext.mixIn(derivedParams);
              return ciphertext;
            },
            /**
             * Decrypts serialized ciphertext using a password.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
             * @param {string} password The password.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {WordArray} The plaintext.
             *
             * @static
             *
             * @example
             *
             *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
             *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
             */
            decrypt: function(cipher, ciphertext, password, cfg) {
              cfg = this.cfg.extend(cfg);
              ciphertext = this._parse(ciphertext, cfg.format);
              var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);
              cfg.iv = derivedParams.iv;
              var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
              return plaintext;
            }
          });
        }();
      });
    })(cipherCore);
    return cipherCore.exports;
  }
  var modeCfb = { exports: {} };
  var hasRequiredModeCfb;
  function requireModeCfb() {
    if (hasRequiredModeCfb)
      return modeCfb.exports;
    hasRequiredModeCfb = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.mode.CFB = function() {
          var CFB = CryptoJS2.lib.BlockCipherMode.extend();
          CFB.Encryptor = CFB.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CFB.Decryptor = CFB.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
              this._prevBlock = thisBlock;
            }
          });
          function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
            var keystream;
            var iv = this._iv;
            if (iv) {
              keystream = iv.slice(0);
              this._iv = void 0;
            } else {
              keystream = this._prevBlock;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i2 = 0; i2 < blockSize; i2++) {
              words[offset + i2] ^= keystream[i2];
            }
          }
          return CFB;
        }();
        return CryptoJS2.mode.CFB;
      });
    })(modeCfb);
    return modeCfb.exports;
  }
  var modeCtr = { exports: {} };
  var hasRequiredModeCtr;
  function requireModeCtr() {
    if (hasRequiredModeCtr)
      return modeCtr.exports;
    hasRequiredModeCtr = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.mode.CTR = function() {
          var CTR = CryptoJS2.lib.BlockCipherMode.extend();
          var Encryptor = CTR.Encryptor = CTR.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var counter = this._counter;
              if (iv) {
                counter = this._counter = iv.slice(0);
                this._iv = void 0;
              }
              var keystream = counter.slice(0);
              cipher.encryptBlock(keystream, 0);
              counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
              for (var i2 = 0; i2 < blockSize; i2++) {
                words[offset + i2] ^= keystream[i2];
              }
            }
          });
          CTR.Decryptor = Encryptor;
          return CTR;
        }();
        return CryptoJS2.mode.CTR;
      });
    })(modeCtr);
    return modeCtr.exports;
  }
  var modeCtrGladman = { exports: {} };
  var hasRequiredModeCtrGladman;
  function requireModeCtrGladman() {
    if (hasRequiredModeCtrGladman)
      return modeCtrGladman.exports;
    hasRequiredModeCtrGladman = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        /** @preserve
         * Counter block mode compatible with  Dr Brian Gladman fileenc.c
         * derived from CryptoJS.mode.CTR
         * Jan Hruby jhruby.web@gmail.com
         */
        CryptoJS2.mode.CTRGladman = function() {
          var CTRGladman = CryptoJS2.lib.BlockCipherMode.extend();
          function incWord(word) {
            if ((word >> 24 & 255) === 255) {
              var b1 = word >> 16 & 255;
              var b2 = word >> 8 & 255;
              var b3 = word & 255;
              if (b1 === 255) {
                b1 = 0;
                if (b2 === 255) {
                  b2 = 0;
                  if (b3 === 255) {
                    b3 = 0;
                  } else {
                    ++b3;
                  }
                } else {
                  ++b2;
                }
              } else {
                ++b1;
              }
              word = 0;
              word += b1 << 16;
              word += b2 << 8;
              word += b3;
            } else {
              word += 1 << 24;
            }
            return word;
          }
          function incCounter(counter) {
            if ((counter[0] = incWord(counter[0])) === 0) {
              counter[1] = incWord(counter[1]);
            }
            return counter;
          }
          var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var counter = this._counter;
              if (iv) {
                counter = this._counter = iv.slice(0);
                this._iv = void 0;
              }
              incCounter(counter);
              var keystream = counter.slice(0);
              cipher.encryptBlock(keystream, 0);
              for (var i2 = 0; i2 < blockSize; i2++) {
                words[offset + i2] ^= keystream[i2];
              }
            }
          });
          CTRGladman.Decryptor = Encryptor;
          return CTRGladman;
        }();
        return CryptoJS2.mode.CTRGladman;
      });
    })(modeCtrGladman);
    return modeCtrGladman.exports;
  }
  var modeOfb = { exports: {} };
  var hasRequiredModeOfb;
  function requireModeOfb() {
    if (hasRequiredModeOfb)
      return modeOfb.exports;
    hasRequiredModeOfb = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.mode.OFB = function() {
          var OFB = CryptoJS2.lib.BlockCipherMode.extend();
          var Encryptor = OFB.Encryptor = OFB.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var keystream = this._keystream;
              if (iv) {
                keystream = this._keystream = iv.slice(0);
                this._iv = void 0;
              }
              cipher.encryptBlock(keystream, 0);
              for (var i2 = 0; i2 < blockSize; i2++) {
                words[offset + i2] ^= keystream[i2];
              }
            }
          });
          OFB.Decryptor = Encryptor;
          return OFB;
        }();
        return CryptoJS2.mode.OFB;
      });
    })(modeOfb);
    return modeOfb.exports;
  }
  var modeEcb = { exports: {} };
  var hasRequiredModeEcb;
  function requireModeEcb() {
    if (hasRequiredModeEcb)
      return modeEcb.exports;
    hasRequiredModeEcb = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.mode.ECB = function() {
          var ECB = CryptoJS2.lib.BlockCipherMode.extend();
          ECB.Encryptor = ECB.extend({
            processBlock: function(words, offset) {
              this._cipher.encryptBlock(words, offset);
            }
          });
          ECB.Decryptor = ECB.extend({
            processBlock: function(words, offset) {
              this._cipher.decryptBlock(words, offset);
            }
          });
          return ECB;
        }();
        return CryptoJS2.mode.ECB;
      });
    })(modeEcb);
    return modeEcb.exports;
  }
  var padAnsix923 = { exports: {} };
  var hasRequiredPadAnsix923;
  function requirePadAnsix923() {
    if (hasRequiredPadAnsix923)
      return padAnsix923.exports;
    hasRequiredPadAnsix923 = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.pad.AnsiX923 = {
          pad: function(data, blockSize) {
            var dataSigBytes = data.sigBytes;
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
            var lastBytePos = dataSigBytes + nPaddingBytes - 1;
            data.clamp();
            data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
            data.sigBytes += nPaddingBytes;
          },
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        return CryptoJS2.pad.Ansix923;
      });
    })(padAnsix923);
    return padAnsix923.exports;
  }
  var padIso10126 = { exports: {} };
  var hasRequiredPadIso10126;
  function requirePadIso10126() {
    if (hasRequiredPadIso10126)
      return padIso10126.exports;
    hasRequiredPadIso10126 = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.pad.Iso10126 = {
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            data.concat(CryptoJS2.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS2.lib.WordArray.create([nPaddingBytes << 24], 1));
          },
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        return CryptoJS2.pad.Iso10126;
      });
    })(padIso10126);
    return padIso10126.exports;
  }
  var padIso97971 = { exports: {} };
  var hasRequiredPadIso97971;
  function requirePadIso97971() {
    if (hasRequiredPadIso97971)
      return padIso97971.exports;
    hasRequiredPadIso97971 = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.pad.Iso97971 = {
          pad: function(data, blockSize) {
            data.concat(CryptoJS2.lib.WordArray.create([2147483648], 1));
            CryptoJS2.pad.ZeroPadding.pad(data, blockSize);
          },
          unpad: function(data) {
            CryptoJS2.pad.ZeroPadding.unpad(data);
            data.sigBytes--;
          }
        };
        return CryptoJS2.pad.Iso97971;
      });
    })(padIso97971);
    return padIso97971.exports;
  }
  var padZeropadding = { exports: {} };
  var hasRequiredPadZeropadding;
  function requirePadZeropadding() {
    if (hasRequiredPadZeropadding)
      return padZeropadding.exports;
    hasRequiredPadZeropadding = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.pad.ZeroPadding = {
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            data.clamp();
            data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
          },
          unpad: function(data) {
            var dataWords = data.words;
            var i2 = data.sigBytes - 1;
            for (var i2 = data.sigBytes - 1; i2 >= 0; i2--) {
              if (dataWords[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) {
                data.sigBytes = i2 + 1;
                break;
              }
            }
          }
        };
        return CryptoJS2.pad.ZeroPadding;
      });
    })(padZeropadding);
    return padZeropadding.exports;
  }
  var padNopadding = { exports: {} };
  var hasRequiredPadNopadding;
  function requirePadNopadding() {
    if (hasRequiredPadNopadding)
      return padNopadding.exports;
    hasRequiredPadNopadding = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        CryptoJS2.pad.NoPadding = {
          pad: function() {
          },
          unpad: function() {
          }
        };
        return CryptoJS2.pad.NoPadding;
      });
    })(padNopadding);
    return padNopadding.exports;
  }
  var formatHex = { exports: {} };
  var hasRequiredFormatHex;
  function requireFormatHex() {
    if (hasRequiredFormatHex)
      return formatHex.exports;
    hasRequiredFormatHex = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function(undefined$1) {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var CipherParams = C_lib.CipherParams;
          var C_enc = C2.enc;
          var Hex = C_enc.Hex;
          var C_format = C2.format;
          C_format.Hex = {
            /**
             * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
             *
             * @param {CipherParams} cipherParams The cipher params object.
             *
             * @return {string} The hexadecimally encoded string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
             */
            stringify: function(cipherParams) {
              return cipherParams.ciphertext.toString(Hex);
            },
            /**
             * Converts a hexadecimally encoded ciphertext string to a cipher params object.
             *
             * @param {string} input The hexadecimally encoded string.
             *
             * @return {CipherParams} The cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
             */
            parse: function(input) {
              var ciphertext = Hex.parse(input);
              return CipherParams.create({ ciphertext });
            }
          };
        })();
        return CryptoJS2.format.Hex;
      });
    })(formatHex);
    return formatHex.exports;
  }
  var aes = { exports: {} };
  var hasRequiredAes;
  function requireAes() {
    if (hasRequiredAes)
      return aes.exports;
    hasRequiredAes = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var BlockCipher = C_lib.BlockCipher;
          var C_algo = C2.algo;
          var SBOX = [];
          var INV_SBOX = [];
          var SUB_MIX_0 = [];
          var SUB_MIX_1 = [];
          var SUB_MIX_2 = [];
          var SUB_MIX_3 = [];
          var INV_SUB_MIX_0 = [];
          var INV_SUB_MIX_1 = [];
          var INV_SUB_MIX_2 = [];
          var INV_SUB_MIX_3 = [];
          (function() {
            var d2 = [];
            for (var i2 = 0; i2 < 256; i2++) {
              if (i2 < 128) {
                d2[i2] = i2 << 1;
              } else {
                d2[i2] = i2 << 1 ^ 283;
              }
            }
            var x = 0;
            var xi = 0;
            for (var i2 = 0; i2 < 256; i2++) {
              var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
              sx = sx >>> 8 ^ sx & 255 ^ 99;
              SBOX[x] = sx;
              INV_SBOX[sx] = x;
              var x2 = d2[x];
              var x4 = d2[x2];
              var x8 = d2[x4];
              var t2 = d2[sx] * 257 ^ sx * 16843008;
              SUB_MIX_0[x] = t2 << 24 | t2 >>> 8;
              SUB_MIX_1[x] = t2 << 16 | t2 >>> 16;
              SUB_MIX_2[x] = t2 << 8 | t2 >>> 24;
              SUB_MIX_3[x] = t2;
              var t2 = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
              INV_SUB_MIX_0[sx] = t2 << 24 | t2 >>> 8;
              INV_SUB_MIX_1[sx] = t2 << 16 | t2 >>> 16;
              INV_SUB_MIX_2[sx] = t2 << 8 | t2 >>> 24;
              INV_SUB_MIX_3[sx] = t2;
              if (!x) {
                x = xi = 1;
              } else {
                x = x2 ^ d2[d2[d2[x8 ^ x2]]];
                xi ^= d2[d2[xi]];
              }
            }
          })();
          var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
          var AES = C_algo.AES = BlockCipher.extend({
            _doReset: function() {
              var t2;
              if (this._nRounds && this._keyPriorReset === this._key) {
                return;
              }
              var key = this._keyPriorReset = this._key;
              var keyWords = key.words;
              var keySize = key.sigBytes / 4;
              var nRounds = this._nRounds = keySize + 6;
              var ksRows = (nRounds + 1) * 4;
              var keySchedule = this._keySchedule = [];
              for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                if (ksRow < keySize) {
                  keySchedule[ksRow] = keyWords[ksRow];
                } else {
                  t2 = keySchedule[ksRow - 1];
                  if (!(ksRow % keySize)) {
                    t2 = t2 << 8 | t2 >>> 24;
                    t2 = SBOX[t2 >>> 24] << 24 | SBOX[t2 >>> 16 & 255] << 16 | SBOX[t2 >>> 8 & 255] << 8 | SBOX[t2 & 255];
                    t2 ^= RCON[ksRow / keySize | 0] << 24;
                  } else if (keySize > 6 && ksRow % keySize == 4) {
                    t2 = SBOX[t2 >>> 24] << 24 | SBOX[t2 >>> 16 & 255] << 16 | SBOX[t2 >>> 8 & 255] << 8 | SBOX[t2 & 255];
                  }
                  keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t2;
                }
              }
              var invKeySchedule = this._invKeySchedule = [];
              for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                var ksRow = ksRows - invKsRow;
                if (invKsRow % 4) {
                  var t2 = keySchedule[ksRow];
                } else {
                  var t2 = keySchedule[ksRow - 4];
                }
                if (invKsRow < 4 || ksRow <= 4) {
                  invKeySchedule[invKsRow] = t2;
                } else {
                  invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t2 >>> 24]] ^ INV_SUB_MIX_1[SBOX[t2 >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t2 >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t2 & 255]];
                }
              }
            },
            encryptBlock: function(M2, offset) {
              this._doCryptBlock(M2, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
            },
            decryptBlock: function(M2, offset) {
              var t2 = M2[offset + 1];
              M2[offset + 1] = M2[offset + 3];
              M2[offset + 3] = t2;
              this._doCryptBlock(M2, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
              var t2 = M2[offset + 1];
              M2[offset + 1] = M2[offset + 3];
              M2[offset + 3] = t2;
            },
            _doCryptBlock: function(M2, offset, keySchedule, SUB_MIX_02, SUB_MIX_12, SUB_MIX_22, SUB_MIX_32, SBOX2) {
              var nRounds = this._nRounds;
              var s0 = M2[offset] ^ keySchedule[0];
              var s1 = M2[offset + 1] ^ keySchedule[1];
              var s2 = M2[offset + 2] ^ keySchedule[2];
              var s3 = M2[offset + 3] ^ keySchedule[3];
              var ksRow = 4;
              for (var round = 1; round < nRounds; round++) {
                var t0 = SUB_MIX_02[s0 >>> 24] ^ SUB_MIX_12[s1 >>> 16 & 255] ^ SUB_MIX_22[s2 >>> 8 & 255] ^ SUB_MIX_32[s3 & 255] ^ keySchedule[ksRow++];
                var t1 = SUB_MIX_02[s1 >>> 24] ^ SUB_MIX_12[s2 >>> 16 & 255] ^ SUB_MIX_22[s3 >>> 8 & 255] ^ SUB_MIX_32[s0 & 255] ^ keySchedule[ksRow++];
                var t2 = SUB_MIX_02[s2 >>> 24] ^ SUB_MIX_12[s3 >>> 16 & 255] ^ SUB_MIX_22[s0 >>> 8 & 255] ^ SUB_MIX_32[s1 & 255] ^ keySchedule[ksRow++];
                var t3 = SUB_MIX_02[s3 >>> 24] ^ SUB_MIX_12[s0 >>> 16 & 255] ^ SUB_MIX_22[s1 >>> 8 & 255] ^ SUB_MIX_32[s2 & 255] ^ keySchedule[ksRow++];
                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
              }
              var t0 = (SBOX2[s0 >>> 24] << 24 | SBOX2[s1 >>> 16 & 255] << 16 | SBOX2[s2 >>> 8 & 255] << 8 | SBOX2[s3 & 255]) ^ keySchedule[ksRow++];
              var t1 = (SBOX2[s1 >>> 24] << 24 | SBOX2[s2 >>> 16 & 255] << 16 | SBOX2[s3 >>> 8 & 255] << 8 | SBOX2[s0 & 255]) ^ keySchedule[ksRow++];
              var t2 = (SBOX2[s2 >>> 24] << 24 | SBOX2[s3 >>> 16 & 255] << 16 | SBOX2[s0 >>> 8 & 255] << 8 | SBOX2[s1 & 255]) ^ keySchedule[ksRow++];
              var t3 = (SBOX2[s3 >>> 24] << 24 | SBOX2[s0 >>> 16 & 255] << 16 | SBOX2[s1 >>> 8 & 255] << 8 | SBOX2[s2 & 255]) ^ keySchedule[ksRow++];
              M2[offset] = t0;
              M2[offset + 1] = t1;
              M2[offset + 2] = t2;
              M2[offset + 3] = t3;
            },
            keySize: 256 / 32
          });
          C2.AES = BlockCipher._createHelper(AES);
        })();
        return CryptoJS2.AES;
      });
    })(aes);
    return aes.exports;
  }
  var tripledes = { exports: {} };
  var hasRequiredTripledes;
  function requireTripledes() {
    if (hasRequiredTripledes)
      return tripledes.exports;
    hasRequiredTripledes = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var WordArray = C_lib.WordArray;
          var BlockCipher = C_lib.BlockCipher;
          var C_algo = C2.algo;
          var PC1 = [
            57,
            49,
            41,
            33,
            25,
            17,
            9,
            1,
            58,
            50,
            42,
            34,
            26,
            18,
            10,
            2,
            59,
            51,
            43,
            35,
            27,
            19,
            11,
            3,
            60,
            52,
            44,
            36,
            63,
            55,
            47,
            39,
            31,
            23,
            15,
            7,
            62,
            54,
            46,
            38,
            30,
            22,
            14,
            6,
            61,
            53,
            45,
            37,
            29,
            21,
            13,
            5,
            28,
            20,
            12,
            4
          ];
          var PC2 = [
            14,
            17,
            11,
            24,
            1,
            5,
            3,
            28,
            15,
            6,
            21,
            10,
            23,
            19,
            12,
            4,
            26,
            8,
            16,
            7,
            27,
            20,
            13,
            2,
            41,
            52,
            31,
            37,
            47,
            55,
            30,
            40,
            51,
            45,
            33,
            48,
            44,
            49,
            39,
            56,
            34,
            53,
            46,
            42,
            50,
            36,
            29,
            32
          ];
          var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
          var SBOX_P = [
            {
              0: 8421888,
              268435456: 32768,
              536870912: 8421378,
              805306368: 2,
              1073741824: 512,
              1342177280: 8421890,
              1610612736: 8389122,
              1879048192: 8388608,
              2147483648: 514,
              2415919104: 8389120,
              2684354560: 33280,
              2952790016: 8421376,
              3221225472: 32770,
              3489660928: 8388610,
              3758096384: 0,
              4026531840: 33282,
              134217728: 0,
              402653184: 8421890,
              671088640: 33282,
              939524096: 32768,
              1207959552: 8421888,
              1476395008: 512,
              1744830464: 8421378,
              2013265920: 2,
              2281701376: 8389120,
              2550136832: 33280,
              2818572288: 8421376,
              3087007744: 8389122,
              3355443200: 8388610,
              3623878656: 32770,
              3892314112: 514,
              4160749568: 8388608,
              1: 32768,
              268435457: 2,
              536870913: 8421888,
              805306369: 8388608,
              1073741825: 8421378,
              1342177281: 33280,
              1610612737: 512,
              1879048193: 8389122,
              2147483649: 8421890,
              2415919105: 8421376,
              2684354561: 8388610,
              2952790017: 33282,
              3221225473: 514,
              3489660929: 8389120,
              3758096385: 32770,
              4026531841: 0,
              134217729: 8421890,
              402653185: 8421376,
              671088641: 8388608,
              939524097: 512,
              1207959553: 32768,
              1476395009: 8388610,
              1744830465: 2,
              2013265921: 33282,
              2281701377: 32770,
              2550136833: 8389122,
              2818572289: 514,
              3087007745: 8421888,
              3355443201: 8389120,
              3623878657: 0,
              3892314113: 33280,
              4160749569: 8421378
            },
            {
              0: 1074282512,
              16777216: 16384,
              33554432: 524288,
              50331648: 1074266128,
              67108864: 1073741840,
              83886080: 1074282496,
              100663296: 1073758208,
              117440512: 16,
              134217728: 540672,
              150994944: 1073758224,
              167772160: 1073741824,
              184549376: 540688,
              201326592: 524304,
              218103808: 0,
              234881024: 16400,
              251658240: 1074266112,
              8388608: 1073758208,
              25165824: 540688,
              41943040: 16,
              58720256: 1073758224,
              75497472: 1074282512,
              92274688: 1073741824,
              109051904: 524288,
              125829120: 1074266128,
              142606336: 524304,
              159383552: 0,
              176160768: 16384,
              192937984: 1074266112,
              209715200: 1073741840,
              226492416: 540672,
              243269632: 1074282496,
              260046848: 16400,
              268435456: 0,
              285212672: 1074266128,
              301989888: 1073758224,
              318767104: 1074282496,
              335544320: 1074266112,
              352321536: 16,
              369098752: 540688,
              385875968: 16384,
              402653184: 16400,
              419430400: 524288,
              436207616: 524304,
              452984832: 1073741840,
              469762048: 540672,
              486539264: 1073758208,
              503316480: 1073741824,
              520093696: 1074282512,
              276824064: 540688,
              293601280: 524288,
              310378496: 1074266112,
              327155712: 16384,
              343932928: 1073758208,
              360710144: 1074282512,
              377487360: 16,
              394264576: 1073741824,
              411041792: 1074282496,
              427819008: 1073741840,
              444596224: 1073758224,
              461373440: 524304,
              478150656: 0,
              494927872: 16400,
              511705088: 1074266128,
              528482304: 540672
            },
            {
              0: 260,
              1048576: 0,
              2097152: 67109120,
              3145728: 65796,
              4194304: 65540,
              5242880: 67108868,
              6291456: 67174660,
              7340032: 67174400,
              8388608: 67108864,
              9437184: 67174656,
              10485760: 65792,
              11534336: 67174404,
              12582912: 67109124,
              13631488: 65536,
              14680064: 4,
              15728640: 256,
              524288: 67174656,
              1572864: 67174404,
              2621440: 0,
              3670016: 67109120,
              4718592: 67108868,
              5767168: 65536,
              6815744: 65540,
              7864320: 260,
              8912896: 4,
              9961472: 256,
              11010048: 67174400,
              12058624: 65796,
              13107200: 65792,
              14155776: 67109124,
              15204352: 67174660,
              16252928: 67108864,
              16777216: 67174656,
              17825792: 65540,
              18874368: 65536,
              19922944: 67109120,
              20971520: 256,
              22020096: 67174660,
              23068672: 67108868,
              24117248: 0,
              25165824: 67109124,
              26214400: 67108864,
              27262976: 4,
              28311552: 65792,
              29360128: 67174400,
              30408704: 260,
              31457280: 65796,
              32505856: 67174404,
              17301504: 67108864,
              18350080: 260,
              19398656: 67174656,
              20447232: 0,
              21495808: 65540,
              22544384: 67109120,
              23592960: 256,
              24641536: 67174404,
              25690112: 65536,
              26738688: 67174660,
              27787264: 65796,
              28835840: 67108868,
              29884416: 67109124,
              30932992: 67174400,
              31981568: 4,
              33030144: 65792
            },
            {
              0: 2151682048,
              65536: 2147487808,
              131072: 4198464,
              196608: 2151677952,
              262144: 0,
              327680: 4198400,
              393216: 2147483712,
              458752: 4194368,
              524288: 2147483648,
              589824: 4194304,
              655360: 64,
              720896: 2147487744,
              786432: 2151678016,
              851968: 4160,
              917504: 4096,
              983040: 2151682112,
              32768: 2147487808,
              98304: 64,
              163840: 2151678016,
              229376: 2147487744,
              294912: 4198400,
              360448: 2151682112,
              425984: 0,
              491520: 2151677952,
              557056: 4096,
              622592: 2151682048,
              688128: 4194304,
              753664: 4160,
              819200: 2147483648,
              884736: 4194368,
              950272: 4198464,
              1015808: 2147483712,
              1048576: 4194368,
              1114112: 4198400,
              1179648: 2147483712,
              1245184: 0,
              1310720: 4160,
              1376256: 2151678016,
              1441792: 2151682048,
              1507328: 2147487808,
              1572864: 2151682112,
              1638400: 2147483648,
              1703936: 2151677952,
              1769472: 4198464,
              1835008: 2147487744,
              1900544: 4194304,
              1966080: 64,
              2031616: 4096,
              1081344: 2151677952,
              1146880: 2151682112,
              1212416: 0,
              1277952: 4198400,
              1343488: 4194368,
              1409024: 2147483648,
              1474560: 2147487808,
              1540096: 64,
              1605632: 2147483712,
              1671168: 4096,
              1736704: 2147487744,
              1802240: 2151678016,
              1867776: 4160,
              1933312: 2151682048,
              1998848: 4194304,
              2064384: 4198464
            },
            {
              0: 128,
              4096: 17039360,
              8192: 262144,
              12288: 536870912,
              16384: 537133184,
              20480: 16777344,
              24576: 553648256,
              28672: 262272,
              32768: 16777216,
              36864: 537133056,
              40960: 536871040,
              45056: 553910400,
              49152: 553910272,
              53248: 0,
              57344: 17039488,
              61440: 553648128,
              2048: 17039488,
              6144: 553648256,
              10240: 128,
              14336: 17039360,
              18432: 262144,
              22528: 537133184,
              26624: 553910272,
              30720: 536870912,
              34816: 537133056,
              38912: 0,
              43008: 553910400,
              47104: 16777344,
              51200: 536871040,
              55296: 553648128,
              59392: 16777216,
              63488: 262272,
              65536: 262144,
              69632: 128,
              73728: 536870912,
              77824: 553648256,
              81920: 16777344,
              86016: 553910272,
              90112: 537133184,
              94208: 16777216,
              98304: 553910400,
              102400: 553648128,
              106496: 17039360,
              110592: 537133056,
              114688: 262272,
              118784: 536871040,
              122880: 0,
              126976: 17039488,
              67584: 553648256,
              71680: 16777216,
              75776: 17039360,
              79872: 537133184,
              83968: 536870912,
              88064: 17039488,
              92160: 128,
              96256: 553910272,
              100352: 262272,
              104448: 553910400,
              108544: 0,
              112640: 553648128,
              116736: 16777344,
              120832: 262144,
              124928: 537133056,
              129024: 536871040
            },
            {
              0: 268435464,
              256: 8192,
              512: 270532608,
              768: 270540808,
              1024: 268443648,
              1280: 2097152,
              1536: 2097160,
              1792: 268435456,
              2048: 0,
              2304: 268443656,
              2560: 2105344,
              2816: 8,
              3072: 270532616,
              3328: 2105352,
              3584: 8200,
              3840: 270540800,
              128: 270532608,
              384: 270540808,
              640: 8,
              896: 2097152,
              1152: 2105352,
              1408: 268435464,
              1664: 268443648,
              1920: 8200,
              2176: 2097160,
              2432: 8192,
              2688: 268443656,
              2944: 270532616,
              3200: 0,
              3456: 270540800,
              3712: 2105344,
              3968: 268435456,
              4096: 268443648,
              4352: 270532616,
              4608: 270540808,
              4864: 8200,
              5120: 2097152,
              5376: 268435456,
              5632: 268435464,
              5888: 2105344,
              6144: 2105352,
              6400: 0,
              6656: 8,
              6912: 270532608,
              7168: 8192,
              7424: 268443656,
              7680: 270540800,
              7936: 2097160,
              4224: 8,
              4480: 2105344,
              4736: 2097152,
              4992: 268435464,
              5248: 268443648,
              5504: 8200,
              5760: 270540808,
              6016: 270532608,
              6272: 270540800,
              6528: 270532616,
              6784: 8192,
              7040: 2105352,
              7296: 2097160,
              7552: 0,
              7808: 268435456,
              8064: 268443656
            },
            {
              0: 1048576,
              16: 33555457,
              32: 1024,
              48: 1049601,
              64: 34604033,
              80: 0,
              96: 1,
              112: 34603009,
              128: 33555456,
              144: 1048577,
              160: 33554433,
              176: 34604032,
              192: 34603008,
              208: 1025,
              224: 1049600,
              240: 33554432,
              8: 34603009,
              24: 0,
              40: 33555457,
              56: 34604032,
              72: 1048576,
              88: 33554433,
              104: 33554432,
              120: 1025,
              136: 1049601,
              152: 33555456,
              168: 34603008,
              184: 1048577,
              200: 1024,
              216: 34604033,
              232: 1,
              248: 1049600,
              256: 33554432,
              272: 1048576,
              288: 33555457,
              304: 34603009,
              320: 1048577,
              336: 33555456,
              352: 34604032,
              368: 1049601,
              384: 1025,
              400: 34604033,
              416: 1049600,
              432: 1,
              448: 0,
              464: 34603008,
              480: 33554433,
              496: 1024,
              264: 1049600,
              280: 33555457,
              296: 34603009,
              312: 1,
              328: 33554432,
              344: 1048576,
              360: 1025,
              376: 34604032,
              392: 33554433,
              408: 34603008,
              424: 0,
              440: 34604033,
              456: 1049601,
              472: 1024,
              488: 33555456,
              504: 1048577
            },
            {
              0: 134219808,
              1: 131072,
              2: 134217728,
              3: 32,
              4: 131104,
              5: 134350880,
              6: 134350848,
              7: 2048,
              8: 134348800,
              9: 134219776,
              10: 133120,
              11: 134348832,
              12: 2080,
              13: 0,
              14: 134217760,
              15: 133152,
              2147483648: 2048,
              2147483649: 134350880,
              2147483650: 134219808,
              2147483651: 134217728,
              2147483652: 134348800,
              2147483653: 133120,
              2147483654: 133152,
              2147483655: 32,
              2147483656: 134217760,
              2147483657: 2080,
              2147483658: 131104,
              2147483659: 134350848,
              2147483660: 0,
              2147483661: 134348832,
              2147483662: 134219776,
              2147483663: 131072,
              16: 133152,
              17: 134350848,
              18: 32,
              19: 2048,
              20: 134219776,
              21: 134217760,
              22: 134348832,
              23: 131072,
              24: 0,
              25: 131104,
              26: 134348800,
              27: 134219808,
              28: 134350880,
              29: 133120,
              30: 2080,
              31: 134217728,
              2147483664: 131072,
              2147483665: 2048,
              2147483666: 134348832,
              2147483667: 133152,
              2147483668: 32,
              2147483669: 134348800,
              2147483670: 134217728,
              2147483671: 134219808,
              2147483672: 134350880,
              2147483673: 134217760,
              2147483674: 134219776,
              2147483675: 0,
              2147483676: 133120,
              2147483677: 2080,
              2147483678: 131104,
              2147483679: 134350848
            }
          ];
          var SBOX_MASK = [
            4160749569,
            528482304,
            33030144,
            2064384,
            129024,
            8064,
            504,
            2147483679
          ];
          var DES = C_algo.DES = BlockCipher.extend({
            _doReset: function() {
              var key = this._key;
              var keyWords = key.words;
              var keyBits = [];
              for (var i2 = 0; i2 < 56; i2++) {
                var keyBitPos = PC1[i2] - 1;
                keyBits[i2] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
              }
              var subKeys = this._subKeys = [];
              for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
                var subKey = subKeys[nSubKey] = [];
                var bitShift = BIT_SHIFTS[nSubKey];
                for (var i2 = 0; i2 < 24; i2++) {
                  subKey[i2 / 6 | 0] |= keyBits[(PC2[i2] - 1 + bitShift) % 28] << 31 - i2 % 6;
                  subKey[4 + (i2 / 6 | 0)] |= keyBits[28 + (PC2[i2 + 24] - 1 + bitShift) % 28] << 31 - i2 % 6;
                }
                subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
                for (var i2 = 1; i2 < 7; i2++) {
                  subKey[i2] = subKey[i2] >>> (i2 - 1) * 4 + 3;
                }
                subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
              }
              var invSubKeys = this._invSubKeys = [];
              for (var i2 = 0; i2 < 16; i2++) {
                invSubKeys[i2] = subKeys[15 - i2];
              }
            },
            encryptBlock: function(M2, offset) {
              this._doCryptBlock(M2, offset, this._subKeys);
            },
            decryptBlock: function(M2, offset) {
              this._doCryptBlock(M2, offset, this._invSubKeys);
            },
            _doCryptBlock: function(M2, offset, subKeys) {
              this._lBlock = M2[offset];
              this._rBlock = M2[offset + 1];
              exchangeLR.call(this, 4, 252645135);
              exchangeLR.call(this, 16, 65535);
              exchangeRL.call(this, 2, 858993459);
              exchangeRL.call(this, 8, 16711935);
              exchangeLR.call(this, 1, 1431655765);
              for (var round = 0; round < 16; round++) {
                var subKey = subKeys[round];
                var lBlock = this._lBlock;
                var rBlock = this._rBlock;
                var f2 = 0;
                for (var i2 = 0; i2 < 8; i2++) {
                  f2 |= SBOX_P[i2][((rBlock ^ subKey[i2]) & SBOX_MASK[i2]) >>> 0];
                }
                this._lBlock = rBlock;
                this._rBlock = lBlock ^ f2;
              }
              var t2 = this._lBlock;
              this._lBlock = this._rBlock;
              this._rBlock = t2;
              exchangeLR.call(this, 1, 1431655765);
              exchangeRL.call(this, 8, 16711935);
              exchangeRL.call(this, 2, 858993459);
              exchangeLR.call(this, 16, 65535);
              exchangeLR.call(this, 4, 252645135);
              M2[offset] = this._lBlock;
              M2[offset + 1] = this._rBlock;
            },
            keySize: 64 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32
          });
          function exchangeLR(offset, mask) {
            var t2 = (this._lBlock >>> offset ^ this._rBlock) & mask;
            this._rBlock ^= t2;
            this._lBlock ^= t2 << offset;
          }
          function exchangeRL(offset, mask) {
            var t2 = (this._rBlock >>> offset ^ this._lBlock) & mask;
            this._lBlock ^= t2;
            this._rBlock ^= t2 << offset;
          }
          C2.DES = BlockCipher._createHelper(DES);
          var TripleDES = C_algo.TripleDES = BlockCipher.extend({
            _doReset: function() {
              var key = this._key;
              var keyWords = key.words;
              if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
                throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
              }
              var key1 = keyWords.slice(0, 2);
              var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
              var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
              this._des1 = DES.createEncryptor(WordArray.create(key1));
              this._des2 = DES.createEncryptor(WordArray.create(key2));
              this._des3 = DES.createEncryptor(WordArray.create(key3));
            },
            encryptBlock: function(M2, offset) {
              this._des1.encryptBlock(M2, offset);
              this._des2.decryptBlock(M2, offset);
              this._des3.encryptBlock(M2, offset);
            },
            decryptBlock: function(M2, offset) {
              this._des3.decryptBlock(M2, offset);
              this._des2.encryptBlock(M2, offset);
              this._des1.decryptBlock(M2, offset);
            },
            keySize: 192 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32
          });
          C2.TripleDES = BlockCipher._createHelper(TripleDES);
        })();
        return CryptoJS2.TripleDES;
      });
    })(tripledes);
    return tripledes.exports;
  }
  var rc4 = { exports: {} };
  var hasRequiredRc4;
  function requireRc4() {
    if (hasRequiredRc4)
      return rc4.exports;
    hasRequiredRc4 = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C2.algo;
          var RC4 = C_algo.RC4 = StreamCipher.extend({
            _doReset: function() {
              var key = this._key;
              var keyWords = key.words;
              var keySigBytes = key.sigBytes;
              var S2 = this._S = [];
              for (var i2 = 0; i2 < 256; i2++) {
                S2[i2] = i2;
              }
              for (var i2 = 0, j2 = 0; i2 < 256; i2++) {
                var keyByteIndex = i2 % keySigBytes;
                var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
                j2 = (j2 + S2[i2] + keyByte) % 256;
                var t2 = S2[i2];
                S2[i2] = S2[j2];
                S2[j2] = t2;
              }
              this._i = this._j = 0;
            },
            _doProcessBlock: function(M2, offset) {
              M2[offset] ^= generateKeystreamWord.call(this);
            },
            keySize: 256 / 32,
            ivSize: 0
          });
          function generateKeystreamWord() {
            var S2 = this._S;
            var i2 = this._i;
            var j2 = this._j;
            var keystreamWord = 0;
            for (var n2 = 0; n2 < 4; n2++) {
              i2 = (i2 + 1) % 256;
              j2 = (j2 + S2[i2]) % 256;
              var t2 = S2[i2];
              S2[i2] = S2[j2];
              S2[j2] = t2;
              keystreamWord |= S2[(S2[i2] + S2[j2]) % 256] << 24 - n2 * 8;
            }
            this._i = i2;
            this._j = j2;
            return keystreamWord;
          }
          C2.RC4 = StreamCipher._createHelper(RC4);
          var RC4Drop = C_algo.RC4Drop = RC4.extend({
            /**
             * Configuration options.
             *
             * @property {number} drop The number of keystream words to drop. Default 192
             */
            cfg: RC4.cfg.extend({
              drop: 192
            }),
            _doReset: function() {
              RC4._doReset.call(this);
              for (var i2 = this.cfg.drop; i2 > 0; i2--) {
                generateKeystreamWord.call(this);
              }
            }
          });
          C2.RC4Drop = StreamCipher._createHelper(RC4Drop);
        })();
        return CryptoJS2.RC4;
      });
    })(rc4);
    return rc4.exports;
  }
  var rabbit = { exports: {} };
  var hasRequiredRabbit;
  function requireRabbit() {
    if (hasRequiredRabbit)
      return rabbit.exports;
    hasRequiredRabbit = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C2.algo;
          var S2 = [];
          var C_ = [];
          var G2 = [];
          var Rabbit = C_algo.Rabbit = StreamCipher.extend({
            _doReset: function() {
              var K2 = this._key.words;
              var iv = this.cfg.iv;
              for (var i2 = 0; i2 < 4; i2++) {
                K2[i2] = (K2[i2] << 8 | K2[i2] >>> 24) & 16711935 | (K2[i2] << 24 | K2[i2] >>> 8) & 4278255360;
              }
              var X2 = this._X = [
                K2[0],
                K2[3] << 16 | K2[2] >>> 16,
                K2[1],
                K2[0] << 16 | K2[3] >>> 16,
                K2[2],
                K2[1] << 16 | K2[0] >>> 16,
                K2[3],
                K2[2] << 16 | K2[1] >>> 16
              ];
              var C3 = this._C = [
                K2[2] << 16 | K2[2] >>> 16,
                K2[0] & 4294901760 | K2[1] & 65535,
                K2[3] << 16 | K2[3] >>> 16,
                K2[1] & 4294901760 | K2[2] & 65535,
                K2[0] << 16 | K2[0] >>> 16,
                K2[2] & 4294901760 | K2[3] & 65535,
                K2[1] << 16 | K2[1] >>> 16,
                K2[3] & 4294901760 | K2[0] & 65535
              ];
              this._b = 0;
              for (var i2 = 0; i2 < 4; i2++) {
                nextState.call(this);
              }
              for (var i2 = 0; i2 < 8; i2++) {
                C3[i2] ^= X2[i2 + 4 & 7];
              }
              if (iv) {
                var IV = iv.words;
                var IV_0 = IV[0];
                var IV_1 = IV[1];
                var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
                var i22 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
                var i1 = i0 >>> 16 | i22 & 4294901760;
                var i3 = i22 << 16 | i0 & 65535;
                C3[0] ^= i0;
                C3[1] ^= i1;
                C3[2] ^= i22;
                C3[3] ^= i3;
                C3[4] ^= i0;
                C3[5] ^= i1;
                C3[6] ^= i22;
                C3[7] ^= i3;
                for (var i2 = 0; i2 < 4; i2++) {
                  nextState.call(this);
                }
              }
            },
            _doProcessBlock: function(M2, offset) {
              var X2 = this._X;
              nextState.call(this);
              S2[0] = X2[0] ^ X2[5] >>> 16 ^ X2[3] << 16;
              S2[1] = X2[2] ^ X2[7] >>> 16 ^ X2[5] << 16;
              S2[2] = X2[4] ^ X2[1] >>> 16 ^ X2[7] << 16;
              S2[3] = X2[6] ^ X2[3] >>> 16 ^ X2[1] << 16;
              for (var i2 = 0; i2 < 4; i2++) {
                S2[i2] = (S2[i2] << 8 | S2[i2] >>> 24) & 16711935 | (S2[i2] << 24 | S2[i2] >>> 8) & 4278255360;
                M2[offset + i2] ^= S2[i2];
              }
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32
          });
          function nextState() {
            var X2 = this._X;
            var C3 = this._C;
            for (var i2 = 0; i2 < 8; i2++) {
              C_[i2] = C3[i2];
            }
            C3[0] = C3[0] + 1295307597 + this._b | 0;
            C3[1] = C3[1] + 3545052371 + (C3[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
            C3[2] = C3[2] + 886263092 + (C3[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
            C3[3] = C3[3] + 1295307597 + (C3[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
            C3[4] = C3[4] + 3545052371 + (C3[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
            C3[5] = C3[5] + 886263092 + (C3[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
            C3[6] = C3[6] + 1295307597 + (C3[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
            C3[7] = C3[7] + 3545052371 + (C3[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
            this._b = C3[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
            for (var i2 = 0; i2 < 8; i2++) {
              var gx = X2[i2] + C3[i2];
              var ga = gx & 65535;
              var gb = gx >>> 16;
              var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
              var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
              G2[i2] = gh ^ gl;
            }
            X2[0] = G2[0] + (G2[7] << 16 | G2[7] >>> 16) + (G2[6] << 16 | G2[6] >>> 16) | 0;
            X2[1] = G2[1] + (G2[0] << 8 | G2[0] >>> 24) + G2[7] | 0;
            X2[2] = G2[2] + (G2[1] << 16 | G2[1] >>> 16) + (G2[0] << 16 | G2[0] >>> 16) | 0;
            X2[3] = G2[3] + (G2[2] << 8 | G2[2] >>> 24) + G2[1] | 0;
            X2[4] = G2[4] + (G2[3] << 16 | G2[3] >>> 16) + (G2[2] << 16 | G2[2] >>> 16) | 0;
            X2[5] = G2[5] + (G2[4] << 8 | G2[4] >>> 24) + G2[3] | 0;
            X2[6] = G2[6] + (G2[5] << 16 | G2[5] >>> 16) + (G2[4] << 16 | G2[4] >>> 16) | 0;
            X2[7] = G2[7] + (G2[6] << 8 | G2[6] >>> 24) + G2[5] | 0;
          }
          C2.Rabbit = StreamCipher._createHelper(Rabbit);
        })();
        return CryptoJS2.Rabbit;
      });
    })(rabbit);
    return rabbit.exports;
  }
  var rabbitLegacy = { exports: {} };
  var hasRequiredRabbitLegacy;
  function requireRabbitLegacy() {
    if (hasRequiredRabbitLegacy)
      return rabbitLegacy.exports;
    hasRequiredRabbitLegacy = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C2.algo;
          var S2 = [];
          var C_ = [];
          var G2 = [];
          var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
            _doReset: function() {
              var K2 = this._key.words;
              var iv = this.cfg.iv;
              var X2 = this._X = [
                K2[0],
                K2[3] << 16 | K2[2] >>> 16,
                K2[1],
                K2[0] << 16 | K2[3] >>> 16,
                K2[2],
                K2[1] << 16 | K2[0] >>> 16,
                K2[3],
                K2[2] << 16 | K2[1] >>> 16
              ];
              var C3 = this._C = [
                K2[2] << 16 | K2[2] >>> 16,
                K2[0] & 4294901760 | K2[1] & 65535,
                K2[3] << 16 | K2[3] >>> 16,
                K2[1] & 4294901760 | K2[2] & 65535,
                K2[0] << 16 | K2[0] >>> 16,
                K2[2] & 4294901760 | K2[3] & 65535,
                K2[1] << 16 | K2[1] >>> 16,
                K2[3] & 4294901760 | K2[0] & 65535
              ];
              this._b = 0;
              for (var i2 = 0; i2 < 4; i2++) {
                nextState.call(this);
              }
              for (var i2 = 0; i2 < 8; i2++) {
                C3[i2] ^= X2[i2 + 4 & 7];
              }
              if (iv) {
                var IV = iv.words;
                var IV_0 = IV[0];
                var IV_1 = IV[1];
                var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
                var i22 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
                var i1 = i0 >>> 16 | i22 & 4294901760;
                var i3 = i22 << 16 | i0 & 65535;
                C3[0] ^= i0;
                C3[1] ^= i1;
                C3[2] ^= i22;
                C3[3] ^= i3;
                C3[4] ^= i0;
                C3[5] ^= i1;
                C3[6] ^= i22;
                C3[7] ^= i3;
                for (var i2 = 0; i2 < 4; i2++) {
                  nextState.call(this);
                }
              }
            },
            _doProcessBlock: function(M2, offset) {
              var X2 = this._X;
              nextState.call(this);
              S2[0] = X2[0] ^ X2[5] >>> 16 ^ X2[3] << 16;
              S2[1] = X2[2] ^ X2[7] >>> 16 ^ X2[5] << 16;
              S2[2] = X2[4] ^ X2[1] >>> 16 ^ X2[7] << 16;
              S2[3] = X2[6] ^ X2[3] >>> 16 ^ X2[1] << 16;
              for (var i2 = 0; i2 < 4; i2++) {
                S2[i2] = (S2[i2] << 8 | S2[i2] >>> 24) & 16711935 | (S2[i2] << 24 | S2[i2] >>> 8) & 4278255360;
                M2[offset + i2] ^= S2[i2];
              }
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32
          });
          function nextState() {
            var X2 = this._X;
            var C3 = this._C;
            for (var i2 = 0; i2 < 8; i2++) {
              C_[i2] = C3[i2];
            }
            C3[0] = C3[0] + 1295307597 + this._b | 0;
            C3[1] = C3[1] + 3545052371 + (C3[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
            C3[2] = C3[2] + 886263092 + (C3[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
            C3[3] = C3[3] + 1295307597 + (C3[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
            C3[4] = C3[4] + 3545052371 + (C3[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
            C3[5] = C3[5] + 886263092 + (C3[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
            C3[6] = C3[6] + 1295307597 + (C3[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
            C3[7] = C3[7] + 3545052371 + (C3[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
            this._b = C3[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
            for (var i2 = 0; i2 < 8; i2++) {
              var gx = X2[i2] + C3[i2];
              var ga = gx & 65535;
              var gb = gx >>> 16;
              var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
              var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
              G2[i2] = gh ^ gl;
            }
            X2[0] = G2[0] + (G2[7] << 16 | G2[7] >>> 16) + (G2[6] << 16 | G2[6] >>> 16) | 0;
            X2[1] = G2[1] + (G2[0] << 8 | G2[0] >>> 24) + G2[7] | 0;
            X2[2] = G2[2] + (G2[1] << 16 | G2[1] >>> 16) + (G2[0] << 16 | G2[0] >>> 16) | 0;
            X2[3] = G2[3] + (G2[2] << 8 | G2[2] >>> 24) + G2[1] | 0;
            X2[4] = G2[4] + (G2[3] << 16 | G2[3] >>> 16) + (G2[2] << 16 | G2[2] >>> 16) | 0;
            X2[5] = G2[5] + (G2[4] << 8 | G2[4] >>> 24) + G2[3] | 0;
            X2[6] = G2[6] + (G2[5] << 16 | G2[5] >>> 16) + (G2[4] << 16 | G2[4] >>> 16) | 0;
            X2[7] = G2[7] + (G2[6] << 8 | G2[6] >>> 24) + G2[5] | 0;
          }
          C2.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
        })();
        return CryptoJS2.RabbitLegacy;
      });
    })(rabbitLegacy);
    return rabbitLegacy.exports;
  }
  var blowfish = { exports: {} };
  var hasRequiredBlowfish;
  function requireBlowfish() {
    if (hasRequiredBlowfish)
      return blowfish.exports;
    hasRequiredBlowfish = 1;
    (function(module, exports) {
      (function(root, factory, undef) {
        {
          module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
        }
      })(commonjsGlobal, function(CryptoJS2) {
        (function() {
          var C2 = CryptoJS2;
          var C_lib = C2.lib;
          var BlockCipher = C_lib.BlockCipher;
          var C_algo = C2.algo;
          const N2 = 16;
          const ORIG_P = [
            608135816,
            2242054355,
            320440878,
            57701188,
            2752067618,
            698298832,
            137296536,
            3964562569,
            1160258022,
            953160567,
            3193202383,
            887688300,
            3232508343,
            3380367581,
            1065670069,
            3041331479,
            2450970073,
            2306472731
          ];
          const ORIG_S = [
            [
              3509652390,
              2564797868,
              805139163,
              3491422135,
              3101798381,
              1780907670,
              3128725573,
              4046225305,
              614570311,
              3012652279,
              134345442,
              2240740374,
              1667834072,
              1901547113,
              2757295779,
              4103290238,
              227898511,
              1921955416,
              1904987480,
              2182433518,
              2069144605,
              3260701109,
              2620446009,
              720527379,
              3318853667,
              677414384,
              3393288472,
              3101374703,
              2390351024,
              1614419982,
              1822297739,
              2954791486,
              3608508353,
              3174124327,
              2024746970,
              1432378464,
              3864339955,
              2857741204,
              1464375394,
              1676153920,
              1439316330,
              715854006,
              3033291828,
              289532110,
              2706671279,
              2087905683,
              3018724369,
              1668267050,
              732546397,
              1947742710,
              3462151702,
              2609353502,
              2950085171,
              1814351708,
              2050118529,
              680887927,
              999245976,
              1800124847,
              3300911131,
              1713906067,
              1641548236,
              4213287313,
              1216130144,
              1575780402,
              4018429277,
              3917837745,
              3693486850,
              3949271944,
              596196993,
              3549867205,
              258830323,
              2213823033,
              772490370,
              2760122372,
              1774776394,
              2652871518,
              566650946,
              4142492826,
              1728879713,
              2882767088,
              1783734482,
              3629395816,
              2517608232,
              2874225571,
              1861159788,
              326777828,
              3124490320,
              2130389656,
              2716951837,
              967770486,
              1724537150,
              2185432712,
              2364442137,
              1164943284,
              2105845187,
              998989502,
              3765401048,
              2244026483,
              1075463327,
              1455516326,
              1322494562,
              910128902,
              469688178,
              1117454909,
              936433444,
              3490320968,
              3675253459,
              1240580251,
              122909385,
              2157517691,
              634681816,
              4142456567,
              3825094682,
              3061402683,
              2540495037,
              79693498,
              3249098678,
              1084186820,
              1583128258,
              426386531,
              1761308591,
              1047286709,
              322548459,
              995290223,
              1845252383,
              2603652396,
              3431023940,
              2942221577,
              3202600964,
              3727903485,
              1712269319,
              422464435,
              3234572375,
              1170764815,
              3523960633,
              3117677531,
              1434042557,
              442511882,
              3600875718,
              1076654713,
              1738483198,
              4213154764,
              2393238008,
              3677496056,
              1014306527,
              4251020053,
              793779912,
              2902807211,
              842905082,
              4246964064,
              1395751752,
              1040244610,
              2656851899,
              3396308128,
              445077038,
              3742853595,
              3577915638,
              679411651,
              2892444358,
              2354009459,
              1767581616,
              3150600392,
              3791627101,
              3102740896,
              284835224,
              4246832056,
              1258075500,
              768725851,
              2589189241,
              3069724005,
              3532540348,
              1274779536,
              3789419226,
              2764799539,
              1660621633,
              3471099624,
              4011903706,
              913787905,
              3497959166,
              737222580,
              2514213453,
              2928710040,
              3937242737,
              1804850592,
              3499020752,
              2949064160,
              2386320175,
              2390070455,
              2415321851,
              4061277028,
              2290661394,
              2416832540,
              1336762016,
              1754252060,
              3520065937,
              3014181293,
              791618072,
              3188594551,
              3933548030,
              2332172193,
              3852520463,
              3043980520,
              413987798,
              3465142937,
              3030929376,
              4245938359,
              2093235073,
              3534596313,
              375366246,
              2157278981,
              2479649556,
              555357303,
              3870105701,
              2008414854,
              3344188149,
              4221384143,
              3956125452,
              2067696032,
              3594591187,
              2921233993,
              2428461,
              544322398,
              577241275,
              1471733935,
              610547355,
              4027169054,
              1432588573,
              1507829418,
              2025931657,
              3646575487,
              545086370,
              48609733,
              2200306550,
              1653985193,
              298326376,
              1316178497,
              3007786442,
              2064951626,
              458293330,
              2589141269,
              3591329599,
              3164325604,
              727753846,
              2179363840,
              146436021,
              1461446943,
              4069977195,
              705550613,
              3059967265,
              3887724982,
              4281599278,
              3313849956,
              1404054877,
              2845806497,
              146425753,
              1854211946
            ],
            [
              1266315497,
              3048417604,
              3681880366,
              3289982499,
              290971e4,
              1235738493,
              2632868024,
              2414719590,
              3970600049,
              1771706367,
              1449415276,
              3266420449,
              422970021,
              1963543593,
              2690192192,
              3826793022,
              1062508698,
              1531092325,
              1804592342,
              2583117782,
              2714934279,
              4024971509,
              1294809318,
              4028980673,
              1289560198,
              2221992742,
              1669523910,
              35572830,
              157838143,
              1052438473,
              1016535060,
              1802137761,
              1753167236,
              1386275462,
              3080475397,
              2857371447,
              1040679964,
              2145300060,
              2390574316,
              1461121720,
              2956646967,
              4031777805,
              4028374788,
              33600511,
              2920084762,
              1018524850,
              629373528,
              3691585981,
              3515945977,
              2091462646,
              2486323059,
              586499841,
              988145025,
              935516892,
              3367335476,
              2599673255,
              2839830854,
              265290510,
              3972581182,
              2759138881,
              3795373465,
              1005194799,
              847297441,
              406762289,
              1314163512,
              1332590856,
              1866599683,
              4127851711,
              750260880,
              613907577,
              1450815602,
              3165620655,
              3734664991,
              3650291728,
              3012275730,
              3704569646,
              1427272223,
              778793252,
              1343938022,
              2676280711,
              2052605720,
              1946737175,
              3164576444,
              3914038668,
              3967478842,
              3682934266,
              1661551462,
              3294938066,
              4011595847,
              840292616,
              3712170807,
              616741398,
              312560963,
              711312465,
              1351876610,
              322626781,
              1910503582,
              271666773,
              2175563734,
              1594956187,
              70604529,
              3617834859,
              1007753275,
              1495573769,
              4069517037,
              2549218298,
              2663038764,
              504708206,
              2263041392,
              3941167025,
              2249088522,
              1514023603,
              1998579484,
              1312622330,
              694541497,
              2582060303,
              2151582166,
              1382467621,
              776784248,
              2618340202,
              3323268794,
              2497899128,
              2784771155,
              503983604,
              4076293799,
              907881277,
              423175695,
              432175456,
              1378068232,
              4145222326,
              3954048622,
              3938656102,
              3820766613,
              2793130115,
              2977904593,
              26017576,
              3274890735,
              3194772133,
              1700274565,
              1756076034,
              4006520079,
              3677328699,
              720338349,
              1533947780,
              354530856,
              688349552,
              3973924725,
              1637815568,
              332179504,
              3949051286,
              53804574,
              2852348879,
              3044236432,
              1282449977,
              3583942155,
              3416972820,
              4006381244,
              1617046695,
              2628476075,
              3002303598,
              1686838959,
              431878346,
              2686675385,
              1700445008,
              1080580658,
              1009431731,
              832498133,
              3223435511,
              2605976345,
              2271191193,
              2516031870,
              1648197032,
              4164389018,
              2548247927,
              300782431,
              375919233,
              238389289,
              3353747414,
              2531188641,
              2019080857,
              1475708069,
              455242339,
              2609103871,
              448939670,
              3451063019,
              1395535956,
              2413381860,
              1841049896,
              1491858159,
              885456874,
              4264095073,
              4001119347,
              1565136089,
              3898914787,
              1108368660,
              540939232,
              1173283510,
              2745871338,
              3681308437,
              4207628240,
              3343053890,
              4016749493,
              1699691293,
              1103962373,
              3625875870,
              2256883143,
              3830138730,
              1031889488,
              3479347698,
              1535977030,
              4236805024,
              3251091107,
              2132092099,
              1774941330,
              1199868427,
              1452454533,
              157007616,
              2904115357,
              342012276,
              595725824,
              1480756522,
              206960106,
              497939518,
              591360097,
              863170706,
              2375253569,
              3596610801,
              1814182875,
              2094937945,
              3421402208,
              1082520231,
              3463918190,
              2785509508,
              435703966,
              3908032597,
              1641649973,
              2842273706,
              3305899714,
              1510255612,
              2148256476,
              2655287854,
              3276092548,
              4258621189,
              236887753,
              3681803219,
              274041037,
              1734335097,
              3815195456,
              3317970021,
              1899903192,
              1026095262,
              4050517792,
              356393447,
              2410691914,
              3873677099,
              3682840055
            ],
            [
              3913112168,
              2491498743,
              4132185628,
              2489919796,
              1091903735,
              1979897079,
              3170134830,
              3567386728,
              3557303409,
              857797738,
              1136121015,
              1342202287,
              507115054,
              2535736646,
              337727348,
              3213592640,
              1301675037,
              2528481711,
              1895095763,
              1721773893,
              3216771564,
              62756741,
              2142006736,
              835421444,
              2531993523,
              1442658625,
              3659876326,
              2882144922,
              676362277,
              1392781812,
              170690266,
              3921047035,
              1759253602,
              3611846912,
              1745797284,
              664899054,
              1329594018,
              3901205900,
              3045908486,
              2062866102,
              2865634940,
              3543621612,
              3464012697,
              1080764994,
              553557557,
              3656615353,
              3996768171,
              991055499,
              499776247,
              1265440854,
              648242737,
              3940784050,
              980351604,
              3713745714,
              1749149687,
              3396870395,
              4211799374,
              3640570775,
              1161844396,
              3125318951,
              1431517754,
              545492359,
              4268468663,
              3499529547,
              1437099964,
              2702547544,
              3433638243,
              2581715763,
              2787789398,
              1060185593,
              1593081372,
              2418618748,
              4260947970,
              69676912,
              2159744348,
              86519011,
              2512459080,
              3838209314,
              1220612927,
              3339683548,
              133810670,
              1090789135,
              1078426020,
              1569222167,
              845107691,
              3583754449,
              4072456591,
              1091646820,
              628848692,
              1613405280,
              3757631651,
              526609435,
              236106946,
              48312990,
              2942717905,
              3402727701,
              1797494240,
              859738849,
              992217954,
              4005476642,
              2243076622,
              3870952857,
              3732016268,
              765654824,
              3490871365,
              2511836413,
              1685915746,
              3888969200,
              1414112111,
              2273134842,
              3281911079,
              4080962846,
              172450625,
              2569994100,
              980381355,
              4109958455,
              2819808352,
              2716589560,
              2568741196,
              3681446669,
              3329971472,
              1835478071,
              660984891,
              3704678404,
              4045999559,
              3422617507,
              3040415634,
              1762651403,
              1719377915,
              3470491036,
              2693910283,
              3642056355,
              3138596744,
              1364962596,
              2073328063,
              1983633131,
              926494387,
              3423689081,
              2150032023,
              4096667949,
              1749200295,
              3328846651,
              309677260,
              2016342300,
              1779581495,
              3079819751,
              111262694,
              1274766160,
              443224088,
              298511866,
              1025883608,
              3806446537,
              1145181785,
              168956806,
              3641502830,
              3584813610,
              1689216846,
              3666258015,
              3200248200,
              1692713982,
              2646376535,
              4042768518,
              1618508792,
              1610833997,
              3523052358,
              4130873264,
              2001055236,
              3610705100,
              2202168115,
              4028541809,
              2961195399,
              1006657119,
              2006996926,
              3186142756,
              1430667929,
              3210227297,
              1314452623,
              4074634658,
              4101304120,
              2273951170,
              1399257539,
              3367210612,
              3027628629,
              1190975929,
              2062231137,
              2333990788,
              2221543033,
              2438960610,
              1181637006,
              548689776,
              2362791313,
              3372408396,
              3104550113,
              3145860560,
              296247880,
              1970579870,
              3078560182,
              3769228297,
              1714227617,
              3291629107,
              3898220290,
              166772364,
              1251581989,
              493813264,
              448347421,
              195405023,
              2709975567,
              677966185,
              3703036547,
              1463355134,
              2715995803,
              1338867538,
              1343315457,
              2802222074,
              2684532164,
              233230375,
              2599980071,
              2000651841,
              3277868038,
              1638401717,
              4028070440,
              3237316320,
              6314154,
              819756386,
              300326615,
              590932579,
              1405279636,
              3267499572,
              3150704214,
              2428286686,
              3959192993,
              3461946742,
              1862657033,
              1266418056,
              963775037,
              2089974820,
              2263052895,
              1917689273,
              448879540,
              3550394620,
              3981727096,
              150775221,
              3627908307,
              1303187396,
              508620638,
              2975983352,
              2726630617,
              1817252668,
              1876281319,
              1457606340,
              908771278,
              3720792119,
              3617206836,
              2455994898,
              1729034894,
              1080033504
            ],
            [
              976866871,
              3556439503,
              2881648439,
              1522871579,
              1555064734,
              1336096578,
              3548522304,
              2579274686,
              3574697629,
              3205460757,
              3593280638,
              3338716283,
              3079412587,
              564236357,
              2993598910,
              1781952180,
              1464380207,
              3163844217,
              3332601554,
              1699332808,
              1393555694,
              1183702653,
              3581086237,
              1288719814,
              691649499,
              2847557200,
              2895455976,
              3193889540,
              2717570544,
              1781354906,
              1676643554,
              2592534050,
              3230253752,
              1126444790,
              2770207658,
              2633158820,
              2210423226,
              2615765581,
              2414155088,
              3127139286,
              673620729,
              2805611233,
              1269405062,
              4015350505,
              3341807571,
              4149409754,
              1057255273,
              2012875353,
              2162469141,
              2276492801,
              2601117357,
              993977747,
              3918593370,
              2654263191,
              753973209,
              36408145,
              2530585658,
              25011837,
              3520020182,
              2088578344,
              530523599,
              2918365339,
              1524020338,
              1518925132,
              3760827505,
              3759777254,
              1202760957,
              3985898139,
              3906192525,
              674977740,
              4174734889,
              2031300136,
              2019492241,
              3983892565,
              4153806404,
              3822280332,
              352677332,
              2297720250,
              60907813,
              90501309,
              3286998549,
              1016092578,
              2535922412,
              2839152426,
              457141659,
              509813237,
              4120667899,
              652014361,
              1966332200,
              2975202805,
              55981186,
              2327461051,
              676427537,
              3255491064,
              2882294119,
              3433927263,
              1307055953,
              942726286,
              933058658,
              2468411793,
              3933900994,
              4215176142,
              1361170020,
              2001714738,
              2830558078,
              3274259782,
              1222529897,
              1679025792,
              2729314320,
              3714953764,
              1770335741,
              151462246,
              3013232138,
              1682292957,
              1483529935,
              471910574,
              1539241949,
              458788160,
              3436315007,
              1807016891,
              3718408830,
              978976581,
              1043663428,
              3165965781,
              1927990952,
              4200891579,
              2372276910,
              3208408903,
              3533431907,
              1412390302,
              2931980059,
              4132332400,
              1947078029,
              3881505623,
              4168226417,
              2941484381,
              1077988104,
              1320477388,
              886195818,
              18198404,
              3786409e3,
              2509781533,
              112762804,
              3463356488,
              1866414978,
              891333506,
              18488651,
              661792760,
              1628790961,
              3885187036,
              3141171499,
              876946877,
              2693282273,
              1372485963,
              791857591,
              2686433993,
              3759982718,
              3167212022,
              3472953795,
              2716379847,
              445679433,
              3561995674,
              3504004811,
              3574258232,
              54117162,
              3331405415,
              2381918588,
              3769707343,
              4154350007,
              1140177722,
              4074052095,
              668550556,
              3214352940,
              367459370,
              261225585,
              2610173221,
              4209349473,
              3468074219,
              3265815641,
              314222801,
              3066103646,
              3808782860,
              282218597,
              3406013506,
              3773591054,
              379116347,
              1285071038,
              846784868,
              2669647154,
              3771962079,
              3550491691,
              2305946142,
              453669953,
              1268987020,
              3317592352,
              3279303384,
              3744833421,
              2610507566,
              3859509063,
              266596637,
              3847019092,
              517658769,
              3462560207,
              3443424879,
              370717030,
              4247526661,
              2224018117,
              4143653529,
              4112773975,
              2788324899,
              2477274417,
              1456262402,
              2901442914,
              1517677493,
              1846949527,
              2295493580,
              3734397586,
              2176403920,
              1280348187,
              1908823572,
              3871786941,
              846861322,
              1172426758,
              3287448474,
              3383383037,
              1655181056,
              3139813346,
              901632758,
              1897031941,
              2986607138,
              3066810236,
              3447102507,
              1393639104,
              373351379,
              950779232,
              625454576,
              3124240540,
              4148612726,
              2007998917,
              544563296,
              2244738638,
              2330496472,
              2058025392,
              1291430526,
              424198748,
              50039436,
              29584100,
              3605783033,
              2429876329,
              2791104160,
              1057563949,
              3255363231,
              3075367218,
              3463963227,
              1469046755,
              985887462
            ]
          ];
          var BLOWFISH_CTX = {
            pbox: [],
            sbox: []
          };
          function F2(ctx, x) {
            let a2 = x >> 24 & 255;
            let b2 = x >> 16 & 255;
            let c2 = x >> 8 & 255;
            let d2 = x & 255;
            let y2 = ctx.sbox[0][a2] + ctx.sbox[1][b2];
            y2 = y2 ^ ctx.sbox[2][c2];
            y2 = y2 + ctx.sbox[3][d2];
            return y2;
          }
          function BlowFish_Encrypt(ctx, left, right) {
            let Xl = left;
            let Xr = right;
            let temp;
            for (let i2 = 0; i2 < N2; ++i2) {
              Xl = Xl ^ ctx.pbox[i2];
              Xr = F2(ctx, Xl) ^ Xr;
              temp = Xl;
              Xl = Xr;
              Xr = temp;
            }
            temp = Xl;
            Xl = Xr;
            Xr = temp;
            Xr = Xr ^ ctx.pbox[N2];
            Xl = Xl ^ ctx.pbox[N2 + 1];
            return { left: Xl, right: Xr };
          }
          function BlowFish_Decrypt(ctx, left, right) {
            let Xl = left;
            let Xr = right;
            let temp;
            for (let i2 = N2 + 1; i2 > 1; --i2) {
              Xl = Xl ^ ctx.pbox[i2];
              Xr = F2(ctx, Xl) ^ Xr;
              temp = Xl;
              Xl = Xr;
              Xr = temp;
            }
            temp = Xl;
            Xl = Xr;
            Xr = temp;
            Xr = Xr ^ ctx.pbox[1];
            Xl = Xl ^ ctx.pbox[0];
            return { left: Xl, right: Xr };
          }
          function BlowFishInit(ctx, key, keysize) {
            for (let Row = 0; Row < 4; Row++) {
              ctx.sbox[Row] = [];
              for (let Col = 0; Col < 256; Col++) {
                ctx.sbox[Row][Col] = ORIG_S[Row][Col];
              }
            }
            let keyIndex = 0;
            for (let index = 0; index < N2 + 2; index++) {
              ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
              keyIndex++;
              if (keyIndex >= keysize) {
                keyIndex = 0;
              }
            }
            let Data1 = 0;
            let Data2 = 0;
            let res = 0;
            for (let i2 = 0; i2 < N2 + 2; i2 += 2) {
              res = BlowFish_Encrypt(ctx, Data1, Data2);
              Data1 = res.left;
              Data2 = res.right;
              ctx.pbox[i2] = Data1;
              ctx.pbox[i2 + 1] = Data2;
            }
            for (let i2 = 0; i2 < 4; i2++) {
              for (let j2 = 0; j2 < 256; j2 += 2) {
                res = BlowFish_Encrypt(ctx, Data1, Data2);
                Data1 = res.left;
                Data2 = res.right;
                ctx.sbox[i2][j2] = Data1;
                ctx.sbox[i2][j2 + 1] = Data2;
              }
            }
            return true;
          }
          var Blowfish = C_algo.Blowfish = BlockCipher.extend({
            _doReset: function() {
              if (this._keyPriorReset === this._key) {
                return;
              }
              var key = this._keyPriorReset = this._key;
              var keyWords = key.words;
              var keySize = key.sigBytes / 4;
              BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
            },
            encryptBlock: function(M2, offset) {
              var res = BlowFish_Encrypt(BLOWFISH_CTX, M2[offset], M2[offset + 1]);
              M2[offset] = res.left;
              M2[offset + 1] = res.right;
            },
            decryptBlock: function(M2, offset) {
              var res = BlowFish_Decrypt(BLOWFISH_CTX, M2[offset], M2[offset + 1]);
              M2[offset] = res.left;
              M2[offset + 1] = res.right;
            },
            blockSize: 64 / 32,
            keySize: 128 / 32,
            ivSize: 64 / 32
          });
          C2.Blowfish = BlockCipher._createHelper(Blowfish);
        })();
        return CryptoJS2.Blowfish;
      });
    })(blowfish);
    return blowfish.exports;
  }
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireX64Core(), requireLibTypedarrays(), requireEncUtf16(), requireEncBase64(), requireEncBase64url(), requireMd5(), requireSha1(), requireSha256(), requireSha224(), requireSha512(), requireSha384(), requireSha3(), requireRipemd160(), requireHmac(), requirePbkdf2(), requireEvpkdf(), requireCipherCore(), requireModeCfb(), requireModeCtr(), requireModeCtrGladman(), requireModeOfb(), requireModeEcb(), requirePadAnsix923(), requirePadIso10126(), requirePadIso97971(), requirePadZeropadding(), requirePadNopadding(), requireFormatHex(), requireAes(), requireTripledes(), requireRc4(), requireRabbit(), requireRabbitLegacy(), requireBlowfish());
      }
    })(commonjsGlobal, function(CryptoJS2) {
      return CryptoJS2;
    });
  })(cryptoJs);
  var cryptoJsExports = cryptoJs.exports;
  const CryptoJS = /* @__PURE__ */ getDefaultExportFromCjs(cryptoJsExports);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$6 = {
    __name: "ClassView",
    setup(__props, { expose: __expose }) {
      __expose();
      const list = vue.ref([]);
      function encryptByAES(message) {
        const chaoxingkey = "u2oh6Vu^HWe4_AES";
        const utf8Key = CryptoJS.enc.Utf8.parse(chaoxingkey);
        const utf8Iv = CryptoJS.enc.Utf8.parse(chaoxingkey);
        const encrypted = CryptoJS.AES.encrypt(message, utf8Key, {
          iv: utf8Iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
          // 关键：避免 CryptoJS 自动派生密钥
        });
        return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
      }
      onPullDownRefresh(async () => {
        formatAppLog("log", "at pages/ClassView.vue:60", "触发下拉刷新");
        let coooo = uni.getStorageSync("CHAOXING_COOKIE");
        await fetchData(coooo);
        uni.showToast({
          icon: "success",
          title: "刷新成功"
        });
        uni.stopPullDownRefresh();
      });
      const getcookie = (username, password) => {
        return new Promise((resolve, reject) => {
          const eusername = encryptByAES(username);
          const epassword = encryptByAES(password);
          formatAppLog("log", "at pages/ClassView.vue:79", "加密后的用户名:", eusername);
          formatAppLog("log", "at pages/ClassView.vue:80", "加密后的密码:", epassword);
          uni.request({
            url: "https://passport2.chaoxing.com/fanyalogin",
            method: "POST",
            data: {
              "fid": "-1",
              "uname": eusername,
              "password": epassword,
              "refer": "http://i.mooc.chaoxing.com",
              "t": "true",
              "forbidotherlogin": "0",
              "validate": "",
              "doubleFactorLogin": "0",
              "independentId": "0",
              "independentNameId": "0"
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Requested-With": "XMLHttpRequest"
            },
            success: (res) => {
              const setCookie = res.cookies;
              if (!setCookie || setCookie.length === 0) {
                return reject("登录失败，未返回 Cookie");
              }
              const cookieStr = setCookie.map((cookie) => {
                const trimmed = cookie.trim();
                const end = trimmed.indexOf(";");
                return end > -1 ? trimmed.substring(0, end) : trimmed;
              }).filter(Boolean).join("; ");
              uni.setStorageSync("CHAOXING_COOKIE", cookieStr);
              resolve(cookieStr);
            },
            fail: (err) => {
              reject(err);
            }
          });
        });
      };
      const fetchData = (coo) => {
        uni.request({
          url: "http://mooc1-api.chaoxing.com/mycourse/backclazzdata",
          header: {
            "Cookie": coo
          },
          success: (res) => {
            list.value = res.data;
            formatAppLog("log", "at pages/ClassView.vue:133", "✅ 请求成功", res.data);
          },
          fail(err) {
            formatAppLog("log", "at pages/ClassView.vue:136", "❌ 请求失败，准备重试...", err);
            uni.showToast({
              title: "请求失败.",
              icon: "none",
              duration: 2e3
            });
          }
        });
      };
      function isTokenExpired(token) {
        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          const exp = payload.exp * 1e3;
          return Date.now() > exp;
        } catch (e2) {
          formatAppLog("error", "at pages/ClassView.vue:153", "Token 解码失败", e2);
          return true;
        }
      }
      const filteredCourses = vue.computed(() => {
        var _a;
        if (!((_a = list.value) == null ? void 0 : _a.channelList))
          return [];
        return list.value.channelList.filter((item) => {
          var _a2, _b;
          return ((_b = (_a2 = item.content) == null ? void 0 : _a2.course) == null ? void 0 : _b.data) && Array.isArray(item.content.course.data) && item.content.course.data.length > 0;
        }).map((item) => {
          const content = item.content;
          const course = content.course.data[0];
          return {
            clazzId: String(content.id),
            // 班级 ID
            courseId: String(course.id),
            // 课程 ID
            courseName: course.name,
            // 课程名称
            teacher: course.teacherfactor,
            // 授课教师
            imageUrl: course.imageurl
            // 加入的图片 URL
          };
        });
      });
      const activeTab = vue.ref("class");
      const toClassActive = (item) => {
        uni.navigateTo({
          url: `/pages/ClassActive?courseId=${item.courseId}&clazzId=${item.clazzId}`
        });
      };
      vue.onMounted(
        async () => {
          var _a, _b;
          let cookie = uni.getStorageSync("CHAOXING_COOKIE");
          const pAuthToken = (_a = cookie.match(/p_auth_token=([^;]+)/)) == null ? void 0 : _a[1];
          if (!cookie) {
            uni.showToast({
              icon: "none",
              title: "请先在【账号管理】中添加账号，重启应用或下拉刷新即可查看",
              duration: 2500
            });
          }
          if (isTokenExpired(pAuthToken) || !cookie) {
            const data = uni.getStorageSync("accountList");
            if (!((_b = data == null ? void 0 : data[0]) == null ? void 0 : _b.phone)) {
              return;
            }
            const {
              phone: user,
              password: word
            } = data[0];
            const timeout = new Promise(
              (_2, reject) => setTimeout(() => reject(new Error("登录超时")), 2500)
            );
            try {
              const newcookie = await Promise.race([
                getcookie(user, word),
                timeout
              ]);
              uni.setStorageSync("CHAOXING_COOKIE", newcookie);
              cookie = newcookie;
            } catch (e2) {
              uni.showToast({
                icon: "none",
                title: "登录失败"
              });
              return;
            }
          } else {
            formatAppLog("log", "at pages/ClassView.vue:256", "登录有效");
          }
          formatAppLog("log", "at pages/ClassView.vue:258", "当前cookie：", cookie);
          if (cookie) {
            fetchData(cookie);
          }
          activeTab.value = "class";
        }
      );
      const __returned__ = { list, encryptByAES, getcookie, fetchData, isTokenExpired, filteredCourses, activeTab, toClassActive, get showToast() {
        return showToast;
      }, ref: vue.ref, onMounted: vue.onMounted, computed: vue.computed, get onLoad() {
        return onLoad;
      }, get onPullDownRefresh() {
        return onPullDownRefresh;
      }, get CryptoJS() {
        return CryptoJS;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "class-view" }, [
      vue.createCommentVNode(" 班级列表 "),
      vue.createElementVNode("div", { class: "section" }, [
        vue.createCommentVNode(" 使用原生 view 替代 van-list "),
        vue.createElementVNode("div", { class: "class-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.filteredCourses, (item) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: item.clazzId,
                class: "class-item",
                onClick: ($event) => $setup.toClassActive(item)
              }, [
                vue.createCommentVNode(" 图标区域 "),
                vue.createElementVNode("div", { class: "class-icon" }, [
                  vue.createElementVNode("image", {
                    src: item.imageUrl,
                    class: "round-img",
                    mode: "aspectFit"
                  }, null, 8, ["src"])
                ]),
                vue.createCommentVNode(" 文字内容 "),
                vue.createElementVNode("div", { class: "class-content" }, [
                  vue.createElementVNode(
                    "div",
                    { class: "class-title" },
                    vue.toDisplayString(item.courseName),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "div",
                    { class: "class-id" },
                    "教师: " + vue.toDisplayString(item.teacher),
                    1
                    /* TEXT */
                  )
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesClassView = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-3dbc0199"], ["__file", "D:/learning/edurevolution/pages/ClassView.vue"]]);
  const _sfc_main$5 = {
    __name: "ClassActive",
    setup(__props, { expose: __expose }) {
      __expose();
      const courseName = vue.ref("");
      const courseId = vue.ref("");
      const clazzId = vue.ref("");
      const actlist = vue.ref([]);
      const loading = vue.ref(false);
      const finished = vue.ref(false);
      const currentActiveItem = vue.ref(null);
      onLoad((options) => {
        courseId.value = options.courseId || "";
        clazzId.value = options.clazzId || "";
        formatAppLog("log", "at pages/ClassActive.vue:59", "监听页面参数:", courseId.value);
        if (options.courseName) {
          try {
            courseName.value = decodeURIComponent(options.courseName);
          } catch (e2) {
            formatAppLog("warn", "at pages/ClassActive.vue:66", "解码 courseName 失败，使用原值:", options.courseName);
            courseName.value = options.courseName;
          }
        }
        fetchActiveList();
      });
      function decodeUnicode(str) {
        return JSON.parse(`"${str}"`);
      }
      const fetchActiveList = () => {
        loading.value = true;
        const cookie = uni.getStorageSync("CHAOXING_COOKIE");
        const url = `https://mobilelearn.chaoxing.com/v2/apis/active/student/activelist?classId=${clazzId.value}&courseId=${courseId.value}&fid=1287`;
        formatAppLog("log", "at pages/ClassActive.vue:88", cookie);
        uni.request({
          url,
          method: "GET",
          header: {
            "Cookie": cookie,
            "Referer": "https://mooc.chaoxing.com/"
          },
          success: ({
            data
          }) => {
            var _a;
            formatAppLog("log", "at pages/ClassActive.vue:100", data);
            if (data.result === 1 && ((_a = data.data) == null ? void 0 : _a.activeList)) {
              actlist.value = data.data.activeList.slice(0, 25);
            } else {
              uni.showToast({
                title: "数据异常",
                icon: "none"
              });
            }
            finished.value = true;
          },
          fail: () => {
            uni.showToast({
              title: "请求失败",
              icon: "none"
            });
          },
          complete: () => {
            loading.value = false;
          }
        });
      };
      const onItemClick = (item) => {
        if (item.otherId === "2") {
          uni.switchTab({
            url: "/pages/QRcode"
          });
        } else {
          uni.showToast({
            title: "前面的区域以后再来探索吧",
            icon: "none"
          });
        }
      };
      const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const h2 = date.getHours().toString().padStart(2, "0");
        const m2 = date.getMinutes().toString().padStart(2, "0");
        return `${h2}:${m2}`;
      };
      const getStatusText = (userStatus) => userStatus === 1 ? "进行中" : userStatus === 2 ? "已结束" : "";
      const __returned__ = { courseName, courseId, clazzId, actlist, loading, finished, currentActiveItem, decodeUnicode, fetchActiveList, onItemClick, formatTime, getStatusText, ref: vue.ref, onMounted: vue.onMounted, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "class-active-container" }, [
      vue.createCommentVNode(" 活动列表 "),
      vue.createElementVNode("view", { class: "activity-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.actlist, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "activity-item",
              onClick: ($event) => $setup.onItemClick(item)
            }, [
              vue.createElementVNode("view", { class: "activity-icon" }, [
                vue.createElementVNode("image", {
                  src: item.logo,
                  style: { "width": "48px", "height": "48px" }
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "activity-content" }, [
                vue.createElementVNode(
                  "view",
                  { class: "activity-title" },
                  vue.toDisplayString($setup.decodeUnicode(item.nameOne)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "activity-desc" },
                  vue.toDisplayString($setup.getStatusText(item.status)) + vue.toDisplayString(item.nameFour),
                  1
                  /* TEXT */
                )
              ])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        vue.createCommentVNode(" 加载完成提示 "),
        $setup.finished ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "no-more"
        }, "没有更多了")) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesClassActive = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "D:/learning/edurevolution/pages/ClassActive.vue"]]);
  const _imports_0 = "/static/账号管理.png";
  const _imports_1 = "/static/免责声明.png";
  const _imports_2 = "/static/QQ .png";
  const _imports_3 = "/static/github.png";
  const _imports_4 = "/static/投币@2x-copy-copy.png";
  const _sfc_main$4 = {
    __name: "HomeView",
    setup(__props, { expose: __expose }) {
      __expose();
      const name2 = vue.ref("用户_0712");
      const avatarUrl = vue.ref(
        "https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=dc9e82874dfbfbeddc0c3e7948c0db0e/32fa828ba61ea8d37b2e67bc910a304e251f587d.jpg"
      );
      const changeAvatar = () => {
        uni.chooseImage({
          count: 1,
          // 只选择一张
          sizeType: ["compressed"],
          // 可选原图或压缩
          sourceType: ["album", "camera"],
          // 相册或拍照
          success: (res) => {
            const tempFilePath = res.tempFilePaths[0];
            avatarUrl.value = tempFilePath;
            uni.saveFile({
              tempFilePath,
              success: (saveRes) => {
                avatarUrl.value = saveRes.savedFilePath;
                uni.setStorageSync("USER_AVATAR", saveRes.savedFilePath);
              }
            });
          },
          fail: (err) => {
            formatAppLog("log", "at pages/HomeView.vue:86", "选择头像失败", err);
          }
        });
      };
      const activeTab = vue.ref("home");
      const toAccountManagement = () => {
        uni.navigateTo({
          url: "/pages/AccountView"
        });
      };
      const money = () => {
        uni.showToast({
          icon: "none",
          title: "好好生活，就是最大的支持。若喜欢，点个Github Star 就够了 ⭐"
        });
      };
      const togithub = () => {
        const url = "https://github.com/haixuanyu/ChaoXing_qr_sign";
        plus.runtime.openURL(url);
      };
      const toqqgroup = () => {
        const key = "Q8ImfjZHJuejtQlP14xdPgmtMeUplUoL";
        let url = "";
        const platform = uni.getSystemInfoSync().platform;
        if (platform === "android") {
          url = `mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Fk%3D${encodeURIComponent(key)}`;
        } else if (platform === "ios") {
          url = `mqqapi://card/show_pslcard?src_type=internal&version=1&key=${key}&card_type=group&source=external`;
        }
        plus.runtime.openURL(url, function() {
          uni.showToast({
            title: "未安装QQ",
            icon: "none",
            duration: 2e3
          });
        });
      };
      const tomian = () => {
        uni.navigateTo({
          url: "/pages/disclaimer"
        });
      };
      const toSettings = () => {
        uni.showToast({
          icon: "none",
          title: "开发中，敬请期待"
        });
      };
      onLoad(() => {
        const saved = uni.getStorageSync("USER_AVATAR");
        const data = uni.getStorageSync("accountList");
        if (saved) {
          avatarUrl.value = saved;
        }
        name2.value = data[0].name;
      });
      const __returned__ = { name: name2, avatarUrl, changeAvatar, activeTab, toAccountManagement, money, togithub, toqqgroup, tomian, toSettings, ref: vue.ref, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile-container" }, [
      vue.createElementVNode("view", { class: "profile-section" }, [
        vue.createCommentVNode(" 头像（添加点击事件） "),
        vue.createElementVNode("view", {
          class: "avatar-container",
          onClick: $setup.changeAvatar
        }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: $setup.avatarUrl,
            mode: "aspectFill"
          }, null, 8, ["src"])
        ]),
        vue.createCommentVNode(" 用户信息 "),
        vue.createElementVNode("view", { class: "user-info" }, [
          vue.createElementVNode(
            "text",
            { class: "user-name" },
            vue.toDisplayString($setup.name),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createCommentVNode(" 功能列表 "),
      vue.createElementVNode("view", { class: "function-list" }, [
        vue.createElementVNode("view", {
          class: "function-item",
          onClick: $setup.toAccountManagement
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            class: "function-icon"
          }),
          vue.createElementVNode("text", { class: "function-title" }, "账号管理"),
          vue.createElementVNode("text", { class: "arrow" }, "›")
        ]),
        vue.createElementVNode("view", {
          class: "function-item",
          onClick: $setup.tomian
        }, [
          vue.createElementVNode("image", {
            src: _imports_1,
            class: "function-icon"
          }),
          vue.createElementVNode("text", { class: "function-title" }, "使用须知"),
          vue.createElementVNode("text", { class: "arrow" }, "›")
        ]),
        vue.createElementVNode("view", {
          class: "function-item",
          onClick: $setup.toqqgroup
        }, [
          vue.createElementVNode("image", {
            src: _imports_2,
            class: "function-icon"
          }),
          vue.createElementVNode("text", { class: "function-title" }, "交流群"),
          vue.createElementVNode("text", { class: "arrow" }, "›")
        ]),
        vue.createElementVNode("view", {
          class: "function-item",
          onClick: $setup.togithub
        }, [
          vue.createElementVNode("image", {
            src: _imports_3,
            class: "function-icon"
          }),
          vue.createElementVNode("text", { class: "function-title" }, "github仓库"),
          vue.createElementVNode("text", { class: "arrow" }, "›")
        ]),
        vue.createElementVNode("view", {
          class: "function-item",
          onClick: $setup.money
        }, [
          vue.createElementVNode("image", {
            src: _imports_4,
            class: "function-icon"
          }),
          vue.createElementVNode("text", { class: "function-title" }, "赞助作者"),
          vue.createElementVNode("text", { class: "arrow" }, "›")
        ])
      ])
    ]);
  }
  const PagesHomeView = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-631e42f8"], ["__file", "D:/learning/edurevolution/pages/HomeView.vue"]]);
  const _sfc_main$3 = {
    __name: "AccountView",
    setup(__props, { expose: __expose }) {
      __expose();
      const accountList = vue.ref([]);
      const addDialogVisible = vue.ref(false);
      const detailDialogVisible = vue.ref(false);
      const selectedAccount = vue.ref({});
      const newAccount = vue.ref({
        name: "",
        phone: "",
        password: ""
      });
      const isEditing = vue.ref(false);
      const inputFocus = vue.ref(false);
      function encryptByAES(message) {
        const chaoxingkey = "u2oh6Vu^HWe4_AES";
        const utf8Key = CryptoJS.enc.Utf8.parse(chaoxingkey);
        const utf8Iv = CryptoJS.enc.Utf8.parse(chaoxingkey);
        const encrypted = CryptoJS.AES.encrypt(message, utf8Key, {
          iv: utf8Iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
          // 关键：避免 CryptoJS 自动派生密钥
        });
        return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
      }
      const login = (username, password) => {
        return new Promise((resolve, reject) => {
          const eusername = encryptByAES(username);
          const epassword = encryptByAES(password);
          formatAppLog("log", "at pages/AccountView.vue:130", "加密后的用户名:", eusername);
          formatAppLog("log", "at pages/AccountView.vue:131", "加密后的密码:", epassword);
          uni.request({
            url: "https://passport2.chaoxing.com/fanyalogin",
            method: "POST",
            data: {
              "fid": "-1",
              "uname": eusername,
              "password": epassword,
              "refer": "http://i.mooc.chaoxing.com",
              "t": "true",
              "forbidotherlogin": "0",
              "validate": "",
              "doubleFactorLogin": "0",
              "independentId": "0",
              "independentNameId": "0"
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Requested-With": "XMLHttpRequest"
            },
            success: (res) => {
              const data = res.data;
              formatAppLog("log", "at pages/AccountView.vue:153", data["status"]);
              const setCookie = res.cookies;
              if (!setCookie || setCookie.length === 0) {
                return reject(data["status"]);
              }
              const cookieStr = setCookie.map((cookie) => {
                const trimmed = cookie.trim();
                const end = trimmed.indexOf(";");
                return end > -1 ? trimmed.substring(0, end) : trimmed;
              }).filter(Boolean).join("; ");
              uni.setStorageSync("CHAOXING_COOKIE", cookieStr);
              resolve(data["status"]);
            },
            fail: (err) => {
              reject(err);
            }
          });
        });
      };
      const loadFromStorage = () => {
        try {
          const data = uni.getStorageSync("accountList");
          if (data && data.length) {
            accountList.value = data;
          } else {
            accountList.value = [];
            saveToStorage();
          }
        } catch (e2) {
          formatAppLog("error", "at pages/AccountView.vue:190", "读取本地数据失败:", e2);
        }
      };
      const saveToStorage = () => {
        try {
          uni.setStorageSync("accountList", accountList.value);
        } catch (e2) {
          formatAppLog("error", "at pages/AccountView.vue:199", "保存数据失败:", e2);
        }
      };
      const goBack = () => {
        uni.navigateBack({
          delta: 1
        });
      };
      const showAddDialog = () => {
        isEditing.value = false;
        newAccount.value = {
          name: "",
          password: ""
        };
        addDialogVisible.value = true;
        inputFocus.value = true;
      };
      const editAccount = () => {
        detailDialogVisible.value = false;
        newAccount.value = {
          ...selectedAccount.value,
          password: "******"
        };
        isEditing.value = true;
        addDialogVisible.value = true;
        inputFocus.value = true;
      };
      const closeAddDialog = () => {
        addDialogVisible.value = false;
      };
      const submitAccount = async () => {
        const {
          name: name2,
          phone,
          // ✅ 已解构
          password
        } = newAccount.value;
        if (!name2 || !phone || !password) {
          uni.showToast({
            title: "请填写完整信息",
            icon: "none"
          });
          return;
        }
        let loginSuccess = false;
        const result = await login(phone, password);
        formatAppLog("log", "at pages/AccountView.vue:258", result);
        try {
          if (result === false) {
            uni.showToast({
              title: result.msg || "登录验证失败",
              icon: "none"
            });
            return;
          }
          loginSuccess = true;
        } catch (error) {
          uni.showToast({
            title: "登录测试失败",
            icon: "none"
          });
          formatAppLog("error", "at pages/AccountView.vue:273", "登录验证出错:", error);
          return;
        }
        if (!loginSuccess)
          return;
        if (!isEditing.value) {
          if (accountList.value.some((acc) => acc.name === name2)) {
            uni.showToast({
              title: "用户名已存在",
              icon: "none"
            });
            return;
          }
          const account = {
            id: Date.now(),
            name: name2,
            phone,
            // ✅ 保存手机号
            password,
            createTime: (/* @__PURE__ */ new Date()).toLocaleDateString()
          };
          accountList.value.push(account);
          uni.showToast({
            title: "添加成功",
            icon: "success"
          });
        } else {
          const index = accountList.value.findIndex((acc) => acc.id === selectedAccount.value.id);
          if (index > -1) {
            accountList.value[index].name = name2;
            accountList.value[index].phone = phone;
            accountList.value[index].password = password;
            uni.showToast({
              title: "更新成功",
              icon: "success"
            });
          }
        }
        saveToStorage();
        addDialogVisible.value = false;
      };
      const showAccountDetail = (account) => {
        selectedAccount.value = account;
        detailDialogVisible.value = true;
      };
      const deleteAccount = (row) => {
        uni.showModal({
          title: "确认删除",
          content: `确定要删除账号 "${row.name}" 吗？`,
          success: (res) => {
            if (res.confirm) {
              const index = accountList.value.findIndex((item) => item.id === row.id);
              if (index > -1) {
                accountList.value.splice(index, 1);
                saveToStorage();
                uni.showToast({
                  title: "删除成功",
                  icon: "success"
                });
              }
            }
          }
        });
      };
      vue.onMounted(() => {
        loadFromStorage();
        formatAppLog("log", "at pages/AccountView.vue:351", "当前账号列表:", accountList.value);
      });
      const __returned__ = { accountList, addDialogVisible, detailDialogVisible, selectedAccount, newAccount, isEditing, inputFocus, encryptByAES, login, loadFromStorage, saveToStorage, goBack, showAddDialog, editAccount, closeAddDialog, submitAccount, showAccountDetail, deleteAccount, ref: vue.ref, onMounted: vue.onMounted, get CryptoJS() {
        return CryptoJS;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "account-view" }, [
      vue.createCommentVNode(" 账号列表 "),
      vue.createElementVNode("view", { class: "account-list" }, [
        $setup.accountList.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "empty-state"
        }, [
          vue.createElementVNode("text", null, "暂无账号"),
          vue.createElementVNode("view"),
          vue.createElementVNode("text", null, "提示：首个账号为主账号"),
          vue.createElementVNode("view"),
          vue.createElementVNode("text", null, "用于获取课程与活动信息")
        ])) : vue.createCommentVNode("v-if", true),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.accountList, (account) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: account.id,
              class: "account-item",
              onClick: ($event) => $setup.showAccountDetail(account)
            }, [
              vue.createElementVNode(
                "text",
                { class: "account-username" },
                vue.toDisplayString(account.name),
                1
                /* TEXT */
              ),
              vue.createElementVNode("button", {
                class: "delete-btn",
                onClick: vue.withModifiers(($event) => $setup.deleteAccount(account), ["stop"])
              }, " 删除 ", 8, ["onClick"])
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 添加账号按钮 "),
      vue.createElementVNode("view", { class: "add-button" }, [
        vue.createElementVNode("button", {
          class: "add-btn",
          onClick: $setup.showAddDialog
        }, "添加账号")
      ]),
      vue.createCommentVNode(" 添加账号弹窗 "),
      vue.withDirectives(vue.createElementVNode(
        "view",
        { class: "popup-overlay" },
        [
          vue.createElementVNode("view", {
            class: "popup add-popup",
            onClick: _cache[4] || (_cache[4] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "popup-header" }, [
              vue.createElementVNode(
                "text",
                { class: "popup-title" },
                vue.toDisplayString($setup.isEditing ? "编辑账号" : "添加账号"),
                1
                /* TEXT */
              ),
              vue.createElementVNode("text", {
                class: "popup-close",
                onClick: $setup.closeAddDialog
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "popup-content" }, [
              vue.createElementVNode("view", { class: "form-group" }, [
                vue.createElementVNode("text", { class: "form-label" }, "昵称"),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.newAccount.name = $event),
                  class: "form-input",
                  placeholder: "请输入昵称",
                  type: "text",
                  focus: $setup.inputFocus
                }, null, 8, ["focus"]), [
                  [vue.vModelText, $setup.newAccount.name]
                ])
              ]),
              vue.createElementVNode("view", { class: "form-group" }, [
                vue.createElementVNode("text", { class: "form-label" }, "手机号"),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.newAccount.phone = $event),
                    class: "form-input",
                    placeholder: "请输入手机号",
                    type: "number",
                    maxlength: "11",
                    onInput: _cache[2] || (_cache[2] = (...args) => _ctx.handlePhoneInput && _ctx.handlePhoneInput(...args))
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [vue.vModelText, $setup.newAccount.phone]
                ])
              ]),
              vue.createElementVNode("view", { class: "form-group" }, [
                vue.createElementVNode("text", { class: "form-label" }, "密码"),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.newAccount.password = $event),
                    class: "form-input",
                    placeholder: "请输入密码",
                    password: "",
                    type: "text"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, $setup.newAccount.password]
                ])
              ]),
              vue.createElementVNode("view", { class: "form-actions" }, [
                vue.createElementVNode(
                  "button",
                  {
                    class: "submit-btn",
                    onClick: $setup.submitAccount
                  },
                  vue.toDisplayString($setup.isEditing ? "更新" : "提交"),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ],
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, $setup.addDialogVisible]
      ]),
      vue.createCommentVNode(" 账号详情弹窗 "),
      vue.withDirectives(vue.createElementVNode(
        "view",
        {
          class: "popup-overlay",
          onClick: _cache[7] || (_cache[7] = ($event) => $setup.detailDialogVisible = false)
        },
        [
          vue.createElementVNode("view", {
            class: "popup detail-popup",
            onClick: _cache[6] || (_cache[6] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "popup-header" }, [
              vue.createElementVNode("text", { class: "popup-title" }, "账号详情"),
              vue.createElementVNode("text", {
                class: "popup-close",
                onClick: _cache[5] || (_cache[5] = ($event) => $setup.detailDialogVisible = false)
              }, "×")
            ]),
            vue.createElementVNode("view", { class: "popup-content" }, [
              vue.createElementVNode("view", { class: "detail-row" }, [
                vue.createElementVNode("text", { class: "detail-label" }, "ID"),
                vue.createElementVNode(
                  "text",
                  { class: "detail-value" },
                  vue.toDisplayString($setup.selectedAccount.id),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "detail-row" }, [
                vue.createElementVNode("text", { class: "detail-label" }, "用户名"),
                vue.createElementVNode(
                  "text",
                  { class: "detail-value" },
                  vue.toDisplayString($setup.selectedAccount.name),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "detail-row" }, [
                vue.createElementVNode("text", { class: "detail-label" }, "创建时间"),
                vue.createElementVNode(
                  "text",
                  { class: "detail-value" },
                  vue.toDisplayString($setup.selectedAccount.createTime),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "popup-footer" }, [
              vue.createElementVNode("button", {
                class: "edit-btn",
                onClick: $setup.editAccount
              }, "编辑")
            ])
          ])
        ],
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, $setup.detailDialogVisible]
      ])
    ]);
  }
  const PagesAccountView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-c74125a5"], ["__file", "D:/learning/edurevolution/pages/AccountView.vue"]]);
  const _sfc_main$2 = {
    __name: "QRcode",
    setup(__props, { expose: __expose }) {
      __expose();
      const text = vue.ref("");
      const mise = vue.ref([]);
      const accounts = vue.ref([]);
      const selectedIds = vue.ref([]);
      const msg = vue.ref("");
      function encryptByAES(message) {
        const chaoxingkey = "u2oh6Vu^HWe4_AES";
        const utf8Key = CryptoJS.enc.Utf8.parse(chaoxingkey);
        const utf8Iv = CryptoJS.enc.Utf8.parse(chaoxingkey);
        const encrypted = CryptoJS.AES.encrypt(message, utf8Key, {
          iv: utf8Iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
          // 关键：避免 CryptoJS 自动派生密钥
        });
        return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
      }
      const getcookie = (username, password) => {
        return new Promise((resolve, reject) => {
          const eusername = encryptByAES(username);
          const epassword = encryptByAES(password);
          formatAppLog("log", "at pages/QRcode.vue:48", "加密后的用户名:", eusername);
          formatAppLog("log", "at pages/QRcode.vue:49", "加密后的密码:", epassword);
          uni.request({
            url: "https://passport2.chaoxing.com/fanyalogin",
            method: "POST",
            data: {
              "fid": "-1",
              "uname": eusername,
              "password": epassword,
              "refer": "http://i.mooc.chaoxing.com",
              "t": "true",
              "forbidotherlogin": "0",
              "validate": "",
              "doubleFactorLogin": "0",
              "independentId": "0",
              "independentNameId": "0"
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Requested-With": "XMLHttpRequest"
            },
            success: (res) => {
              const setCookie = res.cookies;
              if (!setCookie || setCookie.length === 0) {
                return reject("登录失败，未返回 Cookie");
              }
              const cookieStr = setCookie.map((cookie) => {
                const trimmed = cookie.trim();
                const end = trimmed.indexOf(";");
                return end > -1 ? trimmed.substring(0, end) : trimmed;
              }).filter(Boolean).join("; ");
              resolve(cookieStr);
            },
            fail: (err) => {
              reject(err);
            }
          });
        });
      };
      const selectedAccounts = vue.computed(
        () => accounts.value.filter((account) => selectedIds.value.includes(account.id))
      );
      const scanResult = vue.ref("");
      const query = vue.ref({});
      const isScanning = vue.ref(false);
      const toggleAccount = (id) => {
        const index = selectedIds.value.indexOf(id);
        if (index === -1) {
          selectedIds.value.push(id);
        } else {
          selectedIds.value.splice(index, 1);
        }
      };
      const getQueryParams = (url) => {
        const str = String(url || "");
        const match = str.match(/\?([^#]*)/);
        if (!match)
          return {};
        const queryStr = match[1];
        const params = {};
        queryStr.split("&").forEach((pair) => {
          if (!pair)
            return;
          const [key, value] = pair.split("=");
          if (!key)
            return;
          try {
            const decodedKey = decodeURIComponent(key.trim());
            const decodedValue = value ? decodeURIComponent(value) : "";
            params[decodedKey] = decodedValue;
          } catch (e2) {
            params[key.trim()] = value || "";
          }
        });
        return params;
      };
      const handleScanmini = async (Ids, resu) => {
        const promises = Ids.map((id) => {
          return new Promise(async (resolve) => {
            try {
              const query2 = getQueryParams(resu);
              formatAppLog("log", "at pages/QRcode.vue:148", query2);
              const coo = await getcookie(accounts.value.find((acc) => acc.id === id).phone, accounts.value.find((acc) => acc.id === id).password);
              const requrl = `https://mobilelearn.chaoxing.com/pptSign/stuSignajax?activeId=${query2.id}&enc=${query2.enc}`;
              uni.request({
                url: requrl,
                method: "GET",
                header: {
                  "Cookie": coo
                },
                success: (res) => {
                  const message = res.data || "无数据";
                  resolve({
                    success: true,
                    id,
                    message
                  });
                },
                fail: (err) => {
                  const errorMsg = `请求失败:${err.errMsg}`;
                  resolve({
                    success: false,
                    id,
                    error: errorMsg
                  });
                }
              });
            } catch (error) {
              const errorMsg = `登录失败:${error.message}`;
              uni.showToast({
                title: `账号${id}:${errorMsg}`,
                icon: "none"
              });
              resolve({
                success: false,
                id,
                error: errorMsg
              });
            }
          });
        });
        return await Promise.all(promises);
      };
      const handleScan = (ids) => {
        if (selectedAccounts.value.length === 0) {
          uni.showToast({
            title: "请先选择至少一个账号",
            icon: "none"
          });
          return;
        }
        isScanning.value = true;
        uni.scanCode({
          onlyFromCamera: true,
          scanType: ["qrCode"],
          success: async ({
            result
          }) => {
            const pmise = await handleScanmini(ids, result);
            formatAppLog("log", "at pages/QRcode.vue:216", "mise:", pmise);
            mise.value = pmise;
            scanResult.value = true;
            uni.showToast({
              title: "扫码完成",
              icon: "success"
            });
          },
          fail: (err) => {
            let msg2 = "扫码失败";
            if (err.errMsg.includes("cancel"))
              msg2 = "用户取消";
            else if (err.errMsg.includes("auth"))
              msg2 = "相机权限被拒绝";
            uni.showToast({
              title: msg2,
              icon: "none"
            });
          },
          complete: () => {
            isScanning.value = false;
          }
        });
      };
      const loadAccountList = () => {
        try {
          const data = uni.getStorageSync("accountList");
          if (data) {
            accounts.value = data;
          }
        } catch (e2) {
          formatAppLog("error", "at pages/QRcode.vue:246", "读取账号列表失败:", e2);
        }
      };
      onPullDownRefresh(async () => {
        formatAppLog("log", "at pages/QRcode.vue:250", "触发下拉刷新");
        loadAccountList();
        uni.stopPullDownRefresh();
      });
      vue.onMounted(() => {
        loadAccountList();
      });
      const __returned__ = { text, mise, accounts, selectedIds, msg, encryptByAES, getcookie, selectedAccounts, scanResult, query, isScanning, toggleAccount, getQueryParams, handleScanmini, handleScan, loadAccountList, ref: vue.ref, computed: vue.computed, onMounted: vue.onMounted, get onPullDownRefresh() {
        return onPullDownRefresh;
      }, get CryptoJS() {
        return CryptoJS;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 页面标题 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("text", { class: "title" }, "扫码账号")
      ]),
      vue.createCommentVNode(" 账号列表 "),
      vue.createElementVNode("view", { class: "account-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.accounts, (account) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: account.id,
              class: "account-item"
            }, [
              vue.createElementVNode("label", {
                class: "account-label",
                onClick: ($event) => $setup.toggleAccount(account.id)
              }, [
                vue.createCommentVNode(" 自定义复选框 "),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["custom-checkbox", { checked: $setup.selectedIds.includes(account.id) }])
                  },
                  [
                    $setup.selectedIds.includes(account.id) ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "icon-check"
                    }, "✔")) : vue.createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                ),
                vue.createCommentVNode(" 账号信息 "),
                vue.createElementVNode(
                  "text",
                  { class: "account-name" },
                  vue.toDisplayString(account.name),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 已选提示 "),
      vue.createElementVNode("view", { class: "selected-tip" }, [
        $setup.selectedAccounts.length > 0 ? (vue.openBlock(), vue.createElementBlock(
          "text",
          { key: 0 },
          "已选择 " + vue.toDisplayString($setup.selectedAccounts.length) + " 个账号",
          1
          /* TEXT */
        )) : (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, "暂未选择账号"))
      ]),
      vue.createCommentVNode(" 扫码按钮 "),
      vue.createElementVNode("view", { class: "action-section" }, [
        vue.createElementVNode("button", {
          class: "scan-btn",
          disabled: $setup.selectedAccounts.length === 0,
          loading: $setup.isScanning,
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleScan($setup.selectedIds))
        }, vue.toDisplayString($setup.isScanning ? "扫描中..." : "扫码获取信息"), 9, ["disabled", "loading"])
      ]),
      vue.createElementVNode(
        "view",
        null,
        vue.toDisplayString($setup.text),
        1
        /* TEXT */
      ),
      vue.createCommentVNode(" 扫码结果 "),
      $setup.scanResult ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "result-section"
      }, [
        vue.createElementVNode("view", null, "签到结果"),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.mise, (item, index) => {
            var _a;
            return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString((_a = $setup.accounts.find((acc) => acc.id === item.id)) == null ? void 0 : _a.name) + "-" + vue.toDisplayString(item.message),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesQRcode = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "D:/learning/edurevolution/pages/QRcode.vue"]]);
  const _sfc_main$1 = {
    __name: "disclaimer",
    setup(__props, { expose: __expose }) {
      __expose();
      const disclaimerList = [
        {
          title: "1. 完全免费承诺",
          content: "本应用永久免费，不包含任何内购、订阅、广告或付费功能。开发者承诺不会以任何形式向用户收取费用。如您在使用过程中被提示付费或产生扣费，请立即停止操作，该行为非本软件官方所为，可能涉及仿冒、篡改或第三方钓鱼链接。"
        },
        {
          title: "2. 警惕非官方渠道风险",
          content: "本软件仅通过官方指定渠道（如 GitHub、HBuilderX 项目、开发者个人网站等）发布。若您通过其他平台下载到“收费版”“VIP版”“破解版”等变种版本，均与本项目无关，由此产生的财产损失或安全风险，开发者概不负责。"
        },
        {
          title: "3. 使用场景限制：仅供学习交流",
          content: "本应用为技术学习与项目练手而开发，仅供个人学习、研究和交流使用，不适用于正式管理场景。严禁将本应用于企业考勤、学校点名、绩效考核、商业运营等对准确性、可靠性有严格要求的用途。因误用或滥用导致的管理纠纷、人事争议等后果，责任由使用者自行承担。"
        },
        {
          title: "4. 功能与数据免责",
          content: "本应用提供的签到、定位、时间记录等功能为技术演示性质，可能存在延迟、误差或数据丢失。因设备时间不准、网络异常、GPS漂移等原因导致签到失败或记录偏差，开发者不承担任何责任。"
        },
        {
          title: "5. 不具备法律效力",
          content: "本应用的签到记录不具有法律效力、行政效力或官方认证效力，不可作为工作证明、学习时长认证或其他正式依据。"
        },
        {
          title: "6. 用户责任",
          content: "用户应确保设备时间准确、网络通畅，并理解本软件的技术局限性。禁止通过伪造位置、时间篡改等方式恶意使用。如发现滥用行为，开发者有权终止服务。"
        },
        {
          title: "7. 第三方服务说明",
          content: "本应用可能调用地图定位、云存储等第三方服务（如高德地图、uniCloud）。这些服务本身可能有免费额度，超出后由第三方按规则计费（如企业级调用）。⚠️ 若您作为开发者自行接入并配置了需付费的第三方服务，由此产生的费用由您自行承担，与本软件无关。"
        },
        {
          title: "8. 隐私保护",
          content: "本应用尊重用户隐私，签到数据默认仅存储于本地设备，不会上传或用于商业变现。因设备丢失、账户泄露等不可抗力造成的隐私风险，开发者不承担赔偿责任。"
        },
        {
          title: "9. 软件更新与终止",
          content: "本应用为非商业化项目，开发者可能随时停止维护或下架应用，恕不另行通知。建议用户自行备份重要数据。"
        },
        {
          title: "10. 免责条款",
          content: "在法律允许的最大范围内，开发者不对以下情况承担责任：应用无法使用、数据丢失、功能错误；因使用本应用导致的工作延误、经济损失；用户因依赖本应用做出错误决策所引发的后果。"
        },
        {
          title: "11. 法律适用与争议解决",
          content: "本声明适用中华人民共和国法律。如因本应用引发争议，双方应友好协商解决；协商不成的，任何一方可向开发者所在地人民法院提起诉讼。"
        },
        {
          title: "12. 其他重要提示",
          content: "本项目为开源或学习性质，欢迎技术交流，但请勿用于非法或牟利用途。未经许可，禁止对本应用进行二次打包、冒名发布或商业化售卖。开发者保留对本声明的修改权与最终解释权。"
        }
      ];
      const goBack = () => {
        uni.navigateBack();
      };
      const __returned__ = { disclaimerList, goBack };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "disclaimer-container" }, [
      vue.createCommentVNode(" 内容区域 "),
      vue.createElementVNode("scroll-view", {
        class: "content",
        "scroll-y": ""
      }, [
        vue.createElementVNode("view", { class: "section" }, [
          vue.createElementVNode("text", { class: "title" }, "使用须知与免责声明")
        ]),
        vue.createElementVNode("view", { class: "section" }, [
          vue.createElementVNode("text", { class: "text" }, " 欢迎您使用本签到软件（以下简称“本应用”）。本应用由开发者个人，旨在技术学习、项目实践与交流分享，不构成任何正式服务承诺。请您在使用前仔细阅读以下全部内容。一旦您开始使用本应用，即视为您已充分理解并同意本声明的所有条款。 ")
        ]),
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.disclaimerList, (item, index) => {
            return vue.createElementVNode("view", {
              class: "section",
              key: index
            }, [
              vue.createElementVNode(
                "text",
                { class: "subtitle" },
                vue.toDisplayString(item.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "text" },
                vue.toDisplayString(item.content),
                1
                /* TEXT */
              )
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        )),
        vue.createElementVNode("view", { class: "tip" }, [
          vue.createElementVNode("text", null, " 📌 特别提醒：本软件为个人学习项目，请勿将其视为正式生产级应用。若您需要稳定、安全、合规的签到系统，建议选择经过认证的企业级产品或定制开发解决方案。 ")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("text", null, "—— 海轩")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("text", null, "📧 联系邮箱：13146555886@163.com")
        ])
      ])
    ]);
  }
  const PagesDisclaimer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-67529dac"], ["__file", "D:/learning/edurevolution/pages/disclaimer.vue"]]);
  __definePage("pages/ClassView", PagesClassView);
  __definePage("pages/ClassActive", PagesClassActive);
  __definePage("pages/HomeView", PagesHomeView);
  __definePage("pages/AccountView", PagesAccountView);
  __definePage("pages/QRcode", PagesQRcode);
  __definePage("pages/disclaimer", PagesDisclaimer);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:7", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:10", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:13", "App Hide");
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return null;
  }
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/learning/edurevolution/App.vue"]]);
  const pages = [
    {
      path: "pages/ClassView",
      style: {
        navigationBarTitleText: "首页",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/ClassActive",
      style: {
        navigationBarTitleText: "课程活动"
      }
    },
    {
      path: "pages/HomeView",
      style: {
        navigationBarTitleText: "我的"
      }
    },
    {
      path: "pages/AccountView",
      style: {
        navigationBarTitleText: "账号管理"
      }
    },
    {
      path: "pages/QRcode",
      style: {
        navigationBarTitleText: "扫码",
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/disclaimer",
      style: {
        navigationBarTitleText: "使用须知"
      }
    }
  ];
  const tabBar = {
    list: [
      {
        pagePath: "pages/ClassView",
        text: "首页"
      },
      {
        pagePath: "pages/QRcode",
        text: "扫码"
      },
      {
        pagePath: "pages/HomeView",
        text: "我的"
      }
    ]
  };
  const e = {
    pages,
    tabBar
  };
  var define_process_env_UNI_SECURE_NETWORK_CONFIG_default = [];
  function t(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || /* @__PURE__ */ function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = h2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], I2 = e4[t4 + 9], v2 = e4[t4 + 10], S2 = e4[t4 + 11], T2 = e4[t4 + 12], b2 = e4[t4 + 13], E2 = e4[t4 + 14], k2 = e4[t4 + 15], A2 = i3[0], P2 = i3[1], C2 = i3[2], O2 = i3[3];
        A2 = u2(A2, P2, C2, O2, o3, 7, a2[0]), O2 = u2(O2, A2, P2, C2, c3, 12, a2[1]), C2 = u2(C2, O2, A2, P2, p2, 17, a2[2]), P2 = u2(P2, C2, O2, A2, f2, 22, a2[3]), A2 = u2(A2, P2, C2, O2, g2, 7, a2[4]), O2 = u2(O2, A2, P2, C2, m2, 12, a2[5]), C2 = u2(C2, O2, A2, P2, y2, 17, a2[6]), P2 = u2(P2, C2, O2, A2, _2, 22, a2[7]), A2 = u2(A2, P2, C2, O2, w2, 7, a2[8]), O2 = u2(O2, A2, P2, C2, I2, 12, a2[9]), C2 = u2(C2, O2, A2, P2, v2, 17, a2[10]), P2 = u2(P2, C2, O2, A2, S2, 22, a2[11]), A2 = u2(A2, P2, C2, O2, T2, 7, a2[12]), O2 = u2(O2, A2, P2, C2, b2, 12, a2[13]), C2 = u2(C2, O2, A2, P2, E2, 17, a2[14]), A2 = h2(A2, P2 = u2(P2, C2, O2, A2, k2, 22, a2[15]), C2, O2, c3, 5, a2[16]), O2 = h2(O2, A2, P2, C2, y2, 9, a2[17]), C2 = h2(C2, O2, A2, P2, S2, 14, a2[18]), P2 = h2(P2, C2, O2, A2, o3, 20, a2[19]), A2 = h2(A2, P2, C2, O2, m2, 5, a2[20]), O2 = h2(O2, A2, P2, C2, v2, 9, a2[21]), C2 = h2(C2, O2, A2, P2, k2, 14, a2[22]), P2 = h2(P2, C2, O2, A2, g2, 20, a2[23]), A2 = h2(A2, P2, C2, O2, I2, 5, a2[24]), O2 = h2(O2, A2, P2, C2, E2, 9, a2[25]), C2 = h2(C2, O2, A2, P2, f2, 14, a2[26]), P2 = h2(P2, C2, O2, A2, w2, 20, a2[27]), A2 = h2(A2, P2, C2, O2, b2, 5, a2[28]), O2 = h2(O2, A2, P2, C2, p2, 9, a2[29]), C2 = h2(C2, O2, A2, P2, _2, 14, a2[30]), A2 = l2(A2, P2 = h2(P2, C2, O2, A2, T2, 20, a2[31]), C2, O2, m2, 4, a2[32]), O2 = l2(O2, A2, P2, C2, w2, 11, a2[33]), C2 = l2(C2, O2, A2, P2, S2, 16, a2[34]), P2 = l2(P2, C2, O2, A2, E2, 23, a2[35]), A2 = l2(A2, P2, C2, O2, c3, 4, a2[36]), O2 = l2(O2, A2, P2, C2, g2, 11, a2[37]), C2 = l2(C2, O2, A2, P2, _2, 16, a2[38]), P2 = l2(P2, C2, O2, A2, v2, 23, a2[39]), A2 = l2(A2, P2, C2, O2, b2, 4, a2[40]), O2 = l2(O2, A2, P2, C2, o3, 11, a2[41]), C2 = l2(C2, O2, A2, P2, f2, 16, a2[42]), P2 = l2(P2, C2, O2, A2, y2, 23, a2[43]), A2 = l2(A2, P2, C2, O2, I2, 4, a2[44]), O2 = l2(O2, A2, P2, C2, T2, 11, a2[45]), C2 = l2(C2, O2, A2, P2, k2, 16, a2[46]), A2 = d2(A2, P2 = l2(P2, C2, O2, A2, p2, 23, a2[47]), C2, O2, o3, 6, a2[48]), O2 = d2(O2, A2, P2, C2, _2, 10, a2[49]), C2 = d2(C2, O2, A2, P2, E2, 15, a2[50]), P2 = d2(P2, C2, O2, A2, m2, 21, a2[51]), A2 = d2(A2, P2, C2, O2, T2, 6, a2[52]), O2 = d2(O2, A2, P2, C2, f2, 10, a2[53]), C2 = d2(C2, O2, A2, P2, v2, 15, a2[54]), P2 = d2(P2, C2, O2, A2, c3, 21, a2[55]), A2 = d2(A2, P2, C2, O2, w2, 6, a2[56]), O2 = d2(O2, A2, P2, C2, k2, 10, a2[57]), C2 = d2(C2, O2, A2, P2, y2, 15, a2[58]), P2 = d2(P2, C2, O2, A2, b2, 21, a2[59]), A2 = d2(A2, P2, C2, O2, g2, 6, a2[60]), O2 = d2(O2, A2, P2, C2, S2, 10, a2[61]), C2 = d2(C2, O2, A2, P2, p2, 15, a2[62]), P2 = d2(P2, C2, O2, A2, I2, 21, a2[63]), i3[0] = i3[0] + A2 | 0, i3[1] = i3[1] + P2 | 0, i3[2] = i3[2] + C2 | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "uni_id_token", u = "uni_id_token_expired", h = "uniIdToken", l = { DEFAULT: "FUNCTION", FUNCTION: "FUNCTION", OBJECT: "OBJECT", CLIENT_DB: "CLIENT_DB" }, d = "pending", p = "fulfilled", f = "rejected";
  function g(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function m(e2) {
    return "object" === g(e2);
  }
  function y(e2) {
    return "function" == typeof e2;
  }
  function _(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const w = "REJECTED", I = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = w } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case w:
          return this.status === f;
        case I:
          return this.status !== d;
      }
    }
    exec() {
      return this.needRetry ? (this.status = d, this.promise = this.createPromise().then((e2) => (this.status = p, Promise.resolve(e2)), (e2) => (this.status = f, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  class S {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  }
  function T(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const b = true, E = "app", A = T(define_process_env_UNI_SECURE_NETWORK_CONFIG_default), P = E, C = T('{"address":["127.0.0.1","192.168.1.3"],"servePort":7000,"debugPort":9000,"initialLaunchType":"local","skipFiles":["<node_internals>/**","C:/Users/13146/Downloads/HBuilderX.4.75.2025071105/HBuilderX/plugins/unicloud/**/*.js"]}'), O = T('[{"provider":"aliyun","spaceName":"questionbox","spaceId":"mp-57d0a4b3-4352-461b-a65d-d993eb7ebce6","clientSecret":"dh6skFtkUTfsShm8GD1l7Q==","endpoint":"https://api.next.bspapp.com"}]') || [];
  let N = "";
  try {
    N = "__UNI__D72075C";
  } catch (e2) {
  }
  let R, L = {};
  function U(e2, t2 = {}) {
    var n2, s2;
    return n2 = L, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (L[e2] = t2), L[e2];
  }
  function D() {
    return R || (R = function() {
      if ("undefined" != typeof globalThis)
        return globalThis;
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof window)
        return window;
      function e2() {
        return this;
      }
      return void 0 !== e2() ? e2() : new Function("return this")();
    }(), R);
  }
  L = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const M = ["invoke", "success", "fail", "complete"], q = U("_globalUniCloudInterceptor");
  function F(e2, t2) {
    q[e2] || (q[e2] = {}), m(t2) && Object.keys(t2).forEach((n2) => {
      M.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = q[e3][t3];
        s2 || (s2 = q[e3][t3] = []), -1 === s2.indexOf(n3) && y(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function K(e2, t2) {
    q[e2] || (q[e2] = {}), m(t2) ? Object.keys(t2).forEach((n2) => {
      M.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = q[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete q[e2];
  }
  function j(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function $(e2, t2) {
    return q[e2] && q[e2][t2] || [];
  }
  function B(e2) {
    F("callObject", e2);
  }
  const W = U("_globalUniCloudListener"), H = { RESPONSE: "response", NEED_LOGIN: "needLogin", REFRESH_TOKEN: "refreshToken" }, J = { CLIENT_DB: "clientdb", CLOUD_FUNCTION: "cloudfunction", CLOUD_OBJECT: "cloudobject" };
  function z(e2) {
    return W[e2] || (W[e2] = []), W[e2];
  }
  function V(e2, t2) {
    const n2 = z(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function G(e2, t2) {
    const n2 = z(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = z(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Q, X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      y(s2) && (t2[n2] = _(s2));
    }
    return t2;
  }
  class te extends Error {
    constructor(e2) {
      const t2 = e2.message || e2.errMsg || "unknown system error";
      super(t2), this.errMsg = t2, this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync(), connectSocket: (e2) => uni.connectSocket(e2) };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync(c) || ne.getStorageSync(h), tokenExpired: ne.getStorageSync(u) };
  }
  function ie({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ne.setStorageSync(c, e2), t2 && ne.setStorageSync(u, t2);
  }
  let oe, ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  let he = {};
  function le() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return { ...he, ...ae, locale: e2, LOCALE: e2 };
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
    for (const e3 in t2)
      Object.hasOwnProperty.call(t2, e3) && -1 === o2.indexOf(e3) && delete t2[e3];
    return ae = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...ue(), ...t2 }, { ...he, ...ae, locale: e2, LOCALE: e2 };
  }
  var de = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400) {
          const n3 = e3.data && e3.data.error && e3.data.error.code || "SYS_ERR", r3 = e3.data && e3.data.error && e3.data.error.message || e3.errMsg || "request:fail";
          return s2(new te({ code: n3, message: r3, requestId: t3 }));
        }
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var pe = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: I });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return de.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = de.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request({ ...this.setupRequest(t2), timeout: e2.timeout });
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== g(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new te({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: f2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: f2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: f2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = de.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: f2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new te({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), this.getFileInfo({ fileList: e2 }).then((n3) => {
          t2({ fileList: e2.map((e3, t3) => {
            const s2 = n3.fileList[t3];
            return { fileID: e3, tempFileURL: s2 && s2.url || e3 };
          }) });
        });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var fe = { init(e2) {
    const t2 = new pe(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const ge = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var me;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(me || (me = {}));
  var ye = function() {
  }, _e = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], h2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], h3 = n3[5], l2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), I2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & h3 ^ ~a3 & l2) + c2[p2] + u2[p2];
          d2 = l2, l2 = h3, h3 = a3, a3 = o3 + I2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = I2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(h2), t3.HmacSHA256 = i2._createHmacHelper(h2);
    }(Math), n2.SHA256);
  }), we = _e, Ie = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const ve = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Se(e2) {
    return void 0 === e2;
  }
  function Te(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  function be(e2 = "") {
    return e2.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1");
  }
  function Ee(e2 = 32) {
    const t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let n2 = "";
    for (let s2 = 0; s2 < e2; s2++)
      n2 += t2.charAt(Math.floor(62 * Math.random()));
    return n2;
  }
  var ke;
  function Ae(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(ke || (ke = {}));
  const Pe = { adapter: null, runtime: void 0 }, Ce = ["anonymousUuidKey"];
  class Oe extends ye {
    constructor() {
      super(), Pe.adapter.root.tcbObject || (Pe.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Pe.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Pe.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Pe.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Pe.adapter.root.tcbObject;
    }
  }
  function xe(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Oe();
      case "none":
        return new Oe();
      default:
        return t2.sessionStorage || new Oe();
    }
  }
  class Ne {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Pe.adapter.primaryStorage || e2.persistence, this._storage = xe(this._persistence, Pe.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = "device_id", a2 = `token_type_${e2.env}`, c2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: c2, deviceIdKey: o2, tokenTypeKey: a2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = xe(e2, Pe.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Ce.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Se(r2) || Te(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const Re = {}, Le = {};
  function Ue(e2) {
    return Re[e2];
  }
  class De {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Me extends De {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const qe = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Me)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new De(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function Fe(e2, t2) {
    qe.on(e2, t2);
  }
  function Ke(e2, t2 = {}) {
    qe.fire(e2, t2);
  }
  function je(e2, t2) {
    qe.off(e2, t2);
  }
  const $e = "loginStateChanged", Be = "loginStateExpire", We = "loginTypeChanged", He = "anonymousConverted", Je = "refreshAccessToken";
  var ze;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(ze || (ze = {}));
  class Ve {
    constructor() {
      this._fnPromiseMap = /* @__PURE__ */ new Map();
    }
    async run(e2, t2) {
      let n2 = this._fnPromiseMap.get(e2);
      return n2 || (n2 = new Promise(async (n3, s2) => {
        try {
          await this._runIdlePromise();
          const e3 = t2();
          n3(await e3);
        } catch (e3) {
          s2(e3);
        } finally {
          this._fnPromiseMap.delete(e2);
        }
      }), this._fnPromiseMap.set(e2, n2)), n2;
    }
    _runIdlePromise() {
      return Promise.resolve();
    }
  }
  class Ge {
    constructor(e2) {
      this._singlePromise = new Ve(), this._cache = Ue(e2.env), this._baseURL = `https://${e2.env}.ap-shanghai.tcb-api.tencentcloudapi.com`, this._reqClass = new Pe.adapter.reqClass({ timeout: e2.timeout, timeoutMsg: `请求在${e2.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] });
    }
    _getDeviceId() {
      if (this._deviceID)
        return this._deviceID;
      const { deviceIdKey: e2 } = this._cache.keys;
      let t2 = this._cache.getStore(e2);
      return "string" == typeof t2 && t2.length >= 16 && t2.length <= 48 || (t2 = Ee(), this._cache.setStore(e2, t2)), this._deviceID = t2, t2;
    }
    async _request(e2, t2, n2 = {}) {
      const s2 = { "x-request-id": Ee(), "x-device-id": this._getDeviceId() };
      if (n2.withAccessToken) {
        const { tokenTypeKey: e3 } = this._cache.keys, t3 = await this.getAccessToken(), n3 = this._cache.getStore(e3);
        s2.authorization = `${n3} ${t3}`;
      }
      return this._reqClass["get" === n2.method ? "get" : "post"]({ url: `${this._baseURL}${e2}`, data: t2, headers: s2 });
    }
    async _fetchAccessToken() {
      const { loginTypeKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2, tokenTypeKey: s2 } = this._cache.keys, r2 = this._cache.getStore(e2);
      if (r2 && r2 !== ze.ANONYMOUS)
        throw new te({ code: "INVALID_OPERATION", message: "非匿名登录不支持刷新 access token" });
      const i2 = await this._singlePromise.run("fetchAccessToken", async () => (await this._request("/auth/v1/signin/anonymously", {}, { method: "post" })).data), { access_token: o2, expires_in: a2, token_type: c2 } = i2;
      return this._cache.setStore(s2, c2), this._cache.setStore(t2, o2), this._cache.setStore(n2, Date.now() + 1e3 * a2), o2;
    }
    isAccessTokenExpired(e2, t2) {
      let n2 = true;
      return e2 && t2 && (n2 = t2 < Date.now()), n2;
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
      return this.isAccessTokenExpired(n2, s2) ? this._fetchAccessToken() : n2;
    }
    async refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, loginTypeKey: n2 } = this._cache.keys;
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.setStore(n2, ze.ANONYMOUS), this.getAccessToken();
    }
    async getUserInfo() {
      return this._singlePromise.run("getUserInfo", async () => (await this._request("/auth/v1/user/me", {}, { withAccessToken: true, method: "get" })).data);
    }
  }
  const Ye = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Qe = { "X-SDK-Version": "1.3.5" };
  function Xe(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function Ze() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...Qe, "x-seqid": e2 } };
  }
  class et {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Pe.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Ue(this.config.env), this._localCache = (t2 = this.config.env, Le[t2]), this.oauth = new Ge(this.config), Xe(this._reqClass, "post", [Ze]), Xe(this._reqClass, "upload", [Ze]), Xe(this._reqClass, "download", [Ze]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new te({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === ze.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Ke(Be), this._cache.removeStore(n2);
        }
        throw new te({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Ke(Je), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new te({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      let o2;
      if (-1 === Ye.indexOf(e2) && (this._cache.keys, i2.access_token = await this.oauth.getAccessToken()), "storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.timeout && (a2.timeout = n2.timeout), n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(ge, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new te({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}, n2 = {}) {
      const s2 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
      if (("ACCESS_TOKEN_DISABLED" === s2.data.code || "ACCESS_TOKEN_EXPIRED" === s2.data.code) && -1 === Ye.indexOf(e2)) {
        await this.oauth.refreshAccessToken();
        const s3 = await this.request(e2, t2, { ...n2, onUploadProgress: t2.onUploadProgress });
        if (s3.data.code)
          throw new te({ code: s3.data.code, message: be(s3.data.message) });
        return s3.data;
      }
      if (s2.data.code)
        throw new te({ code: s2.data.code, message: be(s2.data.message) });
      return s2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const tt = {};
  function nt(e2) {
    return tt[e2];
  }
  class st {
    constructor(e2) {
      this.config = e2, this._cache = Ue(e2.env), this._request = nt(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class rt {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Ue(this._envId), this._request = nt(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const e2 = await this._request.oauth.getUserInfo();
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class it {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Ue(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new rt(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === ze.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === ze.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === ze.WECHAT || this.loginType === ze.WECHAT_OPEN || this.loginType === ze.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class ot extends st {
    async signIn() {
      this._cache.updatePersistence("local"), await this._request.oauth.getAccessToken(), Ke($e), Ke(We, { env: this.config.env, loginType: ze.ANONYMOUS, persistence: "local" });
      const e2 = new it(this.config.env);
      return await e2.user.refresh(), e2;
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Ke(He, { env: this.config.env }), Ke(We, { loginType: ze.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new te({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, ze.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class at extends st {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Ke($e), Ke(We, { env: this.config.env, loginType: ze.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new it(this.config.env);
      throw new te({ message: "自定义登录失败" });
    }
  }
  class ct extends st {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Ke($e), Ke(We, { env: this.config.env, loginType: ze.EMAIL, persistence: this.config.persistence }), new it(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new te({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class ut extends st {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: ze.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Ke($e), Ke(We, { env: this.config.env, loginType: ze.USERNAME, persistence: this.config.persistence }), new it(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new te({ message: "用户名密码登录失败" });
    }
  }
  class ht {
    constructor(e2) {
      this.config = e2, this._cache = Ue(e2.env), this._request = nt(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Fe(We, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new ot(this.config);
    }
    customAuthProvider() {
      return new at(this.config);
    }
    emailAuthProvider() {
      return new ct(this.config);
    }
    usernameAuthProvider() {
      return new ut(this.config);
    }
    async signInAnonymously() {
      return new ot(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new ct(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new ut(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new ot(this.config)), Fe(He, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === ze.ANONYMOUS)
        throw new te({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), Ke($e), Ke(We, { env: this.config.env, loginType: ze.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      Fe($e, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      Fe(Be, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      Fe(Je, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      Fe(He, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      Fe(We, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2), s2 = this._cache.getStore(t2);
      return this._request.oauth.isAccessTokenExpired(n2, s2) ? null : new it(this.config.env);
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new at(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const lt = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = nt(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, dt = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = nt(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, pt = function({ fileList: e2 }, t2) {
    if (t2 = t2 || ve(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return nt(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ft = function({ fileList: e2 }, t2) {
    t2 = t2 || ve(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return nt(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, gt = async function({ fileID: e2 }, t2) {
    const n2 = (await ft.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = nt(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, mt = function({ name: e2, data: t2, query: n2, parse: s2, search: r2, timeout: i2 }, o2) {
    const a2 = o2 || ve();
    let c2;
    try {
      c2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const u2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: c2 };
    return nt(this.config.env).send("functions.invokeFunction", u2, { timeout: i2 }).then((e3) => {
      if (e3.code)
        a2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          a2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), a2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            a2(new te({ message: "response data must be json" }));
          }
      }
      return a2.promise;
    }).catch((e3) => {
      a2(e3);
    }), a2.promise;
  }, yt = { timeout: 15e3, persistence: "session" }, _t = 6e5, wt = {};
  class It {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Pe.adapter || (this.requestClient = new Pe.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...yt, ...e2 }, true) {
        case this.config.timeout > _t:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = _t;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new It(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Pe.adapter.primaryStorage || yt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Re[t3] = new Ne(e3), Le[t3] = new Ne({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, tt[n2.env] = new et(n2), this.authObj = new ht(this.config), this.authObj;
    }
    on(e2, t2) {
      return Fe.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return je.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return mt.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return pt.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ft.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return gt.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return dt.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      wt[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = wt[e2];
      if (!n2)
        throw new te({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = Ae(e2) || {};
      t2 && (Pe.adapter = t2), n2 && (Pe.runtime = n2);
    }
  }
  var vt = new It();
  function St(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class Tt {
    get(e2) {
      const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        ne.request({ url: St("https:", t2), data: n2, method: "GET", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    post(e2) {
      const { url: t2, data: n2, headers: s2, timeout: r2 } = e2;
      return new Promise((e3, i2) => {
        ne.request({ url: St("https:", t2), data: n2, method: "POST", header: s2, timeout: r2, success(t3) {
          e3(t3);
        }, fail(e4) {
          i2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: St("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const bt = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var Et = { genAdapter: function() {
    return { root: {}, reqClass: Tt, localStorage: bt, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  vt.useAdapters(Et);
  const kt = vt, At = kt.init;
  kt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = At.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var Pt = kt;
  async function Ct(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ne.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Ot(e2, t2) {
    let n2;
    for (let s2 = 0; s2 < e2.length; s2++) {
      const r2 = e2[s2];
      if (await Ct(r2, t2)) {
        n2 = r2;
        break;
      }
    }
    return { address: n2, port: t2 };
  }
  const xt = { "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign", "serverless.file.resource.report": "storage/report", "serverless.file.resource.delete": "storage/delete", "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url" };
  var Nt = class {
    constructor(e2) {
      if (["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), !e2.endpoint)
        throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
      this.config = Object.assign({}, e2), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = ne;
    }
    async request(e2, t2 = true) {
      const n2 = t2;
      return e2 = n2 ? await this.setupLocalRequest(e2) : this.setupRequest(e2), Promise.resolve().then(() => n2 ? this.requestLocal(e2) : de.wrappedRequest(e2, this.adapter.request));
    }
    requestLocal(e2) {
      return new Promise((t2, n2) => {
        this.adapter.request(Object.assign(e2, { complete(e3) {
          if (e3 || (e3 = {}), !e3.statusCode || e3.statusCode >= 400) {
            const t3 = e3.data && e3.data.code || "SYS_ERR", s2 = e3.data && e3.data.message || "request:fail";
            return n2(new te({ code: t3, message: s2 }));
          }
          t2({ success: true, result: e3.data });
        } }));
      });
    }
    setupRequest(e2) {
      const t2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), n2 = { "Content-Type": "application/json" };
      n2["x-serverless-sign"] = de.sign(t2, this.config.clientSecret);
      const s2 = le();
      n2["x-client-info"] = encodeURIComponent(JSON.stringify(s2));
      const { token: r2 } = re();
      return n2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: t2, dataType: "json", header: JSON.parse(JSON.stringify(n2)) };
    }
    async setupLocalRequest(e2) {
      const t2 = le(), { token: n2 } = re(), s2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now(), clientInfo: t2, token: n2 }), { address: r2, servePort: i2 } = this.__dev__ && this.__dev__.debugInfo || {}, { address: o2 } = await Ot(r2, i2);
      return { url: `http://${o2}:${i2}/${xt[e2.method]}`, method: "POST", data: s2, dataType: "json", header: JSON.parse(JSON.stringify({ "Content-Type": "application/json" })) };
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(t2, false);
    }
    getUploadFileOptions(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(t2);
    }
    reportUploadFile(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(t2);
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getUploadFileOptions({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        return r2 = t3.result.fileUrl, new Promise((t4, r3) => {
          const c2 = this.adapter.uploadFile({ url: i2, formData: o2, name: a2, filePath: e2, fileType: n2, success(e3) {
            e3 && e3.statusCode < 400 ? t4(e3) : r3(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
          }, fail(e3) {
            r3(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
          } });
          "function" == typeof s2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
            s2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
          });
        });
      }).then(() => this.reportUploadFile({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(t2).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(n2).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var Rt = { init(e2) {
    const t2 = new Nt(e2), n2 = { signInAnonymously: function() {
      return Promise.resolve();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, Lt = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Ut() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
      var t2 = 16 * Math.random() | 0;
      return ("x" === e2 ? t2 : 3 & t2 | 8).toString(16);
    });
  }
  function Dt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = String(Date.now()), u2 = Ut(), h2 = Object.assign({}, i2, { "x-from-app-id": a2.spaceAppId, "x-from-env-id": a2.spaceId, "x-to-env-id": a2.spaceId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2, "x-trace-id": u2 }), l2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = "HMAC-SHA256", n3 = e3.signedHeaders.join(";"), s3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), r3 = we(e3.body).toString(Lt), i3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${s3}
${n3}
${r3}
`, o3 = we(i3).toString(Lt), a3 = `${t3}
${e3.timestamp}
${o3}
`, c3 = Ie(a3, e3.secretKey).toString(Lt);
      return `${t3} Credential=${e3.secretId}, SignedHeaders=${n3}, Signature=${c3}`;
    }({ path: d2, query: p2, method: r2, headers: h2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.accessKey, secretKey: a2.secretKey, signedHeaders: l2.sort() });
    return { url: `${a2.endpoint}${e2}`, headers: Object.assign({}, h2, { Authorization: f2 }) };
  }
  function Mt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {}, timeout: r2 }) {
    return new Promise((i2, o2) => {
      ne.request({ url: e2, method: n2, data: "object" == typeof t2 ? JSON.stringify(t2) : t2, header: s2, dataType: "json", timeout: r2, complete: (e3 = {}) => {
        const t3 = s2["x-trace-id"] || "";
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { message: n3, errMsg: s3, trace_id: r3 } = e3.data || {};
          return o2(new te({ code: "SYS_ERR", message: n3 || s3 || "request:fail", requestId: r3 || t3 }));
        }
        i2({ status: e3.statusCode, data: e3.data, headers: e3.header, requestId: t3 });
      } });
    });
  }
  function qt(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Dt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return Mt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function Ft(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.spaceId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.spaceId)), r2;
  }
  function Kt(e2 = "") {
    return "cloud://".concat(this.config.spaceId, "/").concat(e2.replace(/^\/+/, ""));
  }
  class jt {
    constructor(e2) {
      this.config = e2;
    }
    signedURL(e2, t2 = {}) {
      const n2 = `/ws/function/${e2}`, s2 = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""), r2 = Object.assign({}, t2, { accessKeyId: this.config.accessKey, signatureNonce: Ut(), timestamp: "" + Date.now() }), i2 = [n2, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function(e3) {
        return r2[e3] ? "".concat(e3, "=").concat(r2[e3]) : null;
      }).filter(Boolean).join("&"), `host:${s2}`].join("\n"), o2 = ["HMAC-SHA256", we(i2).toString(Lt)].join("\n"), a2 = Ie(o2, this.config.secretKey).toString(Lt), c2 = Object.keys(r2).map((e3) => `${e3}=${encodeURIComponent(r2[e3])}`).join("&");
      return `${this.config.wsEndpoint}${n2}?${c2}&signature=${a2}`;
    }
  }
  var $t = class {
    constructor(e2) {
      if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), e2.endpoint) {
        if ("string" != typeof e2.endpoint)
          throw new Error("endpoint must be string");
        if (!/^https:\/\//.test(e2.endpoint))
          throw new Error("endpoint must start with https://");
        e2.endpoint = e2.endpoint.replace(/\/$/, "");
      }
      this.config = Object.assign({}, e2, { endpoint: e2.endpoint || `https://${e2.spaceId}.api-hz.cloudbasefunction.cn`, wsEndpoint: e2.wsEndpoint || `wss://${e2.spaceId}.api-hz.cloudbasefunction.cn` }), this._websocket = new jt(this.config);
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2, async: r2 = false, timeout: i2 } = e3, o2 = "POST", a2 = { "x-to-function-name": n2 };
        r2 && (a2["x-function-invoke-type"] = "async");
        const { url: c2, headers: u2 } = Dt("/functions/invokeFunction", { functionName: n2, data: s2, method: o2, headers: a2, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return Mt({ url: c2, data: s2, method: o2, headers: u2, timeout: i2 }).then((e4) => {
          let t3 = 0;
          if (r2) {
            const n3 = e4.data || {};
            t3 = "200" === n3.errCode ? 0 : n3.errCode, e4.data = n3.data || {}, e4.errMsg = n3.errMsg;
          }
          if (0 !== t3)
            throw new te({ code: t3, message: e4.errMsg, requestId: e4.requestId });
          return { errCode: t3, success: 0 === t3, requestId: e4.requestId, result: e4.data };
        }).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, name: "file", success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== g(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await qt({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && t2({ code: "INVALID_PARAM", message: "fileList不能为空数组" }), e2.length > 50 && t2({ code: "INVALID_PARAM", message: "fileList数组长度不能超过50" });
        const s2 = [];
        for (const n3 of e2) {
          let e3;
          "string" !== g(n3) && t2({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
          try {
            e3 = Ft.call(this, n3);
          } catch (t3) {
            console.warn(t3.errCode, t3.errMsg), e3 = n3;
          }
          s2.push({ file_id: e3, expire: 600 });
        }
        qt({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: Kt.call(this, e4.file_id), tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
    async connectWebSocket(e2) {
      const { name: t2, query: n2 } = e2;
      return ne.connectSocket({ url: this._websocket.signedURL(t2, n2), complete: () => {
      } });
    }
  };
  var Bt = { init: (e2) => {
    e2.provider = "alipay";
    const t2 = new $t(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Wt({ data: e2 }) {
    let t2;
    t2 = le();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Ht(e2 = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: t2, localPort: n2 } = this.__dev__, s2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], r2 = this.config.spaceId, i2 = `http://${t2}:${n2}/system/check-function`, o2 = `http://${t2}:${n2}/cloudfunctions/${e2.name}`;
    return new Promise((t3, n3) => {
      ne.request({ method: "POST", url: i2, data: { name: e2.name, platform: P, provider: s2, spaceId: r2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: t3, message: n3 }) => {
      if (0 !== t3) {
        switch (t3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2.name}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2.name}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(n3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR":
            console.error(n3 || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
            break;
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${n3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction(e2);
      }
      return new Promise((t4, n4) => {
        const r3 = Wt.call(this, { data: e2.data });
        ne.request({ method: "POST", url: o2, data: { provider: s2, platform: P, param: r3 }, timeout: e2.timeout, success: ({ statusCode: e3, data: s3 } = {}) => !e3 || e3 >= 400 ? n4(new te({ code: s3.code || "SYS_ERR", message: s3.message || "request:fail" })) : t4({ result: s3 }), fail(e3) {
          n4(new te({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Jt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var zt = /[\\^$.*+?()[\]{}|]/g, Vt = RegExp(zt.source);
  function Gt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Vt.test(s2) ? s2.replace(zt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Yt = { NONE: "none", REQUEST: "request", RESPONSE: "response", BOTH: "both" }, Qt = "_globalUniCloudStatus", Xt = "_globalUniCloudSecureNetworkCache__{spaceId}", Zt = "uni-secure-network", en = { SYSTEM_ERROR: { code: 2e4, message: "System error" }, APP_INFO_INVALID: { code: 20101, message: "Invalid client" }, GET_ENCRYPT_KEY_FAILED: { code: 20102, message: "Get encrypt key failed" } };
  function nn(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || Zt, code: s2 || i2 || en.SYSTEM_ERROR.code, message: r2 || o2, cause: a2 });
  }
  let Kn;
  function Hn({ secretType: e2 } = {}) {
    return e2 === Yt.REQUEST || e2 === Yt.RESPONSE || e2 === Yt.BOTH;
  }
  function Jn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function zn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = /* @__PURE__ */ function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), nn(en.APP_INFO_INVALID);
  }
  function Vn({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Gn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Wt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay", dcloud: "dcloud" }[this.config.provider], i2 = Hn(n3), o2 = Jn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && Vn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && Vn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = Gt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = Gt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: Jt, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && O ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Ht), o2 = Ht) : o2 = n2, o2 = o2.bind(e2), Jn(t3))
        a2 = n2.call(e2, t3);
      else if (Hn(t3)) {
        a2 = new Kn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (zn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new Kn({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2.then((e3) => e3);
    };
  }
  Kn = class {
    constructor() {
      throw nn({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Yn = Symbol("CLIENT_DB_INTERNAL");
  function Qn(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Yn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function Xn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const Zn = ["db.Geo", "db.command", "command.aggregate"];
  function es(e2, t2) {
    return Zn.indexOf(`${e2}.${t2}`) > -1;
  }
  function ts(e2) {
    switch (g(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => ts(e3));
      case "object":
        return e2._internalType === Yn || Object.keys(e2).forEach((t2) => {
          e2[t2] = ts(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function ns(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class ss {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: ts(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = ns(e2), n2 = ns(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === ns(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = ns(e2), n2 = ns(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return rs({ $method: e2, $param: ts(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: ts(t2) }), b) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function rs(e2, t2, n2) {
    return Qn(new ss(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), es(s2, t3) ? rs({ $method: t3 }, e3, n2) : function() {
        return rs({ $method: t3, $param: ts(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function is({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  class os {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = U("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Xn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Xn(this._dbCallBacks)), this.env = Qn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = Qn({}, { get: (e3, t3) => is({ path: ["Geo"], method: t3 }) }), this.serverDate = is({ path: [], method: "serverDate" }), this.RegExp = is({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  }
  function as(e2, t2 = {}) {
    return Qn(new e2(t2), { get: (e3, t3) => es("db", t3) ? rs({ $method: t3 }, null, e3) : function() {
      return rs({ $method: t3, $param: ts(Array.from(arguments)) }, null, e3);
    } });
  }
  class cs extends os {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), j($(o2, "fail"), e3).then(() => j($(o2, "complete"), e3)).then(() => (r2(null, e3), Y(H.RESPONSE, { type: J.CLIENT_DB, content: e3 }), Promise.reject(e3)));
      }
      const c2 = j($(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: l.CLIENT_DB, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4];
            let r3 = "[System Info]" + n4;
            s4 && (r3 = `${r3}
详细信息：${s4}`), (console["warn" === t4 ? "error" : t4] || console.log)(r3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y(H.REFRESH_TOKEN, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return j($(o2, "success"), e4).then(() => j($(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(H.RESPONSE, { type: J.CLIENT_DB, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const us = "token无效，跳转登录页面", hs = "token过期，跳转登录页面", ls = { TOKEN_INVALID_TOKEN_EXPIRED: hs, TOKEN_INVALID_INVALID_CLIENTID: us, TOKEN_INVALID: us, TOKEN_INVALID_WRONG_TOKEN: us, TOKEN_INVALID_ANONYMOUS_USER: us }, ds = { "uni-id-token-expired": hs, "uni-id-check-token-failed": us, "uni-id-token-not-exist": us, "uni-id-check-device-feature-failed": us }, ps = { ...ls, ...ds, default: "用户未登录或登录状态过期，自动跳转登录页面" };
  function fs(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function gs(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(fs(t2, e3.path)) : false === e3.needLogin && s2.push(fs(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function ms(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function ys() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath;
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : "";
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function _s() {
    return ms(ys());
  }
  function ws(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = ms(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const Is = !!e.uniIdRouter;
  const { loginPage: vs, routerNeedLogin: Ss, resToLogin: Ts, needLoginPage: bs, notNeedLoginPage: Es, loginPageInTabBar: ks } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = gs(t2), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = gs(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: ws(i2, r2) };
  }();
  if (bs.indexOf(vs) > -1)
    throw new Error(`Login page [${vs}] should not be "needLogin", please check your pages.json`);
  function As(e2) {
    const t2 = _s();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function Ps(e2) {
    const t2 = ms(As(e2));
    return !(Es.indexOf(t2) > -1) && (bs.indexOf(t2) > -1 || Ss.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function Cs({ redirect: e2 }) {
    const t2 = ms(e2), n2 = ms(vs);
    return _s() !== n2 && t2 !== n2;
  }
  function Os({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !Cs({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(vs, t2);
    ks ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    }, 0);
  }
  function xs({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: ps[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: ps[e4] };
      }
      return n3;
    }();
    if (Ps(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (z(H.NEED_LOGIN).length > 0)
        return setTimeout(() => {
          Y(H.NEED_LOGIN, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Ns() {
    !function() {
      const e3 = ys(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = xs({ url: e3 });
      t2 || n2 && Os({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = xs({ url: e3.url });
        return t3 ? e3 : s2 ? (Os({ api: n2, redirect: As(e3.url) }), false) : e3;
      } });
    }
  }
  function Rs() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ps;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ls;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = z(H.NEED_LOGIN);
        Z().then(() => {
          const n3 = ys();
          if (n3 && Cs({ redirect: n3 }))
            return t3.length > 0 ? Y(H.NEED_LOGIN, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (vs && Os({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Ls(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        V(H.RESPONSE, e4);
      }, e3.offResponse = function(e4) {
        G(H.RESPONSE, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        V(H.NEED_LOGIN, e4);
      }, e3.offNeedLogin = function(e4) {
        G(H.NEED_LOGIN, e4);
      }, Is && (U(Qt).needLoginInit || (U(Qt).needLoginInit = true, Z().then(() => {
        Ns.call(e3);
      }), Ts && Rs.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        V(H.REFRESH_TOKEN, e4);
      }, e3.offRefreshToken = function(e4) {
        G(H.REFRESH_TOKEN, e4);
      };
    }(e2);
  }
  let Us;
  const Ds = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ms = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function qs() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(Us(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  Us = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !Ms.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = Ds.indexOf(e2.charAt(i2++)) << 18 | Ds.indexOf(e2.charAt(i2++)) << 12 | (n2 = Ds.indexOf(e2.charAt(i2++))) << 6 | (s2 = Ds.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Fs = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ provider: u2.provider, filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Ks = t(Fs);
  const js = { auto: "auto", onready: "onready", manual: "manual" };
  function $s(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {}, mixinDatacomError: null }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === js.manual)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, this.mixinDatacomError = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2;
      t2 = t2 || {}, n2 = "undefined" != typeof __uniX && __uniX ? e2.databaseForJQL(this.spaceInfo) : e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Bs(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get(s3, c2) {
        switch (c2) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
          return async function(...s4) {
            const r3 = n3 ? n3({ params: s4 }) : {};
            let i3, o3;
            try {
              return await j($(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await j($(t3, "success"), { ...r3, result: i3 }), i3;
            } catch (e4) {
              throw o3 = e4, await j($(t3, "fail"), { ...r3, error: o3 }), o3;
            } finally {
              await j($(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
            }
          };
        }({ fn: async function s4(...u2) {
          let h2;
          a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
          const d2 = { name: t2, type: l.OBJECT, data: { method: c2, params: u2 } };
          "object" == typeof n2.secretMethods && function(e3, t3) {
            const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
            r3 && (t3.secretType = r3);
          }(n2, d2);
          let p2 = false;
          try {
            h2 = await e2.callFunction(d2);
          } catch (e3) {
            p2 = true, h2 = { result: new te(e3) };
          }
          const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = h2.result || {};
          if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y(H.REFRESH_TOKEN, { ...y2 })), g2) {
            let e3 = m2;
            if (p2 && o2) {
              e3 = (await o2({ objectName: t2, methodName: c2, params: u2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
            }
            if (a2)
              if ("toast" === i2.type)
                uni.showToast({ title: e3, icon: "none" });
              else {
                if ("modal" !== i2.type)
                  throw new Error(`Invalid errorOptions.type: ${i2.type}`);
                {
                  const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                    return new Promise((i3, o3) => {
                      uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                        i3(e5);
                      }, fail() {
                        i3({ confirm: false, cancel: true });
                      } });
                    });
                  }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                  if (i2.retry && t3)
                    return s4(...u2);
                }
              }
            const n3 = new te({ subject: f2, code: g2, message: m2, requestId: h2.requestId });
            throw n3.detail = h2.result, Y(H.RESPONSE, { type: J.CLOUD_OBJECT, content: n3 }), n3;
          }
          return Y(H.RESPONSE, { type: J.CLOUD_OBJECT, content: h2.result }), h2.result;
        }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
          return { objectName: t2, methodName: c2, params: e3 };
        } });
      } });
    };
  }
  function Ws(e2) {
    return U(Xt.replace("{spaceId}", e2.config.spaceId));
  }
  async function Hs({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Ws(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
  }
  async function Js(e2) {
    const t2 = Ws(this);
    return t2.initPromise || (t2.initPromise = Hs.call(this, e2).then((e3) => e3).catch((e3) => {
      throw delete t2.initPromise, e3;
    })), t2.initPromise;
  }
  function zs(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Js.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Vs(e2) {
    !function(e3) {
      he = e3;
    }(e2);
  }
  function Gs(e2) {
    const n2 = { getAppBaseInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(s2) {
      return new Promise((r2, i2) => {
        n2[e2]({ ...s2, success(e3) {
          r2(e3);
        }, fail(e3) {
          i2(e3);
        } });
      });
    };
  }
  class Ys extends S {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Gs("getAppBaseInfo")(), Gs("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function Qs(e2) {
    {
      const { osName: e3, osVersion: t3 } = ce();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await Ot(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === P.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Xs(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const Zs = { tcb: Pt, tencent: Pt, aliyun: fe, private: Rt, dcloud: Rt, alipay: Bt };
  let er = new class {
    init(e2) {
      let t2 = {};
      const n2 = Zs[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = C;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Qs(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Xs(t2), Gn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = as(cs, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = as(cs, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = qs, e3.chooseAndUploadFile = Ks.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return $s(e3);
        } }), e3.SSEChannel = Ys, e3.initSecureNetworkByWeixin = zs(e3), e3.setCustomClientInfo = Vs, e3.importObject = Bs(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = (/* @__PURE__ */ function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || l.DEFAULT;
              s2 = e5 !== l.DEFAULT;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: c2 } = ee(n4), u2 = i2.then(() => s2 ? Promise.resolve() : j($(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : j($(t3, "success"), e5).then(() => j($(t3, "complete"), e5)).then(() => (r2 && Y(H.RESPONSE, { type: J.CLOUD_FUNCTION, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : j($(t3, "fail"), e5).then(() => j($(t3, "complete"), e5)).then(() => (Y(H.RESPONSE, { type: J.CLOUD_FUNCTION, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || c2))
              return u2;
            u2.then((e5) => {
              o2 && o2(e5), c2 && c2(e5), r2 && Y(H.RESPONSE, { type: J.CLOUD_FUNCTION, content: e5 });
            }, (e5) => {
              a2 && a2(e5), c2 && c2(e5), r2 && Y(H.RESPONSE, { type: J.CLOUD_FUNCTION, content: e5 });
            });
          };
        }(t2[e3], e3)).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = O;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], er = er.init(t2), er._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"], n2 = ["database", "getCurrentUserInfo", "importObject"];
      let s2;
      s2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", [...t3, ...n2].forEach((e3) => {
        er[e3] = function() {
          if (console.error(s2), -1 === n2.indexOf(e3))
            return Promise.reject(new te({ code: "SYS_ERR", message: s2 }));
          console.error(s2);
        };
      });
    }
    if (Object.assign(er, { get mixinDatacom() {
      return $s(er);
    } }), Ls(er), er.addInterceptor = F, er.removeInterceptor = K, er.interceptObject = B, uni.__uniCloud = er, "app" === P) {
      const e3 = D();
      e3.uniCloud = er, e3.UniCloudError = te;
    }
  })();
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
