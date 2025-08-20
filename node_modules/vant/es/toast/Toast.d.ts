import { type PropType, type TeleportProps, type CSSProperties, type ExtractPropTypes } from 'vue';
import { LoadingType } from '../loading';
import type { ToastType, ToastPosition, ToastWordBreak } from './types';
export declare const toastProps: {
    icon: StringConstructor;
    show: BooleanConstructor;
    type: {
        type: PropType<ToastType>;
        default: ToastType;
    };
    overlay: BooleanConstructor;
    message: (NumberConstructor | StringConstructor)[];
    iconSize: (NumberConstructor | StringConstructor)[];
    duration: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: PropType<ToastPosition>;
        default: ToastPosition;
    };
    teleport: PropType<TeleportProps["to"]>;
    wordBreak: PropType<ToastWordBreak>;
    className: PropType<unknown>;
    iconPrefix: StringConstructor;
    transition: {
        type: PropType<string>;
        default: string;
    };
    loadingType: PropType<LoadingType>;
    forbidClick: BooleanConstructor;
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
    closeOnClick: BooleanConstructor;
    closeOnClickOverlay: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
};
export type ToastProps = ExtractPropTypes<typeof toastProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    icon: StringConstructor;
    show: BooleanConstructor;
    type: {
        type: PropType<ToastType>;
        default: ToastType;
    };
    overlay: BooleanConstructor;
    message: (NumberConstructor | StringConstructor)[];
    iconSize: (NumberConstructor | StringConstructor)[];
    duration: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: PropType<ToastPosition>;
        default: ToastPosition;
    };
    teleport: PropType<TeleportProps["to"]>;
    wordBreak: PropType<ToastWordBreak>;
    className: PropType<unknown>;
    iconPrefix: StringConstructor;
    transition: {
        type: PropType<string>;
        default: string;
    };
    loadingType: PropType<LoadingType>;
    forbidClick: BooleanConstructor;
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
    closeOnClick: BooleanConstructor;
    closeOnClickOverlay: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    icon: StringConstructor;
    show: BooleanConstructor;
    type: {
        type: PropType<ToastType>;
        default: ToastType;
    };
    overlay: BooleanConstructor;
    message: (NumberConstructor | StringConstructor)[];
    iconSize: (NumberConstructor | StringConstructor)[];
    duration: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: PropType<ToastPosition>;
        default: ToastPosition;
    };
    teleport: PropType<TeleportProps["to"]>;
    wordBreak: PropType<ToastWordBreak>;
    className: PropType<unknown>;
    iconPrefix: StringConstructor;
    transition: {
        type: PropType<string>;
        default: string;
    };
    loadingType: PropType<LoadingType>;
    forbidClick: BooleanConstructor;
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
    closeOnClick: BooleanConstructor;
    closeOnClickOverlay: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
}>> & Readonly<{
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}>, {
    type: ToastType;
    position: ToastPosition;
    overlay: boolean;
    show: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    transition: string;
    forbidClick: boolean;
    closeOnClick: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
