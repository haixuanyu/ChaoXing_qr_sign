export declare const PasswordInput: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "focus"[], "focus", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default PasswordInput;
export { passwordInputProps } from './PasswordInput';
export type { PasswordInputProps } from './PasswordInput';
export type { PasswordInputThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanPasswordInput: typeof PasswordInput;
    }
}
