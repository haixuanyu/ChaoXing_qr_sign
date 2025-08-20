import { type PropType } from 'vue';
import type { CalendarDayItem } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    item: {
        type: PropType<CalendarDayItem>;
        required: true;
    };
    color: StringConstructor;
    index: NumberConstructor;
    offset: {
        type: NumberConstructor;
        default: number;
    };
    rowHeight: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clickDisabledDate")[], "click" | "clickDisabledDate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: PropType<CalendarDayItem>;
        required: true;
    };
    color: StringConstructor;
    index: NumberConstructor;
    offset: {
        type: NumberConstructor;
        default: number;
    };
    rowHeight: StringConstructor;
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onClickDisabledDate?: ((...args: any[]) => any) | undefined;
}>, {
    offset: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
