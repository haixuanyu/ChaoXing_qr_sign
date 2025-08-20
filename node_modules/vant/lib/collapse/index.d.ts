export declare const Collapse: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: true;
    };
    accordion: BooleanConstructor;
    modelValue: {
        type: import("vue").PropType<import("../utils").Numeric | import("../utils").Numeric[]>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: true;
    };
    accordion: BooleanConstructor;
    modelValue: {
        type: import("vue").PropType<import("../utils").Numeric | import("../utils").Numeric[]>;
        default: string;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    border: boolean;
    modelValue: import("../utils").Numeric | import("../utils").Numeric[];
    accordion: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Collapse;
export { collapseProps } from './Collapse';
export type { CollapseProps, CollapseInstance, CollapseToggleAllOptions, } from './Collapse';
declare module 'vue' {
    interface GlobalComponents {
        VanCollapse: typeof Collapse;
    }
}
