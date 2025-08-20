import { type PropType, type ExtractPropTypes } from 'vue';
import { type Numeric } from '../utils';
import type { PickerColumn, PickerOption, PickerFieldNames, PickerToolbarPosition } from './types';
export declare const pickerSharedProps: {
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
};
export declare const pickerProps: {
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
    columns: {
        type: PropType<(PickerColumn | PickerOption)[]>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<Numeric[]>;
        default: () => never[];
    };
    toolbarPosition: {
        type: PropType<PickerToolbarPosition>;
        default: PickerToolbarPosition;
    };
    columnsFieldNames: PropType<PickerFieldNames>;
};
export type PickerProps = ExtractPropTypes<typeof pickerProps>;
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
    columns: {
        type: PropType<(PickerColumn | PickerOption)[]>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<Numeric[]>;
        default: () => never[];
    };
    toolbarPosition: {
        type: PropType<PickerToolbarPosition>;
        default: PickerToolbarPosition;
    };
    columnsFieldNames: PropType<PickerFieldNames>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "cancel" | "change" | "confirm" | "clickOption" | "scrollInto")[], "update:modelValue" | "cancel" | "change" | "confirm" | "clickOption" | "scrollInto", import("vue").PublicProps, Readonly<ExtractPropTypes<{
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
    columns: {
        type: PropType<(PickerColumn | PickerOption)[]>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<Numeric[]>;
        default: () => never[];
    };
    toolbarPosition: {
        type: PropType<PickerToolbarPosition>;
        default: PickerToolbarPosition;
    };
    columnsFieldNames: PropType<PickerFieldNames>;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onClickOption?: ((...args: any[]) => any) | undefined;
    onScrollInto?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: Numeric[];
    readonly: boolean;
    loading: boolean;
    allowHtml: boolean;
    optionHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleOptionNum: string | number;
    columns: (PickerColumn | PickerOption)[];
    toolbarPosition: PickerToolbarPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
