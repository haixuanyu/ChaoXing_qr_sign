export declare const Icon: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    dot: BooleanConstructor;
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    name: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
    classPrefix: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    dot: BooleanConstructor;
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    name: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    badgeProps: import("vue").PropType<Partial<import("..").BadgeProps>>;
    classPrefix: StringConstructor;
}>> & Readonly<{}>, {
    dot: boolean;
    tag: keyof HTMLElementTagNameMap;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Icon;
export { iconProps } from './Icon';
export type { IconProps } from './Icon';
declare module 'vue' {
    interface GlobalComponents {
        VanIcon: typeof Icon;
    }
}
