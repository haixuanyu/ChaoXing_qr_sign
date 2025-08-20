export declare const ActionBarIcon: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconClass: import("vue").PropType<unknown>;
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
    iconPrefix: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconClass: import("vue").PropType<unknown>;
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
    iconPrefix: StringConstructor;
}>> & Readonly<{}>, {
    replace: boolean;
    dot: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default ActionBarIcon;
export { actionBarIconProps } from './ActionBarIcon';
export type { ActionBarIconProps } from './ActionBarIcon';
export type { ActionBarIconThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanActionBarIcon: typeof ActionBarIcon;
    }
}
