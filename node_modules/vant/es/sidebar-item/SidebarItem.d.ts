import { type PropType, type ExtractPropTypes } from 'vue';
import { type BadgeProps } from '../badge';
export declare const sidebarItemProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    title: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    badgeProps: PropType<Partial<BadgeProps>>;
};
export type SidebarItemProps = ExtractPropTypes<typeof sidebarItemProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    title: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    badgeProps: PropType<Partial<BadgeProps>>;
}>, (() => import("vue/jsx-runtime").JSX.Element) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    title: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    badgeProps: PropType<Partial<BadgeProps>>;
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    replace: boolean;
    dot: boolean;
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
