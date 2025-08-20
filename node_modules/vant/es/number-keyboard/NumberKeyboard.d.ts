import { type PropType, type TeleportProps, type ExtractPropTypes } from 'vue';
export type NumberKeyboardTheme = 'default' | 'custom';
export declare const numberKeyboardProps: {
    show: BooleanConstructor;
    title: StringConstructor;
    theme: {
        type: PropType<NumberKeyboardTheme>;
        default: NumberKeyboardTheme;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<TeleportProps["to"]>;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string>;
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
        type: PropType<string | string[]>;
        default: string;
    };
};
export type NumberKeyboardProps = ExtractPropTypes<typeof numberKeyboardProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    show: BooleanConstructor;
    title: StringConstructor;
    theme: {
        type: PropType<NumberKeyboardTheme>;
        default: NumberKeyboardTheme;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<TeleportProps["to"]>;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string>;
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
        type: PropType<string | string[]>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "delete" | "hide" | "show" | "blur" | "update:modelValue" | "close")[], "input" | "delete" | "hide" | "show" | "blur" | "update:modelValue" | "close", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    show: BooleanConstructor;
    title: StringConstructor;
    theme: {
        type: PropType<NumberKeyboardTheme>;
        default: NumberKeyboardTheme;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<TeleportProps["to"]>;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<string>;
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
        type: PropType<string | string[]>;
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
    theme: NumberKeyboardTheme;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
