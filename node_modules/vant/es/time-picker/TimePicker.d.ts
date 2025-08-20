import { type ExtractPropTypes, type PropType, type ComponentPublicInstance } from 'vue';
export type TimePickerColumnType = 'hour' | 'minute' | 'second';
export declare const timePickerProps: {
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
    minHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minTime: {
        type: StringConstructor;
        validator: (val: string) => boolean;
    };
    maxTime: {
        type: StringConstructor;
        validator: (val: string) => boolean;
    };
    columnsType: {
        type: PropType<TimePickerColumnType[]>;
        default: () => string[];
    };
};
export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;
export type TimePickerExpose = {
    confirm: () => void;
    getSelectedTime: () => string[];
};
export type TimePickerInstance = ComponentPublicInstance<TimePickerProps, TimePickerExpose>;
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
    minHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minTime: {
        type: StringConstructor;
        validator: (val: string) => boolean;
    };
    maxTime: {
        type: StringConstructor;
        validator: (val: string) => boolean;
    };
    columnsType: {
        type: PropType<TimePickerColumnType[]>;
        default: () => string[];
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
    minHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minTime: {
        type: StringConstructor;
        validator: (val: string) => boolean;
    };
    maxTime: {
        type: StringConstructor;
        validator: (val: string) => boolean;
    };
    columnsType: {
        type: PropType<TimePickerColumnType[]>;
        default: () => string[];
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
    columnsType: TimePickerColumnType[];
    minHour: string | number;
    maxHour: string | number;
    minMinute: string | number;
    maxMinute: string | number;
    minSecond: string | number;
    maxSecond: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
