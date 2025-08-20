import { type ComponentPublicInstance, type PropType, type ExtractPropTypes } from 'vue';
export type DatePickerColumnType = 'year' | 'month' | 'day';
export declare const datePickerProps: {
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
} & {
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
} & {
    modelValue: {
        type: PropType<string[]>;
        default: () => never[];
    };
    filter: PropType<(columnType: string, options: import("../picker").PickerOption[], values: string[]) => import("../picker").PickerOption[]>;
    formatter: {
        type: PropType<(type: string, option: import("../picker").PickerOption) => import("../picker").PickerOption>;
        default: (type: string, option: import("../picker").PickerOption) => import("../picker").PickerOption;
    };
} & {
    columnsType: {
        type: PropType<DatePickerColumnType[]>;
        default: () => string[];
    };
    minDate: {
        type: DateConstructor;
        default: () => Date;
        validator: (val: unknown) => val is Date;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
        validator: (val: unknown) => val is Date;
    };
};
export type DatePickerExpose = {
    confirm: () => void;
    getSelectedDate: () => string[];
};
export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
export type DatePickerInstance = ComponentPublicInstance<DatePickerProps, DatePickerExpose>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
} & {
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
} & {
    modelValue: {
        type: PropType<string[]>;
        default: () => never[];
    };
    filter: PropType<(columnType: string, options: import("../picker").PickerOption[], values: string[]) => import("../picker").PickerOption[]>;
    formatter: {
        type: PropType<(type: string, option: import("../picker").PickerOption) => import("../picker").PickerOption>;
        default: (type: string, option: import("../picker").PickerOption) => import("../picker").PickerOption;
    };
} & {
    columnsType: {
        type: PropType<DatePickerColumnType[]>;
        default: () => string[];
    };
    minDate: {
        type: DateConstructor;
        default: () => Date;
        validator: (val: unknown) => val is Date;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
        validator: (val: unknown) => val is Date;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "cancel" | "change" | "confirm")[], "update:modelValue" | "cancel" | "change" | "confirm", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
} & {
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
} & {
    modelValue: {
        type: PropType<string[]>;
        default: () => never[];
    };
    filter: PropType<(columnType: string, options: import("../picker").PickerOption[], values: string[]) => import("../picker").PickerOption[]>;
    formatter: {
        type: PropType<(type: string, option: import("../picker").PickerOption) => import("../picker").PickerOption>;
        default: (type: string, option: import("../picker").PickerOption) => import("../picker").PickerOption;
    };
} & {
    columnsType: {
        type: PropType<DatePickerColumnType[]>;
        default: () => string[];
    };
    minDate: {
        type: DateConstructor;
        default: () => Date;
        validator: (val: unknown) => val is Date;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
        validator: (val: unknown) => val is Date;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    formatter: (type: string, option: import("../picker").PickerOption) => import("../picker").PickerOption;
    modelValue: string[];
    readonly: boolean;
    loading: boolean;
    allowHtml: boolean;
    optionHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleOptionNum: string | number;
    minDate: Date;
    maxDate: Date;
    columnsType: DatePickerColumnType[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
