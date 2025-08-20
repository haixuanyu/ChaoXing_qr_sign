import { type PropType, type ExtractPropTypes } from 'vue';
import { type BadgeProps } from '../badge';
export declare const iconProps: {
    dot: BooleanConstructor;
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    name: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    badgeProps: PropType<Partial<BadgeProps>>;
    classPrefix: StringConstructor;
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    dot: BooleanConstructor;
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    name: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    badgeProps: PropType<Partial<BadgeProps>>;
    classPrefix: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    dot: BooleanConstructor;
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    name: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    badgeProps: PropType<Partial<BadgeProps>>;
    classPrefix: StringConstructor;
}>> & Readonly<{}>, {
    dot: boolean;
    tag: keyof HTMLElementTagNameMap;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
