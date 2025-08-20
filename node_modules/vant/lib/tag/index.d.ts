export declare const Tag: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: import("vue").PropType<import("./types").TagSize>;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: import("vue").PropType<import("./types").TagType>;
        default: import("./types").TagType;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: import("vue").PropType<import("./types").TagSize>;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: import("vue").PropType<import("./types").TagType>;
        default: import("./types").TagType;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("./types").TagType;
    mark: boolean;
    round: boolean;
    show: boolean;
    plain: boolean;
    closeable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Tag;
export { tagProps } from './Tag';
export type { TagProps } from './Tag';
export type { TagSize, TagType, TagThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanTag: typeof Tag;
    }
}
