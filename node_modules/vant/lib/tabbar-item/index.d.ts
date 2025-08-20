export declare const TabbarItem: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    icon: StringConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
    iconPrefix: StringConstructor;
}>, (() => import("vue/jsx-runtime").JSX.Element) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    icon: StringConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
    iconPrefix: StringConstructor;
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    replace: boolean;
    dot: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default TabbarItem;
export { tabbarItemProps } from './TabbarItem';
export type { TabbarItemProps } from './TabbarItem';
export type { TabbarItemThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanTabbarItem: typeof TabbarItem;
    }
}
