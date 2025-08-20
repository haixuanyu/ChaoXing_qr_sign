import { type PropType, type TeleportProps, type ExtractPropTypes } from 'vue';
import type { DropdownItemOption } from './types';
export declare const dropdownItemProps: {
    title: StringConstructor;
    options: {
        type: PropType<DropdownItemOption[]>;
        default: () => never[];
    };
    disabled: BooleanConstructor;
    teleport: PropType<TeleportProps["to"]>;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: PropType<unknown>;
    titleClass: PropType<unknown>;
};
export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    title: StringConstructor;
    options: {
        type: PropType<DropdownItemOption[]>;
        default: () => never[];
    };
    disabled: BooleanConstructor;
    teleport: PropType<TeleportProps["to"]>;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: PropType<unknown>;
    titleClass: PropType<unknown>;
}>, (() => import("vue/jsx-runtime").JSX.Element) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "update:modelValue" | "change" | "close" | "opened" | "closed")[], "open" | "update:modelValue" | "change" | "close" | "opened" | "closed", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    title: StringConstructor;
    options: {
        type: PropType<DropdownItemOption[]>;
        default: () => never[];
    };
    disabled: BooleanConstructor;
    teleport: PropType<TeleportProps["to"]>;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: PropType<unknown>;
    titleClass: PropType<unknown>;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    lazyRender: boolean;
    options: DropdownItemOption[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
