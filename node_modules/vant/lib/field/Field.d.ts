import { type PropType, type ExtractPropTypes, type HTMLAttributes } from 'vue';
import type { FieldRule, FieldType, FieldTextAlign, FieldClearTrigger, FieldFormatTrigger, FieldAutosizeConfig } from './types';
export declare const fieldSharedProps: {
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    max: NumberConstructor;
    min: NumberConstructor;
    formatter: PropType<(value: string) => string>;
    clearIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: PropType<FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    autocapitalize: StringConstructor;
    autocorrect: StringConstructor;
    errorMessage: StringConstructor;
    enterkeyhint: StringConstructor;
    clearTrigger: {
        type: PropType<FieldClearTrigger>;
        default: FieldClearTrigger;
    };
    formatTrigger: {
        type: PropType<FieldFormatTrigger>;
        default: FieldFormatTrigger;
    };
    spellcheck: {
        type: BooleanConstructor;
        default: null;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
    inputmode: PropType<HTMLAttributes["inputmode"]>;
};
export declare const fieldProps: {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: PropType<import("../cell").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | import("vue").CSSProperties>;
    arrowDirection: PropType<import("../cell").CellArrowDirection>;
    required: {
        type: PropType<boolean | "auto">;
        default: null;
    };
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
} & {
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    max: NumberConstructor;
    min: NumberConstructor;
    formatter: PropType<(value: string) => string>;
    clearIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: PropType<FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    autocapitalize: StringConstructor;
    autocorrect: StringConstructor;
    errorMessage: StringConstructor;
    enterkeyhint: StringConstructor;
    clearTrigger: {
        type: PropType<FieldClearTrigger>;
        default: FieldClearTrigger;
    };
    formatTrigger: {
        type: PropType<FieldFormatTrigger>;
        default: FieldFormatTrigger;
    };
    spellcheck: {
        type: BooleanConstructor;
        default: null;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
    inputmode: PropType<HTMLAttributes["inputmode"]>;
} & {
    rows: (NumberConstructor | StringConstructor)[];
    type: {
        type: PropType<FieldType>;
        default: FieldType;
    };
    rules: PropType<FieldRule[]>;
    autosize: PropType<boolean | FieldAutosizeConfig>;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelClass: PropType<unknown>;
    labelAlign: PropType<FieldTextAlign>;
    showWordLimit: BooleanConstructor;
    errorMessageAlign: PropType<FieldTextAlign>;
    colon: {
        type: BooleanConstructor;
        default: null;
    };
};
export type FieldProps = ExtractPropTypes<typeof fieldProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: PropType<import("../cell").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | import("vue").CSSProperties>;
    arrowDirection: PropType<import("../cell").CellArrowDirection>;
    required: {
        type: PropType<boolean | "auto">;
        default: null;
    };
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
} & {
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    max: NumberConstructor;
    min: NumberConstructor;
    formatter: PropType<(value: string) => string>;
    clearIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: PropType<FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    autocapitalize: StringConstructor;
    autocorrect: StringConstructor;
    errorMessage: StringConstructor;
    enterkeyhint: StringConstructor;
    clearTrigger: {
        type: PropType<FieldClearTrigger>;
        default: FieldClearTrigger;
    };
    formatTrigger: {
        type: PropType<FieldFormatTrigger>;
        default: FieldFormatTrigger;
    };
    spellcheck: {
        type: BooleanConstructor;
        default: null;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
    inputmode: PropType<HTMLAttributes["inputmode"]>;
} & {
    rows: (NumberConstructor | StringConstructor)[];
    type: {
        type: PropType<FieldType>;
        default: FieldType;
    };
    rules: PropType<FieldRule[]>;
    autosize: PropType<boolean | FieldAutosizeConfig>;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelClass: PropType<unknown>;
    labelAlign: PropType<FieldTextAlign>;
    showWordLimit: BooleanConstructor;
    errorMessageAlign: PropType<FieldTextAlign>;
    colon: {
        type: BooleanConstructor;
        default: null;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "focus" | "blur" | "keypress" | "clickInput" | "endValidate" | "startValidate" | "clickLeftIcon" | "clickRightIcon" | "update:modelValue")[], "clear" | "focus" | "blur" | "keypress" | "clickInput" | "endValidate" | "startValidate" | "clickLeftIcon" | "clickRightIcon" | "update:modelValue", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: PropType<import("../cell").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | import("vue").CSSProperties>;
    arrowDirection: PropType<import("../cell").CellArrowDirection>;
    required: {
        type: PropType<boolean | "auto">;
        default: null;
    };
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
} & {
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    max: NumberConstructor;
    min: NumberConstructor;
    formatter: PropType<(value: string) => string>;
    clearIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: PropType<FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    autocapitalize: StringConstructor;
    autocorrect: StringConstructor;
    errorMessage: StringConstructor;
    enterkeyhint: StringConstructor;
    clearTrigger: {
        type: PropType<FieldClearTrigger>;
        default: FieldClearTrigger;
    };
    formatTrigger: {
        type: PropType<FieldFormatTrigger>;
        default: FieldFormatTrigger;
    };
    spellcheck: {
        type: BooleanConstructor;
        default: null;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
    inputmode: PropType<HTMLAttributes["inputmode"]>;
} & {
    rows: (NumberConstructor | StringConstructor)[];
    type: {
        type: PropType<FieldType>;
        default: FieldType;
    };
    rules: PropType<FieldRule[]>;
    autosize: PropType<boolean | FieldAutosizeConfig>;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelClass: PropType<unknown>;
    labelAlign: PropType<FieldTextAlign>;
    showWordLimit: BooleanConstructor;
    errorMessageAlign: PropType<FieldTextAlign>;
    colon: {
        type: BooleanConstructor;
        default: null;
    };
}>> & Readonly<{
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onKeypress?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onClickInput?: ((...args: any[]) => any) | undefined;
    onEndValidate?: ((...args: any[]) => any) | undefined;
    onStartValidate?: ((...args: any[]) => any) | undefined;
    onClickLeftIcon?: ((...args: any[]) => any) | undefined;
    onClickRightIcon?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    type: FieldType;
    tag: keyof HTMLElementTagNameMap;
    center: boolean;
    autofocus: boolean;
    disabled: boolean;
    border: boolean;
    isLink: boolean;
    required: boolean | "auto";
    clickable: boolean | null;
    clearable: boolean;
    clearIcon: string;
    modelValue: string | number;
    clearTrigger: FieldClearTrigger;
    formatTrigger: FieldFormatTrigger;
    spellcheck: boolean;
    error: boolean;
    readonly: boolean;
    showWordLimit: boolean;
    colon: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
