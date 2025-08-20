var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
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
  default: () => stdin_default,
  highlightProps: () => highlightProps
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_utils = require("../utils");
const [name, bem] = (0, import_utils.createNamespace)("highlight");
const highlightProps = {
  autoEscape: import_utils.truthProp,
  caseSensitive: Boolean,
  highlightClass: String,
  highlightTag: (0, import_utils.makeStringProp)("span"),
  keywords: (0, import_utils.makeRequiredProp)([String, Array]),
  sourceString: (0, import_utils.makeStringProp)(""),
  tag: (0, import_utils.makeStringProp)("div"),
  unhighlightClass: String,
  unhighlightTag: (0, import_utils.makeStringProp)("span")
};
var stdin_default = (0, import_vue.defineComponent)({
  name,
  props: highlightProps,
  setup(props) {
    const highlightChunks = (0, import_vue.computed)(() => {
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
          return (0, import_vue.createVNode)(highlightTag, {
            "class": [bem("tag"), highlightClass]
          }, {
            default: () => [text]
          });
        }
        return (0, import_vue.createVNode)(unhighlightTag, {
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
      return (0, import_vue.createVNode)(tag, {
        "class": bem()
      }, {
        default: () => [renderContent()]
      });
    };
  }
});
