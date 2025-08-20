import { type ExtractPropTypes } from 'vue';
export type ShareSheetOption = {
    name: string;
    icon: string;
    className?: string;
    description?: string;
};
export type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][];
export declare const shareSheetProps: {
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
    title: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    options: {
        type: import("vue").PropType<(ShareSheetOption | ShareSheetOption[])[]>;
        default: () => never[];
    };
    cancelText: StringConstructor;
    description: StringConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
};
export type ShareSheetProps = ExtractPropTypes<typeof shareSheetProps>;
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
    title: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    options: {
        type: import("vue").PropType<(ShareSheetOption | ShareSheetOption[])[]>;
        default: () => never[];
    };
    cancelText: StringConstructor;
    description: StringConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cancel" | "update:show")[], "select" | "cancel" | "update:show", import("vue").PublicProps, Readonly<ExtractPropTypes<{
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
    title: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    options: {
        type: import("vue").PropType<(ShareSheetOption | ShareSheetOption[])[]>;
        default: () => never[];
    };
    cancelText: StringConstructor;
    description: StringConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
}>, {
    round: boolean;
    overlay: boolean;
    show: boolean;
    safeAreaInsetBottom: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    options: (ShareSheetOption | ShareSheetOption[])[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
