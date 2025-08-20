import { type PropType, type ExtractPropTypes } from 'vue';
import { type BadgeProps } from '../badge';
export declare const actionBarIconProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconClass: PropType<unknown>;
    badgeProps: PropType<Partial<BadgeProps>>;
    iconPrefix: StringConstructor;
};
export type ActionBarIconProps = ExtractPropTypes<typeof actionBarIconProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconClass: PropType<unknown>;
    badgeProps: PropType<Partial<BadgeProps>>;
    iconPrefix: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconClass: PropType<unknown>;
    badgeProps: PropType<Partial<BadgeProps>>;
    iconPrefix: StringConstructor;
}>> & Readonly<{}>, {
    replace: boolean;
    dot: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
