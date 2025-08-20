export declare const Stepper: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    theme: import("vue").PropType<import("./Stepper").StepperTheme>;
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
    beforeChange: import("vue").PropType<import("../utils").Interceptor>;
    defaultValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    decimalLength: (NumberConstructor | StringConstructor)[];
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "update:modelValue" | "change" | "minus" | "plus" | "overlimit")[], "focus" | "blur" | "update:modelValue" | "change" | "minus" | "plus" | "overlimit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    theme: import("vue").PropType<import("./Stepper").StepperTheme>;
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
    beforeChange: import("vue").PropType<import("../utils").Interceptor>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Stepper;
export { stepperProps } from './Stepper';
export type { StepperTheme, StepperProps } from './Stepper';
export type { StepperThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanStepper: typeof Stepper;
    }
}
