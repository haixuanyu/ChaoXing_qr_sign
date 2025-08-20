import _RollingText from './RollingText';
export declare const RollingText: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("./types").RollingTextDirection>;
        default: import("./types").RollingTextDirection;
    };
    stopOrder: {
        type: import("vue").PropType<import("./types").RollingTextStopOrder>;
        default: import("./types").RollingTextStopOrder;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("./types").RollingTextDirection>;
        default: import("./types").RollingTextDirection;
    };
    stopOrder: {
        type: import("vue").PropType<import("./types").RollingTextStopOrder>;
        default: import("./types").RollingTextStopOrder;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    height: number;
    duration: number;
    direction: import("./types").RollingTextDirection;
    autoStart: boolean;
    startNum: number;
    textList: string[];
    stopOrder: import("./types").RollingTextStopOrder;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default RollingText;
export { rollingTextProps } from './RollingText';
export type { RollingTextProps } from './RollingText';
export type { RollingTextDirection, RollingTextInstance, RollingTextStopOrder, RollingTextThemeVars, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanRollingText: typeof _RollingText;
    }
}
