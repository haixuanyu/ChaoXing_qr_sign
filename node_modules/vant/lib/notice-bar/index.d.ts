import { NoticeBarProps } from './NoticeBar';
export declare const NoticeBar: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    mode: import("vue").PropType<import("./types").NoticeBarMode>;
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
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "replay")[], "close" | "replay", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    mode: import("vue").PropType<import("./types").NoticeBarMode>;
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
        type: import("vue").PropType<boolean | null>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default NoticeBar;
export { noticeBarProps } from './NoticeBar';
export type { NoticeBarProps };
export type { NoticeBarMode, NoticeBarInstance, NoticeBarThemeVars, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanNoticeBar: typeof NoticeBar;
    }
}
