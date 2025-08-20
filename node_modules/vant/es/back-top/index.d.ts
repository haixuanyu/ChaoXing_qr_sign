export declare const BackTop: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    right: (NumberConstructor | StringConstructor)[];
    bottom: (NumberConstructor | StringConstructor)[];
    zIndex: (NumberConstructor | StringConstructor)[];
    target: import("vue").PropType<import("vue").TeleportProps["to"]>;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    immediate: BooleanConstructor;
    teleport: {
        type: import("vue").PropType<import("vue").TeleportProps["to"]>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element | import("vue/jsx-runtime").JSX.Element[], {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    right: (NumberConstructor | StringConstructor)[];
    bottom: (NumberConstructor | StringConstructor)[];
    zIndex: (NumberConstructor | StringConstructor)[];
    target: import("vue").PropType<import("vue").TeleportProps["to"]>;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    immediate: BooleanConstructor;
    teleport: {
        type: import("vue").PropType<import("vue").TeleportProps["to"]>;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    offset: string | number;
    immediate: boolean;
    teleport: string | import("vue").RendererElement | null | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default BackTop;
export { backTopProps } from './BackTop';
export type { BackTopProps } from './BackTop';
export type { BackTopThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanBackTop: typeof BackTop;
    }
}
