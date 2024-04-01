import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const __pageData = JSON.parse('{"title":"Java","description":"","frontmatter":{"next":{"text":"Java 基础语法","link":"/backend/java/java02"}},"headers":[],"relativePath":"backend/java/java01.md","filePath":"backend/java/java01.md","lastUpdated":1711031082000}');
const _sfc_main = { name: "backend/java/java01.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="java" tabindex="-1">Java <a class="header-anchor" href="#java" aria-label="Permalink to &quot;Java&quot;">​</a></h1><p><strong>符号说明</strong></p><ul><li>✅ 需要学习者<strong>掌握</strong>的知识点；</li><li>❤️ 高级开发者需要<strong>重点掌握</strong>的知识点；</li><li>🚀 需要学习者<strong>理解</strong>的知识点；</li><li>⭐ 需要学习者<strong>了解</strong>的知识点；</li><li>❌ 拓展知识点，可以不用学习；</li></ul><h1 id="_1-先导知识" tabindex="-1">1. 先导知识 <a class="header-anchor" href="#_1-先导知识" aria-label="Permalink to &quot;1. 先导知识&quot;">​</a></h1><h2 id="_1-1-常用的-windows-组合键" tabindex="-1">1.1 常用的 windows 组合键 ⭐ <a class="header-anchor" href="#_1-1-常用的-windows-组合键" aria-label="Permalink to &quot;1.1 常用的 windows 组合键 :star:&quot;">​</a></h2><ul><li>win + D：回到桌面</li><li>win + E：打开资源管理器</li><li>win + R：打开运行窗口</li><li>win + L：锁屏</li><li>alt + tab：应用之间的切换</li></ul><h2 id="_1-2-常用的-dos-命令" tabindex="-1">1.2 常用的 DOS 命令 ⭐ <a class="header-anchor" href="#_1-2-常用的-dos-命令" aria-label="Permalink to &quot;1.2 常用的 DOS 命令 :star:&quot;">​</a></h2><h3 id="打开-dos-命令窗口" tabindex="-1">打开 DOS 命令窗口 <a class="header-anchor" href="#打开-dos-命令窗口" aria-label="Permalink to &quot;打开 DOS 命令窗口&quot;">​</a></h3><pre><code>win + R，输入 cmd，cmd 是 command 单词的缩写。
</code></pre><h3 id="常用-dos-命令" tabindex="-1">常用 DOS 命令： <a class="header-anchor" href="#常用-dos-命令" aria-label="Permalink to &quot;常用 DOS 命令：&quot;">​</a></h3><ul><li>dir：列出当前路径下所有的文件以及目录。</li><li>cls：clear screen 清屏。</li><li>exit：退出 DOS 命令窗口。</li><li>切换盘符：c: 或者 d: 或者 e:</li><li>del：删除一个文件或者多个文件。del Test.java del *.java</li><li>ipconfig 以及 ipconfig /all：查看网卡的相关信息，例如 ip 地址，mac 地址等。 <ul><li>ping 命令：查看两台计算机之间是否可以正常通信</li><li>ping 192.168.137.101</li><li>ping 192.168.137.101 -t</li><li>ping www.baidu.com</li><li>ping www.baidu.com -t</li></ul></li><li>终止 DOS 命令窗口中某个命令的执行：ctrl + c</li><li>mkdir：创建目录</li><li>mkdir abc，表示在当前目录下新建一个目录：abc</li><li>rd：删除目录</li><li>rd abc，表示删除当前路径下的 abc 目录</li><li>ren：重命名</li><li>ren abc xyz，表示将当前路径下的 abc 目录名修改为 xyz</li><li>cd 命令： <ul><li>作用是：切换目录。change directory</li><li>cd 命令的用法：cd 路径</li><li>路径包括：</li><li>相对路径：相对路径一定是相对于当前路径而言的，以当前路径为基准，从当前所在的位置开始找。</li><li>绝对路径：在 windows 当中，路径开始的时候，是以盘符开始的，都是绝对路径。例如：C:\\Users\\Administrator\\xyz\\abc\\def</li><li>cd .. 回到上级目录 （在 windows 系统中两个点.. 代表的是一个上级目录。扩展：其实还有一个路径叫做一个点 . 一个点代表的是当前路径。）</li><li>cd / 回到跟目录</li><li>注意：路径在 windows 当中自动补全：使用 tab 键。</li></ul></li><li>定时关机： shutdown -s -t 3600 一小时之后自动关机。</li><li>批处理文件 my.bat 文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd C:\\Users\\Administrator\\xyz\\abc\\def</span></span>
<span class="line"><span>c:</span></span>
<span class="line"><span>del *.java</span></span></code></pre></div><p>作用：切换到 C:\\Users\\Administrator\\xyz\\abc\\def 目录下，删除这个目录中所有的 java 文件。</p><h3 id="通用的文本编辑快捷键" tabindex="-1">通用的文本编辑快捷键 <a class="header-anchor" href="#通用的文本编辑快捷键" aria-label="Permalink to &quot;通用的文本编辑快捷键&quot;">​</a></h3><ul><li>ctrl+c 复制</li><li>ctrl+v 粘贴</li><li>ctrl+x 剪切</li><li>ctrl+s 保存</li><li>ctrl+z 撤销</li><li>ctrl+y 重做</li><li>ctrl+a 全选</li><li>home 光标回到行首</li><li>end 光标回到行尾</li><li>ctrl + home 光标回到文章开始</li><li>ctrl + end 光标回到文章末尾</li><li>shift + home 或 end 选中一行</li><li>鼠标双击 （选中一个单词）</li><li>ctrl + shift + 右箭头或左箭头 （选中一个单词）</li><li>ctrl + f 查找</li></ul><h3 id="java-中的注释" tabindex="-1">java 中的注释 <a class="header-anchor" href="#java-中的注释" aria-label="Permalink to &quot;java 中的注释&quot;">​</a></h3><p>单行注释：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 单行注释</span></span>
<span class="line"><span>// 单行注释</span></span>
<span class="line"><span>// 单行注释</span></span>
<span class="line"><span>// 单行注释</span></span></code></pre></div><p>多行注释：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>	多行注释</span></span>
<span class="line"><span>	多行注释</span></span>
<span class="line"><span>*/</span></span></code></pre></div><p>文档注释：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>* javadoc 注释，可以给 javadoc 命令解析提取并生成帮助文档</span></span>
<span class="line"><span>* @author dujubin</span></span>
<span class="line"><span>* @version 1.0</span></span>
<span class="line"><span>* @since 1.0</span></span>
<span class="line"><span>*/</span></span></code></pre></div><p>使用以下命令可以提取生成帮助文档：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>javadoc -d docs -author -version -encoding utf-8 HelloWorld.java</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/java/java01.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const java01 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  java01 as default
};
