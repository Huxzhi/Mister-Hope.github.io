"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22417],{18639:(a,s,e)=>{e.r(s),e.d(s,{default:()=>o});var n=e(59922);const d=(0,n.uE)('<h1 id="dd" tabindex="-1"><a class="header-anchor" href="#dd" aria-hidden="true">#</a> dd</h1><p><code>dd</code> 命令用于复制磁盘或文件系统。</p><h2 id="复制磁盘" tabindex="-1"><a class="header-anchor" href="#复制磁盘" aria-hidden="true">#</a> 复制磁盘</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令表示将<code>/dev/sda</code> 磁盘复制到<code>/dev/sdb</code> 设备。参数 <code>if</code> 表示来源地，<code>of</code> 表示目的地。</p><p>除了复制，<code>dd</code> 还允许将磁盘做成一个镜像文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda <span class="token assign-left variable">of</span><span class="token operator">=</span>/home/username/sdadisk.img\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>dd</code> 还可以复制单个分区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda2 <span class="token assign-left variable">of</span><span class="token operator">=</span>/home/username/partition2.img <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">4096</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，参数 <code>bs</code> 表示单次拷贝的字节数(bytes)。</p><p>要将镜像文件复原，也很简单。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>sdadisk.img <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="清除数据" tabindex="-1"><a class="header-anchor" href="#清除数据" aria-hidden="true">#</a> 清除数据</h2><p><code>dd</code> 也可以用于清除磁盘数据。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 磁盘数据写满 0</span>\n$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda1\n\n<span class="token comment"># 磁盘数据写满随机字符</span>\n$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/urandom <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监控进展" tabindex="-1"><a class="header-anchor" href="#监控进展" aria-hidden="true">#</a> 监控进展</h2><p>磁盘的复制通常需要很久，为了监控进展，可以使用 Pipe Viewer 工具软件。如果没有安装这个软件，可以使用下面的命令安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">pv</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，来源地和目的地之间插入广告，就可以看到进展了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/urandom <span class="token operator">|</span> <span class="token function">pv</span> <span class="token operator">|</span> <span class="token function">dd</span> <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sda1\n<span class="token number">4</span>,14MB <span class="token number">0</span>:00:05 <span class="token punctuation">[</span> 98kB/s<span class="token punctuation">]</span> <span class="token punctuation">[</span>      <span class="token operator">&lt;=</span><span class="token operator">&gt;</span>                  <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',21),t={href:"https://opensource.com/article/18/7/how-use-dd-linux",target:"_blank",rel:"noopener noreferrer"},i={},o=(0,e(61935).Z)(i,[["render",function(a,s){const e=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[d,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("David Clinton, "),(0,n._)("a",t,[(0,n.Uk)("How to use dd in Linux without destroying your disk"),(0,n.Wm)(e)])])])])}]])},61935:(a,s)=>{s.Z=(a,s)=>{const e=a.__vccOpts||a;for(const[a,n]of s)e[a]=n;return e}},86889:(a,s,e)=>{e.r(s),e.d(s,{data:()=>n});const n=JSON.parse('{"key":"v-2cd035a9","path":"/linux/bash/archives/commands/dd.html","title":"dd","lang":"zh-CN","frontmatter":{"summary":"dd dd 命令用于复制磁盘或文件系统。 复制磁盘 上面命令表示将/dev/sda 磁盘复制到/dev/sdb 设备。参数 if 表示来源地，of 表示目的地。 除了复制，dd 还允许将磁盘做成一个镜像文件。 dd 还可以复制单个分区。 上面命令中，参数 bs 表示单次拷贝的字节数(bytes)。 要将镜像文件复原，也很简单。 清除数据 dd 也可以用于清除","head":[["meta",{"property":"og:url","content":"https://mrhope.site/linux/bash/archives/commands/dd.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"dd"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2021-01-27T06:58:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2021-01-27T06:58:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"复制磁盘","slug":"复制磁盘","link":"#复制磁盘","children":[]},{"level":2,"title":"清除数据","slug":"清除数据","link":"#清除数据","children":[]},{"level":2,"title":"监控进展","slug":"监控进展","link":"#监控进展","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1611730734000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":1.05,"words":315},"filePathRelative":"linux/bash/archives/commands/dd.md","localizedDate":"2020年6月3日"}')}}]);