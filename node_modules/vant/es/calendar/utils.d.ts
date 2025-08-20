declare const name: string, bem: (el?: import("../utils").Mods, mods?: import("../utils").Mods) => import("../utils").Mods, t: (path: string, ...args: unknown[]) => any;
export { name, bem, t };
export declare const formatMonthTitle: (date: Date) => any;
export declare function compareMonth(date1: Date, date2: Date): 0 | 1 | -1;
export declare function compareDay(day1: Date, day2: Date): 0 | 1 | -1;
export declare const cloneDate: (date: Date) => Date;
export declare const cloneDates: (dates: Date | Date[]) => Date | Date[];
export declare function getDayByOffset(date: Date, offset: number): Date;
export declare function getMonthByOffset(date: Date, offset: number): Date;
export declare function getYearByOffset(date: Date, offset: number): Date;
export declare const getPrevDay: (date: Date) => Date;
export declare const getNextDay: (date: Date) => Date;
export declare const getPrevMonth: (date: Date) => Date;
export declare const getNextMonth: (date: Date) => Date;
export declare const getPrevYear: (date: Date) => Date;
export declare const getNextYear: (date: Date) => Date;
export declare const getToday: () => Date;
export declare function calcDateNum(date: [Date, Date]): number;
/**
 * Checks if the given date is in the last row of its month in a calendar view
 * @param date The date to check
 * @param offset The offset of the first day of the month
 * @returns boolean indicating whether the date is in the last row
 */
export declare function isLastRowInMonth(date: Date, offset?: number): boolean;
