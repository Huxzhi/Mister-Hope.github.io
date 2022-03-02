"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[66619],{32650:(n,s,a)=>{a.r(s),a.d(s,{default:()=>v});var e=a(66252);const t=(0,e.uE)('<p>类型断言(Type Assertion)可以用来手动指定一个值的类型。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&lt;</span>类型<span class="token operator">&gt;</span>值<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>值 <span class="token keyword">as</span> 类型<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在 tsx 语法(React 的 jsx 语法的 ts 版)中必须用后一种。</p><h2 id="例子-将一个联合类型的变量指定为一个更加具体的类型" tabindex="-1"><a class="header-anchor" href="#例子-将一个联合类型的变量指定为一个更加具体的类型" aria-hidden="true">#</a> 例子: 将一个联合类型的变量指定为一个更加具体的类型</h2>',7),p=(0,e.Uk)("之前提到过"),o=(0,e.Uk)("，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们"),r=(0,e._)("strong",null,"只能访问此联合类型的所有类型里共有的属性或方法",-1),l=(0,e.Uk)(":"),c=(0,e.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> something<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// index.ts(2,22): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>\n<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法，比如:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>something<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> something<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// index.ts(2,19): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>\n<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>\n<span class="token comment">// index.ts(3,26): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>\n<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>上例中，获取 <code>something.length</code> 的时候会报错。</p><p>此时可以使用类型断言，将 <code>something</code> 断言成 <code>string</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>something<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>something<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>类型断言的用法如上，在需要断言的变量前加上 <code>&lt;Type&gt;</code> 即可。</p><p><strong>类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">toBoolean</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>something<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// index.ts(2,10): error TS2352: Type &#39;string | number&#39; cannot be converted to type &#39;boolean&#39;.</span>\n<span class="token comment">//   Type &#39;number&#39; is not comparable to type &#39;boolean&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',10),i={href:"https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("TypeScript Deep Dive / Type Assertion"),k={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("Advanced Types # Type Guards and Differentiating Types"),b=(0,e.Uk)("("),m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4%E4%B8%8E%E5%8C%BA%E5%88%86%E7%B1%BB%E5%9E%8B(type-guards-and-differentiating-types)",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("中文版"),h=(0,e.Uk)(")"),y={},v=(0,a(83744).Z)(y,[["render",function(n,s){const a=(0,e.up)("RouterLink"),y=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[(0,e.Wm)(a,{to:"/code/language/typescript/basics/union-types.html#%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95"},{default:(0,e.w5)((()=>[p])),_:1}),o,r,l]),c,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",i,[u,(0,e.Wm)(y)])]),(0,e._)("li",null,[(0,e._)("a",k,[d,(0,e.Wm)(y)]),b,(0,e._)("a",m,[g,(0,e.Wm)(y)]),h])])],64)}]])},56078:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-cc37e3c8",path:"/code/language/typescript/basics/type-assertion.html",title:"类型断言",lang:"zh-CN",frontmatter:{title:"类型断言",icon:"boolean",category:["TypeScript"],summary:"类型断言(Type Assertion)可以用来手动指定一个值的类型。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/basics/type-assertion.html"}],["meta",{property:"og:title",content:"类型断言"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"<p>类型断言(Type Assertion)可以用来手动指定一个值的类型。</p>\n",headers:[{level:2,title:"语法",slug:"语法",children:[]},{level:2,title:"例子: 将一个联合类型的变量指定为一个更加具体的类型",slug:"例子-将一个联合类型的变量指定为一个更加具体的类型",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1591204114e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:1.56,words:467},filePathRelative:"code/language/typescript/basics/type-assertion.md"}}}]);