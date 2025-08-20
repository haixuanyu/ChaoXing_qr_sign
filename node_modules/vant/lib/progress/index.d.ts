import { ProgressProps } from './Progress';
export declare const Progress: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    color: StringConstructor;
    inactive: BooleanConstructor;
    pivotText: StringConstructor;
    textColor: StringConstructor;
    showPivot: {
        type: BooleanConstructor;
        default: true;
    };
    pivotColor: StringConstructor;
    trackColor: StringConstructor;
    strokeWidth: (NumberConstructor | StringConstructor)[];
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: import("../utils").Numeric) => boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    color: StringConstructor;
    inactive: BooleanConstructor;
    pivotText: StringConstructor;
    textColor: StringConstructor;
    showPivot: {
        type: BooleanConstructor;
        default: true;
    };
    pivotColor: StringConstructor;
    trackColor: StringConstructor;
    strokeWidth: (NumberConstructor | StringConstructor)[];
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: import("../utils").Numeric) => boolean;
    };
}>> & Readonly<{}>, {
    inactive: boolean;
    showPivot: boolean;
    percentage: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Progress;
export { progressProps } from './Progress';
export type { ProgressProps };
export type { ProgressInstance, ProgressThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanProgress: typeof Progress;
    }
}
