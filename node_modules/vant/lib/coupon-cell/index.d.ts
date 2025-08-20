export declare const CouponCell: import("../utils").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    editable: {
        type: BooleanConstructor;
        default: true;
    };
    coupons: {
        type: import("vue").PropType<import("..").CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    chosenCoupon: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    editable: {
        type: BooleanConstructor;
        default: true;
    };
    coupons: {
        type: import("vue").PropType<import("..").CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    chosenCoupon: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
}>> & Readonly<{}>, {
    border: boolean;
    currency: string;
    editable: boolean;
    coupons: import("..").CouponInfo[];
    chosenCoupon: number | number[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default CouponCell;
export { couponCellProps } from './CouponCell';
export type { CouponCellProps } from './CouponCell';
export type { CouponCellThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCouponCell: typeof CouponCell;
    }
}
