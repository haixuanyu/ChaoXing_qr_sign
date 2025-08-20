import { type PropType, type ExtractPropTypes } from 'vue';
import { type BadgeProps } from '../badge';
export declare const tabbarItemProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    icon: StringConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: PropType<Partial<BadgeProps>>;
    iconPrefix: StringConstructor;
};
export type TabbarItemProps = ExtractPropTypes<typeof tabbarItemProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    icon: StringConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: PropType<Partial<BadgeProps>>;
    iconPrefix: StringConstructor;
}>, (() => import("vue/jsx-runtime").JSX.Element) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    icon: StringConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    badgeProps: PropType<Partial<BadgeProps>>;
    iconPrefix: StringConstructor;
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    replace: boolean;
    dot: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
