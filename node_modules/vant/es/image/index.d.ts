export declare const Image: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    src: StringConstructor;
    alt: StringConstructor;
    fit: import("vue").PropType<import("./types").ImageFit>;
    position: import("vue").PropType<import("./types").ImagePosition>;
    round: BooleanConstructor;
    block: BooleanConstructor;
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    radius: (NumberConstructor | StringConstructor)[];
    lazyLoad: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    showError: {
        type: BooleanConstructor;
        default: true;
    };
    errorIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    showLoading: {
        type: BooleanConstructor;
        default: true;
    };
    loadingIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    crossorigin: import("vue").PropType<import("vue").ImgHTMLAttributes["crossorigin"]>;
    referrerpolicy: import("vue").PropType<import("vue").ImgHTMLAttributes["referrerpolicy"]>;
    decoding: import("vue").PropType<import("vue").ImgHTMLAttributes["decoding"]>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "load")[], "error" | "load", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    src: StringConstructor;
    alt: StringConstructor;
    fit: import("vue").PropType<import("./types").ImageFit>;
    position: import("vue").PropType<import("./types").ImagePosition>;
    round: BooleanConstructor;
    block: BooleanConstructor;
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    radius: (NumberConstructor | StringConstructor)[];
    lazyLoad: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    showError: {
        type: BooleanConstructor;
        default: true;
    };
    errorIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    showLoading: {
        type: BooleanConstructor;
        default: true;
    };
    loadingIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    crossorigin: import("vue").PropType<import("vue").ImgHTMLAttributes["crossorigin"]>;
    referrerpolicy: import("vue").PropType<import("vue").ImgHTMLAttributes["referrerpolicy"]>;
    decoding: import("vue").PropType<import("vue").ImgHTMLAttributes["decoding"]>;
}>> & Readonly<{
    onLoad?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}>, {
    round: boolean;
    block: boolean;
    showError: boolean;
    lazyLoad: boolean;
    errorIcon: string;
    showLoading: boolean;
    loadingIcon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Image;
export { imageProps } from './Image';
export type { ImageProps } from './Image';
export type { ImageFit, ImagePosition, ImageThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanImage: typeof Image;
    }
}
