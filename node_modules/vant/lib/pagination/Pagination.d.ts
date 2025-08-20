import { type ExtractPropTypes } from 'vue';
export type PaginationMode = 'simple' | 'multi';
export declare const paginationProps: {
    mode: {
        type: import("vue").PropType<PaginationMode>;
        default: PaginationMode;
    };
    prevText: StringConstructor;
    nextText: StringConstructor;
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    forceEllipses: BooleanConstructor;
    showPrevButton: {
        type: BooleanConstructor;
        default: true;
    };
    showNextButton: {
        type: BooleanConstructor;
        default: true;
    };
};
export type PaginationProps = ExtractPropTypes<typeof paginationProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    mode: {
        type: import("vue").PropType<PaginationMode>;
        default: PaginationMode;
    };
    prevText: StringConstructor;
    nextText: StringConstructor;
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    forceEllipses: BooleanConstructor;
    showPrevButton: {
        type: BooleanConstructor;
        default: true;
    };
    showNextButton: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    mode: {
        type: import("vue").PropType<PaginationMode>;
        default: PaginationMode;
    };
    prevText: StringConstructor;
    nextText: StringConstructor;
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    forceEllipses: BooleanConstructor;
    showPrevButton: {
        type: BooleanConstructor;
        default: true;
    };
    showNextButton: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: number;
    mode: PaginationMode;
    pageCount: string | number;
    totalItems: string | number;
    showPageSize: string | number;
    itemsPerPage: string | number;
    forceEllipses: boolean;
    showPrevButton: boolean;
    showNextButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
