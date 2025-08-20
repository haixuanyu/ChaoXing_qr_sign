import { type ExtractPropTypes } from 'vue';
import { type Numeric } from '../utils';
export declare const progressProps: {
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
        validator: (value: Numeric) => boolean;
    };
};
export type ProgressProps = ExtractPropTypes<typeof progressProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
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
        validator: (value: Numeric) => boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
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
        validator: (value: Numeric) => boolean;
    };
}>> & Readonly<{}>, {
    inactive: boolean;
    showPivot: boolean;
    percentage: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
