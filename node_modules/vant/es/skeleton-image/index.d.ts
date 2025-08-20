export declare const SkeletonImage: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    imageSize: (NumberConstructor | StringConstructor)[];
    imageShape: {
        type: import("vue").PropType<import("./SkeletonImage").SkeletonImageShape>;
        default: import("./SkeletonImage").SkeletonImageShape;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    imageSize: (NumberConstructor | StringConstructor)[];
    imageShape: {
        type: import("vue").PropType<import("./SkeletonImage").SkeletonImageShape>;
        default: import("./SkeletonImage").SkeletonImageShape;
    };
}>> & Readonly<{}>, {
    imageShape: import("./SkeletonImage").SkeletonImageShape;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default SkeletonImage;
export { skeletonImageProps } from './SkeletonImage';
export type { SkeletonImageProps, SkeletonImageShape } from './SkeletonImage';
declare module 'vue' {
    interface GlobalComponents {
        VanSkeletonImage: typeof SkeletonImage;
    }
}
