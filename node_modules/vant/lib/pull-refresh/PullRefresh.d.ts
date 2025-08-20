import { type ExtractPropTypes } from 'vue';
export declare const pullRefreshProps: {
    disabled: BooleanConstructor;
    modelValue: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    successText: StringConstructor;
    pullingText: StringConstructor;
    loosingText: StringConstructor;
    loadingText: StringConstructor;
    pullDistance: (NumberConstructor | StringConstructor)[];
    successDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export type PullRefreshProps = ExtractPropTypes<typeof pullRefreshProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    disabled: BooleanConstructor;
    modelValue: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    successText: StringConstructor;
    pullingText: StringConstructor;
    loosingText: StringConstructor;
    loadingText: StringConstructor;
    pullDistance: (NumberConstructor | StringConstructor)[];
    successDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "refresh")[], "update:modelValue" | "change" | "refresh", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    disabled: BooleanConstructor;
    modelValue: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    successText: StringConstructor;
    pullingText: StringConstructor;
    loosingText: StringConstructor;
    loadingText: StringConstructor;
    pullDistance: (NumberConstructor | StringConstructor)[];
    successDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRefresh?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: boolean;
    animationDuration: string | number;
    headHeight: string | number;
    successDuration: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
