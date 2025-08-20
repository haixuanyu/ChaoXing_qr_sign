export declare const ActionBarButton: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    type: import("vue").PropType<import("..").ButtonType>;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    type: import("vue").PropType<import("..").ButtonType>;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
}>> & Readonly<{}>, {
    replace: boolean;
    disabled: boolean;
    loading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default ActionBarButton;
export { actionBarButtonProps } from './ActionBarButton';
export type { ActionBarButtonProps } from './ActionBarButton';
export type { ActionBarButtonThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanActionBarButton: typeof ActionBarButton;
    }
}
