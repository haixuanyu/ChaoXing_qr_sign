import { type PropType, type ExtractPropTypes } from 'vue';
import { NoticeBarMode } from './types';
export declare const noticeBarProps: {
    text: StringConstructor;
    mode: PropType<NoticeBarMode>;
    color: StringConstructor;
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    leftIcon: StringConstructor;
    wrapable: BooleanConstructor;
    background: StringConstructor;
    scrollable: {
        type: PropType<boolean | null>;
        default: null;
    };
};
export type NoticeBarProps = ExtractPropTypes<typeof noticeBarProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    text: StringConstructor;
    mode: PropType<NoticeBarMode>;
    color: StringConstructor;
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    leftIcon: StringConstructor;
    wrapable: BooleanConstructor;
    background: StringConstructor;
    scrollable: {
        type: PropType<boolean | null>;
        default: null;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "replay")[], "close" | "replay", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    text: StringConstructor;
    mode: PropType<NoticeBarMode>;
    color: StringConstructor;
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    leftIcon: StringConstructor;
    wrapable: BooleanConstructor;
    background: StringConstructor;
    scrollable: {
        type: PropType<boolean | null>;
        default: null;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    onReplay?: ((...args: any[]) => any) | undefined;
}>, {
    scrollable: boolean | null;
    delay: string | number;
    speed: string | number;
    wrapable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
