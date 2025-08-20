import { type PropType, type ExtractPropTypes } from 'vue';
import { Interceptor } from '../utils';
export type StepperTheme = 'default' | 'round';
export declare const stepperProps: {
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    theme: PropType<StepperTheme>;
    integer: BooleanConstructor;
    disabled: BooleanConstructor;
    showPlus: {
        type: BooleanConstructor;
        default: true;
    };
    showMinus: {
        type: BooleanConstructor;
        default: true;
    };
    showInput: {
        type: BooleanConstructor;
        default: true;
    };
    longPress: {
        type: BooleanConstructor;
        default: true;
    };
    autoFixed: {
        type: BooleanConstructor;
        default: true;
    };
    allowEmpty: BooleanConstructor;
    modelValue: (NumberConstructor | StringConstructor)[];
    inputWidth: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    placeholder: StringConstructor;
    disablePlus: BooleanConstructor;
    disableMinus: BooleanConstructor;
    disableInput: BooleanConstructor;
    beforeChange: PropType<Interceptor>;
    defaultValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    decimalLength: (NumberConstructor | StringConstructor)[];
};
export type StepperProps = ExtractPropTypes<typeof stepperProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    theme: PropType<StepperTheme>;
    integer: BooleanConstructor;
    disabled: BooleanConstructor;
    showPlus: {
        type: BooleanConstructor;
        default: true;
    };
    showMinus: {
        type: BooleanConstructor;
        default: true;
    };
    showInput: {
        type: BooleanConstructor;
        default: true;
    };
    longPress: {
        type: BooleanConstructor;
        default: true;
    };
    autoFixed: {
        type: BooleanConstructor;
        default: true;
    };
    allowEmpty: BooleanConstructor;
    modelValue: (NumberConstructor | StringConstructor)[];
    inputWidth: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    placeholder: StringConstructor;
    disablePlus: BooleanConstructor;
    disableMinus: BooleanConstructor;
    disableInput: BooleanConstructor;
    beforeChange: PropType<Interceptor>;
    defaultValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    decimalLength: (NumberConstructor | StringConstructor)[];
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "update:modelValue" | "change" | "minus" | "plus" | "overlimit")[], "focus" | "blur" | "update:modelValue" | "change" | "minus" | "plus" | "overlimit", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    theme: PropType<StepperTheme>;
    integer: BooleanConstructor;
    disabled: BooleanConstructor;
    showPlus: {
        type: BooleanConstructor;
        default: true;
    };
    showMinus: {
        type: BooleanConstructor;
        default: true;
    };
    showInput: {
        type: BooleanConstructor;
        default: true;
    };
    longPress: {
        type: BooleanConstructor;
        default: true;
    };
    autoFixed: {
        type: BooleanConstructor;
        default: true;
    };
    allowEmpty: BooleanConstructor;
    modelValue: (NumberConstructor | StringConstructor)[];
    inputWidth: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    placeholder: StringConstructor;
    disablePlus: BooleanConstructor;
    disableMinus: BooleanConstructor;
    disableInput: BooleanConstructor;
    beforeChange: PropType<Interceptor>;
    defaultValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    decimalLength: (NumberConstructor | StringConstructor)[];
}>> & Readonly<{
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onMinus?: ((...args: any[]) => any) | undefined;
    onPlus?: ((...args: any[]) => any) | undefined;
    onOverlimit?: ((...args: any[]) => any) | undefined;
}>, {
    name: string | number;
    max: string | number;
    disabled: boolean;
    min: string | number;
    longPress: boolean;
    step: string | number;
    integer: boolean;
    showPlus: boolean;
    showMinus: boolean;
    showInput: boolean;
    autoFixed: boolean;
    allowEmpty: boolean;
    disablePlus: boolean;
    disableMinus: boolean;
    disableInput: boolean;
    defaultValue: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
