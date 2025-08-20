import { type PropType } from 'vue';
import type { AddressEditSearchItem } from './types';
import type { FieldRule } from '../field/types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    rows: (NumberConstructor | StringConstructor)[];
    value: StringConstructor;
    rules: PropType<FieldRule[]>;
    focused: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    searchResult: PropType<AddressEditSearchItem[]>;
    showSearchResult: BooleanConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "focus" | "blur" | "selectSearch")[], "input" | "focus" | "blur" | "selectSearch", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    rows: (NumberConstructor | StringConstructor)[];
    value: StringConstructor;
    rules: PropType<FieldRule[]>;
    focused: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    searchResult: PropType<AddressEditSearchItem[]>;
    showSearchResult: BooleanConstructor;
}>> & Readonly<{
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onSelectSearch?: ((...args: any[]) => any) | undefined;
}>, {
    show: boolean;
    focused: boolean;
    showSearchResult: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
