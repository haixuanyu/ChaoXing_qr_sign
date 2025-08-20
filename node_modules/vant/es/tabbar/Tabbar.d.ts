import { type PropType, type InjectionKey, type ExtractPropTypes } from 'vue';
import { type Numeric, type Interceptor } from '../utils';
export declare const tabbarProps: {
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
    beforeChange: PropType<Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: PropType<boolean | null>;
        default: null;
    };
};
export type TabbarProps = ExtractPropTypes<typeof tabbarProps>;
export type TabbarProvide = {
    props: TabbarProps;
    setActive: (active: Numeric, afterChange: () => void) => void;
};
export declare const TABBAR_KEY: InjectionKey<TabbarProvide>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
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
    beforeChange: PropType<Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: PropType<boolean | null>;
        default: null;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").PublicProps, Readonly<ExtractPropTypes<{
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
    beforeChange: PropType<Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: PropType<boolean | null>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
