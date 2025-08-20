import { type ExtractPropTypes, type PropType } from 'vue';
import { AddressListAddress } from './AddressListItem';
export declare const addressListProps: {
    list: {
        type: PropType<AddressListAddress[]>;
        default: () => never[];
    };
    modelValue: PropType<string | number | Array<string | number>>;
    switchable: {
        type: BooleanConstructor;
        default: true;
    };
    disabledText: StringConstructor;
    disabledList: {
        type: PropType<AddressListAddress[]>;
        default: () => never[];
    };
    showAddButton: {
        type: BooleanConstructor;
        default: true;
    };
    addButtonText: StringConstructor;
    defaultTagText: StringConstructor;
    rightIcon: {
        type: PropType<string>;
        default: string;
    };
};
export type AddressListProps = ExtractPropTypes<typeof addressListProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    list: {
        type: PropType<AddressListAddress[]>;
        default: () => never[];
    };
    modelValue: PropType<string | number | Array<string | number>>;
    switchable: {
        type: BooleanConstructor;
        default: true;
    };
    disabledText: StringConstructor;
    disabledList: {
        type: PropType<AddressListAddress[]>;
        default: () => never[];
    };
    showAddButton: {
        type: BooleanConstructor;
        default: true;
    };
    addButtonText: StringConstructor;
    defaultTagText: StringConstructor;
    rightIcon: {
        type: PropType<string>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "add" | "update:modelValue" | "edit" | "clickItem" | "editDisabled" | "selectDisabled")[], "select" | "add" | "update:modelValue" | "edit" | "clickItem" | "editDisabled" | "selectDisabled", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    list: {
        type: PropType<AddressListAddress[]>;
        default: () => never[];
    };
    modelValue: PropType<string | number | Array<string | number>>;
    switchable: {
        type: BooleanConstructor;
        default: true;
    };
    disabledText: StringConstructor;
    disabledList: {
        type: PropType<AddressListAddress[]>;
        default: () => never[];
    };
    showAddButton: {
        type: BooleanConstructor;
        default: true;
    };
    addButtonText: StringConstructor;
    defaultTagText: StringConstructor;
    rightIcon: {
        type: PropType<string>;
        default: string;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onClickItem?: ((...args: any[]) => any) | undefined;
    onEditDisabled?: ((...args: any[]) => any) | undefined;
    onSelectDisabled?: ((...args: any[]) => any) | undefined;
}>, {
    rightIcon: string;
    switchable: boolean;
    list: AddressListAddress[];
    disabledList: AddressListAddress[];
    showAddButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
