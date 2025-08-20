import { FormProps } from './Form';
export declare const Form: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    required: import("vue").PropType<boolean | "auto">;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: import("vue").PropType<import("..").FieldTextAlign>;
    inputAlign: import("vue").PropType<import("..").FieldTextAlign>;
    scrollToError: BooleanConstructor;
    scrollToErrorPosition: import("vue").PropType<ScrollLogicalPosition>;
    validateFirst: BooleanConstructor;
    submitOnEnter: {
        type: BooleanConstructor;
        default: true;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: true;
    };
    errorMessageAlign: import("vue").PropType<import("..").FieldTextAlign>;
    validateTrigger: {
        type: import("vue").PropType<import("..").FieldValidateTrigger | import("..").FieldValidateTrigger[]>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "failed")[], "submit" | "failed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    required: import("vue").PropType<boolean | "auto">;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: import("vue").PropType<import("..").FieldTextAlign>;
    inputAlign: import("vue").PropType<import("..").FieldTextAlign>;
    scrollToError: BooleanConstructor;
    scrollToErrorPosition: import("vue").PropType<ScrollLogicalPosition>;
    validateFirst: BooleanConstructor;
    submitOnEnter: {
        type: BooleanConstructor;
        default: true;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: true;
    };
    errorMessageAlign: import("vue").PropType<import("..").FieldTextAlign>;
    validateTrigger: {
        type: import("vue").PropType<import("..").FieldValidateTrigger | import("..").FieldValidateTrigger[]>;
        default: string;
    };
}>> & Readonly<{
    onSubmit?: ((...args: any[]) => any) | undefined;
    onFailed?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    readonly: boolean;
    colon: boolean;
    showError: boolean;
    scrollToError: boolean;
    validateFirst: boolean;
    submitOnEnter: boolean;
    showErrorMessage: boolean;
    validateTrigger: import("..").FieldValidateTrigger | import("..").FieldValidateTrigger[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Form;
export { formProps } from './Form';
export type { FormProps };
export type { FormInstance } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanForm: typeof Form;
    }
}
