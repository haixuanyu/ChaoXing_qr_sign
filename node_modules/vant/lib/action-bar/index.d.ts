export declare const ActionBar: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    placeholder: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{}>, {
    placeholder: boolean;
    safeAreaInsetBottom: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default ActionBar;
export { actionBarProps } from './ActionBar';
export type { ActionBarProps } from './ActionBar';
export type { ActionBarThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanActionBar: typeof ActionBar;
    }
}
