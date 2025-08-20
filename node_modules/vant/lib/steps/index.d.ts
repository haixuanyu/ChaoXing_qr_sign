export declare const Steps: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("./Steps").StepsDirection>;
        default: import("./Steps").StepsDirection;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickStep"[], "clickStep", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("./Steps").StepsDirection>;
        default: import("./Steps").StepsDirection;
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
    direction: import("./Steps").StepsDirection;
    activeIcon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Steps;
export { stepsProps } from './Steps';
export type { StepsProps, StepsDirection } from './Steps';
export type { StepsThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanSteps: typeof Steps;
    }
}
