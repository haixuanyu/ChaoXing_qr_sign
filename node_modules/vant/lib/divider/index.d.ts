export declare const Divider: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    vertical: BooleanConstructor;
    contentPosition: {
        type: import("vue").PropType<import("./Divider").DividerContentPosition>;
        default: import("./Divider").DividerContentPosition;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    vertical: BooleanConstructor;
    contentPosition: {
        type: import("vue").PropType<import("./Divider").DividerContentPosition>;
        default: import("./Divider").DividerContentPosition;
    };
}>> & Readonly<{}>, {
    dashed: boolean;
    vertical: boolean;
    hairline: boolean;
    contentPosition: import("./Divider").DividerContentPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Divider;
export { dividerProps } from './Divider';
export type { DividerProps, DividerContentPosition } from './Divider';
export type { DividerThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanDivider: typeof Divider;
    }
}
