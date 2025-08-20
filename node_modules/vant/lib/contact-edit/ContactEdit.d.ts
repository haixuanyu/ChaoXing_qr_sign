import { type PropType, type ExtractPropTypes } from 'vue';
import { isMobile } from '../utils';
export type ContactEditInfo = {
    tel: string;
    name: string;
    isDefault?: boolean;
};
export declare const contactEditProps: {
    isEdit: BooleanConstructor;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    showSetDefault: BooleanConstructor;
    setDefaultLabel: StringConstructor;
    contactInfo: {
        type: PropType<ContactEditInfo>;
        default: () => ContactEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
    };
};
export type ContactEditProps = ExtractPropTypes<typeof contactEditProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    isEdit: BooleanConstructor;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    showSetDefault: BooleanConstructor;
    setDefaultLabel: StringConstructor;
    contactInfo: {
        type: PropType<ContactEditInfo>;
        default: () => ContactEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "save" | "changeDefault")[], "delete" | "save" | "changeDefault", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    isEdit: BooleanConstructor;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    showSetDefault: BooleanConstructor;
    setDefaultLabel: StringConstructor;
    contactInfo: {
        type: PropType<ContactEditInfo>;
        default: () => ContactEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
    };
}>> & Readonly<{
    onDelete?: ((...args: any[]) => any) | undefined;
    onSave?: ((...args: any[]) => any) | undefined;
    onChangeDefault?: ((...args: any[]) => any) | undefined;
}>, {
    isSaving: boolean;
    isDeleting: boolean;
    showSetDefault: boolean;
    telValidator: (val: string) => boolean;
    isEdit: boolean;
    contactInfo: ContactEditInfo;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
