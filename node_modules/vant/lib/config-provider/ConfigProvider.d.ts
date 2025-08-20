import { type PropType, type InjectionKey, type ExtractPropTypes } from 'vue';
import { type Numeric } from '../utils';
export type ConfigProviderTheme = 'light' | 'dark';
export type ConfigProviderThemeVarsScope = 'local' | 'global';
export type ConfigProviderProvide = {
    iconPrefix?: string;
};
export declare const CONFIG_PROVIDER_KEY: InjectionKey<ConfigProviderProvide>;
export type ThemeVars = PropType<Record<string, Numeric>>;
export declare const configProviderProps: {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    theme: {
        type: PropType<ConfigProviderTheme>;
        default: ConfigProviderTheme;
    };
    zIndex: NumberConstructor;
    themeVars: ThemeVars;
    themeVarsDark: ThemeVars;
    themeVarsLight: ThemeVars;
    themeVarsScope: {
        type: PropType<ConfigProviderThemeVarsScope>;
        default: ConfigProviderThemeVarsScope;
    };
    iconPrefix: StringConstructor;
};
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    theme: {
        type: PropType<ConfigProviderTheme>;
        default: ConfigProviderTheme;
    };
    zIndex: NumberConstructor;
    themeVars: ThemeVars;
    themeVarsDark: ThemeVars;
    themeVarsLight: ThemeVars;
    themeVarsScope: {
        type: PropType<ConfigProviderThemeVarsScope>;
        default: ConfigProviderThemeVarsScope;
    };
    iconPrefix: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    theme: {
        type: PropType<ConfigProviderTheme>;
        default: ConfigProviderTheme;
    };
    zIndex: NumberConstructor;
    themeVars: ThemeVars;
    themeVarsDark: ThemeVars;
    themeVarsLight: ThemeVars;
    themeVarsScope: {
        type: PropType<ConfigProviderThemeVarsScope>;
        default: ConfigProviderThemeVarsScope;
    };
    iconPrefix: StringConstructor;
}>> & Readonly<{}>, {
    tag: keyof HTMLElementTagNameMap;
    theme: ConfigProviderTheme;
    themeVarsScope: ConfigProviderThemeVarsScope;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
