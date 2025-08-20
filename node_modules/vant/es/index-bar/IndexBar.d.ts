import { type PropType, type InjectionKey, type TeleportProps, type ExtractPropTypes } from 'vue';
import { type Numeric } from '../utils';
import { IndexBarProvide } from './types';
declare function genAlphabet(): string[];
export declare const indexBarProps: {
    sticky: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<TeleportProps["to"]>;
    highlightColor: StringConstructor;
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: PropType<Numeric[]>;
        default: typeof genAlphabet;
    };
};
export type IndexBarProps = ExtractPropTypes<typeof indexBarProps>;
export declare const INDEX_BAR_KEY: InjectionKey<IndexBarProvide>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    sticky: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<TeleportProps["to"]>;
    highlightColor: StringConstructor;
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: PropType<Numeric[]>;
        default: typeof genAlphabet;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change")[], "select" | "change", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    sticky: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: PropType<TeleportProps["to"]>;
    highlightColor: StringConstructor;
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: PropType<Numeric[]>;
        default: typeof genAlphabet;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}>, {
    sticky: boolean;
    stickyOffsetTop: number;
    indexList: Numeric[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
