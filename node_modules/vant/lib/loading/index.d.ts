export declare const Loading: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<import("./Loading").LoadingType>;
        default: import("./Loading").LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<import("./Loading").LoadingType>;
        default: import("./Loading").LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
}>> & Readonly<{}>, {
    type: import("./Loading").LoadingType;
    vertical: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Loading;
export { loadingProps } from './Loading';
export type { LoadingType, LoadingProps } from './Loading';
export type { LoadingThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanLoading: typeof Loading;
    }
}
