import { ExtractPropTypes, PropType } from 'vue';
export type SpaceSize = number | string;
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export declare const spaceProps: {
    align: PropType<SpaceAlign>;
    direction: {
        type: PropType<"vertical" | "horizontal">;
        default: string;
    };
    size: {
        type: PropType<number | string | [SpaceSize, SpaceSize]>;
        default: number;
    };
    wrap: BooleanConstructor;
    fill: BooleanConstructor;
};
export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    align: PropType<SpaceAlign>;
    direction: {
        type: PropType<"vertical" | "horizontal">;
        default: string;
    };
    size: {
        type: PropType<number | string | [SpaceSize, SpaceSize]>;
        default: number;
    };
    wrap: BooleanConstructor;
    fill: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    align: PropType<SpaceAlign>;
    direction: {
        type: PropType<"vertical" | "horizontal">;
        default: string;
    };
    size: {
        type: PropType<number | string | [SpaceSize, SpaceSize]>;
        default: number;
    };
    wrap: BooleanConstructor;
    fill: BooleanConstructor;
}>> & Readonly<{}>, {
    fill: boolean;
    size: string | number | [SpaceSize, SpaceSize];
    wrap: boolean;
    direction: "horizontal" | "vertical";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
