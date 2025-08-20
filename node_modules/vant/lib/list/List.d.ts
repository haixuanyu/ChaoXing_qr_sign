import { type PropType, type ExtractPropTypes } from 'vue';
import type { ListDirection } from './types';
export declare const listProps: {
    error: BooleanConstructor;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    finished: BooleanConstructor;
    scroller: PropType<Element>;
    errorText: StringConstructor;
    direction: {
        type: PropType<ListDirection>;
        default: ListDirection;
    };
    loadingText: StringConstructor;
    finishedText: StringConstructor;
    immediateCheck: {
        type: BooleanConstructor;
        default: true;
    };
};
export type ListProps = ExtractPropTypes<typeof listProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    error: BooleanConstructor;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    finished: BooleanConstructor;
    scroller: PropType<Element>;
    errorText: StringConstructor;
    direction: {
        type: PropType<ListDirection>;
        default: ListDirection;
    };
    loadingText: StringConstructor;
    finishedText: StringConstructor;
    immediateCheck: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "update:error" | "update:loading")[], "load" | "update:error" | "update:loading", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    error: BooleanConstructor;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    finished: BooleanConstructor;
    scroller: PropType<Element>;
    errorText: StringConstructor;
    direction: {
        type: PropType<ListDirection>;
        default: ListDirection;
    };
    loadingText: StringConstructor;
    finishedText: StringConstructor;
    immediateCheck: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{
    onLoad?: ((...args: any[]) => any) | undefined;
    "onUpdate:error"?: ((...args: any[]) => any) | undefined;
    "onUpdate:loading"?: ((...args: any[]) => any) | undefined;
}>, {
    offset: string | number;
    disabled: boolean;
    error: boolean;
    loading: boolean;
    direction: ListDirection;
    finished: boolean;
    immediateCheck: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
