import { type PropType, type ExtractPropTypes } from 'vue';
import { type BadgeProps } from '../badge';
export declare const gridItemProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconColor: StringConstructor;
    iconPrefix: StringConstructor;
    badgeProps: PropType<Partial<BadgeProps>>;
};
export type GridItemProps = ExtractPropTypes<typeof gridItemProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconColor: StringConstructor;
    iconPrefix: StringConstructor;
    badgeProps: PropType<Partial<BadgeProps>>;
}>, (() => import("vue/jsx-runtime").JSX.Element) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    text: StringConstructor;
    icon: StringConstructor;
    badge: (NumberConstructor | StringConstructor)[];
    iconColor: StringConstructor;
    iconPrefix: StringConstructor;
    badgeProps: PropType<Partial<BadgeProps>>;
}>> & Readonly<{}>, {
    replace: boolean;
    dot: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
