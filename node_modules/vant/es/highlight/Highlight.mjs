import { defineComponent, computed, createVNode as _createVNode } from "vue";
import { createNamespace, makeRequiredProp, makeStringProp, truthProp } from "../utils/index.mjs";
const [name, bem] = createNamespace("highlight");
const highlightProps = {
  autoEscape: truthProp,
  caseSensitive: Boolean,
  highlightClass: String,
  highlightTag: makeStringProp("span"),
  keywords: makeRequiredProp([String, Array]),
  sourceString: makeStringProp(""),
  tag: makeStringProp("div"),
  unhighlightClass: String,
  unhighlightTag: makeStringProp("span")
};
var stdin_default = defineComponent({
  name,
  props: highlightProps,
  setup(props) {
    const highlightChunks = computed(() => {
      const {
        autoEscape,
        caseSensitive,
        keywords,
        sourceString
      } = props;
      const flags = caseSensitive ? "g" : "gi";
      const _keywords = Array.isArray(keywords) ? keywords : [keywords];
      let chunks = _keywords.filter((keyword) => keyword).reduce((chunks2, keyword) => {
        if (autoEscape) {
          keyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        const regex = new RegExp(keyword, flags);
        let match;
        while (match = regex.exec(sourceString)) {
          const start = match.index;
          const end = regex.lastIndex;
          if (start >= end) {
            regex.lastIndex++;
            continue;
          }
          chunks2.push({
            start,
            end,
            highlight: true
          });
        }
        return chunks2;
      }, []);
      chunks = chunks.sort((a, b) => a.start - b.start).reduce((chunks2, currentChunk) => {
        const prevChunk = chunks2[chunks2.length - 1];
        if (!prevChunk || currentChunk.start > prevChunk.end) {
          const unhighlightStart = prevChunk ? prevChunk.end : 0;
          const unhighlightEnd = currentChunk.start;
          if (unhighlightStart !== unhighlightEnd) {
            chunks2.push({
              start: unhighlightStart,
              end: unhighlightEnd,
              highlight: false
            });
          }
          chunks2.push(currentChunk);
        } else {
          prevChunk.end = Math.max(prevChunk.end, currentChunk.end);
        }
        return chunks2;
      }, []);
      const lastChunk = chunks[chunks.length - 1];
      if (!lastChunk) {
        chunks.push({
          start: 0,
          end: sourceString.length,
          highlight: false
        });
      }
      if (lastChunk && lastChunk.end < sourceString.length) {
        chunks.push({
          start: lastChunk.end,
          end: sourceString.length,
          highlight: false
        });
      }
      return chunks;
    });
    const renderContent = () => {
      const {
        sourceString,
        highlightClass,
        unhighlightClass,
        highlightTag,
        unhighlightTag
      } = props;
      return highlightChunks.value.map((chunk) => {
        const {
          start,
          end,
          highlight
        } = chunk;
        const text = sourceString.slice(start, end);
        if (highlight) {
          return _createVNode(highlightTag, {
            "class": [bem("tag"), highlightClass]
          }, {
            default: () => [text]
          });
        }
        return _createVNode(unhighlightTag, {
          "class": unhighlightClass
        }, {
          default: () => [text]
        });
      });
    };
    return () => {
      const {
        tag
      } = props;
      return _createVNode(tag, {
        "class": bem()
      }, {
        default: () => [renderContent()]
      });
    };
  }
});
export {
  stdin_default as default,
  highlightProps
};
