export declare const Empty: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    image: {
        type: import("vue").PropType<string>;
        default: string;
    };
    imageSize: import("vue").PropType<import("../utils").Numeric | [import("../utils").Numeric, import("../utils").Numeric]>;
    description: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    image: {
        type: import("vue").PropType<string>;
        default: string;
    };
    imageSize: import("vue").PropType<import("../utils").Numeric | [import("../utils").Numeric, import("../utils").Numeric]>;
    description: StringConstructor;
}>> & Readonly<{}>, {
    image: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Empty;
export { emptyProps } from './Empty';
export type { EmptyProps } from './Empty';
export type { EmptyThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanEmpty: typeof Empty;
    }
}
