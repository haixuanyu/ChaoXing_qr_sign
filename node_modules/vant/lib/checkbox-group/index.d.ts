export declare const CheckboxGroup: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    max: (NumberConstructor | StringConstructor)[];
    shape: {
        type: import("vue").PropType<import("../checkbox/Checker").CheckerShape>;
        default: import("../checkbox/Checker").CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: import("vue").PropType<import("../checkbox/Checker").CheckerDirection>;
    modelValue: {
        type: import("vue").PropType<unknown[]>;
        default: () => never[];
    };
    checkedColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    max: (NumberConstructor | StringConstructor)[];
    shape: {
        type: import("vue").PropType<import("../checkbox/Checker").CheckerShape>;
        default: import("../checkbox/Checker").CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: import("vue").PropType<import("../checkbox/Checker").CheckerDirection>;
    modelValue: {
        type: import("vue").PropType<unknown[]>;
        default: () => never[];
    };
    checkedColor: StringConstructor;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    shape: import("../checkbox/Checker").CheckerShape;
    modelValue: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CheckboxGroup;
export { checkboxGroupProps } from './CheckboxGroup';
export type { CheckboxGroupProps } from './CheckboxGroup';
export type { CheckboxGroupInstance, CheckboxGroupDirection, CheckboxGroupToggleAllOptions, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCheckboxGroup: typeof CheckboxGroup;
    }
}
