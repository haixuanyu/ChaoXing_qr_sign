import type { ComponentPublicInstance } from 'vue';
export declare function noop(): void;
export declare const extend: {
    <T extends {}, U>(target: T, source: U): T & U;
    <T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;
    <T extends {}, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    (target: object, ...sources: any[]): any;
};
export declare const inBrowser: boolean;
export type Numeric = number | string;
export type ComponentInstance = ComponentPublicInstance<{}, any>;
export declare const isObject: (val: unknown) => val is Record<any, any>;
export declare const isDef: <T>(val: T) => val is NonNullable<T>;
export declare const isFunction: (val: unknown) => val is Function;
export declare const isPromise: <T = any>(val: unknown) => val is Promise<T>;
export declare const isDate: (val: unknown) => val is Date;
export declare function isMobile(value: string): boolean;
export declare const isNumeric: (val: Numeric) => val is string;
export declare const isIOS: () => boolean;
export declare function get(object: any, path: string): any;
export type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
export type RequiredParams<T> = T extends (...args: infer P) => infer R ? (...args: {
    [K in keyof P]-?: NonNullable<P[K]>;
}) => R : never;
export declare function pick<T, U extends keyof T>(obj: T, keys: ReadonlyArray<U>, ignoreUndefined?: boolean): Writeable<Pick<T, U>>;
export declare const isSameValue: (newValue: unknown, oldValue: unknown) => boolean;
export declare const toArray: <T>(item: T | T[]) => T[];
export declare const flat: <T>(arr: Array<T | T[]>) => T[];
