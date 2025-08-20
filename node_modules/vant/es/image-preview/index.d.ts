import type { ImagePreviewProps } from './ImagePreview';
export declare const ImagePreview: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    vertical: BooleanConstructor;
    closeable: BooleanConstructor;
    showIndex: {
        type: BooleanConstructor;
        default: true;
    };
    className: import("vue").PropType<unknown>;
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    transition: StringConstructor;
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    doubleScale: {
        type: BooleanConstructor;
        default: true;
    };
    overlayClass: import("vue").PropType<unknown>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    startPosition: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndicators: BooleanConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickImage: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeIconPosition: {
        type: import("vue").PropType<import("..").PopupCloseIconPosition>;
        default: import("..").PopupCloseIconPosition;
    };
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "closed" | "update:show" | "scale" | "longPress")[], "change" | "close" | "closed" | "update:show" | "scale" | "longPress", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    vertical: BooleanConstructor;
    closeable: BooleanConstructor;
    showIndex: {
        type: BooleanConstructor;
        default: true;
    };
    className: import("vue").PropType<unknown>;
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    transition: StringConstructor;
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    doubleScale: {
        type: BooleanConstructor;
        default: true;
    };
    overlayClass: import("vue").PropType<unknown>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    startPosition: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndicators: BooleanConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickImage: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeIconPosition: {
        type: import("vue").PropType<import("..").PopupCloseIconPosition>;
        default: import("..").PopupCloseIconPosition;
    };
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onScale?: ((...args: any[]) => any) | undefined;
    onLongPress?: ((...args: any[]) => any) | undefined;
}>, {
    loop: boolean;
    overlay: boolean;
    show: boolean;
    vertical: boolean;
    closeOnClickOverlay: boolean;
    closeIcon: string;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIconPosition: import("..").PopupCloseIconPosition;
    swipeDuration: string | number;
    showIndicators: boolean;
    startPosition: string | number;
    minZoom: string | number;
    maxZoom: string | number;
    doubleScale: boolean;
    closeOnClickImage: boolean;
    images: string[];
    showIndex: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default ImagePreview;
export { imagePreviewProps } from './ImagePreview';
export { showImagePreview } from './function-call';
export type { ImagePreviewProps };
export type { ImagePreviewOptions, ImagePreviewInstance, ImagePreviewThemeVars, ImagePreviewScaleEventParams, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanImagePreview: typeof ImagePreview;
    }
}
