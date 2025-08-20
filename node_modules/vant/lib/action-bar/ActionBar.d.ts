import { type ExtractPropTypes } from 'vue';
export declare const ACTION_BAR_KEY: unique symbol;
export declare const actionBarProps: {
    placeholder: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
};
export type ActionBarProps = ExtractPropTypes<typeof actionBarProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    placeholder: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    placeholder: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{}>, {
    placeholder: boolean;
    safeAreaInsetBottom: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
