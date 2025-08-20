export declare const Circle: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    fill: {
        type: import("vue").PropType<string>;
        default: string;
    };
    rate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    color: import("vue").PropType<string | Record<string, string>>;
    clockwise: {
        type: BooleanConstructor;
        default: true;
    };
    layerColor: StringConstructor;
    currentRate: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeLinecap: import("vue").PropType<CanvasLineCap>;
    startPosition: {
        type: import("vue").PropType<import("./Circle").CircleStartPosition>;
        default: import("./Circle").CircleStartPosition;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:currentRate"[], "update:currentRate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    fill: {
        type: import("vue").PropType<string>;
        default: string;
    };
    rate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    color: import("vue").PropType<string | Record<string, string>>;
    clockwise: {
        type: BooleanConstructor;
        default: true;
    };
    layerColor: StringConstructor;
    currentRate: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeLinecap: import("vue").PropType<CanvasLineCap>;
    startPosition: {
        type: import("vue").PropType<import("./Circle").CircleStartPosition>;
        default: import("./Circle").CircleStartPosition;
    };
}>> & Readonly<{
    "onUpdate:currentRate"?: ((...args: any[]) => any) | undefined;
}>, {
    fill: string;
    strokeWidth: string | number;
    rate: string | number;
    speed: string | number;
    clockwise: boolean;
    currentRate: number;
    startPosition: import("./Circle").CircleStartPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Circle;
export { circleProps } from './Circle';
export type { CircleProps, CircleStartPosition } from './Circle';
export type { CircleThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCircle: typeof Circle;
    }
}
