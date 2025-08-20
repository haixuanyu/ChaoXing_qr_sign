import { type PropType, type ExtractPropTypes } from 'vue';
type NumberRange = [number, number];
type SliderValue = number | NumberRange;
export declare const sliderProps: {
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    range: BooleanConstructor;
    reverse: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    vertical: BooleanConstructor;
    barHeight: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
};
export type SliderProps = ExtractPropTypes<typeof sliderProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    range: BooleanConstructor;
    reverse: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    vertical: BooleanConstructor;
    barHeight: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "dragStart" | "dragEnd")[], "update:modelValue" | "change" | "dragStart" | "dragEnd", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    range: BooleanConstructor;
    reverse: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    vertical: BooleanConstructor;
    barHeight: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDragStart?: ((...args: any[]) => any) | undefined;
    onDragEnd?: ((...args: any[]) => any) | undefined;
}>, {
    reverse: boolean;
    range: boolean;
    max: string | number;
    disabled: boolean;
    vertical: boolean;
    min: string | number;
    modelValue: SliderValue;
    readonly: boolean;
    step: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
