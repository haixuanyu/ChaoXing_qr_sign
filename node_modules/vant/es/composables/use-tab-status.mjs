import { inject, provide, computed } from "vue";
const TAB_STATUS_KEY = Symbol();
const ALL_TAB_STATUS_KEY = Symbol();
const useTabStatus = () => inject(TAB_STATUS_KEY, null);
const useAllTabStatus = () => inject(ALL_TAB_STATUS_KEY, null);
const useProvideTabStatus = (status) => {
  const allTabStatus = useAllTabStatus();
  provide(TAB_STATUS_KEY, status);
  provide(
    ALL_TAB_STATUS_KEY,
    computed(() => {
      return (allTabStatus == null || allTabStatus.value) && status.value;
    })
  );
};
export {
  ALL_TAB_STATUS_KEY,
  TAB_STATUS_KEY,
  useAllTabStatus,
  useProvideTabStatus,
  useTabStatus
};
