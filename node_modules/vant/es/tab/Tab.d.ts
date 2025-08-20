import { type PropType, type CSSProperties, type ExtractPropTypes } from 'vue';
export declare const tabProps: {
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    showZeroBadge: {
        type: BooleanConstructor;
        default: true;
    };
};
export type TabProps = ExtractPropTypes<typeof tabProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    showZeroBadge: {
        type: BooleanConstructor;
        default: true;
    };
}>, (() => import("vue/jsx-runtime").JSX.Element | undefined) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    showZeroBadge: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{}>, {
    replace: boolean;
    dot: boolean;
    disabled: boolean;
    showZeroBadge: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
