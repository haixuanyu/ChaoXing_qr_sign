import { getCurrentInstance } from "vue";
const useScopeId = () => {
  var _a;
  const { scopeId } = ((_a = getCurrentInstance()) == null ? void 0 : _a.vnode) || {};
  return scopeId ? { [scopeId]: "" } : null;
};
export {
  useScopeId
};
