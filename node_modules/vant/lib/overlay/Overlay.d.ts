import { type PropType, type CSSProperties, type ExtractPropTypes, type TeleportProps } from 'vue';
export declare const overlayProps: {
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    className: PropType<unknown>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    customStyle: PropType<CSSProperties>;
    teleport: PropType<TeleportProps["to"]>;
};
export type OverlayProps = ExtractPropTypes<typeof overlayProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    className: PropType<unknown>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    customStyle: PropType<CSSProperties>;
    teleport: PropType<TeleportProps["to"]>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    className: PropType<unknown>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    customStyle: PropType<CSSProperties>;
    teleport: PropType<TeleportProps["to"]>;
}>> & Readonly<{}>, {
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
