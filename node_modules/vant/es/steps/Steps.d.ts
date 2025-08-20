import { type ExtractPropTypes, type InjectionKey } from 'vue';
export type StepsDirection = 'horizontal' | 'vertical';
export declare const stepsProps: {
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<StepsDirection>;
        default: StepsDirection;
    };
    activeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    finishIcon: StringConstructor;
    activeColor: StringConstructor;
    inactiveIcon: StringConstructor;
    inactiveColor: StringConstructor;
};
export type StepsProps = ExtractPropTypes<typeof stepsProps>;
export type StepsProvide = {
    props: StepsProps;
    onClickStep: (index: number) => void;
};
export declare const STEPS_KEY: InjectionKey<StepsProvide>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<StepsDirection>;
        default: StepsDirection;
    };
    activeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    finishIcon: StringConstructor;
    activeColor: StringConstructor;
    inactiveIcon: StringConstructor;
    inactiveColor: StringConstructor;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickStep"[], "clickStep", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<StepsDirection>;
        default: StepsDirection;
    };
    activeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    iconPrefix: StringConstructor;
    finishIcon: StringConstructor;
    activeColor: StringConstructor;
    inactiveIcon: StringConstructor;
    inactiveColor: StringConstructor;
}>> & Readonly<{
    onClickStep?: ((...args: any[]) => any) | undefined;
}>, {
    active: string | number;
    direction: StepsDirection;
    activeIcon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
