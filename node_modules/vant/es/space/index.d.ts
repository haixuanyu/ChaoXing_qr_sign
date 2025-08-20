export declare const Space: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    align: import("vue").PropType<import("./Space").SpaceAlign>;
    direction: {
        type: import("vue").PropType<"vertical" | "horizontal">;
        default: string;
    };
    size: {
        type: import("vue").PropType<number | string | [import("./Space").SpaceSize, import("./Space").SpaceSize]>;
        default: number;
    };
    wrap: BooleanConstructor;
    fill: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    align: import("vue").PropType<import("./Space").SpaceAlign>;
    direction: {
        type: import("vue").PropType<"vertical" | "horizontal">;
        default: string;
    };
    size: {
        type: import("vue").PropType<number | string | [import("./Space").SpaceSize, import("./Space").SpaceSize]>;
        default: number;
    };
    wrap: BooleanConstructor;
    fill: BooleanConstructor;
}>> & Readonly<{}>, {
    fill: boolean;
    size: string | number | [import("./Space").SpaceSize, import("./Space").SpaceSize];
    wrap: boolean;
    direction: "horizontal" | "vertical";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Space;
export { spaceProps } from './Space';
export type { SpaceProps, SpaceSize, SpaceAlign } from './Space';
declare module 'vue' {
    interface GlobalComponents {
        VanSpace: typeof Space;
    }
}
