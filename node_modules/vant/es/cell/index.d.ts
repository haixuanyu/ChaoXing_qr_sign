export declare const Cell: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: import("vue").PropType<import("./Cell").CellSize>;
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
    arrowDirection: import("vue").PropType<import("./Cell").CellArrowDirection>;
    required: {
        type: import("vue").PropType<boolean | "auto">;
        default: null;
    };
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
} & {
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: import("vue").PropType<import("./Cell").CellSize>;
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
    arrowDirection: import("vue").PropType<import("./Cell").CellArrowDirection>;
    required: {
        type: import("vue").PropType<boolean | "auto">;
        default: null;
    };
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
} & {
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
}>> & Readonly<{}>, {
    replace: boolean;
    tag: keyof HTMLElementTagNameMap;
    center: boolean;
    border: boolean;
    isLink: boolean;
    required: boolean | "auto";
    clickable: boolean | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Cell;
export { cellProps } from './Cell';
export type { CellSize, CellProps, CellArrowDirection } from './Cell';
export type { CellThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCell: typeof Cell;
    }
}
