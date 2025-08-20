import { type ExtractPropTypes } from 'vue';
export declare const passwordInputProps: {
    info: StringConstructor;
    mask: {
        type: BooleanConstructor;
        default: true;
    };
    value: {
        type: import("vue").PropType<string>;
        default: string;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    focused: BooleanConstructor;
    errorInfo: StringConstructor;
};
export type PasswordInputProps = ExtractPropTypes<typeof passwordInputProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    info: StringConstructor;
    mask: {
        type: BooleanConstructor;
        default: true;
    };
    value: {
        type: import("vue").PropType<string>;
        default: string;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    focused: BooleanConstructor;
    errorInfo: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "focus"[], "focus", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    info: StringConstructor;
    mask: {
        type: BooleanConstructor;
        default: true;
    };
    value: {
        type: import("vue").PropType<string>;
        default: string;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    focused: BooleanConstructor;
    errorInfo: StringConstructor;
}>> & Readonly<{
    onFocus?: ((...args: any[]) => any) | undefined;
}>, {
    length: string | number;
    mask: boolean;
    value: string;
    focused: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
