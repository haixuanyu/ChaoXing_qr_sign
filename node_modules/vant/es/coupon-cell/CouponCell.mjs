import { defineComponent, createVNode as _createVNode } from "vue";
import { isDef, truthProp, makeArrayProp, makeStringProp, createNamespace } from "../utils/index.mjs";
import { Cell } from "../cell/index.mjs";
const [name, bem, t] = createNamespace("coupon-cell");
const couponCellProps = {
  title: String,
  border: truthProp,
  editable: truthProp,
  coupons: makeArrayProp(),
  currency: makeStringProp("\xA5"),
  chosenCoupon: {
    type: [Number, Array],
    default: -1
  }
};
const getValue = (coupon) => {
  const {
    value,
    denominations
  } = coupon;
  if (isDef(value)) {
    return value;
  }
  if (isDef(denominations)) {
    return denominations;
  }
  return 0;
};
function formatValue({
  coupons,
  chosenCoupon,
  currency
}) {
  let value = 0;
  let isExist = false;
  (Array.isArray(chosenCoupon) ? chosenCoupon : [chosenCoupon]).forEach((i) => {
    const coupon = coupons[+i];
    if (coupon) {
      isExist = true;
      value += getValue(coupon);
    }
  });
  if (isExist) {
    return `-${currency} ${(value / 100).toFixed(2)}`;
  }
  return coupons.length === 0 ? t("noCoupon") : t("count", coupons.length);
}
var stdin_default = defineComponent({
  name,
  props: couponCellProps,
  setup(props) {
    return () => {
      const selected = Array.isArray(props.chosenCoupon) ? props.chosenCoupon.length : props.coupons[+props.chosenCoupon];
      return _createVNode(Cell, {
        "class": bem(),
        "value": formatValue(props),
        "title": props.title || t("title"),
        "border": props.border,
        "isLink": props.editable,
        "valueClass": bem("value", {
          selected
        })
      }, null);
    };
  }
});
export {
  couponCellProps,
  stdin_default as default
};
