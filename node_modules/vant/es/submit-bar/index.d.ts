export declare const SubmitBar: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: import("vue").PropType<import("./SubmitBar").SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: import("vue").PropType<import("..").ButtonType>;
        default: import("..").ButtonType;
    };
    buttonColor: StringConstructor;
    suffixLabel: StringConstructor;
    placeholder: BooleanConstructor;
    decimalLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: import("vue").PropType<import("./SubmitBar").SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: import("vue").PropType<import("..").ButtonType>;
        default: import("..").ButtonType;
    };
    buttonColor: StringConstructor;
    suffixLabel: StringConstructor;
    placeholder: BooleanConstructor;
    decimalLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{
    onSubmit?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    placeholder: boolean;
    safeAreaInsetBottom: boolean;
    loading: boolean;
    currency: string;
    decimalLength: string | number;
    buttonType: import("..").ButtonType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default SubmitBar;
export { submitBarProps } from './SubmitBar';
export type { SubmitBarProps, SubmitBarTextAlign } from './SubmitBar';
export type { SubmitBarThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanSubmitBar: typeof SubmitBar;
    }
}
