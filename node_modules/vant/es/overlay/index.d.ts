export declare const Overlay: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    className: import("vue").PropType<unknown>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    customStyle: import("vue").PropType<import("vue").CSSProperties>;
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    className: import("vue").PropType<unknown>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    customStyle: import("vue").PropType<import("vue").CSSProperties>;
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
}>> & Readonly<{}>, {
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Overlay;
export { overlayProps } from './Overlay';
export type { OverlayProps } from './Overlay';
export type { OverlayThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanOverlay: typeof Overlay;
    }
}
