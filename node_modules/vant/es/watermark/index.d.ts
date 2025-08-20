export declare const Watermark: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    gapX: {
        type: NumberConstructor;
        default: number;
    };
    gapY: {
        type: NumberConstructor;
        default: number;
    };
    image: StringConstructor;
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    rotate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    content: StringConstructor;
    opacity: (NumberConstructor | StringConstructor)[];
    fullPage: {
        type: BooleanConstructor;
        default: true;
    };
    textColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    gapX: {
        type: NumberConstructor;
        default: number;
    };
    gapY: {
        type: NumberConstructor;
        default: number;
    };
    image: StringConstructor;
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    rotate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    content: StringConstructor;
    opacity: (NumberConstructor | StringConstructor)[];
    fullPage: {
        type: BooleanConstructor;
        default: true;
    };
    textColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>> & Readonly<{}>, {
    width: number;
    height: number;
    textColor: string;
    rotate: string | number;
    gapX: number;
    gapY: number;
    fullPage: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Watermark;
export { watermarkProps } from './Watermark';
export type { WatermarkProps } from './Watermark';
export type { WatermarkThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanWatermark: typeof Watermark;
    }
}
