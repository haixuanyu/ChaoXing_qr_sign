export declare const NumberKeyboard: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    title: StringConstructor;
    theme: {
        type: import("vue").PropType<import("./NumberKeyboard").NumberKeyboardTheme>;
        default: import("./NumberKeyboard").NumberKeyboardTheme;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    transition: {
        type: BooleanConstructor;
        default: true;
    };
    blurOnClose: {
        type: BooleanConstructor;
        default: true;
    };
    showDeleteKey: {
        type: BooleanConstructor;
        default: true;
    };
    randomKeyOrder: BooleanConstructor;
    closeButtonText: StringConstructor;
    deleteButtonText: StringConstructor;
    closeButtonLoading: BooleanConstructor;
    hideOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    extraKey: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "delete" | "hide" | "show" | "blur" | "update:modelValue" | "close")[], "input" | "delete" | "hide" | "show" | "blur" | "update:modelValue" | "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    title: StringConstructor;
    theme: {
        type: import("vue").PropType<import("./NumberKeyboard").NumberKeyboardTheme>;
        default: import("./NumberKeyboard").NumberKeyboardTheme;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    transition: {
        type: BooleanConstructor;
        default: true;
    };
    blurOnClose: {
        type: BooleanConstructor;
        default: true;
    };
    showDeleteKey: {
        type: BooleanConstructor;
        default: true;
    };
    randomKeyOrder: BooleanConstructor;
    closeButtonText: StringConstructor;
    deleteButtonText: StringConstructor;
    closeButtonLoading: BooleanConstructor;
    hideOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    extraKey: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
}>> & Readonly<{
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}>, {
    theme: import("./NumberKeyboard").NumberKeyboardTheme;
    show: boolean;
    maxlength: string | number;
    modelValue: string;
    safeAreaInsetBottom: boolean;
    transition: boolean;
    blurOnClose: boolean;
    showDeleteKey: boolean;
    randomKeyOrder: boolean;
    closeButtonLoading: boolean;
    hideOnClickOutside: boolean;
    extraKey: string | string[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default NumberKeyboard;
export { numberKeyboardProps } from './NumberKeyboard';
export type { NumberKeyboardProps, NumberKeyboardTheme, } from './NumberKeyboard';
export type { NumberKeyboardThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanNumberKeyboard: typeof NumberKeyboard;
    }
}
