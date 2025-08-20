import { type ExtractPropTypes } from 'vue';
import type { NotifyType, NotifyPosition } from './types';
export declare const notifyProps: {
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
    type: {
        type: import("vue").PropType<NotifyType>;
        default: NotifyType;
    };
    color: StringConstructor;
    message: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<NotifyPosition>;
        default: NotifyPosition;
    };
    className: import("vue").PropType<unknown>;
    background: StringConstructor;
    lockScroll: BooleanConstructor;
};
export type NotifyProps = ExtractPropTypes<typeof notifyProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
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
    type: {
        type: import("vue").PropType<NotifyType>;
        default: NotifyType;
    };
    color: StringConstructor;
    message: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<NotifyPosition>;
        default: NotifyPosition;
    };
    className: import("vue").PropType<unknown>;
    background: StringConstructor;
    lockScroll: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").PublicProps, Readonly<ExtractPropTypes<{
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
    type: {
        type: import("vue").PropType<NotifyType>;
        default: NotifyType;
    };
    color: StringConstructor;
    message: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<NotifyPosition>;
        default: NotifyPosition;
    };
    className: import("vue").PropType<unknown>;
    background: StringConstructor;
    lockScroll: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}>, {
    type: NotifyType;
    position: NotifyPosition;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
