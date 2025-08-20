export declare const Badge: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    dot: BooleanConstructor;
    max: (NumberConstructor | StringConstructor)[];
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    color: StringConstructor;
    offset: import("vue").PropType<[import("../utils").Numeric, import("../utils").Numeric]>;
    content: (NumberConstructor | StringConstructor)[];
    showZero: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: import("vue").PropType<import("./Badge").BadgePosition>;
        default: import("./Badge").BadgePosition;
    };
}>, () => import("vue/jsx-runtime").JSX.Element | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    dot: BooleanConstructor;
    max: (NumberConstructor | StringConstructor)[];
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    color: StringConstructor;
    offset: import("vue").PropType<[import("../utils").Numeric, import("../utils").Numeric]>;
    content: (NumberConstructor | StringConstructor)[];
    showZero: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: import("vue").PropType<import("./Badge").BadgePosition>;
        default: import("./Badge").BadgePosition;
    };
}>> & Readonly<{}>, {
    dot: boolean;
    tag: keyof HTMLElementTagNameMap;
    showZero: boolean;
    position: import("./Badge").BadgePosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Badge;
export { badgeProps } from './Badge';
export type { BadgeProps, BadgePosition } from './Badge';
export type { BadgeThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanBadge: typeof Badge;
    }
}
