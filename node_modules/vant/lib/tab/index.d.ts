export declare const Tab: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: import("vue").PropType<unknown>;
    titleStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    showZeroBadge: {
        type: BooleanConstructor;
        default: true;
    };
}>, (() => import("vue/jsx-runtime").JSX.Element | undefined) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: import("vue").PropType<unknown>;
    titleStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    showZeroBadge: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{}>, {
    replace: boolean;
    dot: boolean;
    disabled: boolean;
    showZeroBadge: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Tab;
export { tabProps } from './Tab';
export { useTabStatus, useAllTabStatus } from '../composables/use-tab-status';
export type { TabProps } from './Tab';
declare module 'vue' {
    interface GlobalComponents {
        VanTab: typeof Tab;
    }
}
