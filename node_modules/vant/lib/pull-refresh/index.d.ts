export declare const PullRefresh: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "refresh")[], "update:modelValue" | "change" | "refresh", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default PullRefresh;
export { pullRefreshProps } from './PullRefresh';
export type { PullRefreshProps } from './PullRefresh';
export type { PullRefreshThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanPullRefresh: typeof PullRefresh;
    }
}
