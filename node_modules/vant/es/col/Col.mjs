import { computed, defineComponent, createVNode as _createVNode } from "vue";
import { numericProp, createNamespace, makeNumericProp, makeStringProp, extend } from "../utils/index.mjs";
import { useParent } from "@vant/use";
import { ROW_KEY } from "../row/Row.mjs";
const [name, bem] = createNamespace("col");
const colProps = {
  tag: makeStringProp("div"),
  span: makeNumericProp(0),
  offset: numericProp
};
var stdin_default = defineComponent({
  name,
  props: colProps,
  setup(props, {
    slots
  }) {
    const {
      parent,
      index
    } = useParent(ROW_KEY);
    const style = computed(() => {
      if (!parent) {
        return;
      }
      const {
        spaces,
        verticalSpaces
      } = parent;
      let styles = {};
      if (spaces && spaces.value && spaces.value[index.value]) {
        const {
          left,
          right
        } = spaces.value[index.value];
        styles = {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null
        };
      }
      const {
        bottom
      } = verticalSpaces.value[index.value] || {};
      return extend(styles, {
        marginBottom: bottom ? `${bottom}px` : null
      });
    });
    return () => {
      const {
        tag,
        span,
        offset
      } = props;
      return _createVNode(tag, {
        "style": style.value,
        "class": bem({
          [span]: span,
          [`offset-${offset}`]: offset
        })
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    };
  }
});
export {
  colProps,
  stdin_default as default
};
