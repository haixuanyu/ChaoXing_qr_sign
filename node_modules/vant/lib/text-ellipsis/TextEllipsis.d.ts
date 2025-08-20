import { type ExtractPropTypes } from 'vue';
export declare const textEllipsisProps: {
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    dots: {
        type: import("vue").PropType<string>;
        default: string;
    };
    content: {
        type: import("vue").PropType<string>;
        default: string;
    };
    expandText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    collapseText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    position: {
        type: import("vue").PropType<string>;
        default: string;
    };
};
export type TextEllipsisProps = ExtractPropTypes<typeof textEllipsisProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    dots: {
        type: import("vue").PropType<string>;
        default: string;
    };
    content: {
        type: import("vue").PropType<string>;
        default: string;
    };
    expandText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    collapseText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    position: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickAction"[], "clickAction", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    dots: {
        type: import("vue").PropType<string>;
        default: string;
    };
    content: {
        type: import("vue").PropType<string>;
        default: string;
    };
    expandText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    collapseText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    position: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>> & Readonly<{
    onClickAction?: ((...args: any[]) => any) | undefined;
}>, {
    content: string;
    position: string;
    rows: string | number;
    dots: string;
    expandText: string;
    collapseText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
