"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22273],{26316:(s,n,a)=>{a.r(n),a.d(n,{default:()=>u});var e=a(66252);const t=(0,e.uE)('<p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p><p>选择器所选择的元素，叫做“选择器的对象”。</p><div id="code-demo-200dbd61" class="code-demo-wrapper" data-title="%E6%A1%88%E4%BE%8B" data-code="%7B%22html%22%3A%22%3Cimg%20src%3D%5C%22%2Flogo.png%5C%22%20alt%3D%5C%22logo%5C%22%20style%3D%5C%22max-width%3A%20150px%5C%22%20%2F%3E%5Cn%5Cn%3Cp%20class%3D%5C%22paragraph%5C%22%3EMr.Hope%20is%20handsome!%3C%2Fp%3E%5Cn%3Cp%20id%3D%5C%22par%5C%22%3EMr.Hope%20is%20very%20handsome!%3C%2Fp%3E%5Cn%22%2C%22css%22%3A%22p%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%5Cn.paragraph%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%5Cn%23par%20%7B%5Cn%20%20color%3A%20blue%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/logo.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">max-width</span><span class="token punctuation">:</span> 150px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paragraph<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Mr.Hope is handsome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>par<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Mr.Hope is very handsome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.paragraph</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">#par</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></div></div><div class="code-demo-footer"></div></div><p>在上文中，CSS 选择器选中了对应的 HTML 元素并为其应用样式规则。</p><h2 id="三个常见选择器" tabindex="-1"><a class="header-anchor" href="#三个常见选择器" aria-hidden="true">#</a> 三个常见选择器</h2><h3 id="id-选择器" tabindex="-1"><a class="header-anchor" href="#id-选择器" aria-hidden="true">#</a> ID 选择器</h3><p>ID 选择器可以为标有特定 ID 的 HTML 元素指定特定的样式。</p><p>HTML 可以用 ID 属性来设置 ID 选择器，CSS 中 ID 选择器以 <code>#</code> 来定义。</p><p>以下的样式规则应用于元素属性 <code>id=&quot;para1&quot;</code>:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#para1</span> <span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>ID 的全称是 Identify，是身份标识的意思。ID 的实际作用是为这个 HTML 标签绑定一个页面内唯一的标识符。因此，每一个 HTML 页面出现的 ID 应该仅被使用一次，以 ID 来代指这个元素。</p></div><h3 id="class-选择器" tabindex="-1"><a class="header-anchor" href="#class-选择器" aria-hidden="true">#</a> Class 选择器</h3><p>Class 选择器用于描述一组元素的样式，class 选择器有别于 ID 选择器，class 可以在多个元素中使用。</p><p>Class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以句点 (<code>.</code>) 显示:</p><p>在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.center</span> <span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="标签选择器" tabindex="-1"><a class="header-anchor" href="#标签选择器" aria-hidden="true">#</a> 标签选择器</h3><p>标签选择器用于指定一个 HTML 标签的样式。通常，浏览器会为每个特定的 HTML 标签指定一个默认样式，但是不同的浏览器的默认样式可能有细微的区别。</p><p>有些时候想要覆盖浏览器的默认样式，或者说想在所有浏览器中保持统一样式，即可使用标签选择器指定标签的默认样式。在 CSS 指定的标签样式会覆盖掉浏览器默认指定的样式。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* 确保所有浏览器的段落标签的字体大小均为16像素。*/</span>\n<span class="token selector">p</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><p>选择器可以通过运算符，构成更加复杂的选择器。</p><p>最常见的是<strong>后代选择器</strong>，以空格分隔，用于选取某元素的后代元素</p><div class="custom-container tip"><p class="custom-container-title">选择器案例</p><ul><li><p><code>p{ }</code>: 为所有 <strong>p</strong> 元素指定一个样式。</p></li><li><p><code>.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的元素指定一个样式。</p></li><li><p><code>.marked p{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 元素内的 <strong>p</strong> 元素指定一个样式。</p></li><li><p><code>p.marked{ }</code>: 为所有 <strong>class=&quot;marked&quot;</strong> 的 <strong>p</strong> 元素指定一个样式。</p></li></ul></div>',24),p={class:"custom-container info"},c=(0,e._)("p",{class:"custom-container-title"},"相关信息",-1),l=(0,e.Uk)("选择器详细介绍，请见 "),o=(0,e.Uk)("选择器"),r=(0,e.Uk)("。"),i={},u=(0,a(83744).Z)(i,[["render",function(s,n){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("div",p,[c,(0,e._)("p",null,[l,(0,e.Wm)(a,{to:"/code/website/css/intro/selector.html"},{default:(0,e.w5)((()=>[o])),_:1}),r])])],64)}]])},41693:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-02dacd5e",path:"/code/website/css/guide/selector.html",title:"选择器简介",lang:"zh-CN",frontmatter:{title:"选择器简介",icon:"select",date:"2019-09-05T00:00:00.000Z",category:["CSS"],tag:["快速上手"],summary:"CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。\n选择器所选择的元素，叫做“选择器的对象”。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/website/css/guide/selector.html"}],["meta",{property:"og:title",content:"选择器简介"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:tag",content:"快速上手"}],["meta",{property:"article:published_time",content:"2019-09-05T00:00:00.000Z"}]]},excerpt:"<p>CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。</p>\n<p>选择器所选择的元素，叫做“选择器的对象”。</p>\n",headers:[{level:2,title:"三个常见选择器",slug:"三个常见选择器",children:[{level:3,title:"ID 选择器",slug:"id-选择器",children:[]},{level:3,title:"Class 选择器",slug:"class-选择器",children:[]},{level:3,title:"标签选择器",slug:"标签选择器",children:[]}]},{level:2,title:"运算符",slug:"运算符",children:[]}],git:{createdTime:160460048e4,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:9}]},readingTime:{minutes:2.28,words:685},filePathRelative:"code/website/css/guide/selector.md"}}}]);