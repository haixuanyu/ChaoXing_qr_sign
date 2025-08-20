import { type ExtractPropTypes } from 'vue';
export type LoadingType = 'circular' | 'spinner';
export declare const loadingProps: {
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<LoadingType>;
        default: LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
};
export type LoadingProps = ExtractPropTypes<typeof loadingProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<LoadingType>;
        default: LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<LoadingType>;
        default: LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
}>> & Readonly<{}>, {
    type: LoadingType;
    vertical: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
