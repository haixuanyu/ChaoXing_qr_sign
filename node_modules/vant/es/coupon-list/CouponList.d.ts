import { type PropType, type ExtractPropTypes } from 'vue';
import { CouponInfo } from '../coupon';
export declare const couponListProps: {
    code: {
        type: PropType<string>;
        default: string;
    };
    coupons: {
        type: PropType<CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: PropType<string>;
        default: string;
    };
    showCount: {
        type: BooleanConstructor;
        default: true;
    };
    emptyImage: StringConstructor;
    enabledTitle: StringConstructor;
    disabledTitle: StringConstructor;
    disabledCoupons: {
        type: PropType<CouponInfo[]>;
        default: () => never[];
    };
    showExchangeBar: {
        type: BooleanConstructor;
        default: true;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeButtonText: StringConstructor;
    inputPlaceholder: StringConstructor;
    exchangeMinLength: {
        type: NumberConstructor;
        default: number;
    };
    exchangeButtonText: StringConstructor;
    displayedCouponIndex: {
        type: NumberConstructor;
        default: number;
    };
    exchangeButtonLoading: BooleanConstructor;
    exchangeButtonDisabled: BooleanConstructor;
    chosenCoupon: {
        type: PropType<number | number[]>;
        default: number;
    };
};
export type CouponListProps = ExtractPropTypes<typeof couponListProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    code: {
        type: PropType<string>;
        default: string;
    };
    coupons: {
        type: PropType<CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: PropType<string>;
        default: string;
    };
    showCount: {
        type: BooleanConstructor;
        default: true;
    };
    emptyImage: StringConstructor;
    enabledTitle: StringConstructor;
    disabledTitle: StringConstructor;
    disabledCoupons: {
        type: PropType<CouponInfo[]>;
        default: () => never[];
    };
    showExchangeBar: {
        type: BooleanConstructor;
        default: true;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeButtonText: StringConstructor;
    inputPlaceholder: StringConstructor;
    exchangeMinLength: {
        type: NumberConstructor;
        default: number;
    };
    exchangeButtonText: StringConstructor;
    displayedCouponIndex: {
        type: NumberConstructor;
        default: number;
    };
    exchangeButtonLoading: BooleanConstructor;
    exchangeButtonDisabled: BooleanConstructor;
    chosenCoupon: {
        type: PropType<number | number[]>;
        default: number;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "exchange" | "update:code")[], "change" | "exchange" | "update:code", import("vue").PublicProps, Readonly<ExtractPropTypes<{
    code: {
        type: PropType<string>;
        default: string;
    };
    coupons: {
        type: PropType<CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: PropType<string>;
        default: string;
    };
    showCount: {
        type: BooleanConstructor;
        default: true;
    };
    emptyImage: StringConstructor;
    enabledTitle: StringConstructor;
    disabledTitle: StringConstructor;
    disabledCoupons: {
        type: PropType<CouponInfo[]>;
        default: () => never[];
    };
    showExchangeBar: {
        type: BooleanConstructor;
        default: true;
    };
    showCloseButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeButtonText: StringConstructor;
    inputPlaceholder: StringConstructor;
    exchangeMinLength: {
        type: NumberConstructor;
        default: number;
    };
    exchangeButtonText: StringConstructor;
    displayedCouponIndex: {
        type: NumberConstructor;
        default: number;
    };
    exchangeButtonLoading: BooleanConstructor;
    exchangeButtonDisabled: BooleanConstructor;
    chosenCoupon: {
        type: PropType<number | number[]>;
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onExchange?: ((...args: any[]) => any) | undefined;
    "onUpdate:code"?: ((...args: any[]) => any) | undefined;
}>, {
    code: string;
    currency: string;
    coupons: CouponInfo[];
    chosenCoupon: number | number[];
    showCount: boolean;
    disabledCoupons: CouponInfo[];
    showExchangeBar: boolean;
    showCloseButton: boolean;
    exchangeMinLength: number;
    displayedCouponIndex: number;
    exchangeButtonLoading: boolean;
    exchangeButtonDisabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
