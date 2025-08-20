import { type PropType } from 'vue';
import { type Numeric } from '../utils';
export type AddressListAddress = {
    id: Numeric;
    tel: Numeric;
    name: string;
    address: string;
    isDefault?: boolean;
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    address: {
        type: PropType<AddressListAddress>;
        required: true;
    };
    disabled: BooleanConstructor;
    switchable: BooleanConstructor;
    singleChoice: BooleanConstructor;
    defaultTagText: StringConstructor;
    rightIcon: {
        type: PropType<string>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "click" | "edit")[], "select" | "click" | "edit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    address: {
        type: PropType<AddressListAddress>;
        required: true;
    };
    disabled: BooleanConstructor;
    switchable: BooleanConstructor;
    singleChoice: BooleanConstructor;
    defaultTagText: StringConstructor;
    rightIcon: {
        type: PropType<string>;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    rightIcon: string;
    switchable: boolean;
    singleChoice: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
