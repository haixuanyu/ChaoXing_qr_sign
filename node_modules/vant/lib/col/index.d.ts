export declare const Col: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offset: (NumberConstructor | StringConstructor)[];
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    offset: (NumberConstructor | StringConstructor)[];
}>> & Readonly<{}>, {
    span: string | number;
    tag: keyof HTMLElementTagNameMap;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Col;
export { colProps } from './Col';
export type { ColProps } from './Col';
declare module 'vue' {
    interface GlobalComponents {
        VanCol: typeof Col;
    }
}
