import { type PropType, type CSSProperties, type ExtractPropTypes, type TeleportProps } from 'vue';
import { Interceptor } from '../utils';
import { PopupCloseIconPosition } from '../popup';
export declare const imagePreviewProps: {
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: PropType<string[]>;
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
    className: PropType<unknown>;
    closeIcon: {
        type: PropType<string>;
        default: string;
    };
    transition: StringConstructor;
    beforeClose: PropType<Interceptor>;
    doubleScale: {
        type: BooleanConstructor;
        default: true;
    };
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
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
        type: PropType<PopupCloseIconPosition>;
        default: PopupCloseIconPosition;
    };
    teleport: PropType<TeleportProps["to"]>;
};
export type ImagePreviewProps = ExtractPropTypes<typeof imagePreviewProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: PropType<string[]>;
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
    className: PropType<unknown>;
    closeIcon: {
        type: PropType<string>;
        default: string;
    };
    transition: StringConstructor;
    beforeClose: PropType<Interceptor>;
    doubleScale: {
        type: BooleanConstructor;
        default: true;
    };
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
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
        type: PropType<PopupCloseIconPosition>;
        default: PopupCloseIconPosition;
    };
    teleport: PropType<TeleportProps["to"]>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "closed" | "update:show" | "scale" | "longPress")[], "change" | "close" | "closed" | "update:show" | "scale" | "longPress", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: PropType<string[]>;
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
    className: PropType<unknown>;
    closeIcon: {
        type: PropType<string>;
        default: string;
    };
    transition: StringConstructor;
    beforeClose: PropType<Interceptor>;
    doubleScale: {
        type: BooleanConstructor;
        default: true;
    };
    overlayClass: PropType<unknown>;
    overlayStyle: PropType<CSSProperties>;
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
        type: PropType<PopupCloseIconPosition>;
        default: PopupCloseIconPosition;
    };
    teleport: PropType<TeleportProps["to"]>;
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
    closeIconPosition: PopupCloseIconPosition;
    swipeDuration: string | number;
    showIndicators: boolean;
    startPosition: string | number;
    minZoom: string | number;
    maxZoom: string | number;
    doubleScale: boolean;
    closeOnClickImage: boolean;
    images: string[];
    showIndex: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
