import { type PropType, type ExtractPropTypes } from 'vue';
import type { CalendarType, CalendarDayItem } from './types';
declare const calendarMonthProps: {
    date: {
        type: DateConstructor;
        required: true;
    };
    type: PropType<CalendarType>;
    color: StringConstructor;
    minDate: DateConstructor;
    maxDate: DateConstructor;
    showMark: BooleanConstructor;
    rowHeight: (NumberConstructor | StringConstructor)[];
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
    lazyRender: BooleanConstructor;
    currentDate: PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    showMonthTitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
};
export type CalendarMonthProps = ExtractPropTypes<typeof calendarMonthProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    date: {
        type: DateConstructor;
        required: true;
    };
    type: PropType<CalendarType>;
    color: StringConstructor;
    minDate: DateConstructor;
    maxDate: DateConstructor;
    showMark: BooleanConstructor;
    rowHeight: (NumberConstructor | StringConstructor)[];
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
    lazyRender: BooleanConstructor;
    currentDate: PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    showMonthTitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clickDisabledDate")[], "click" | "clickDisabledDate", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    date: {
        type: DateConstructor;
        required: true;
    };
    type: PropType<CalendarType>;
    color: StringConstructor;
    minDate: DateConstructor;
    maxDate: DateConstructor;
    showMark: BooleanConstructor;
    rowHeight: (NumberConstructor | StringConstructor)[];
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
    lazyRender: BooleanConstructor;
    currentDate: PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    showMonthTitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onClickDisabledDate?: ((...args: any[]) => any) | undefined;
}>, {
    lazyRender: boolean;
    showMark: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showMonthTitle: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
