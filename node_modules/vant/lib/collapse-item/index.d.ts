export declare const CollapseItem: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: import("vue").PropType<import("..").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    valueClass: import("vue").PropType<unknown>;
    labelClass: import("vue").PropType<unknown>;
    titleClass: import("vue").PropType<unknown>;
    titleStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    arrowDirection: import("vue").PropType<import("..").CellArrowDirection>;
    required: {
        type: import("vue").PropType<boolean | "auto">;
        default: null;
    };
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
} & {
    name: (NumberConstructor | StringConstructor)[];
    isLink: {
        type: BooleanConstructor;
        default: true;
    };
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
}>, (() => import("vue/jsx-runtime").JSX.Element) | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: import("vue").PropType<import("..").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    valueClass: import("vue").PropType<unknown>;
    labelClass: import("vue").PropType<unknown>;
    titleClass: import("vue").PropType<unknown>;
    titleStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    arrowDirection: import("vue").PropType<import("..").CellArrowDirection>;
    required: {
        type: import("vue").PropType<boolean | "auto">;
        default: null;
    };
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
} & {
    name: (NumberConstructor | StringConstructor)[];
    isLink: {
        type: BooleanConstructor;
        default: true;
    };
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{}>, {
    tag: keyof HTMLElementTagNameMap;
    center: boolean;
    disabled: boolean;
    border: boolean;
    isLink: boolean;
    required: boolean | "auto";
    clickable: boolean | null;
    readonly: boolean;
    lazyRender: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CollapseItem;
export { collapseItemProps } from './CollapseItem';
export type { CollapseItemProps } from './CollapseItem';
export type { CollapseItemInstance, CollapseItemThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCollapseItem: typeof CollapseItem;
    }
}
