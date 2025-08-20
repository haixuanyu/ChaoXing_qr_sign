import { type PropType } from 'vue';
import { type Numeric } from '../utils';
export type CouponInfo = {
    id: Numeric;
    name: string;
    endAt: number;
    value: number;
    startAt: number;
    reason?: string;
    discount?: number;
    unitDesc?: string;
    condition?: string;
    valueDesc?: string;
    description: string;
    denominations?: number;
    originCondition?: number;
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    chosen: BooleanConstructor;
    coupon: {
        type: PropType<CouponInfo>;
        required: true;
    };
    disabled: BooleanConstructor;
    currency: {
        type: PropType<string>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    chosen: BooleanConstructor;
    coupon: {
        type: PropType<CouponInfo>;
        required: true;
    };
    disabled: BooleanConstructor;
    currency: {
        type: PropType<string>;
        default: string;
    };
}>> & Readonly<{}>, {
    disabled: boolean;
    currency: string;
    chosen: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
