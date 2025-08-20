import { type PropType, type InjectionKey, type ExtractPropTypes } from 'vue';
import { type Interceptor } from '../utils';
import type { TabsProvide, TabsType } from './types';
export declare const tabsProps: {
    type: {
        type: PropType<TabsType>;
        default: TabsType;
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
    beforeChange: PropType<Interceptor>;
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
};
export type TabsProps = ExtractPropTypes<typeof tabsProps>;
export declare const TABS_KEY: InjectionKey<TabsProvide>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    type: {
        type: PropType<TabsType>;
        default: TabsType;
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
    beforeChange: PropType<Interceptor>;
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "change" | "rendered" | "clickTab" | "update:active")[], "scroll" | "change" | "rendered" | "clickTab" | "update:active", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    type: {
        type: PropType<TabsType>;
        default: TabsType;
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
    beforeChange: PropType<Interceptor>;
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
    type: TabsType;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
