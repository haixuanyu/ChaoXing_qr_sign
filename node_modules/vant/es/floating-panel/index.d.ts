export declare const FloatingPanel: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    anchors: {
        type: import("vue").PropType<number[]>;
        default: () => never[];
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    contentDraggable: {
        type: BooleanConstructor;
        default: true;
    };
    lockScroll: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("heightChange" | "update:height")[], "heightChange" | "update:height", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    anchors: {
        type: import("vue").PropType<number[]>;
        default: () => never[];
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    contentDraggable: {
        type: BooleanConstructor;
        default: true;
    };
    lockScroll: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{
    onHeightChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:height"?: ((...args: any[]) => any) | undefined;
}>, {
    height: string | number;
    safeAreaInsetBottom: boolean;
    duration: string | number;
    lockScroll: boolean;
    anchors: number[];
    contentDraggable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default FloatingPanel;
export { floatingPanelProps } from './FloatingPanel';
export type { FloatingPanelProps } from './FloatingPanel';
export type { FloatingPanelThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanFloatingPanel: typeof FloatingPanel;
    }
}
