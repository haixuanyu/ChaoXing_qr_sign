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
  extend: () => extend,
  flat: () => flat,
  get: () => get,
  inBrowser: () => inBrowser,
  isDate: () => isDate,
  isDef: () => isDef,
  isFunction: () => isFunction,
  isIOS: () => isIOS,
  isMobile: () => isMobile,
  isNumeric: () => isNumeric,
  isObject: () => isObject,
  isPromise: () => isPromise,
  isSameValue: () => isSameValue,
  noop: () => noop,
  pick: () => pick,
  toArray: () => toArray
});
module.exports = __toCommonJS(stdin_exports);
function noop() {
}
const extend = Object.assign;
const inBrowser = typeof window !== "undefined";
const isObject = (val) => val !== null && typeof val === "object";
const isDef = (val) => val !== void 0 && val !== null;
const isFunction = (val) => typeof val === "function";
const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch);
const isDate = (val) => Object.prototype.toString.call(val) === "[object Date]" && !Number.isNaN(val.getTime());
function isMobile(value) {
  value = value.replace(/[^-|\d]/g, "");
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
const isNumeric = (val) => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
const isIOS = () => inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
function get(object, path) {
  const keys = path.split(".");
  let result = object;
  keys.forEach((key) => {
    var _a;
    result = isObject(result) ? (_a = result[key]) != null ? _a : "" : "";
  });
  return result;
}
function pick(obj, keys, ignoreUndefined) {
  return keys.reduce(
    (ret, key) => {
      if (!ignoreUndefined || obj[key] !== void 0) {
        ret[key] = obj[key];
      }
      return ret;
    },
    {}
  );
}
const isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);
const toArray = (item) => Array.isArray(item) ? item : [item];
const flat = (arr) => arr.reduce((acc, val) => acc.concat(val), []);
