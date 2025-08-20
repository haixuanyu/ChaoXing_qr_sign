import { type ExtractPropTypes, type PropType } from 'vue';
export declare const highlightProps: {
    autoEscape: {
        type: BooleanConstructor;
        default: true;
    };
    caseSensitive: BooleanConstructor;
    highlightClass: StringConstructor;
    highlightTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    keywords: {
        type: PropType<string | string[]>;
        required: true;
    };
    sourceString: {
        type: PropType<string>;
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    unhighlightClass: StringConstructor;
    unhighlightTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
};
export type HighlightProps = ExtractPropTypes<typeof highlightProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    autoEscape: {
        type: BooleanConstructor;
        default: true;
    };
    caseSensitive: BooleanConstructor;
    highlightClass: StringConstructor;
    highlightTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    keywords: {
        type: PropType<string | string[]>;
        required: true;
    };
    sourceString: {
        type: PropType<string>;
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    unhighlightClass: StringConstructor;
    unhighlightTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    autoEscape: {
        type: BooleanConstructor;
        default: true;
    };
    caseSensitive: BooleanConstructor;
    highlightClass: StringConstructor;
    highlightTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    keywords: {
        type: PropType<string | string[]>;
        required: true;
    };
    sourceString: {
        type: PropType<string>;
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    unhighlightClass: StringConstructor;
    unhighlightTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
}>> & Readonly<{}>, {
    tag: keyof HTMLElementTagNameMap;
    autoEscape: boolean;
    caseSensitive: boolean;
    highlightTag: keyof HTMLElementTagNameMap;
    sourceString: string;
    unhighlightTag: keyof HTMLElementTagNameMap;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
