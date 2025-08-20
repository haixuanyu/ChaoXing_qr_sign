import { type PropType, type TeleportProps, type ExtractPropTypes } from 'vue';
import { PopupPosition } from '../popup';
import type { CalendarType, CalendarSwitchMode, CalendarDayItem } from './types';
export declare const calendarProps: {
    show: BooleanConstructor;
    type: {
        type: PropType<CalendarType>;
        default: CalendarType;
    };
    switchMode: {
        type: PropType<CalendarSwitchMode>;
        default: CalendarSwitchMode;
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
        type: PropType<PopupPosition>;
        default: PopupPosition;
    };
    teleport: PropType<TeleportProps["to"]>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
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
    defaultDate: PropType<Date | Date[] | null>;
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
};
export type CalendarProps = ExtractPropTypes<typeof calendarProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    show: BooleanConstructor;
    type: {
        type: PropType<CalendarType>;
        default: CalendarType;
    };
    switchMode: {
        type: PropType<CalendarSwitchMode>;
        default: CalendarSwitchMode;
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
        type: PropType<PopupPosition>;
        default: PopupPosition;
    };
    teleport: PropType<TeleportProps["to"]>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
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
    defaultDate: PropType<Date | Date[] | null>;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:show" | "clickOverlay" | "confirm" | "clickDisabledDate" | "clickSubtitle" | "panelChange" | "unselect" | "monthShow" | "overRange")[], "select" | "update:show" | "clickOverlay" | "confirm" | "clickDisabledDate" | "clickSubtitle" | "panelChange" | "unselect" | "monthShow" | "overRange", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    show: BooleanConstructor;
    type: {
        type: PropType<CalendarType>;
        default: CalendarType;
    };
    switchMode: {
        type: PropType<CalendarSwitchMode>;
        default: CalendarSwitchMode;
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
        type: PropType<PopupPosition>;
        default: PopupPosition;
    };
    teleport: PropType<TeleportProps["to"]>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
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
    defaultDate: PropType<Date | Date[] | null>;
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
    type: CalendarType;
    position: PopupPosition;
    round: boolean;
    show: boolean;
    readonly: boolean;
    safeAreaInsetBottom: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    safeAreaInsetTop: boolean;
    switchMode: CalendarSwitchMode;
    poppable: boolean;
    maxRange: string | number;
    showMark: boolean;
    showTitle: boolean;
    showConfirm: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showRangePrompt: boolean;
    firstDayOfWeek: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
