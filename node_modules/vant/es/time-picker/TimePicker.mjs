import { computed, defineComponent, ref, watch, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { formatValueRange, genOptions, pickerInheritKeys, sharedProps } from "../date-picker/utils.mjs";
import { pick, extend, isSameValue, makeNumericProp, createNamespace } from "../utils/index.mjs";
import { useExpose } from "../composables/use-expose.mjs";
import { Picker } from "../picker/index.mjs";
const [name] = createNamespace("time-picker");
const validateTime = (val) => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(val);
const fullColumns = ["hour", "minute", "second"];
const timePickerProps = extend({}, sharedProps, {
  minHour: makeNumericProp(0),
  maxHour: makeNumericProp(23),
  minMinute: makeNumericProp(0),
  maxMinute: makeNumericProp(59),
  minSecond: makeNumericProp(0),
  maxSecond: makeNumericProp(59),
  minTime: {
    type: String,
    validator: validateTime
  },
  maxTime: {
    type: String,
    validator: validateTime
  },
  columnsType: {
    type: Array,
    default: () => ["hour", "minute"]
  }
});
var stdin_default = defineComponent({
  name,
  props: timePickerProps,
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const currentValues = ref(props.modelValue);
    const pickerRef = ref();
    const getValidTime = (time) => {
      const timeLimitArr = time.split(":");
      return fullColumns.map((col, i) => props.columnsType.includes(col) ? timeLimitArr[i] : "00");
    };
    const confirm = () => {
      var _a;
      return (_a = pickerRef.value) == null ? void 0 : _a.confirm();
    };
    const getSelectedTime = () => currentValues.value;
    const columns = computed(() => {
      let {
        minHour,
        maxHour,
        minMinute,
        maxMinute,
        minSecond,
        maxSecond
      } = props;
      if (props.minTime || props.maxTime) {
        const fullTime = {
          hour: 0,
          minute: 0,
          second: 0
        };
        props.columnsType.forEach((col, i) => {
          var _a;
          fullTime[col] = (_a = currentValues.value[i]) != null ? _a : 0;
        });
        const {
          hour,
          minute
        } = fullTime;
        if (props.minTime) {
          const [minH, minM, minS] = getValidTime(props.minTime);
          minHour = minH;
          minMinute = +hour <= +minHour ? minM : "00";
          minSecond = +hour <= +minHour && +minute <= +minMinute ? minS : "00";
        }
        if (props.maxTime) {
          const [maxH, maxM, maxS] = getValidTime(props.maxTime);
          maxHour = maxH;
          maxMinute = +hour >= +maxHour ? maxM : "59";
          maxSecond = +hour >= +maxHour && +minute >= +maxMinute ? maxS : "59";
        }
      }
      return props.columnsType.map((type) => {
        const {
          filter,
          formatter
        } = props;
        switch (type) {
          case "hour":
            return genOptions(+minHour, +maxHour, type, formatter, filter, currentValues.value);
          case "minute":
            return genOptions(+minMinute, +maxMinute, type, formatter, filter, currentValues.value);
          case "second":
            return genOptions(+minSecond, +maxSecond, type, formatter, filter, currentValues.value);
          default:
            if (process.env.NODE_ENV !== "production") {
              throw new Error(`[Vant] DatePicker: unsupported columns type: ${type}`);
            }
            return [];
        }
      });
    });
    watch(currentValues, (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        emit("update:modelValue", newValues);
      }
    });
    watch(() => props.modelValue, (newValues) => {
      newValues = formatValueRange(newValues, columns.value);
      if (!isSameValue(newValues, currentValues.value)) {
        currentValues.value = newValues;
      }
    }, {
      immediate: true
    });
    const onChange = (...args) => emit("change", ...args);
    const onCancel = (...args) => emit("cancel", ...args);
    const onConfirm = (...args) => emit("confirm", ...args);
    useExpose({
      confirm,
      getSelectedTime
    });
    return () => _createVNode(Picker, _mergeProps({
      "ref": pickerRef,
      "modelValue": currentValues.value,
      "onUpdate:modelValue": ($event) => currentValues.value = $event,
      "columns": columns.value,
      "onChange": onChange,
      "onCancel": onCancel,
      "onConfirm": onConfirm
    }, pick(props, pickerInheritKeys)), slots);
  }
});
export {
  stdin_default as default,
  timePickerProps
};
