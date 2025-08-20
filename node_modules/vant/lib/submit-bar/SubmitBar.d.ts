import { type PropType, type ExtractPropTypes } from 'vue';
import { ButtonType } from '../button';
export type SubmitBarTextAlign = 'left' | 'right';
export declare const submitBarProps: {
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: PropType<SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: PropType<ButtonType>;
        default: ButtonType;
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
};
export type SubmitBarProps = ExtractPropTypes<typeof submitBarProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: PropType<SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: PropType<ButtonType>;
        default: ButtonType;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: PropType<SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: PropType<ButtonType>;
        default: ButtonType;
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
    buttonType: ButtonType;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
