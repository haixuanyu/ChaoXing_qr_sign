import { type PropType, type InjectionKey, type ExtractPropTypes } from 'vue';
export type GridDirection = 'horizontal' | 'vertical';
export declare const gridProps: {
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
    direction: PropType<GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export type GridProps = ExtractPropTypes<typeof gridProps>;
export type GridProvide = {
    props: GridProps;
};
export declare const GRID_KEY: InjectionKey<GridProvide>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
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
    direction: PropType<GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
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
    direction: PropType<GridDirection>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
