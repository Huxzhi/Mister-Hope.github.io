"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22417],{29549:(s,a,n)=>{n.r(a),n.d(a,{default:()=>t});const e=(0,n(66252).uE)('<h1 id="dd" tabindex="-1"><a class="header-anchor" href="#dd" aria-hidden="true">#</a> dd</h1><p><code>dd</code> 命令用于复制磁盘或文件系统。</p><h2 id="复制磁盘" tabindex="-1"><a class="header-anchor" href="#复制磁盘" aria-hidden="true">#</a> 复制磁盘</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>上面命令表示将<code>/dev/sda</code> 磁盘复制到<code>/dev/sdb</code> 设备。参数 <code>if</code> 表示来源地，<code>of</code> 表示目的地。</p><p>除了复制，<code>dd</code> 还允许将磁盘做成一个镜像文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda <span class="token assign-left variable">of</span><span class="token operator">=</span>/home/username/sdadisk.img\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>dd</code> 还可以复制单个分区。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda2 <span class="token assign-left variable">of</span><span class="token operator">=</span>/home/username/partition2.img <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">4096</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>上面命令中，参数 <code>bs</code> 表示单次拷贝的字节数(bytes)。</p><p>要将镜像文件复原，也很简单。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>sdadisk.img <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="清除数据" tabindex="-1"><a class="header-anchor" href="#清除数据" aria-hidden="true">#</a> 清除数据</h2><p><code>dd</code> 也可以用于清除磁盘数据。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 磁盘数据写满 0</span>\n$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda1\n\n<span class="token comment"># 磁盘数据写满随机字符</span>\n$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/urandom <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="监控进展" tabindex="-1"><a class="header-anchor" href="#监控进展" aria-hidden="true">#</a> 监控进展</h2><p>磁盘的复制通常需要很久，为了监控进展，可以使用 Pipe Viewer 工具软件。如果没有安装这个软件，可以使用下面的命令安装。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">pv</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后，来源地和目的地之间插入广告，就可以看到进展了。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/urandom <span class="token operator">|</span> <span class="token function">pv</span> <span class="token operator">|</span> <span class="token function">dd</span> <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda1\n<span class="token number">4</span>,14MB <span class="token number">0</span>:00:05 <span class="token punctuation">[</span> 98kB/s<span class="token punctuation">]</span> <span class="token punctuation">[</span>      <span class="token operator">&lt;=</span><span class="token operator">&gt;</span>                  <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2><ul><li>David Clinton, <a href="https://opensource.com/article/18/7/how-use-dd-linux" target="_blank" rel="noopener noreferrer">How to use dd in Linux without destroying your disk</a></li></ul>',22),o={},t=(0,n(83744).Z)(o,[["render",function(s,a){return e}]])},83744:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,e]of a)n[s]=e;return n}},29422:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-2cd035a9",path:"/linux/bash/archives/commands/dd.html",title:"dd",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/archives/commands/dd.html"}],["meta",{property:"og:title",content:"dd"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"dd","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[{level:2,title:"复制磁盘",slug:"复制磁盘",children:[]},{level:2,title:"清除数据",slug:"清除数据",children:[]},{level:2,title:"监控进展",slug:"监控进展",children:[]},{level:2,title:"参考链接",slug:"参考链接",children:[]}],git:{createdTime:1591204114e3,updatedTime:1611730734e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2}]},readingTime:{minutes:1.05,words:315},filePathRelative:"linux/bash/archives/commands/dd.md"}}}]);