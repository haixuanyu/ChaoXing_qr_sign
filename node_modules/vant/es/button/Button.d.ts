import { type PropType, type ExtractPropTypes } from 'vue';
import { LoadingType } from '../loading';
import { ButtonSize, ButtonType, ButtonNativeType, ButtonIconPosition } from './types';
export declare const buttonProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    text: StringConstructor;
    icon: StringConstructor;
    type: {
        type: PropType<ButtonType>;
        default: ButtonType;
    };
    size: {
        type: PropType<ButtonSize>;
        default: ButtonSize;
    };
    color: StringConstructor;
    block: BooleanConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    square: BooleanConstructor;
    loading: BooleanConstructor;
    hairline: BooleanConstructor;
    disabled: BooleanConstructor;
    iconPrefix: StringConstructor;
    nativeType: {
        type: PropType<ButtonNativeType>;
        default: ButtonNativeType;
    };
    loadingSize: (NumberConstructor | StringConstructor)[];
    loadingText: StringConstructor;
    loadingType: PropType<LoadingType>;
    iconPosition: {
        type: PropType<ButtonIconPosition>;
        default: ButtonIconPosition;
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    text: StringConstructor;
    icon: StringConstructor;
    type: {
        type: PropType<ButtonType>;
        default: ButtonType;
    };
    size: {
        type: PropType<ButtonSize>;
        default: ButtonSize;
    };
    color: StringConstructor;
    block: BooleanConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    square: BooleanConstructor;
    loading: BooleanConstructor;
    hairline: BooleanConstructor;
    disabled: BooleanConstructor;
    iconPrefix: StringConstructor;
    nativeType: {
        type: PropType<ButtonNativeType>;
        default: ButtonNativeType;
    };
    loadingSize: (NumberConstructor | StringConstructor)[];
    loadingText: StringConstructor;
    loadingType: PropType<LoadingType>;
    iconPosition: {
        type: PropType<ButtonIconPosition>;
        default: ButtonIconPosition;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    text: StringConstructor;
    icon: StringConstructor;
    type: {
        type: PropType<ButtonType>;
        default: ButtonType;
    };
    size: {
        type: PropType<ButtonSize>;
        default: ButtonSize;
    };
    color: StringConstructor;
    block: BooleanConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    square: BooleanConstructor;
    loading: BooleanConstructor;
    hairline: BooleanConstructor;
    disabled: BooleanConstructor;
    iconPrefix: StringConstructor;
    nativeType: {
        type: PropType<ButtonNativeType>;
        default: ButtonNativeType;
    };
    loadingSize: (NumberConstructor | StringConstructor)[];
    loadingText: StringConstructor;
    loadingType: PropType<LoadingType>;
    iconPosition: {
        type: PropType<ButtonIconPosition>;
        default: ButtonIconPosition;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    replace: boolean;
    type: ButtonType;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    size: ButtonSize;
    disabled: boolean;
    block: boolean;
    square: boolean;
    loading: boolean;
    plain: boolean;
    hairline: boolean;
    nativeType: ButtonNativeType;
    iconPosition: ButtonIconPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
