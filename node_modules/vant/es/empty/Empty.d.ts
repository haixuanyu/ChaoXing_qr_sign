import { type PropType, type ExtractPropTypes } from 'vue';
import { Numeric } from '../utils';
export declare const emptyProps: {
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: PropType<Numeric | [Numeric, Numeric]>;
    description: StringConstructor;
};
export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: PropType<Numeric | [Numeric, Numeric]>;
    description: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: PropType<Numeric | [Numeric, Numeric]>;
    description: StringConstructor;
}>> & Readonly<{}>, {
    image: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
