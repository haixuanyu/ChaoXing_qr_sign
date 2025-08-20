import { type PropType, type ExtractPropTypes } from 'vue';
import { type CheckerShape } from './Checker';
export declare const checkboxProps: {
    name: PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<import("./Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: PropType<CheckerShape>;
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
    indeterminate: {
        type: PropType<boolean | null>;
        default: null;
    };
};
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    name: PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<import("./Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: PropType<CheckerShape>;
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
    indeterminate: {
        type: PropType<boolean | null>;
        default: null;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    name: PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<import("./Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: PropType<CheckerShape>;
    bindGroup: {
        type: BooleanConstructor;
        default: true;
    };
    indeterminate: {
        type: PropType<boolean | null>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
