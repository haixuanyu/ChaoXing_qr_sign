import { type PropType, type InjectionKey, type ExtractPropTypes } from 'vue';
import type { RadioShape } from '../radio';
import type { CheckerDirection } from '../checkbox/Checker';
export type RadioGroupDirection = CheckerDirection;
export declare const radioGroupProps: {
    shape: PropType<RadioShape>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<RadioGroupDirection>;
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
};
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
export type RadioGroupProvide = {
    props: RadioGroupProps;
    updateValue: (value: unknown) => void;
};
export declare const RADIO_KEY: InjectionKey<RadioGroupProvide>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    shape: PropType<RadioShape>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<RadioGroupDirection>;
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    shape: PropType<RadioShape>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<RadioGroupDirection>;
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
