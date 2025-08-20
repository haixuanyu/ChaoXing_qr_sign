export declare const Button: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    text: StringConstructor;
    icon: StringConstructor;
    type: {
        type: import("vue").PropType<import("./types").ButtonType>;
        default: import("./types").ButtonType;
    };
    size: {
        type: import("vue").PropType<import("./types").ButtonSize>;
        default: import("./types").ButtonSize;
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
        type: import("vue").PropType<import("./types").ButtonNativeType>;
        default: import("./types").ButtonNativeType;
    };
    loadingSize: (NumberConstructor | StringConstructor)[];
    loadingText: StringConstructor;
    loadingType: import("vue").PropType<import("..").LoadingType>;
    iconPosition: {
        type: import("vue").PropType<import("./types").ButtonIconPosition>;
        default: import("./types").ButtonIconPosition;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    text: StringConstructor;
    icon: StringConstructor;
    type: {
        type: import("vue").PropType<import("./types").ButtonType>;
        default: import("./types").ButtonType;
    };
    size: {
        type: import("vue").PropType<import("./types").ButtonSize>;
        default: import("./types").ButtonSize;
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
        type: import("vue").PropType<import("./types").ButtonNativeType>;
        default: import("./types").ButtonNativeType;
    };
    loadingSize: (NumberConstructor | StringConstructor)[];
    loadingText: StringConstructor;
    loadingType: import("vue").PropType<import("..").LoadingType>;
    iconPosition: {
        type: import("vue").PropType<import("./types").ButtonIconPosition>;
        default: import("./types").ButtonIconPosition;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    replace: boolean;
    type: import("./types").ButtonType;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    size: import("./types").ButtonSize;
    disabled: boolean;
    block: boolean;
    square: boolean;
    loading: boolean;
    plain: boolean;
    hairline: boolean;
    nativeType: import("./types").ButtonNativeType;
    iconPosition: import("./types").ButtonIconPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Button;
export { buttonProps } from './Button';
export type { ButtonProps } from './Button';
export type { ButtonType, ButtonSize, ButtonThemeVars, ButtonNativeType, ButtonIconPosition, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanButton: typeof Button;
    }
}
