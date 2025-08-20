export declare const GridItem: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconColor: StringConstructor;
    iconPrefix: StringConstructor;
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
}>, (() => import("vue/jsx-runtime").JSX.Element) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconColor: StringConstructor;
    iconPrefix: StringConstructor;
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
}>> & Readonly<{}>, {
    replace: boolean;
    dot: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default GridItem;
export { gridItemProps } from './GridItem';
export type { GridItemProps } from './GridItem';
export type { GridItemThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanGridItem: typeof GridItem;
    }
}
