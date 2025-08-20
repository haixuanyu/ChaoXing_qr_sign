export declare const Highlight: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    autoEscape: {
        type: BooleanConstructor;
        default: true;
    };
    caseSensitive: BooleanConstructor;
    highlightClass: StringConstructor;
    highlightTag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    keywords: {
        type: import("vue").PropType<string | string[]>;
        required: true;
    };
    sourceString: {
        type: import("vue").PropType<string>;
        default: string;
    };
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    unhighlightClass: StringConstructor;
    unhighlightTag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    autoEscape: {
        type: BooleanConstructor;
        default: true;
    };
    caseSensitive: BooleanConstructor;
    highlightClass: StringConstructor;
    highlightTag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    keywords: {
        type: import("vue").PropType<string | string[]>;
        required: true;
    };
    sourceString: {
        type: import("vue").PropType<string>;
        default: string;
    };
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    unhighlightClass: StringConstructor;
    unhighlightTag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
}>> & Readonly<{}>, {
    tag: keyof HTMLElementTagNameMap;
    autoEscape: boolean;
    caseSensitive: boolean;
    highlightTag: keyof HTMLElementTagNameMap;
    sourceString: string;
    unhighlightTag: keyof HTMLElementTagNameMap;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Highlight;
export { highlightProps } from './Highlight';
export type { HighlightProps } from './Highlight';
export type { HighlightThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        vanHighlight: typeof Highlight;
    }
}
