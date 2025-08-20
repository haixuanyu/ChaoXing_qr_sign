import { type PropType, type ExtractPropTypes } from 'vue';
import { isMobile } from '../utils';
import { AreaList } from '../area';
import type { AddressEditInfo, AddressEditSearchItem } from './types';
export declare const addressEditProps: {
    areaList: PropType<AreaList>;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    validator: PropType<(key: string, value: string) => string | undefined>;
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
    searchResult: PropType<AddressEditSearchItem[]>;
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
        type: PropType<string[]>;
        default: () => never[];
    };
    addressInfo: {
        type: PropType<Partial<AddressEditInfo>>;
        default: () => AddressEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
    };
};
export type AddressEditProps = ExtractPropTypes<typeof addressEditProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    areaList: PropType<AreaList>;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    validator: PropType<(key: string, value: string) => string | undefined>;
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
    searchResult: PropType<AddressEditSearchItem[]>;
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
        type: PropType<string[]>;
        default: () => never[];
    };
    addressInfo: {
        type: PropType<Partial<AddressEditInfo>>;
        default: () => AddressEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "focus" | "change" | "selectSearch" | "save" | "clickArea" | "changeArea" | "changeDetail" | "changeDefault")[], "delete" | "focus" | "change" | "selectSearch" | "save" | "clickArea" | "changeArea" | "changeDetail" | "changeDefault", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    areaList: PropType<AreaList>;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    validator: PropType<(key: string, value: string) => string | undefined>;
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
    searchResult: PropType<AddressEditSearchItem[]>;
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
        type: PropType<string[]>;
        default: () => never[];
    };
    addressInfo: {
        type: PropType<Partial<AddressEditInfo>>;
        default: () => AddressEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
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
    addressInfo: Partial<AddressEditInfo>;
    telValidator: (val: string) => boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
