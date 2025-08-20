import { type PropType, type TeleportProps, type ExtractPropTypes } from 'vue';
export declare const backTopProps: {
    right: (NumberConstructor | StringConstructor)[];
    bottom: (NumberConstructor | StringConstructor)[];
    zIndex: (NumberConstructor | StringConstructor)[];
    target: PropType<TeleportProps["to"]>;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    immediate: BooleanConstructor;
    teleport: {
        type: PropType<TeleportProps["to"]>;
        default: string;
    };
};
export type BackTopProps = ExtractPropTypes<typeof backTopProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    right: (NumberConstructor | StringConstructor)[];
    bottom: (NumberConstructor | StringConstructor)[];
    zIndex: (NumberConstructor | StringConstructor)[];
    target: PropType<TeleportProps["to"]>;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    immediate: BooleanConstructor;
    teleport: {
        type: PropType<TeleportProps["to"]>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element | import("vue/jsx-runtime").JSX.Element[], {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    right: (NumberConstructor | StringConstructor)[];
    bottom: (NumberConstructor | StringConstructor)[];
    zIndex: (NumberConstructor | StringConstructor)[];
    target: PropType<TeleportProps["to"]>;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    immediate: BooleanConstructor;
    teleport: {
        type: PropType<TeleportProps["to"]>;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    offset: string | number;
    immediate: boolean;
    teleport: string | import("vue").RendererElement | null | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
