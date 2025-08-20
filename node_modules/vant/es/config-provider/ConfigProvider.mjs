import { watch, provide, computed, watchEffect, onActivated, onDeactivated, onBeforeUnmount, defineComponent, createVNode as _createVNode } from "vue";
import { extend, inBrowser, kebabCase, makeStringProp, createNamespace } from "../utils/index.mjs";
import { setGlobalZIndex } from "../composables/use-global-z-index.mjs";
const [name, bem] = createNamespace("config-provider");
const CONFIG_PROVIDER_KEY = Symbol(name);
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
var stdin_default = defineComponent({
  name,
  props: configProviderProps,
  setup(props, {
    slots
  }) {
    const style = computed(() => mapThemeVarsToCSSVars(extend({}, props.themeVars, props.theme === "dark" ? props.themeVarsDark : props.themeVarsLight)));
    if (inBrowser) {
      const addTheme = () => {
        document.documentElement.classList.add(`van-theme-${props.theme}`);
      };
      const removeTheme = (theme = props.theme) => {
        document.documentElement.classList.remove(`van-theme-${theme}`);
      };
      watch(() => props.theme, (newVal, oldVal) => {
        if (oldVal) {
          removeTheme(oldVal);
        }
        addTheme();
      }, {
        immediate: true
      });
      onActivated(addTheme);
      onDeactivated(removeTheme);
      onBeforeUnmount(removeTheme);
      watch(style, (newStyle, oldStyle) => {
        if (props.themeVarsScope === "global") {
          syncThemeVarsOnRoot(newStyle, oldStyle);
        }
      });
      watch(() => props.themeVarsScope, (newScope, oldScope) => {
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
    provide(CONFIG_PROVIDER_KEY, props);
    watchEffect(() => {
      if (props.zIndex !== void 0) {
        setGlobalZIndex(props.zIndex);
      }
    });
    return () => _createVNode(props.tag, {
      "class": bem(),
      "style": props.themeVarsScope === "local" ? style.value : void 0
    }, {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
      }
    });
  }
});
export {
  CONFIG_PROVIDER_KEY,
  configProviderProps,
  stdin_default as default
};
