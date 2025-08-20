export declare const Card: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: StringConstructor;
    num: (NumberConstructor | StringConstructor)[];
    desc: StringConstructor;
    thumb: StringConstructor;
    title: StringConstructor;
    price: (NumberConstructor | StringConstructor)[];
    centered: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    thumbLink: StringConstructor;
    originPrice: (NumberConstructor | StringConstructor)[];
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickThumb"[], "clickThumb", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: StringConstructor;
    num: (NumberConstructor | StringConstructor)[];
    desc: StringConstructor;
    thumb: StringConstructor;
    title: StringConstructor;
    price: (NumberConstructor | StringConstructor)[];
    centered: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    thumbLink: StringConstructor;
    originPrice: (NumberConstructor | StringConstructor)[];
}>> & Readonly<{
    onClickThumb?: ((...args: any[]) => any) | undefined;
}>, {
    lazyLoad: boolean;
    centered: boolean;
    currency: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Card;
export { cardProps } from './Card';
export type { CardProps } from './Card';
export type { CardThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCard: typeof Card;
    }
}
