import { type ExtractPropTypes } from 'vue';
export declare const cellGroupProps: {
    title: StringConstructor;
    inset: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
};
export type CellGroupProps = ExtractPropTypes<typeof cellGroupProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    title: StringConstructor;
    inset: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    title: StringConstructor;
    inset: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{}>, {
    inset: boolean;
    border: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
