export declare const ContactList: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    list: import("vue").PropType<import("./ContactList").ContactListItem[]>;
    addText: StringConstructor;
    modelValue: import("vue").PropType<unknown>;
    defaultTagText: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "add" | "update:modelValue" | "edit")[], "select" | "add" | "update:modelValue" | "edit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    list: import("vue").PropType<import("./ContactList").ContactListItem[]>;
    addText: StringConstructor;
    modelValue: import("vue").PropType<unknown>;
    defaultTagText: StringConstructor;
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default ContactList;
export { contactListProps } from './ContactList';
export type { ContactListItem, ContactListProps } from './ContactList';
export type { ContactListThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanContactList: typeof ContactList;
    }
}
