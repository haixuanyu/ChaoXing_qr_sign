export declare const Tabbar: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    route: BooleanConstructor;
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    placeholder: BooleanConstructor;
    activeColor: StringConstructor;
    beforeChange: import("vue").PropType<import("../utils").Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    route: BooleanConstructor;
    fixed: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    placeholder: BooleanConstructor;
    activeColor: StringConstructor;
    beforeChange: import("vue").PropType<import("../utils").Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    fixed: boolean;
    border: boolean;
    modelValue: string | number;
    placeholder: boolean;
    safeAreaInsetBottom: boolean | null;
    route: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Tabbar;
export { tabbarProps } from './Tabbar';
export type { TabbarProps } from './Tabbar';
export type { TabbarThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanTabbar: typeof Tabbar;
    }
}
