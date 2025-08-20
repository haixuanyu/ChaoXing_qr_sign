import { type PropType, type InjectionKey, type ExtractPropTypes } from 'vue';
import type { CheckerShape, CheckerDirection } from '../checkbox/Checker';
import type { CheckboxGroupProvide } from './types';
export declare const checkboxGroupProps: {
    max: (NumberConstructor | StringConstructor)[];
    shape: {
        type: PropType<CheckerShape>;
        default: CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<CheckerDirection>;
    modelValue: {
        type: PropType<unknown[]>;
        default: () => never[];
    };
    checkedColor: StringConstructor;
};
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export declare const CHECKBOX_GROUP_KEY: InjectionKey<CheckboxGroupProvide>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    max: (NumberConstructor | StringConstructor)[];
    shape: {
        type: PropType<CheckerShape>;
        default: CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<CheckerDirection>;
    modelValue: {
        type: PropType<unknown[]>;
        default: () => never[];
    };
    checkedColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    max: (NumberConstructor | StringConstructor)[];
    shape: {
        type: PropType<CheckerShape>;
        default: CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<CheckerDirection>;
    modelValue: {
        type: PropType<unknown[]>;
        default: () => never[];
    };
    checkedColor: StringConstructor;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    shape: CheckerShape;
    modelValue: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
