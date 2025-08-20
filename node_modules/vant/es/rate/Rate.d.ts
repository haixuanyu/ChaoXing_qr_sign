import { type ExtractPropTypes } from 'vue';
export declare const rateProps: {
    size: (NumberConstructor | StringConstructor)[];
    icon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: StringConstructor;
    count: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    clearable: BooleanConstructor;
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
    voidIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    allowHalf: BooleanConstructor;
    voidColor: StringConstructor;
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    disabledColor: StringConstructor;
};
export type RateProps = ExtractPropTypes<typeof rateProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    icon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: StringConstructor;
    count: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    clearable: BooleanConstructor;
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
    voidIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    allowHalf: BooleanConstructor;
    voidColor: StringConstructor;
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    disabledColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    icon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: StringConstructor;
    count: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    clearable: BooleanConstructor;
    readonly: BooleanConstructor;
    disabled: BooleanConstructor;
    voidIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    allowHalf: BooleanConstructor;
    voidColor: StringConstructor;
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    disabledColor: StringConstructor;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    icon: string;
    clearable: boolean;
    modelValue: number;
    readonly: boolean;
    touchable: boolean;
    count: string | number;
    voidIcon: string;
    allowHalf: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
