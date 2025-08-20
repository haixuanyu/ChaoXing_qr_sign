var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  ALL_TAB_STATUS_KEY: () => ALL_TAB_STATUS_KEY,
  TAB_STATUS_KEY: () => TAB_STATUS_KEY,
  useAllTabStatus: () => useAllTabStatus,
  useProvideTabStatus: () => useProvideTabStatus,
  useTabStatus: () => useTabStatus
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
const TAB_STATUS_KEY = Symbol();
const ALL_TAB_STATUS_KEY = Symbol();
const useTabStatus = () => (0, import_vue.inject)(TAB_STATUS_KEY, null);
const useAllTabStatus = () => (0, import_vue.inject)(ALL_TAB_STATUS_KEY, null);
const useProvideTabStatus = (status) => {
  const allTabStatus = useAllTabStatus();
  (0, import_vue.provide)(TAB_STATUS_KEY, status);
  (0, import_vue.provide)(
    ALL_TAB_STATUS_KEY,
    (0, import_vue.computed)(() => {
      return (allTabStatus == null || allTabStatus.value) && status.value;
    })
  );
};
