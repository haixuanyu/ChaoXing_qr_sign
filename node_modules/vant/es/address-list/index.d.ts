export declare const AddressList: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    list: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    modelValue: import("vue").PropType<string | number | Array<string | number>>;
    switchable: {
        type: BooleanConstructor;
        default: true;
    };
    disabledText: StringConstructor;
    disabledList: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    showAddButton: {
        type: BooleanConstructor;
        default: true;
    };
    addButtonText: StringConstructor;
    defaultTagText: StringConstructor;
    rightIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "add" | "update:modelValue" | "edit" | "clickItem" | "editDisabled" | "selectDisabled")[], "select" | "add" | "update:modelValue" | "edit" | "clickItem" | "editDisabled" | "selectDisabled", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    modelValue: import("vue").PropType<string | number | Array<string | number>>;
    switchable: {
        type: BooleanConstructor;
        default: true;
    };
    disabledText: StringConstructor;
    disabledList: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    showAddButton: {
        type: BooleanConstructor;
        default: true;
    };
    addButtonText: StringConstructor;
    defaultTagText: StringConstructor;
    rightIcon: {
        type: import("vue").PropType<string>;
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
    list: import("./AddressListItem").AddressListAddress[];
    disabledList: import("./AddressListItem").AddressListAddress[];
    showAddButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default AddressList;
export { addressListProps } from './AddressList';
export type { AddressListProps } from './AddressList';
export type { AddressListAddress } from './AddressListItem';
export type { AddressListThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanAddressList: typeof AddressList;
    }
}
