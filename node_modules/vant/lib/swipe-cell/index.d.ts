import { SwipeCellProps } from './SwipeCell';
export declare const SwipeCell: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    leftWidth: (NumberConstructor | StringConstructor)[];
    rightWidth: (NumberConstructor | StringConstructor)[];
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    stopPropagation: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "click" | "close")[], "open" | "click" | "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    leftWidth: (NumberConstructor | StringConstructor)[];
    rightWidth: (NumberConstructor | StringConstructor)[];
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    stopPropagation: BooleanConstructor;
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}>, {
    name: string | number;
    disabled: boolean;
    stopPropagation: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default SwipeCell;
export { swipeCellProps } from './SwipeCell';
export type { SwipeCellProps };
export type { SwipeCellSide, SwipeCellPosition, SwipeCellInstance, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanSwipeCell: typeof SwipeCell;
    }
}
