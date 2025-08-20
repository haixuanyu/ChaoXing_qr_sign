import { type PropType, type ExtractPropTypes } from 'vue';
import { type CheckerShape, type CheckerLabelPosition } from '../checkbox/Checker';
export type RadioShape = CheckerShape | 'dot';
export declare const radioProps: {
    name: PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: PropType<RadioShape>;
};
export type RadioLabelPosition = CheckerLabelPosition;
export type RadioProps = ExtractPropTypes<typeof radioProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    name: PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: PropType<RadioShape>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    name: PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: PropType<RadioShape>;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    labelDisabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
