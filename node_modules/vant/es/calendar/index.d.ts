export declare const Calendar: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    type: {
        type: import("vue").PropType<import("./types").CalendarType>;
        default: import("./types").CalendarType;
    };
    switchMode: {
        type: import("vue").PropType<import("./types").CalendarSwitchMode>;
        default: import("./types").CalendarSwitchMode;
    };
    title: StringConstructor;
    color: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    readonly: BooleanConstructor;
    poppable: {
        type: BooleanConstructor;
        default: true;
    };
    maxRange: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    position: {
        type: import("vue").PropType<import("..").PopupPosition>;
        default: import("..").PopupPosition;
    };
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: import("vue").PropType<(item: import("./types").CalendarDayItem) => import("./types").CalendarDayItem>;
    rowHeight: (NumberConstructor | StringConstructor)[];
    confirmText: StringConstructor;
    rangePrompt: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showConfirm: {
        type: BooleanConstructor;
        default: true;
    };
    defaultDate: import("vue").PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showRangePrompt: {
        type: BooleanConstructor;
        default: true;
    };
    confirmDisabledText: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetTop: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    minDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:show" | "clickOverlay" | "confirm" | "clickDisabledDate" | "clickSubtitle" | "panelChange" | "unselect" | "monthShow" | "overRange")[], "select" | "update:show" | "clickOverlay" | "confirm" | "clickDisabledDate" | "clickSubtitle" | "panelChange" | "unselect" | "monthShow" | "overRange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    type: {
        type: import("vue").PropType<import("./types").CalendarType>;
        default: import("./types").CalendarType;
    };
    switchMode: {
        type: import("vue").PropType<import("./types").CalendarSwitchMode>;
        default: import("./types").CalendarSwitchMode;
    };
    title: StringConstructor;
    color: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    readonly: BooleanConstructor;
    poppable: {
        type: BooleanConstructor;
        default: true;
    };
    maxRange: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    position: {
        type: import("vue").PropType<import("..").PopupPosition>;
        default: import("..").PopupPosition;
    };
    teleport: import("vue").PropType<import("vue").TeleportProps["to"]>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: import("vue").PropType<(item: import("./types").CalendarDayItem) => import("./types").CalendarDayItem>;
    rowHeight: (NumberConstructor | StringConstructor)[];
    confirmText: StringConstructor;
    rangePrompt: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showConfirm: {
        type: BooleanConstructor;
        default: true;
    };
    defaultDate: import("vue").PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showRangePrompt: {
        type: BooleanConstructor;
        default: true;
    };
    confirmDisabledText: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetTop: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    minDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onClickOverlay?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    onClickDisabledDate?: ((...args: any[]) => any) | undefined;
    onClickSubtitle?: ((...args: any[]) => any) | undefined;
    onPanelChange?: ((...args: any[]) => any) | undefined;
    onUnselect?: ((...args: any[]) => any) | undefined;
    onMonthShow?: ((...args: any[]) => any) | undefined;
    onOverRange?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("./types").CalendarType;
    position: import("..").PopupPosition;
    round: boolean;
    show: boolean;
    readonly: boolean;
    safeAreaInsetBottom: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    safeAreaInsetTop: boolean;
    switchMode: import("./types").CalendarSwitchMode;
    poppable: boolean;
    maxRange: string | number;
    showMark: boolean;
    showTitle: boolean;
    showConfirm: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showRangePrompt: boolean;
    firstDayOfWeek: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Calendar;
export { calendarProps } from './Calendar';
export type { CalendarProps } from './Calendar';
export type { CalendarType, CalendarDayItem, CalendarDayType, CalendarInstance, CalendarThemeVars, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCalendar: typeof Calendar;
    }
}
