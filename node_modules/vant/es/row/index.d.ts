export declare const Row: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    wrap: {
        type: BooleanConstructor;
        default: true;
    };
    align: import("vue").PropType<import("./Row").RowAlign>;
    gutter: {
        type: import("vue").PropType<string | number | (string | number)[]>;
        default: number;
    };
    justify: import("vue").PropType<import("./Row").RowJustify>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    wrap: {
        type: BooleanConstructor;
        default: true;
    };
    align: import("vue").PropType<import("./Row").RowAlign>;
    gutter: {
        type: import("vue").PropType<string | number | (string | number)[]>;
        default: number;
    };
    justify: import("vue").PropType<import("./Row").RowJustify>;
}>> & Readonly<{}>, {
    tag: keyof HTMLElementTagNameMap;
    wrap: boolean;
    gutter: string | number | (string | number)[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Row;
export { rowProps } from './Row';
export type { RowProps, RowAlign, RowJustify } from './Row';
declare module 'vue' {
    interface GlobalComponents {
        VanRow: typeof Row;
    }
}
