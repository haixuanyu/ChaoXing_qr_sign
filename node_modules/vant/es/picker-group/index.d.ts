import { PickerGroupProps } from './PickerGroup';
export declare const PickerGroup: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tabs: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    activeTab: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    nextStepText: StringConstructor;
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "confirm" | "update:activeTab")[], "cancel" | "confirm" | "update:activeTab", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tabs: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    activeTab: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    nextStepText: StringConstructor;
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
}>> & Readonly<{
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    "onUpdate:activeTab"?: ((...args: any[]) => any) | undefined;
}>, {
    showToolbar: boolean;
    tabs: string[];
    activeTab: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default PickerGroup;
export { pickerGroupProps } from './PickerGroup';
export type { PickerGroupProps };
export type { PickerGroupThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanPickerGroup: typeof PickerGroup;
    }
}
