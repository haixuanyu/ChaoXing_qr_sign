import { type PropType, type ExtractPropTypes } from 'vue';
import type { CouponInfo } from '../coupon';
export declare const couponCellProps: {
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
        type: PropType<CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: PropType<string>;
        default: string;
    };
    chosenCoupon: {
        type: PropType<number | number[]>;
        default: number;
    };
};
export type CouponCellProps = ExtractPropTypes<typeof couponCellProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
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
        type: PropType<CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: PropType<string>;
        default: string;
    };
    chosenCoupon: {
        type: PropType<number | number[]>;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
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
        type: PropType<CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: PropType<string>;
        default: string;
    };
    chosenCoupon: {
        type: PropType<number | number[]>;
        default: number;
    };
}>> & Readonly<{}>, {
    border: boolean;
    currency: string;
    editable: boolean;
    coupons: CouponInfo[];
    chosenCoupon: number | number[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
