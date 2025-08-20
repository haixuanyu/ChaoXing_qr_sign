import type { DialogAction, DialogOptions } from './types';
/**
 * Display a message prompt dialog with a default confirm button
 */
export declare function showDialog(options: DialogOptions): Promise<DialogAction | undefined>;
/**
 * Modify the default configuration that affects all `showDialog` calls
 */
export declare const setDialogDefaultOptions: (options: DialogOptions) => void;
/**
 * Reset the default configuration that affects all `showDialog` calls
 */
export declare const resetDialogDefaultOptions: () => void;
/**
 * Display a message confirmation dialog with default confirm and cancel buttons
 */
export declare const showConfirmDialog: (options: DialogOptions) => Promise<DialogAction | undefined>;
/**
 * Close the currently displayed dialog
 */
export declare const closeDialog: () => void;
