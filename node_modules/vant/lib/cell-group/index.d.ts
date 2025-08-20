export declare const CellGroup: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    inset: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    inset: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{}>, {
    inset: boolean;
    border: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CellGroup;
export { cellGroupProps } from './CellGroup';
export type { CellGroupProps } from './CellGroup';
export type { CellGroupThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCellGroup: typeof CellGroup;
    }
}
