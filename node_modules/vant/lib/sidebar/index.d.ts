export declare const Sidebar: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Sidebar;
export { sidebarProps } from './Sidebar';
export type { SidebarProps } from './Sidebar';
export type { SidebarThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanSidebar: typeof Sidebar;
    }
}
