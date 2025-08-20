import { SwipeProps } from './Swipe';
export declare const Swipe: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: BooleanConstructor;
    initialSwipe: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    indicatorColor: StringConstructor;
    showIndicators: {
        type: BooleanConstructor;
        default: true;
    };
    stopPropagation: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "dragStart" | "dragEnd")[], "change" | "dragStart" | "dragEnd", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    touchable: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: BooleanConstructor;
    initialSwipe: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    indicatorColor: StringConstructor;
    showIndicators: {
        type: BooleanConstructor;
        default: true;
    };
    stopPropagation: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onDragStart?: ((...args: any[]) => any) | undefined;
    onDragEnd?: ((...args: any[]) => any) | undefined;
}>, {
    autoplay: string | number;
    loop: boolean;
    vertical: boolean;
    duration: string | number;
    lazyRender: boolean;
    touchable: boolean;
    initialSwipe: string | number;
    showIndicators: boolean;
    stopPropagation: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Swipe;
export { swipeProps } from './Swipe';
export type { SwipeProps };
export type { SwipeInstance, SwipeToOptions, SwipeThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanSwipe: typeof Swipe;
    }
}
