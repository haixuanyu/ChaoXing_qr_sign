export declare const SkeletonParagraph: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    round: BooleanConstructor;
    rowWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    round: BooleanConstructor;
    rowWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}>> & Readonly<{}>, {
    round: boolean;
    rowWidth: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default SkeletonParagraph;
export { skeletonParagraphProps, DEFAULT_ROW_WIDTH } from './SkeletonParagraph';
export type { SkeletonParagraphProps } from './SkeletonParagraph';
declare module 'vue' {
    interface GlobalComponents {
        VanSkeletonParagraph: typeof SkeletonParagraph;
    }
}
