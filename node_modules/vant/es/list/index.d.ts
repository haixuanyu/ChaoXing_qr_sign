import { ListProps } from './List';
export declare const List: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    error: BooleanConstructor;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    finished: BooleanConstructor;
    scroller: import("vue").PropType<Element>;
    errorText: StringConstructor;
    direction: {
        type: import("vue").PropType<import("./types").ListDirection>;
        default: import("./types").ListDirection;
    };
    loadingText: StringConstructor;
    finishedText: StringConstructor;
    immediateCheck: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "update:error" | "update:loading")[], "load" | "update:error" | "update:loading", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    error: BooleanConstructor;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    finished: BooleanConstructor;
    scroller: import("vue").PropType<Element>;
    errorText: StringConstructor;
    direction: {
        type: import("vue").PropType<import("./types").ListDirection>;
        default: import("./types").ListDirection;
    };
    loadingText: StringConstructor;
    finishedText: StringConstructor;
    immediateCheck: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{
    onLoad?: ((...args: any[]) => any) | undefined;
    "onUpdate:error"?: ((...args: any[]) => any) | undefined;
    "onUpdate:loading"?: ((...args: any[]) => any) | undefined;
}>, {
    offset: string | number;
    disabled: boolean;
    error: boolean;
    loading: boolean;
    direction: import("./types").ListDirection;
    finished: boolean;
    immediateCheck: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default List;
export { listProps } from './List';
export type { ListProps };
export type { ListInstance, ListDirection, ListThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanList: typeof List;
    }
}
