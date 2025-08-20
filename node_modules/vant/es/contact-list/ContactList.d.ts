import { type PropType, type ExtractPropTypes } from 'vue';
import { type Numeric } from '../utils';
export type ContactListItem = {
    id?: Numeric;
    tel: Numeric;
    name: string;
    isDefault?: boolean;
};
export declare const contactListProps: {
    list: PropType<ContactListItem[]>;
    addText: StringConstructor;
    modelValue: PropType<unknown>;
    defaultTagText: StringConstructor;
};
export type ContactListProps = ExtractPropTypes<typeof contactListProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    list: PropType<ContactListItem[]>;
    addText: StringConstructor;
    modelValue: PropType<unknown>;
    defaultTagText: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "add" | "update:modelValue" | "edit")[], "select" | "add" | "update:modelValue" | "edit", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    list: PropType<ContactListItem[]>;
    addText: StringConstructor;
    modelValue: PropType<unknown>;
    defaultTagText: StringConstructor;
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
