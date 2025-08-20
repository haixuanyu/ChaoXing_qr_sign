export declare const SkeletonAvatar: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    avatarSize: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: import("vue").PropType<import("./SkeletonAvatar").SkeletonAvatarShape>;
        default: import("./SkeletonAvatar").SkeletonAvatarShape;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    avatarSize: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: import("vue").PropType<import("./SkeletonAvatar").SkeletonAvatarShape>;
        default: import("./SkeletonAvatar").SkeletonAvatarShape;
    };
}>> & Readonly<{}>, {
    avatarShape: import("./SkeletonAvatar").SkeletonAvatarShape;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default SkeletonAvatar;
export { skeletonAvatarProps } from './SkeletonAvatar';
export type { SkeletonAvatarProps, SkeletonAvatarShape, } from './SkeletonAvatar';
declare module 'vue' {
    interface GlobalComponents {
        VanSkeletonAvatar: typeof SkeletonAvatar;
    }
}
