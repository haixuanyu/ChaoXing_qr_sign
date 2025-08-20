import { type ExtractPropTypes } from 'vue';
export type SkeletonImageShape = 'square' | 'round';
export declare const skeletonImageProps: {
    imageSize: (NumberConstructor | StringConstructor)[];
    imageShape: {
        type: import("vue").PropType<SkeletonImageShape>;
        default: SkeletonImageShape;
    };
};
export type SkeletonImageProps = ExtractPropTypes<typeof skeletonImageProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    imageSize: (NumberConstructor | StringConstructor)[];
    imageShape: {
        type: import("vue").PropType<SkeletonImageShape>;
        default: SkeletonImageShape;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    imageSize: (NumberConstructor | StringConstructor)[];
    imageShape: {
        type: import("vue").PropType<SkeletonImageShape>;
        default: SkeletonImageShape;
    };
}>> & Readonly<{}>, {
    imageShape: SkeletonImageShape;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
