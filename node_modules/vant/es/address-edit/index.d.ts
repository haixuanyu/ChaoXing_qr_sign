import { AddressEditProps } from './AddressEdit';
export declare const AddressEdit: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    areaList: import("vue").PropType<import("..").AreaList>;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    validator: import("vue").PropType<(key: string, value: string) => string | undefined>;
    showArea: {
        type: BooleanConstructor;
        default: true;
    };
    showDetail: {
        type: BooleanConstructor;
        default: true;
    };
    showDelete: BooleanConstructor;
    disableArea: BooleanConstructor;
    searchResult: import("vue").PropType<import("./types").AddressEditSearchItem[]>;
    telMaxlength: (NumberConstructor | StringConstructor)[];
    showSetDefault: BooleanConstructor;
    saveButtonText: StringConstructor;
    areaPlaceholder: StringConstructor;
    deleteButtonText: StringConstructor;
    showSearchResult: BooleanConstructor;
    detailRows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    detailMaxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    areaColumnsPlaceholder: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    addressInfo: {
        type: import("vue").PropType<Partial<import("./types").AddressEditInfo>>;
        default: () => import("./types").AddressEditInfo;
    };
    telValidator: {
        type: import("vue").PropType<(val: string) => boolean>;
        default: typeof import("../utils").isMobile;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "focus" | "change" | "selectSearch" | "save" | "clickArea" | "changeArea" | "changeDetail" | "changeDefault")[], "delete" | "focus" | "change" | "selectSearch" | "save" | "clickArea" | "changeArea" | "changeDetail" | "changeDefault", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    areaList: import("vue").PropType<import("..").AreaList>;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    validator: import("vue").PropType<(key: string, value: string) => string | undefined>;
    showArea: {
        type: BooleanConstructor;
        default: true;
    };
    showDetail: {
        type: BooleanConstructor;
        default: true;
    };
    showDelete: BooleanConstructor;
    disableArea: BooleanConstructor;
    searchResult: import("vue").PropType<import("./types").AddressEditSearchItem[]>;
    telMaxlength: (NumberConstructor | StringConstructor)[];
    showSetDefault: BooleanConstructor;
    saveButtonText: StringConstructor;
    areaPlaceholder: StringConstructor;
    deleteButtonText: StringConstructor;
    showSearchResult: BooleanConstructor;
    detailRows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    detailMaxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    areaColumnsPlaceholder: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    addressInfo: {
        type: import("vue").PropType<Partial<import("./types").AddressEditInfo>>;
        default: () => import("./types").AddressEditInfo;
    };
    telValidator: {
        type: import("vue").PropType<(val: string) => boolean>;
        default: typeof import("../utils").isMobile;
    };
}>> & Readonly<{
    onFocus?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onSelectSearch?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onSave?: ((...args: any[]) => any) | undefined;
    onClickArea?: ((...args: any[]) => any) | undefined;
    onChangeArea?: ((...args: any[]) => any) | undefined;
    onChangeDetail?: ((...args: any[]) => any) | undefined;
    onChangeDefault?: ((...args: any[]) => any) | undefined;
}>, {
    isSaving: boolean;
    isDeleting: boolean;
    showArea: boolean;
    showDetail: boolean;
    showDelete: boolean;
    disableArea: boolean;
    showSetDefault: boolean;
    showSearchResult: boolean;
    detailRows: string | number;
    detailMaxlength: string | number;
    areaColumnsPlaceholder: string[];
    addressInfo: Partial<import("./types").AddressEditInfo>;
    telValidator: (val: string) => boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default AddressEdit;
export { addressEditProps } from './AddressEdit';
export type { AddressEditProps };
export type { AddressEditInfo, AddressEditInstance, AddressEditThemeVars, AddressEditSearchItem, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanAddressEdit: typeof AddressEdit;
    }
}
