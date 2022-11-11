"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[20039],{64543:(n,a,e)=>{e.r(a),e.d(a,{default:()=>b});var s=e(59922);const t=(0,s._)("p",null,"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。",-1),c=(0,s._)("p",null,"日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。",-1),l=(0,s._)("p",null,"当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。",-1),i={class:"custom-container info"},p=(0,s._)("p",{class:"custom-container-title"},"缓存依赖",-1),o={href:"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows",target:"_blank",rel:"noopener noreferrer"},r=(0,s._)("h2",{id:"配置项",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#"),(0,s.Uk)(" 配置项")],-1),u=(0,s._)("h3",{id:"path",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#path","aria-hidden":"true"},"#"),(0,s.Uk)(" path")],-1),d=(0,s._)("p",null,"要缓存和还原的文件，目录和通配符模式的列表。",-1),h={class:"custom-container info"},k=(0,s._)("p",{class:"custom-container-title"},"相关信息",-1),m={href:"https://github.com/actions/toolkit/tree/main/packages/glob",target:"_blank",rel:"noopener noreferrer"},v=(0,s.uE)('<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3><p>用于保存缓存与还原缓存的的密钥</p><h3 id="restore-keys" tabindex="-1"><a class="header-anchor" href="#restore-keys" aria-hidden="true">#</a> restore-keys</h3><p>当 key 没有命中缓存是用于恢复缓存键值的有序列表</p><h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2><p><code>cache-hit</code>: 一个布尔值，表明是否找到与该键完全匹配的值</p><h2 id="缓存范围" tabindex="-1"><a class="header-anchor" href="#缓存范围" aria-hidden="true">#</a> 缓存范围</h2><p>缓存的作用域为特定的键和分支。默认分支缓存可用于其他分支。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p>Yarn:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3\n  <span class="token comment"># 使用此 id 获得 `cache-hit`</span>\n  <span class="token comment"># (`steps.yarn-cache.outputs.cache-hit != &#39;true&#39;`)</span>\n  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache\n  <span class="token key atrule">with</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> node_modules/\n    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n      ${{ runner.os }}-yarn-</span>\n\n<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies\n  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;\n  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个缓存键" tabindex="-1"><a class="header-anchor" href="#创建一个缓存键" aria-hidden="true">#</a> 创建一个缓存键</h2><p>缓存键可以包括 GitHub Actions 支持的任何上下文，函数，文字和运算符。</p><p>例如，使用 <code>hashFiles</code> 功能可让您在依存关系更改时创建新的缓存。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3\n  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache\n  <span class="token key atrule">with</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n      node_modules/</span>\n    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 cache-hit 输出，当对应键命中特定缓存后，可以跳过后续步骤 (例如，安装或构建) 。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies\n  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;\n  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存限制" tabindex="-1"><a class="header-anchor" href="#缓存限制" aria-hidden="true">#</a> 缓存限制</h2><p>一个存储库最多可以有 5GB 的缓存。达到 5GB 限制后，将根据上次访问缓存的时间驱逐较早的缓存。过去未访问的缓存也将被自动删除。</p><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h2>',20),y={href:"https://github.com/actions/cache",target:"_blank",rel:"noopener noreferrer"},g={},b=(0,e(61935).Z)(g,[["render",function(n,a){const e=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[t,c,l,(0,s._)("div",i,[p,(0,s._)("p",null,[(0,s.Uk)("关于缓存依赖的文档，详见 "),(0,s._)("a",o,[(0,s.Uk)("缓存依赖项以加快工作流程"),(0,s.Wm)(e)]),(0,s.Uk)("。")])]),(0,s.kq)(" more "),r,u,d,(0,s._)("div",h,[k,(0,s._)("p",null,[(0,s.Uk)("支持的 glob 模式，请参见 "),(0,s._)("a",m,[(0,s.Uk)("@actions/glob"),(0,s.Wm)(e)]),(0,s.Uk)("。")])]),v,(0,s._)("p",null,[(0,s._)("a",y,[(0,s.Uk)("https://github.com/actions/cache"),(0,s.Wm)(e)])])])}]])},61935:(n,a)=>{a.Z=(n,a)=>{const e=n.__vccOpts||n;for(const[n,s]of a)e[n]=s;return e}},29433:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-5dad642c","path":"/code/github/actions/cache.html","title":"cache","lang":"zh-CN","frontmatter":{"title":"cache","date":"2021-02-20T00:00:00.000Z","category":["GitHub"],"tag":["action","workflow"],"summary":"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。\\n日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。\\n当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。\\n\\n缓存依赖\\n关于缓存依赖的文档，详见 缓存依赖项以加快工作流程。\\n\\n","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/github/actions/cache.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"cache"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-03-31T03:20:18.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"action"}],["meta",{"property":"article:tag","content":"workflow"}],["meta",{"property":"article:published_time","content":"2021-02-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-03-31T03:20:18.000Z"}]]},"excerpt":"<p>这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。</p>\\n<p>日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。</p>\\n<p>当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。</p>\\n<div class=\\"custom-container info\\">\\n<p class=\\"custom-container-title\\">缓存依赖</p>\\n<p>关于缓存依赖的文档，详见 <a href=\\"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">缓存依赖项以加快工作流程<ExternalLinkIcon/></a>。</p>\\n</div>\\n","headers":[{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"path","slug":"path","link":"#path","children":[]},{"level":3,"title":"key","slug":"key","link":"#key","children":[]},{"level":3,"title":"restore-keys","slug":"restore-keys","link":"#restore-keys","children":[]}]},{"level":2,"title":"输出","slug":"输出","link":"#输出","children":[]},{"level":2,"title":"缓存范围","slug":"缓存范围","link":"#缓存范围","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"创建一个缓存键","slug":"创建一个缓存键","link":"#创建一个缓存键","children":[]},{"level":2,"title":"缓存限制","slug":"缓存限制","link":"#缓存限制","children":[]},{"level":2,"title":"仓库","slug":"仓库","link":"#仓库","children":[]}],"git":{"createdTime":1613826006000,"updatedTime":1648696818000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":7}]},"readingTime":{"minutes":1.81,"words":543},"filePathRelative":"code/github/actions/cache.md","localizedDate":"2021年2月20日"}')}}]);