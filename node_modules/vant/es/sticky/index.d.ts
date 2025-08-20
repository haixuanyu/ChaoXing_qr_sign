export declare const Sticky: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    zIndex: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<import("./Sticky").StickyPosition>;
        default: import("./Sticky").StickyPosition;
    };
    container: import("vue").PropType<Element>;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offsetBottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "change")[], "scroll" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    zIndex: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<import("./Sticky").StickyPosition>;
        default: import("./Sticky").StickyPosition;
    };
    container: import("vue").PropType<Element>;
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
    position: import("./Sticky").StickyPosition;
    offsetTop: string | number;
    offsetBottom: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Sticky;
export { stickyProps } from './Sticky';
export type { StickyProps, StickyPosition } from './Sticky';
export type { StickyThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanSticky: typeof Sticky;
    }
}
