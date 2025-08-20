export declare const Pagination: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    mode: {
        type: import("vue").PropType<import("./Pagination").PaginationMode>;
        default: import("./Pagination").PaginationMode;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: import("vue").PropType<import("./Pagination").PaginationMode>;
        default: import("./Pagination").PaginationMode;
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
    mode: import("./Pagination").PaginationMode;
    pageCount: string | number;
    totalItems: string | number;
    showPageSize: string | number;
    itemsPerPage: string | number;
    forceEllipses: boolean;
    showPrevButton: boolean;
    showNextButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Pagination;
export { paginationProps } from './Pagination';
export type { PaginationMode, PaginationProps } from './Pagination';
export type { PaginationThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanPagination: typeof Pagination;
    }
}
