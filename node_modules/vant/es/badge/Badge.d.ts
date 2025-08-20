import { type PropType, type ExtractPropTypes } from 'vue';
import { type Numeric } from '../utils';
export type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export declare const badgeProps: {
    dot: BooleanConstructor;
    max: (NumberConstructor | StringConstructor)[];
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    color: StringConstructor;
    offset: PropType<[Numeric, Numeric]>;
    content: (NumberConstructor | StringConstructor)[];
    showZero: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: PropType<BadgePosition>;
        default: BadgePosition;
    };
};
export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    dot: BooleanConstructor;
    max: (NumberConstructor | StringConstructor)[];
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    color: StringConstructor;
    offset: PropType<[Numeric, Numeric]>;
    content: (NumberConstructor | StringConstructor)[];
    showZero: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: PropType<BadgePosition>;
        default: BadgePosition;
    };
}>, () => import("vue/jsx-runtime").JSX.Element | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    dot: BooleanConstructor;
    max: (NumberConstructor | StringConstructor)[];
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    color: StringConstructor;
    offset: PropType<[Numeric, Numeric]>;
    content: (NumberConstructor | StringConstructor)[];
    showZero: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: PropType<BadgePosition>;
        default: BadgePosition;
    };
}>> & Readonly<{}>, {
    dot: boolean;
    tag: keyof HTMLElementTagNameMap;
    showZero: boolean;
    position: BadgePosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
