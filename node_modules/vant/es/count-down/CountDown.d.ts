import { type ExtractPropTypes } from 'vue';
export declare const countDownProps: {
    time: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    format: {
        type: import("vue").PropType<string>;
        default: string;
    };
    autoStart: {
        type: BooleanConstructor;
        default: true;
    };
    millisecond: BooleanConstructor;
};
export type CountDownProps = ExtractPropTypes<typeof countDownProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    time: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    format: {
        type: import("vue").PropType<string>;
        default: string;
    };
    autoStart: {
        type: BooleanConstructor;
        default: true;
    };
    millisecond: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "finish")[], "change" | "finish", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    time: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    format: {
        type: import("vue").PropType<string>;
        default: string;
    };
    autoStart: {
        type: BooleanConstructor;
        default: true;
    };
    millisecond: BooleanConstructor;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onFinish?: ((...args: any[]) => any) | undefined;
}>, {
    time: string | number;
    format: string;
    autoStart: boolean;
    millisecond: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
