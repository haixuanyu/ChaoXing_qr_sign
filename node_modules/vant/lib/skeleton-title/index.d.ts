export declare const SkeletonTitle: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    round: BooleanConstructor;
    titleWidth: (NumberConstructor | StringConstructor)[];
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    round: BooleanConstructor;
    titleWidth: (NumberConstructor | StringConstructor)[];
}>> & Readonly<{}>, {
    round: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default SkeletonTitle;
export { skeletonTitleProps } from './SkeletonTitle';
export type { SkeletonTitleProps } from './SkeletonTitle';
declare module 'vue' {
    interface GlobalComponents {
        VanSkeletonTitle: typeof SkeletonTitle;
    }
}
