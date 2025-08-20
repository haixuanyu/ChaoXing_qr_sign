import { IndexBarProps } from './IndexBar';
export declare const IndexBar: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sticky: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
    highlightColor: StringConstructor;
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: import("vue").PropType<import("../utils").Numeric[]>;
        default: () => string[];
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change")[], "select" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sticky: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
    highlightColor: StringConstructor;
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: import("vue").PropType<import("../utils").Numeric[]>;
        default: () => string[];
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}>, {
    sticky: boolean;
    stickyOffsetTop: number;
    indexList: import("../utils").Numeric[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default IndexBar;
export { indexBarProps } from './IndexBar';
export type { IndexBarProps };
export type { IndexBarInstance, IndexBarThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanIndexBar: typeof IndexBar;
    }
}
