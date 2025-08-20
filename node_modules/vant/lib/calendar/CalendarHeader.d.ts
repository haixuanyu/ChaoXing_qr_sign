import type { CalendarSwitchMode } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    date: DateConstructor;
    minDate: DateConstructor;
    maxDate: DateConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    showTitle: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
    switchMode: {
        type: import("vue").PropType<CalendarSwitchMode>;
        default: CalendarSwitchMode;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clickSubtitle" | "panelChange")[], "clickSubtitle" | "panelChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    date: DateConstructor;
    minDate: DateConstructor;
    maxDate: DateConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    showTitle: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
    switchMode: {
        type: import("vue").PropType<CalendarSwitchMode>;
        default: CalendarSwitchMode;
    };
}>> & Readonly<{
    onClickSubtitle?: ((...args: any[]) => any) | undefined;
    onPanelChange?: ((...args: any[]) => any) | undefined;
}>, {
    switchMode: CalendarSwitchMode;
    showTitle: boolean;
    showSubtitle: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
