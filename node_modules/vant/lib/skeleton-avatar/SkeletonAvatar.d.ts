import { ExtractPropTypes } from 'vue';
export type SkeletonAvatarShape = 'square' | 'round';
export declare const skeletonAvatarProps: {
    avatarSize: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: import("vue").PropType<SkeletonAvatarShape>;
        default: SkeletonAvatarShape;
    };
};
export type SkeletonAvatarProps = ExtractPropTypes<typeof skeletonAvatarProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    avatarSize: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: import("vue").PropType<SkeletonAvatarShape>;
        default: SkeletonAvatarShape;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    avatarSize: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: import("vue").PropType<SkeletonAvatarShape>;
        default: SkeletonAvatarShape;
    };
}>> & Readonly<{}>, {
    avatarShape: SkeletonAvatarShape;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
