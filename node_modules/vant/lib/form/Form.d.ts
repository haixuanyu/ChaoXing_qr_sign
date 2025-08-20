import { type PropType, type ExtractPropTypes } from 'vue';
import type { FieldTextAlign, FieldValidateTrigger } from '../field/types';
export declare const formProps: {
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    required: PropType<boolean | "auto">;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: PropType<FieldTextAlign>;
    inputAlign: PropType<FieldTextAlign>;
    scrollToError: BooleanConstructor;
    scrollToErrorPosition: PropType<ScrollLogicalPosition>;
    validateFirst: BooleanConstructor;
    submitOnEnter: {
        type: BooleanConstructor;
        default: true;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: true;
    };
    errorMessageAlign: PropType<FieldTextAlign>;
    validateTrigger: {
        type: PropType<FieldValidateTrigger | FieldValidateTrigger[]>;
        default: string;
    };
};
export type FormProps = ExtractPropTypes<typeof formProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    required: PropType<boolean | "auto">;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: PropType<FieldTextAlign>;
    inputAlign: PropType<FieldTextAlign>;
    scrollToError: BooleanConstructor;
    scrollToErrorPosition: PropType<ScrollLogicalPosition>;
    validateFirst: BooleanConstructor;
    submitOnEnter: {
        type: BooleanConstructor;
        default: true;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: true;
    };
    errorMessageAlign: PropType<FieldTextAlign>;
    validateTrigger: {
        type: PropType<FieldValidateTrigger | FieldValidateTrigger[]>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "failed")[], "submit" | "failed", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    required: PropType<boolean | "auto">;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: PropType<FieldTextAlign>;
    inputAlign: PropType<FieldTextAlign>;
    scrollToError: BooleanConstructor;
    scrollToErrorPosition: PropType<ScrollLogicalPosition>;
    validateFirst: BooleanConstructor;
    submitOnEnter: {
        type: BooleanConstructor;
        default: true;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: true;
    };
    errorMessageAlign: PropType<FieldTextAlign>;
    validateTrigger: {
        type: PropType<FieldValidateTrigger | FieldValidateTrigger[]>;
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
    validateTrigger: FieldValidateTrigger | FieldValidateTrigger[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
