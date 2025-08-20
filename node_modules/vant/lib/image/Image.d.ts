import { type PropType, type ExtractPropTypes, type ImgHTMLAttributes } from 'vue';
import type { ImageFit, ImagePosition } from './types';
export declare const imageProps: {
    src: StringConstructor;
    alt: StringConstructor;
    fit: PropType<ImageFit>;
    position: PropType<ImagePosition>;
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
        type: PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    showLoading: {
        type: BooleanConstructor;
        default: true;
    };
    loadingIcon: {
        type: PropType<string>;
        default: string;
    };
    crossorigin: PropType<ImgHTMLAttributes["crossorigin"]>;
    referrerpolicy: PropType<ImgHTMLAttributes["referrerpolicy"]>;
    decoding: PropType<ImgHTMLAttributes["decoding"]>;
};
export type ImageProps = ExtractPropTypes<typeof imageProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    src: StringConstructor;
    alt: StringConstructor;
    fit: PropType<ImageFit>;
    position: PropType<ImagePosition>;
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
        type: PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    showLoading: {
        type: BooleanConstructor;
        default: true;
    };
    loadingIcon: {
        type: PropType<string>;
        default: string;
    };
    crossorigin: PropType<ImgHTMLAttributes["crossorigin"]>;
    referrerpolicy: PropType<ImgHTMLAttributes["referrerpolicy"]>;
    decoding: PropType<ImgHTMLAttributes["decoding"]>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "load")[], "error" | "load", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    src: StringConstructor;
    alt: StringConstructor;
    fit: PropType<ImageFit>;
    position: PropType<ImagePosition>;
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
        type: PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    showLoading: {
        type: BooleanConstructor;
        default: true;
    };
    loadingIcon: {
        type: PropType<string>;
        default: string;
    };
    crossorigin: PropType<ImgHTMLAttributes["crossorigin"]>;
    referrerpolicy: PropType<ImgHTMLAttributes["referrerpolicy"]>;
    decoding: PropType<ImgHTMLAttributes["decoding"]>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
