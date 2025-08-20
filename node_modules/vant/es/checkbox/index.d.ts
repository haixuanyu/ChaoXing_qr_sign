export declare const Checkbox: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: import("vue").PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<import("./Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: import("vue").PropType<import("./Checker").CheckerShape>;
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
    indeterminate: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: import("vue").PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<import("./Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: import("vue").PropType<import("./Checker").CheckerShape>;
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
    indeterminate: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    labelDisabled: boolean;
    bindGroup: boolean;
    indeterminate: boolean | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Checkbox;
export { checkboxProps } from './Checkbox';
export type { CheckboxProps } from './Checkbox';
export type { CheckboxShape, CheckboxInstance, CheckboxThemeVars, CheckboxLabelPosition, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCheckbox: typeof Checkbox;
    }
}
