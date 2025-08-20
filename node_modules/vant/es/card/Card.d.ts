import { type ExtractPropTypes } from 'vue';
export declare const cardProps: {
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
};
export type CardProps = ExtractPropTypes<typeof cardProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickThumb"[], "clickThumb", import("vue").PublicProps, Readonly<ExtractPropTypes<{
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
