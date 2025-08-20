import { RollingTextDirection } from './types';
export declare const props: {
    figureArr: {
        type: import("vue").PropType<unknown[]>;
        default: () => never[];
    };
    delay: NumberConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    isStart: BooleanConstructor;
    direction: {
        type: import("vue").PropType<RollingTextDirection>;
        default: RollingTextDirection;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    figureArr: {
        type: import("vue").PropType<unknown[]>;
        default: () => never[];
    };
    delay: NumberConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    isStart: BooleanConstructor;
    direction: {
        type: import("vue").PropType<RollingTextDirection>;
        default: RollingTextDirection;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    figureArr: {
        type: import("vue").PropType<unknown[]>;
        default: () => never[];
    };
    delay: NumberConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    isStart: BooleanConstructor;
    direction: {
        type: import("vue").PropType<RollingTextDirection>;
        default: RollingTextDirection;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    height: number;
    duration: number;
    direction: RollingTextDirection;
    figureArr: unknown[];
    isStart: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
