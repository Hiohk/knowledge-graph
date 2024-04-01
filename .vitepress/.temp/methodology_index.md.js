import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const __pageData = JSON.parse('{"title":"方法论（methodology）","description":"","frontmatter":{},"headers":[],"relativePath":"methodology/index.md","filePath":"methodology/index.md","lastUpdated":1710824893000}');
const _sfc_main = { name: "methodology/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="方法论-methodology" tabindex="-1">方法论（methodology） <a class="header-anchor" href="#方法论-methodology" aria-label="Permalink to &quot;方法论（methodology）&quot;">​</a></h1><p>某天我突发奇想，专门开辟了一个新的章节——<strong>方法论</strong>。希望总结日常工作学习中总结的方法论。无论是治国理政，还是科学研究以及生活中的为人处世，处处都存在着我们看不见摸不着的方法论。</p><p>方法论的重要性体现在多个方面，它对于个人、组织、企业乃至整个社会的思考和行动都具有深远的影响。方法论的重要性体现在提高效率、保证质量、建立可复制性和可伸缩性的工作框架、推动企业成功以及促进个人成长和发展等多个方面。因此，我们应该重视方法论的学习和应用，不断提升自己的方法论水平，以更好地应对各种挑战和问题。</p><ol><li><p>《思考的艺术》—— [美] 文森特·赖安·拉吉罗</p><p><strong>哲学家亚瑟·叔本华（Arthur Schopen-hauer）曾写道：“每个人都把自己的眼界当成是这个世界的极限。”一个人的视野越广阔，他对日常体验的感知当然也就越深刻、越准确。</strong></p></li><li><p>《专注力 化繁为简的惊人力量》—— [英] 于尔根·沃尔夫（Jurgen Wolff）</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("methodology/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
