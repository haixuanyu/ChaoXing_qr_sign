import { type PropType, type ExtractPropTypes } from 'vue';
export type StickyPosition = 'top' | 'bottom';
export declare const stickyProps: {
    zIndex: (NumberConstructor | StringConstructor)[];
    position: {
        type: PropType<StickyPosition>;
        default: StickyPosition;
    };
    container: PropType<Element>;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetBottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export type StickyProps = ExtractPropTypes<typeof stickyProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    zIndex: (NumberConstructor | StringConstructor)[];
    position: {
        type: PropType<StickyPosition>;
        default: StickyPosition;
    };
    container: PropType<Element>;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetBottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "change")[], "scroll" | "change", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    zIndex: (NumberConstructor | StringConstructor)[];
    position: {
        type: PropType<StickyPosition>;
        default: StickyPosition;
    };
    container: PropType<Element>;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetBottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onScroll?: ((...args: any[]) => any) | undefined;
}>, {
    position: StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
