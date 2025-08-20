import { type ExtractPropTypes } from 'vue';
export type DividerContentPosition = 'left' | 'center' | 'right';
export declare const dividerProps: {
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    vertical: BooleanConstructor;
    contentPosition: {
        type: import("vue").PropType<DividerContentPosition>;
        default: DividerContentPosition;
    };
};
export type DividerProps = ExtractPropTypes<typeof dividerProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    vertical: BooleanConstructor;
    contentPosition: {
        type: import("vue").PropType<DividerContentPosition>;
        default: DividerContentPosition;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    vertical: BooleanConstructor;
    contentPosition: {
        type: import("vue").PropType<DividerContentPosition>;
        default: DividerContentPosition;
    };
}>> & Readonly<{}>, {
    dashed: boolean;
    vertical: boolean;
    hairline: boolean;
    contentPosition: DividerContentPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
