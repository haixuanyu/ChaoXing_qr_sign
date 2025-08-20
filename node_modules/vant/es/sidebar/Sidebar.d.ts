import { type InjectionKey, type ExtractPropTypes } from 'vue';
export type SidebarProvide = {
    getActive: () => number;
    setActive: (value: number) => void;
};
export declare const SIDEBAR_KEY: InjectionKey<SidebarProvide>;
export declare const sidebarProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export type SidebarProps = ExtractPropTypes<typeof sidebarProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
