export declare const Radio: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: import("vue").PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<import("../checkbox/Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: import("vue").PropType<import("./Radio").RadioShape>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: import("vue").PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<import("../checkbox/Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
} & {
    shape: import("vue").PropType<import("./Radio").RadioShape>;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    labelDisabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Radio;
export { radioProps } from './Radio';
export type { RadioProps, RadioShape, RadioLabelPosition } from './Radio';
export type { RadioThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanRadio: typeof Radio;
    }
}
