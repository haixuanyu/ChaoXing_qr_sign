export declare const Grid: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    square: BooleanConstructor;
    center: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    reverse: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: import("vue").PropType<import("./Grid").GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    square: BooleanConstructor;
    center: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    reverse: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: import("vue").PropType<import("./Grid").GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{}>, {
    reverse: boolean;
    center: boolean;
    border: boolean;
    square: boolean;
    clickable: boolean;
    columnNum: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Grid;
export { gridProps } from './Grid';
export type { GridProps, GridDirection } from './Grid';
declare module 'vue' {
    interface GlobalComponents {
        VanGrid: typeof Grid;
    }
}
