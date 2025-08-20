export declare const Signature: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tips: StringConstructor;
    type: {
        type: import("vue").PropType<string>;
        default: string;
    };
    penColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    lineWidth: {
        type: NumberConstructor;
        default: number;
    };
    clearButtonText: StringConstructor;
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    confirmButtonText: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "clear" | "start" | "end" | "signing")[], "submit" | "clear" | "start" | "end" | "signing", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tips: StringConstructor;
    type: {
        type: import("vue").PropType<string>;
        default: string;
    };
    penColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    lineWidth: {
        type: NumberConstructor;
        default: number;
    };
    clearButtonText: StringConstructor;
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    confirmButtonText: StringConstructor;
}>> & Readonly<{
    onSubmit?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
    onEnd?: ((...args: any[]) => any) | undefined;
    onSigning?: ((...args: any[]) => any) | undefined;
}>, {
    type: string;
    backgroundColor: string;
    lineWidth: number;
    penColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Signature;
export type { SignatureProps } from './Signature';
export type { SignatureInstance, SignatureThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        Signature: typeof Signature;
    }
}
