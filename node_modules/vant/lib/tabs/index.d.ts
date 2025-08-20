import { TabsProps } from './Tabs';
export declare const Tabs: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./types").TabsType>;
        default: import("./types").TabsType;
    };
    color: StringConstructor;
    border: BooleanConstructor;
    sticky: BooleanConstructor;
    shrink: BooleanConstructor;
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animated: BooleanConstructor;
    ellipsis: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: BooleanConstructor;
    scrollspy: BooleanConstructor;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    background: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showHeader: {
        type: BooleanConstructor;
        default: true;
    };
    lineWidth: (NumberConstructor | StringConstructor)[];
    lineHeight: (NumberConstructor | StringConstructor)[];
    beforeChange: import("vue").PropType<import("../utils").Interceptor>;
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "change" | "rendered" | "clickTab" | "update:active")[], "scroll" | "change" | "rendered" | "clickTab" | "update:active", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./types").TabsType>;
        default: import("./types").TabsType;
    };
    color: StringConstructor;
    border: BooleanConstructor;
    sticky: BooleanConstructor;
    shrink: BooleanConstructor;
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animated: BooleanConstructor;
    ellipsis: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: BooleanConstructor;
    scrollspy: BooleanConstructor;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    background: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showHeader: {
        type: BooleanConstructor;
        default: true;
    };
    lineWidth: (NumberConstructor | StringConstructor)[];
    lineHeight: (NumberConstructor | StringConstructor)[];
    beforeChange: import("vue").PropType<import("../utils").Interceptor>;
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onScroll?: ((...args: any[]) => any) | undefined;
    onRendered?: ((...args: any[]) => any) | undefined;
    onClickTab?: ((...args: any[]) => any) | undefined;
    "onUpdate:active"?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("./types").TabsType;
    ellipsis: boolean;
    sticky: boolean;
    border: boolean;
    active: string | number;
    duration: string | number;
    lazyRender: boolean;
    offsetTop: string | number;
    animated: boolean;
    swipeable: boolean;
    shrink: boolean;
    scrollspy: boolean;
    showHeader: boolean;
    swipeThreshold: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Tabs;
export { tabsProps } from './Tabs';
export type { TabsProps };
export type { TabsType, TabsInstance, TabsThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanTabs: typeof Tabs;
    }
}
