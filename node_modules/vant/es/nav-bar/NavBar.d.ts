import { type ExtractPropTypes } from 'vue';
export declare const navBarProps: {
    title: StringConstructor;
    fixed: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    border: {
        type: BooleanConstructor;
        default: true;
    };
    leftText: StringConstructor;
    rightText: StringConstructor;
    leftDisabled: BooleanConstructor;
    rightDisabled: BooleanConstructor;
    leftArrow: BooleanConstructor;
    placeholder: BooleanConstructor;
    safeAreaInsetTop: BooleanConstructor;
    clickable: {
        type: BooleanConstructor;
        default: true;
    };
};
export type NavBarProps = ExtractPropTypes<typeof navBarProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    title: StringConstructor;
    fixed: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    border: {
        type: BooleanConstructor;
        default: true;
    };
    leftText: StringConstructor;
    rightText: StringConstructor;
    leftDisabled: BooleanConstructor;
    rightDisabled: BooleanConstructor;
    leftArrow: BooleanConstructor;
    placeholder: BooleanConstructor;
    safeAreaInsetTop: BooleanConstructor;
    clickable: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clickLeft" | "clickRight")[], "clickLeft" | "clickRight", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    title: StringConstructor;
    fixed: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    border: {
        type: BooleanConstructor;
        default: true;
    };
    leftText: StringConstructor;
    rightText: StringConstructor;
    leftDisabled: BooleanConstructor;
    rightDisabled: BooleanConstructor;
    leftArrow: BooleanConstructor;
    placeholder: BooleanConstructor;
    safeAreaInsetTop: BooleanConstructor;
    clickable: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{
    onClickLeft?: ((...args: any[]) => any) | undefined;
    onClickRight?: ((...args: any[]) => any) | undefined;
}>, {
    fixed: boolean;
    border: boolean;
    clickable: boolean;
    placeholder: boolean;
    safeAreaInsetTop: boolean;
    leftDisabled: boolean;
    rightDisabled: boolean;
    leftArrow: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
