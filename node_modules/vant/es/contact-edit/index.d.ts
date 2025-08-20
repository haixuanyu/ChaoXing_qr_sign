export declare const ContactEdit: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    isEdit: BooleanConstructor;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    showSetDefault: BooleanConstructor;
    setDefaultLabel: StringConstructor;
    contactInfo: {
        type: import("vue").PropType<import("./ContactEdit").ContactEditInfo>;
        default: () => import("./ContactEdit").ContactEditInfo;
    };
    telValidator: {
        type: import("vue").PropType<(val: string) => boolean>;
        default: typeof import("../utils").isMobile;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "save" | "changeDefault")[], "delete" | "save" | "changeDefault", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isEdit: BooleanConstructor;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    showSetDefault: BooleanConstructor;
    setDefaultLabel: StringConstructor;
    contactInfo: {
        type: import("vue").PropType<import("./ContactEdit").ContactEditInfo>;
        default: () => import("./ContactEdit").ContactEditInfo;
    };
    telValidator: {
        type: import("vue").PropType<(val: string) => boolean>;
        default: typeof import("../utils").isMobile;
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
    contactInfo: import("./ContactEdit").ContactEditInfo;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default ContactEdit;
export { contactEditProps } from './ContactEdit';
export type { ContactEditInfo, ContactEditProps } from './ContactEdit';
export type { ContactEditThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanContactEdit: typeof ContactEdit;
    }
}
