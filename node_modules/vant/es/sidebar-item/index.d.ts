export declare const SidebarItem: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    title: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
}>, (() => import("vue/jsx-runtime").JSX.Element) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    title: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    replace: boolean;
    dot: boolean;
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default SidebarItem;
export { sidebarItemProps } from './SidebarItem';
export type { SidebarItemProps } from './SidebarItem';
export type { SidebarItemThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanSidebarItem: typeof SidebarItem;
    }
}
