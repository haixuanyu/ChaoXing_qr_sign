export declare const Cascader: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    options: {
        type: import("vue").PropType<import("./types").CascaderOption[]>;
        default: () => never[];
    };
    closeable: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: {
        type: BooleanConstructor;
        default: true;
    };
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    showHeader: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: (NumberConstructor | StringConstructor)[];
    fieldNames: import("vue").PropType<import("./types").CascaderFieldNames>;
    placeholder: StringConstructor;
    activeColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "close" | "clickTab" | "finish")[], "update:modelValue" | "change" | "close" | "clickTab" | "finish", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    options: {
        type: import("vue").PropType<import("./types").CascaderOption[]>;
        default: () => never[];
    };
    closeable: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: {
        type: BooleanConstructor;
        default: true;
    };
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    showHeader: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: (NumberConstructor | StringConstructor)[];
    fieldNames: import("vue").PropType<import("./types").CascaderFieldNames>;
    placeholder: StringConstructor;
    activeColor: StringConstructor;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClickTab?: ((...args: any[]) => any) | undefined;
    onFinish?: ((...args: any[]) => any) | undefined;
}>, {
    closeIcon: string;
    closeable: boolean;
    options: import("./types").CascaderOption[];
    swipeable: boolean;
    showHeader: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Cascader;
export { cascaderProps } from './Cascader';
export type { CascaderProps } from './Cascader';
export type { CascaderOption, CascaderThemeVars, CascaderFieldNames, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCascader: typeof Cascader;
    }
}
