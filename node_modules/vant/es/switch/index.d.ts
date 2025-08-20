export declare const Switch: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    modelValue: import("vue").PropType<unknown>;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    activeValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    inactiveValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    modelValue: import("vue").PropType<unknown>;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    activeValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    inactiveValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    loading: boolean;
    activeValue: unknown;
    inactiveValue: unknown;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Switch;
export { switchProps } from './Switch';
export type { SwitchProps } from './Switch';
export type { SwitchThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanSwitch: typeof Switch;
    }
}
