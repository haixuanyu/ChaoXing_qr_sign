import type { ToastType, ToastOptions, ToastWrapperInstance } from './types';
/**
 * Display a text toast
 */
export declare function showToast(options?: string | ToastOptions): ToastWrapperInstance;
/**
 * Display a loading toast
 */
export declare const showLoadingToast: (options: string | ToastOptions) => ToastWrapperInstance;
/**
 * Display a success toast
 */
export declare const showSuccessToast: (options: string | ToastOptions) => ToastWrapperInstance;
/**
 * Display a fail toast
 */
export declare const showFailToast: (options: string | ToastOptions) => ToastWrapperInstance;
/**
 * Close the currently displayed toast
 */
export declare const closeToast: (all?: boolean) => void;
/**
 * Modify the default configuration that affects all `showToast` calls.
 * Specify the `type` parameter to modify the default configuration of a specific type of toast
 */
export declare function setToastDefaultOptions(options: ToastOptions): void;
export declare function setToastDefaultOptions(type: ToastType, options: ToastOptions): void;
/**
 * Reset the default configuration that affects all `showToast` calls.
 * Specify the `type` parameter to reset the default configuration of a specific type of toast
 */
export declare const resetToastDefaultOptions: (type?: ToastType) => void;
/**
 * Allow multiple toasts to be displayed as the same time
 */
export declare const allowMultipleToast: (value?: boolean) => void;
