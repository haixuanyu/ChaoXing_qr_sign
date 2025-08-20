import { type PropType, type ExtractPropTypes } from 'vue';
import type { TagType, TagSize } from './types';
export declare const tagProps: {
    size: PropType<TagSize>;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: PropType<TagType>;
        default: TagType;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
};
export type TagProps = ExtractPropTypes<typeof tagProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    size: PropType<TagSize>;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: PropType<TagType>;
        default: TagType;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    size: PropType<TagSize>;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: PropType<TagType>;
        default: TagType;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    type: TagType;
    mark: boolean;
    round: boolean;
    show: boolean;
    plain: boolean;
    closeable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
