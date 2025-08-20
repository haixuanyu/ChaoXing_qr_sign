import { computed, defineComponent, createVNode as _createVNode } from "vue";
import { truthProp, makeStringProp, createNamespace } from "../utils/index.mjs";
import { useChildren } from "@vant/use";
const [name, bem] = createNamespace("row");
const ROW_KEY = Symbol(name);
const rowProps = {
  tag: makeStringProp("div"),
  wrap: truthProp,
  align: String,
  gutter: {
    type: [String, Number, Array],
    default: 0
  },
  justify: String
};
var stdin_default = defineComponent({
  name,
  props: rowProps,
  setup(props, {
    slots
  }) {
    const {
      children,
      linkChildren
    } = useChildren(ROW_KEY);
    const groups = computed(() => {
      const groups2 = [[]];
      let totalSpan = 0;
      children.forEach((child, index) => {
        totalSpan += Number(child.span);
        if (totalSpan > 24) {
          groups2.push([index]);
          totalSpan -= 24;
        } else {
          groups2[groups2.length - 1].push(index);
        }
      });
      return groups2;
    });
    const spaces = computed(() => {
      let gutter = 0;
      if (Array.isArray(props.gutter)) {
        gutter = Number(props.gutter[0]) || 0;
      } else {
        gutter = Number(props.gutter);
      }
      const spaces2 = [];
      if (!gutter) {
        return spaces2;
      }
      groups.value.forEach((group) => {
        const averagePadding = gutter * (group.length - 1) / group.length;
        group.forEach((item, index) => {
          if (index === 0) {
            spaces2.push({
              right: averagePadding
            });
          } else {
            const left = gutter - spaces2[item - 1].right;
            const right = averagePadding - left;
            spaces2.push({
              left,
              right
            });
          }
        });
      });
      return spaces2;
    });
    const verticalSpaces = computed(() => {
      const {
        gutter
      } = props;
      const spaces2 = [];
      if (Array.isArray(gutter) && gutter.length > 1) {
        const bottom = Number(gutter[1]) || 0;
        if (bottom <= 0) {
          return spaces2;
        }
        groups.value.forEach((group, index) => {
          if (index === groups.value.length - 1) return;
          group.forEach(() => {
            spaces2.push({
              bottom
            });
          });
        });
      }
      return spaces2;
    });
    linkChildren({
      spaces,
      verticalSpaces
    });
    return () => {
      const {
        tag,
        wrap,
        align,
        justify
      } = props;
      return _createVNode(tag, {
        "class": bem({
          [`align-${align}`]: align,
          [`justify-${justify}`]: justify,
          nowrap: !wrap
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
  ROW_KEY,
  stdin_default as default,
  rowProps
};
