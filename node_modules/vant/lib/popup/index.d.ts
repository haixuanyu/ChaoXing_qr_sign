export declare const Popup: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    overlayProps: import("vue").PropType<Partial<import("..").OverlayProps>>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    overlayClass: import("vue").PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    round: BooleanConstructor;
    position: {
        type: import("vue").PropType<import("./types").PopupPosition>;
        default: import("./types").PopupPosition;
    };
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closeable: BooleanConstructor;
    transition: StringConstructor;
    iconPrefix: StringConstructor;
    closeOnPopstate: BooleanConstructor;
    closeIconPosition: {
        type: import("vue").PropType<import("./types").PopupCloseIconPosition>;
        default: import("./types").PopupCloseIconPosition;
    };
    destroyOnClose: BooleanConstructor;
    safeAreaInsetTop: BooleanConstructor;
    safeAreaInsetBottom: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "close" | "keydown" | "opened" | "closed" | "update:show" | "clickOverlay" | "clickCloseIcon")[], "open" | "close" | "keydown" | "opened" | "closed" | "update:show" | "clickOverlay" | "clickCloseIcon", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    overlayProps: import("vue").PropType<Partial<import("..").OverlayProps>>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    overlayClass: import("vue").PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    round: BooleanConstructor;
    position: {
        type: import("vue").PropType<import("./types").PopupPosition>;
        default: import("./types").PopupPosition;
    };
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closeable: BooleanConstructor;
    transition: StringConstructor;
    iconPrefix: StringConstructor;
    closeOnPopstate: BooleanConstructor;
    closeIconPosition: {
        type: import("vue").PropType<import("./types").PopupCloseIconPosition>;
        default: import("./types").PopupCloseIconPosition;
    };
    destroyOnClose: BooleanConstructor;
    safeAreaInsetTop: BooleanConstructor;
    safeAreaInsetBottom: BooleanConstructor;
}>> & Readonly<{
    onKeydown?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onClickOverlay?: ((...args: any[]) => any) | undefined;
    onClickCloseIcon?: ((...args: any[]) => any) | undefined;
}>, {
    position: import("./types").PopupPosition;
    round: boolean;
    overlay: boolean;
    show: boolean;
    safeAreaInsetBottom: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    closeIcon: string;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIconPosition: import("./types").PopupCloseIconPosition;
    destroyOnClose: boolean;
    safeAreaInsetTop: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Popup;
export { popupProps } from './Popup';
export type { PopupProps } from './Popup';
export type { PopupPosition, PopupInstance, PopupThemeVars, PopupCloseIconPosition, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanPopup: typeof Popup;
    }
}
