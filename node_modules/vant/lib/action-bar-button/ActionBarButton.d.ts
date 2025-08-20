import { type PropType, type ExtractPropTypes } from 'vue';
import { ButtonType } from '../button';
export declare const actionBarButtonProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    type: PropType<ButtonType>;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
};
export type ActionBarButtonProps = ExtractPropTypes<typeof actionBarButtonProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    type: PropType<ButtonType>;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    type: PropType<ButtonType>;
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
}>> & Readonly<{}>, {
    replace: boolean;
    disabled: boolean;
    loading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
