import { type PropType, type InjectionKey } from 'vue';
import type { PickerOption, PickerFieldNames, PickerColumnProvide } from './types';
export declare const PICKER_KEY: InjectionKey<PickerColumnProvide>;
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: (NumberConstructor | StringConstructor)[];
    fields: {
        type: PropType<Required<PickerFieldNames>>;
        required: true;
    };
    options: {
        type: PropType<PickerOption[]>;
        default: () => never[];
    };
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    optionHeight: {
        type: NumberConstructor;
        required: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "clickOption" | "scrollInto")[], "change" | "clickOption" | "scrollInto", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: (NumberConstructor | StringConstructor)[];
    fields: {
        type: PropType<Required<PickerFieldNames>>;
        required: true;
    };
    options: {
        type: PropType<PickerOption[]>;
        default: () => never[];
    };
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    optionHeight: {
        type: NumberConstructor;
        required: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClickOption?: ((...args: any[]) => any) | undefined;
    onScrollInto?: ((...args: any[]) => any) | undefined;
}>, {
    readonly: boolean;
    allowHtml: boolean;
    options: PickerOption[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
