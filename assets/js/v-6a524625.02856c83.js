"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[95282],{76253:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const t=(0,s(66252).uE)('<p>HTML 不仅能够定义网页的单独部分 (例如“段落”或“图片”)，还可以使用块级元素 (例如“标题栏”、“导航菜单”、“主内容列”) 来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。</p><h2 id="文档的基本组成部分" tabindex="-1"><a class="header-anchor" href="#文档的基本组成部分" aria-hidden="true">#</a> 文档的基本组成部分</h2><p>网页的外观多种多样，但是除了全屏视频或游戏，或艺术作品页面，或只是结构不当的页面以外，都倾向于使用类似的标准组件:</p><h3 id="页眉" tabindex="-1"><a class="header-anchor" href="#页眉" aria-hidden="true">#</a> 页眉</h3><p>通常横跨于整个页面顶部有一个大标题或一个 LOGO。这是网站的主要一般信息，通常存在于所有网页。</p><h3 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏" aria-hidden="true">#</a> 导航栏</h3><p>指向网站各个主要区段的超链接。通常用菜单按钮、链接或标签页表示。类似于标题栏，导航栏通常应在所有网页之间保持一致，否则会让用户感到疑惑，甚至无所适从。许多 web 设计人员认为导航栏是标题栏的一部分，而不是独立的组件，但这并非绝对，两者独立可以提供更好的无障碍访问特性，因为屏幕阅读器可以更清晰地分辨二者。</p><h3 id="主内容" tabindex="-1"><a class="header-anchor" href="#主内容" aria-hidden="true">#</a> 主内容</h3><p>中心的大部分区域是当前网页大多数的独有内容，例如视频、文章、地图、新闻等。这些内容是网站的一部分，且会因页面而异。</p><h3 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h3><p>一些外围信息、链接、引用、广告等。通常与主内容相关(例如一个新闻页面上，侧边栏可能包含作者信息或相关文章链接)，还可能存在其他的重复元素，如辅助导航系统。</p><h3 id="页脚" tabindex="-1"><a class="header-anchor" href="#页脚" aria-hidden="true">#</a> 页脚</h3><p>横跨页面底部的狭长区域。和标题一样，页脚是放置公共信息(比如版权声明或联系方式)的，一般使用较小字体，且通常为次要内容。还可以通过提供快速访问链接来进行 SEO。</p><h2 id="用于构建内容的-html" tabindex="-1"><a class="header-anchor" href="#用于构建内容的-html" aria-hidden="true">#</a> 用于构建内容的 HTML</h2><p>视觉效果并不是一切。我们可以修改最重要内容(例如导航菜单和相关链接)的颜色、字体大小来吸引用户的注意，但是这对视障人士是无效的，“粉红色”和“大字体”对他们并不奏效。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>注: 全球色盲患者比例为 4%，换句话说，每 12 名男性就有一位色盲，每 200 名女性就有一位色盲。全盲和视障人士约占世界人口(约 70 亿)的 13%(2015 年 全球约有 9.4 亿人口存在视力问题)。</p></div><p>HTML 代码中可根据功能来为区段添加标记。可使用元素来无歧义地表示上文所讲的内容区段，屏幕阅读器等辅助技术可以识别这些元素，并帮助执行“找到主导航 “或”找到主内容“等任务。参见前文所讲的 页面中元素结构和语义不佳所带来的后果。</p><p>为了实现语义化标记，HTML 提供了明确这些区段的专用标签，例如:</p><ul><li><code>&lt;header&gt;</code>: 页眉。</li><li><code>&lt;nav&gt;</code>: 导航栏。</li><li><code>&lt;main&gt;</code>: 主内容。主内容中还可以有各种子内容区段，可用 <code>&lt;article&gt;</code>、<code>&lt;section&gt;</code> 和 <code>&lt;div&gt;</code> 等元素表示。</li><li><code>&lt;aside&gt;</code>: 侧边栏，经常嵌套在 <code>&lt;main&gt;</code> 中。</li><li><code>&lt;footer&gt;</code>: 页脚。</li></ul><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>二次元俱乐部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>\n      <span class="token comment">&lt;!-- 本站所有网页的统一主标题 --&gt;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>聆听电子天籁之音<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>\n      <span class="token comment">&lt;!-- 本站统一的导航栏 --&gt;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>主页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!-- 共n个导航栏项目，省略…… --&gt;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!-- 搜索栏是站点内导航的一个非线性的方式。--&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>要搜索的内容<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>搜索<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>\n      <span class="token comment">&lt;!-- 网页主体内容 --&gt;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!-- 此处包含一个 article(一篇文章)，内容略…… --&gt;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!-- 侧边栏在主内容右侧 --&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>相关链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这是一个超链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n          <span class="token comment">&lt;!-- 侧边栏有n个超链接，略略略…… --&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>\n      <span class="token comment">&lt;!-- 本站所有网页的统一页脚 --&gt;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>© 2050 某某保留所有权利<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h2 id="html-布局元素细节" tabindex="-1"><a class="header-anchor" href="#html-布局元素细节" aria-hidden="true">#</a> HTML 布局元素细节</h2><p>理解所有 HTML 区段元素具体含义是很有益处的，以下列出了常见元素:</p><ul><li><p><code>&lt;main&gt;</code></p><p>存放每个页面独有的内容。每个页面上只能用一次 <code>&lt;main&gt;</code>，且直接位于 <code>&lt;body&gt;</code> 中。最好不要把它嵌套进其它元素。</p></li><li><p><code>&lt;article</code>&gt;</p><p>一篇文章，与页面其它部分无关(比如一篇博文)。</p></li><li><p><code>&lt;section&gt;</code></p><p>与 <code>&lt;article&gt;</code> 类似，但 <code>&lt;section&gt;</code> 更适用于组织页面使其按功能 (比如迷您地图、一组文章标题和摘要) 分块。</p><p>一般的最佳用法是以标题作为开头。也可以把一篇 <code>&lt;article&gt;</code> 分成若干部分并分别置于不同的 <code>&lt;section&gt;</code> 中，也可以把一个区段 <code>&lt;section&gt;</code> 分成若干部分并分别置于不同的 <code>&lt;article&gt;</code> 中，取决于上下文。</p></li><li><p><code>&lt;aside&gt;</code> 包含一些间接信息(术语条目、作者简介、相关链接，等等)。</p></li><li><p><code>&lt;header&gt;</code> 是简介形式的内容。如果它是 <code>&lt;body&gt;</code> 的子元素，那么就是网站的全局页眉。如果它是 <code>&lt;article&gt;</code> 或 <code>&lt;section&gt;</code> 的子元素，那么它是这些部分特有的页眉(此 <code>&lt;header&gt;</code> 非彼 标题)。</p></li><li><p><code>&lt;nav&gt;</code> 包含页面主导航功能。其中不应包含二级链接等内容。</p></li><li><p><code>&lt;footer&gt;</code> 包含了页面的页脚部分。</p></li></ul><h3 id="无语义元素" tabindex="-1"><a class="header-anchor" href="#无语义元素" aria-hidden="true">#</a> 无语义元素</h3><p>有时您会发现，对于一些要组织的项目或要包装的内容，现有的语义元素均不能很好对应。有时候您可能只想将一组元素作为一个单独的实体来修饰来响应单一的用 CSS 或 JavaScript。为了应对这种情况，HTML 提供了 <code>&lt;div&gt;</code> 和 <code>&lt;span&gt;</code> 元素。应配合使用 class 属性提供一些标签，使这些元素能易于查询。</p><p><code>&lt;span&gt;</code> 是一个内联的 (inline) 无语义元素，最好只用于无法找到更好的语义元素来包含内容时，或者不想增加特定的含义时。</p><div id="code-demo-517649e8" class="code-demo-wrapper" data-title="%E6%97%A0%E8%AF%AD%E4%B9%89%E5%85%83%E7%B4%A0%20span" data-code="%7B%22html%22%3A%22%3Cp%3E%5Cn%20%20%E5%9B%BD%E7%8E%8B%E5%96%9D%E5%BE%97%E9%85%A9%E9%85%8A%E5%A4%A7%E9%86%89%EF%BC%8C%E5%9C%A8%E5%87%8C%E6%99%A8%201%20%E7%82%B9%E6%97%B6%E6%89%8D%E5%9B%9E%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E6%88%BF%E9%97%B4%EF%BC%8C%E8%B8%89%E8%B7%84%E5%9C%B0%E8%B5%B0%E8%BF%87%E9%97%A8%E5%8F%A3%E3%80%82%3Cspan%5Cn%20%20%20%20class%3D%5C%22editor-note%5C%22%5Cn%20%20%20%20%3E%5B%E7%BC%96%E8%BE%91%E6%89%B9%E6%B3%A8%3A%20%E6%AD%A4%E5%88%BB%E8%88%9E%E5%8F%B0%E7%81%AF%E5%85%89%E5%BA%94%E5%8F%98%E6%9A%97%5D%3C%2Fspan%5Cn%20%20%3E.%5Cn%3C%2Fp%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n  国王喝得酩酊大醉，在凌晨 1 点时才回到自己的房间，踉跄地走过门口。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>\n    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor-note<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>[编辑批注: 此刻舞台灯光应变暗]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>\n  <span class="token punctuation">&gt;</span></span>.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这里，“编辑批注”仅仅是对舞台剧导演提供额外指引；没有具体语义。对于视力正常的用户，CSS 应将批注内容与主内容稍微隔开一些。</p></div></div><div class="code-demo-footer"></div></div><p><code>&lt;div&gt;</code> 是一个块级无语义元素，应仅用于找不到更好的块级元素时，或者不想增加特定的意义时。例如，一个电子商务网站页面上有一个一直显示的购物车组件。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shopping-cart<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>购物车<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>银耳环<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>\n        <span class="token punctuation">&gt;</span></span>: $99.95.\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../products/3333-0985/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Silver earrings<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>售价: $237.89<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>这里不应使用 <code>&lt;aside&gt;</code>，因为它和主内容并没有必要的联系(您想在任何地方都能看到它)。甚至不能用 <code>&lt;section&gt;</code> ，因为它也不是页面上主内容的一部分。所以在这种情况下就应使用 <code>&lt;div&gt;</code>，为满足无障碍使用特征，还应为购物车的标题设置一个可读标签。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>&lt;div&gt;</code> 非常便利但容易被滥用。由于它们没有语义值，会使 HTML 代码变得混乱。要小心使用，只有在没有更好的语义方案时才选择它，而且要尽可能少用， 否则文档的语义化升级和维护工作会非常困难。</p></div><h3 id="换行与水平分割线" tabindex="-1"><a class="header-anchor" href="#换行与水平分割线" aria-hidden="true">#</a> 换行与水平分割线</h3><p><code>&lt;br&gt;</code> 可在段落中进行换行；<code>&lt;br&gt;</code> 是唯一能够生成多个短行结构(例如邮寄地址或诗歌)的元素。比如:</p><div id="code-demo-68fb5f03" class="code-demo-wrapper" data-title="%E6%8D%A2%E8%A1%8C" data-code="%7B%22html%22%3A%22%3Cp%3E%5Cn%20%20%E4%BB%8E%E5%89%8D%E6%9C%89%E4%B8%AA%E4%BA%BA%E5%8F%AB%E5%B0%8F%E9%AB%98%3Cbr%20%2F%3E%5Cn%20%20%E4%BB%96%E8%AF%B4%E5%86%99%20HTML%20%E6%84%9F%E8%A7%89%E6%9C%80%E5%A5%BD%3Cbr%20%2F%3E%5Cn%20%20%E4%BD%86%E4%BB%96%E5%86%99%E7%9A%84%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84%E8%AF%AD%E4%B9%89%E4%B8%80%E5%9B%A2%E7%B3%9F%3Cbr%20%2F%3E%5Cn%20%20%E4%BB%96%E5%86%99%E7%9A%84%E6%A0%87%E7%AD%BE%E8%B0%81%E4%B9%9F%E6%87%82%E4%B8%8D%E4%BA%86%E3%80%82%5Cn%3C%2Fp%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n  从前有个人叫小高<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>\n  他说写 HTML 感觉最好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>\n  但他写的代码结构语义一团糟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>\n  他写的标签谁也懂不了。\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><div class="code-demo-footer"></div></div><p><code>&lt;hr&gt;</code> 元素在文档中生成一条水平分割线，表示文本中主题的变化(例如话题或场景的改变)。一般就是一条水平的直线。例如:</p><div id="code-demo-71658e96" class="code-demo-wrapper" data-title="%E6%B0%B4%E5%B9%B3%E5%88%86%E5%89%B2%E7%BA%BF" data-code="%7B%22html%22%3A%22%3Cp%3E%5Cn%20%20%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%94%90%E5%83%A7%E6%98%AF%E4%B8%AA%E6%85%88%E6%82%AF%E7%9A%84%E5%9C%A3%E5%83%A7%E3%80%82%E4%BB%96%E8%A7%81%E8%A1%8C%E8%80%85%E5%93%80%E5%91%8A%EF%BC%8C%E5%8D%B4%E4%B9%9F%E5%9B%9E%E5%BF%83%E8%BD%AC%E6%84%8F%E9%81%93%3A%5Cn%20%20%E2%80%9C%E6%97%A2%E5%A6%82%E6%AD%A4%E8%AF%B4%EF%BC%8C%E4%B8%94%E9%A5%B6%E6%82%A8%E8%BF%99%E4%B8%80%E6%AC%A1%E3%80%82%E5%86%8D%E4%BC%91%E6%97%A0%E7%A4%BC%E3%80%82%E5%A6%82%E8%8B%A5%E4%BB%8D%E5%89%8D%E4%BD%9C%E6%81%B6%EF%BC%8C%E8%BF%99%E5%92%92%E8%AF%AD%E9%A2%A0%E5%80%92%E5%B0%B1%E5%BF%B5%E4%BA%8C%E5%8D%81%E9%81%8D!%5Cn%20%20%E2%80%9D%E8%A1%8C%E8%80%85%E9%81%93%3A%5Cn%20%20%E2%80%9C%E4%B8%89%E5%8D%81%E9%81%8D%E4%B9%9F%E7%94%B1%E6%82%A8%EF%BC%8C%E5%8F%AA%E6%98%AF%E6%88%91%E4%B8%8D%E6%89%93%E4%BA%BA%E4%BA%86%E3%80%82%E2%80%9D%E5%8D%B4%E6%89%8D%E4%BC%8F%E4%BE%8D%E5%94%90%E5%83%A7%E4%B8%8A%E9%A9%AC%EF%BC%8C%E5%8F%88%E5%B0%86%E6%91%98%E6%9D%A5%E6%A1%83%E5%AD%90%E5%A5%89%E4%B8%8A%E3%80%82%E5%94%90%E5%83%A7%E5%9C%A8%E9%A9%AC%E4%B8%8A%E4%B9%9F%E5%90%83%E4%BA%86%E5%87%A0%E4%B8%AA%EF%BC%8C%E6%9D%83%E4%B8%94%E5%85%85%E9%A5%A5%E3%80%82%5Cn%3C%2Fp%3E%5Cn%3Chr%20%2F%3E%5Cn%3Cp%3E%5Cn%20%20%E5%8D%B4%E8%AF%B4%E9%82%A3%E5%A6%96%E7%B2%BE%EF%BC%8C%E8%84%B1%E5%91%BD%E5%8D%87%E7%A9%BA%E3%80%82%E5%8E%9F%E6%9D%A5%E8%A1%8C%E8%80%85%E9%82%A3%E4%B8%80%E6%A3%92%E4%B8%8D%E6%9B%BE%E6%89%93%E6%9D%80%E5%A6%96%E7%B2%BE%EF%BC%8C%E5%A6%96%E7%B2%BE%E5%87%BA%E7%A5%9E%E5%8E%BB%E4%BA%86%E3%80%82%E4%BB%96%E5%9C%A8%E9%82%A3%E4%BA%91%E7%AB%AF%E9%87%8C%EF%BC%8C%E5%92%AC%E7%89%99%E5%88%87%E9%BD%BF%EF%BC%8C%E6%9A%97%E6%81%A8%E8%A1%8C%E8%80%85%E9%81%93%3A%5Cn%20%20%E2%80%9C%E5%87%A0%E5%B9%B4%E5%8F%AA%E9%97%BB%E5%BE%97%E8%AE%B2%E4%BB%96%E6%89%8B%E6%AE%B5%EF%BC%8C%E4%BB%8A%E6%97%A5%E6%9E%9C%E7%84%B6%E8%AF%9D%E4%B8%8D%E8%99%9A%E4%BC%A0%E3%80%82%E9%82%A3%E5%94%90%E5%83%A7%E5%B7%B2%E6%AD%A4%E4%B8%8D%E8%AE%A4%E5%BE%97%E6%88%91%EF%BC%8C%E5%B0%86%E8%A6%81%E5%90%83%E9%A5%AD%E3%80%82%E8%8B%A5%E4%BD%8E%E5%A4%B4%E9%97%BB%E4%B8%80%E9%97%BB%E5%84%BF%EF%BC%8C%E6%88%91%E5%B0%B1%E4%B8%80%E6%8A%8A%E6%8D%9E%E4%BD%8F%EF%BC%8C%E5%8D%B4%E4%B8%8D%E6%98%AF%E6%88%91%E7%9A%84%E4%BA%BA%E4%BA%86%E3%80%82%E4%B8%8D%E6%9C%9F%E8%A2%AB%E4%BB%96%E8%B5%B0%E6%9D%A5%EF%BC%8C%E5%BC%84%E7%A0%B4%E6%88%91%E8%BF%99%E5%8B%BE%E5%BD%93%EF%BC%8C%E5%8F%88%E5%87%A0%E4%B9%8E%E8%A2%AB%E4%BB%96%E6%89%93%E4%BA%86%E4%B8%80%E6%A3%92%E3%80%82%E8%8B%A5%E9%A5%B6%E4%BA%86%E8%BF%99%E4%B8%AA%E5%92%8C%E5%B0%9A%EF%BC%8C%E8%AF%9A%E7%84%B6%E6%98%AF%E5%8A%B3%E8%80%8C%E6%97%A0%E5%8A%9F%E4%B9%9F%E3%80%82%E6%88%91%E8%BF%98%E4%B8%8B%E5%8E%BB%E6%88%8F%E4%BB%96%E4%B8%80%E6%88%8F%E3%80%82%E2%80%9D%5Cn%3C%2Fp%3E%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n  原来这唐僧是个慈悯的圣僧。他见行者哀告，却也回心转意道:\n  “既如此说，且饶您这一次。再休无礼。如若仍前作恶，这咒语颠倒就念二十遍!\n  ”行者道:\n  “三十遍也由您，只是我不打人了。”却才伏侍唐僧上马，又将摘来桃子奉上。唐僧在马上也吃了几个，权且充饥。\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n  却说那妖精，脱命升空。原来行者那一棒不曾打杀妖精，妖精出神去了。他在那云端里，咬牙切齿，暗恨行者道:\n  “几年只闻得讲他手段，今日果然话不虚传。那唐僧已此不认得我，将要吃饭。若低头闻一闻儿，我就一把捞住，却不是我的人了。不期被他走来，弄破我这勾当，又几乎被他打了一棒。若饶了这个和尚，诚然是劳而无功也。我还下去戏他一戏。”\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></div></div><div class="code-demo-footer"></div></div>',37),p={},e=(0,s(83744).Z)(p,[["render",function(n,a){return t}]])},84560:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-6a524625",path:"/code/website/html/intro/layout.html",title:"网站布局",lang:"zh-CN",frontmatter:{title:"网站布局",icon:"layout",date:"2019-09-02T00:00:00.000Z",category:["HTML"],summary:"HTML 不仅能够定义网页的单独部分 (例如“段落”或“图片”)，还可以使用块级元素 (例如“标题栏”、“导航菜单”、“主内容列”) 来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/website/html/intro/layout.html"}],["meta",{property:"og:title",content:"网站布局"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:published_time",content:"2019-09-02T00:00:00.000Z"}]]},excerpt:"<p>HTML 不仅能够定义网页的单独部分 (例如“段落”或“图片”)，还可以使用块级元素 (例如“标题栏”、“导航菜单”、“主内容列”) 来定义网站中的复合区域。本文将探讨如何规划基本的网站结构，并根据规划的结构来编写 HTML。</p>\n",headers:[{level:2,title:"文档的基本组成部分",slug:"文档的基本组成部分",children:[{level:3,title:"页眉",slug:"页眉",children:[]},{level:3,title:"导航栏",slug:"导航栏",children:[]},{level:3,title:"主内容",slug:"主内容",children:[]},{level:3,title:"侧边栏",slug:"侧边栏",children:[]},{level:3,title:"页脚",slug:"页脚",children:[]}]},{level:2,title:"用于构建内容的 HTML",slug:"用于构建内容的-html",children:[{level:3,title:"案例",slug:"案例",children:[]}]},{level:2,title:"HTML 布局元素细节",slug:"html-布局元素细节",children:[{level:3,title:"无语义元素",slug:"无语义元素",children:[]},{level:3,title:"换行与水平分割线",slug:"换行与水平分割线",children:[]}]}],git:{createdTime:1605457814e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:7.86,words:2357},filePathRelative:"code/website/html/intro/layout.md"}}}]);