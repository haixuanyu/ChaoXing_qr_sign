import { type ComponentInstance } from '../utils';
import type { NotifyMessage, NotifyOptions } from './types';
/**
 * Close the currently displayed Notify
 */
export declare const closeNotify: () => void;
/**
 * Display Notify at the top of the page
 */
export declare function showNotify(options: NotifyMessage | NotifyOptions): ComponentInstance | undefined;
/**
 * Modify the default configuration, affecting all `showNotify` calls
 */
export declare const setNotifyDefaultOptions: (options: NotifyOptions) => NotifyOptions;
/**
 * Reset the default configuration, affecting all `showNotify` calls
 */
export declare const resetNotifyDefaultOptions: () => void;
