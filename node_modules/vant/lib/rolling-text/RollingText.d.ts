import { type ExtractPropTypes } from 'vue';
import { RollingTextDirection, RollingTextStopOrder } from './types';
export declare const rollingTextProps: {
    startNum: {
        type: NumberConstructor;
        default: number;
    };
    targetNum: NumberConstructor;
    textList: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    autoStart: {
        type: BooleanConstructor;
        default: true;
    };
    direction: {
        type: import("vue").PropType<RollingTextDirection>;
        default: RollingTextDirection;
    };
    stopOrder: {
        type: import("vue").PropType<RollingTextStopOrder>;
        default: RollingTextStopOrder;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
};
export type RollingTextProps = ExtractPropTypes<typeof rollingTextProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    startNum: {
        type: NumberConstructor;
        default: number;
    };
    targetNum: NumberConstructor;
    textList: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    autoStart: {
        type: BooleanConstructor;
        default: true;
    };
    direction: {
        type: import("vue").PropType<RollingTextDirection>;
        default: RollingTextDirection;
    };
    stopOrder: {
        type: import("vue").PropType<RollingTextStopOrder>;
        default: RollingTextStopOrder;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    startNum: {
        type: NumberConstructor;
        default: number;
    };
    targetNum: NumberConstructor;
    textList: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    autoStart: {
        type: BooleanConstructor;
        default: true;
    };
    direction: {
        type: import("vue").PropType<RollingTextDirection>;
        default: RollingTextDirection;
    };
    stopOrder: {
        type: import("vue").PropType<RollingTextStopOrder>;
        default: RollingTextStopOrder;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    height: number;
    duration: number;
    direction: RollingTextDirection;
    autoStart: boolean;
    startNum: number;
    textList: string[];
    stopOrder: RollingTextStopOrder;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
