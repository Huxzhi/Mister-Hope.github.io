"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80014],{34295:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const e=(0,s(66252).uE)('<h2 id="为什么要有-tag" tabindex="-1"><a class="header-anchor" href="#为什么要有-tag" aria-hidden="true">#</a> 为什么要有 tag</h2><p>发布一个版本时，我们通常先在版本库中打一个标签 (<code>tag</code>)，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。</p><p>Git 的标签虽然是版本库的快照，但其实它就是指向某个 <code>commit</code> 的指针(跟分支很像对不对? 但是分支可以移动，标签不能移动)，所以，创建和删除标签都是瞬间完成的。</p><p>Git 有 <code>commit</code>，为什么还要引入 <code>tag</code>?</p><p>“请把上周一的那个版本打包发布，<code>commit</code> 号是 6a5819e...”</p><p>“一串乱七八糟的数字不好找! ”</p><p>如果换一个办法:</p><p>“请把上周一的那个版本打包发布，版本号是 <code>v1.2</code>”</p><p>“好的，按照 <code>tag v1.2</code> 查找 <code>commit</code> 就行! ”</p><p>所以，<code>tag</code> 就是一个让人容易记住的有意义的名字，它跟某个 <code>commit</code> 绑在一起。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>推荐的标签规范是以小写字母 <code>v</code> 开头，后接 <code>x.x</code> 或 <code>x.x.x</code> 等若干位版本号。</p></div><h2 id="创建轻量标签" tabindex="-1"><a class="header-anchor" href="#创建轻量标签" aria-hidden="true">#</a> 创建轻量标签</h2><p>在 Git 中打标签非常简单，首先，切换到需要打标签的分支上:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch\n* dev\n  master\n$ <span class="token function">git</span> checkout master\nSwitched to branch <span class="token string">&#39;master&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后，敲命令 <code>git tag &lt;name&gt;</code> 就可以打一个新标签:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag v1.0\n-- no output --\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以用命令 <code>git tag</code> 查看所有标签:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag\nv1.0\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>默认标签是打在最新提交的 <code>commit</code> 上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办?</p><p>方法是找到历史提交的 <code>commit id</code>，然后打上就可以了:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline --abbrev-commit\n12a631b <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master, tag: v1.0, origin/master<span class="token punctuation">)</span> merged bug fix <span class="token number">101</span>\n4c805e2 fix bug <span class="token number">101</span>\ne1e9c68 merge with no-ff\nf52c633 <span class="token function">add</span> merge\ncf810e4 conflict fixed\n5dc6824 <span class="token operator">&amp;</span> simple\n14096d0 AND simple\nb17d20e branch <span class="token builtin class-name">test</span>\nd46f35e remove test.txt\nb84166e <span class="token function">add</span> test.txt\n519219b <span class="token function">git</span> tracks changes\ne43a48b understand how stage works\n1094adb append GPL\ne475afc <span class="token function">add</span> distributed\neaadf4e wrote a readme <span class="token function">file</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>比方说要对 <code>add merge</code> 这次提交打标签，它对应的 <code>commit id</code> 是 <code>f52c633</code>，敲入命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag v0.9 f52c633\n--no output --\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>再用命令 <code>git tag</code> 查看标签:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag\nv0.9\nv1.0\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注意，标签不是按时间顺序列出，而是按字母排序的。可以用 <code>git show &lt;tagname&gt;</code> 查看标签信息:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> show v0.9\ncommit f52c63349bc3c1593499807e5c8e972b82c8f286 <span class="token punctuation">(</span>tag: v0.9<span class="token punctuation">)</span>\nAuthor: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>\nDate:   Fri May <span class="token number">18</span> <span class="token number">21</span>:56:54 <span class="token number">2018</span> +0800\n\n    <span class="token function">add</span> merge\n\n<span class="token function">diff</span> --git a/readme.txt b/readme.txt\n<span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>可以看到，<code>v0.9</code> 确实打在 <code>add merge</code> 这次提交上。</p><h2 id="附注标签" tabindex="-1"><a class="header-anchor" href="#附注标签" aria-hidden="true">#</a> 附注标签</h2><p>Git 还可以创建带有说明的标签，用 <code>-a</code> 指定标签名，<code>-m</code> 指定说明文字:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag -a v0.1 -m <span class="token string">&quot;version 0.1 released&quot;</span> 1094adb\n--no output --\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>用命令 <code>git show &lt;tagname&gt;</code> 可以看到说明文字:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> show v0.1\ntag v0.1\nTagger: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>\nDate:   Fri May <span class="token number">18</span> <span class="token number">22</span>:48:43 <span class="token number">2018</span> +0800\n\nversion <span class="token number">0.1</span> released\n\ncommit 1094adb7b9b3807259d8cb349e7df1d4d6477073 <span class="token punctuation">(</span>tag: v0.1<span class="token punctuation">)</span>\nAuthor: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>\nDate:   Fri May <span class="token number">18</span> <span class="token number">21</span>:06:15 <span class="token number">2018</span> +0800\n\n    append GPL\n\n<span class="token function">diff</span> --git a/readme.txt b/readme.txt\n<span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>标签总是和某个 commit 挂钩。如果这个 commit 既出现在 master 分支，又出现在 dev 分支，那么在这两个分支上都可以看到这个标签。</p></div><h3 id="添加小结" tabindex="-1"><a class="header-anchor" href="#添加小结" aria-hidden="true">#</a> 添加小结</h3><p>命令 <code>git tag &lt;tagname&gt;</code> 用于新建一个标签，默认为 <code>HEAD</code>，也可以指定一个 <code>commit id</code>；</p><p>命令 <code>git tag -a &lt;tagname&gt; -m &quot;blablabla...&quot;</code> 可以指定标签信息；</p><p>命令 <code>git tag</code> 可以查看所有标签。</p><h2 id="操作标签" tabindex="-1"><a class="header-anchor" href="#操作标签" aria-hidden="true">#</a> 操作标签</h2><p>如果标签打错了，也可以删除:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag -d v0.1\nDeleted tag <span class="token string">&#39;v0.1&#39;</span> <span class="token punctuation">(</span>was f15b0dd<span class="token punctuation">)</span><span class="token punctuation">\\</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。</p><p>如果要推送某个标签到远程，使用命令 <code>git push origin &lt;tagname&gt;</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin v1.0\nTotal <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>\nTo github.com:Hope-Studio/learngit.git\n * <span class="token punctuation">[</span>new tag<span class="token punctuation">]</span>         v1.0 -<span class="token operator">&gt;</span> v1.0\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>或者，一次性推送全部尚未推送到远程的本地标签:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin --tags\nTotal <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>\nTo github.com:Hope-Studio/learngit.git\n * <span class="token punctuation">[</span>new tag<span class="token punctuation">]</span>         v0.9 -<span class="token operator">&gt;</span> v0.9\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> tag -d v0.9\nDeleted tag <span class="token string">&#39;v0.9&#39;</span> <span class="token punctuation">(</span>was f52c633<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后，从远程删除。删除命令也是 push，但是格式如下:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin :refs/tags/v0.9\nTo github.com:Hope-Studio/learngit.git\n - <span class="token punctuation">[</span>deleted<span class="token punctuation">]</span>         v0.9\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>要看看是否真的从远程库删除了标签，可以登陆 GitHub 查看。</p><h3 id="管理标签小结" tabindex="-1"><a class="header-anchor" href="#管理标签小结" aria-hidden="true">#</a> 管理标签小结</h3><ul><li><p>命令 <code>git push origin &lt;tagname&gt;</code> 可以推送一个本地标签；</p></li><li><p>命令 <code>git push origin --tags</code> 可以推送全部未推送过的本地标签；</p></li><li><p>命令 <code>git tag -d &lt;tagname&gt;</code> 可以删除一个本地标签；</p></li><li><p>命令 <code>git push origin :refs/tags/&lt;tagname&gt;</code> 可以删除一个远程标签。</p></li></ul>',53),t={},p=(0,s(83744).Z)(t,[["render",function(n,a){return e}]])},54479:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-ae5d0daa",path:"/software/git/tag.html",title:"标签管理",lang:"zh-CN",frontmatter:{title:"标签管理",icon:"tag",author:"廖雪峰",category:["Git"],tag:["Git","软件"],copyright:"Copyright by 廖雪峰 Edited by Mr.Hope",summary:"为什么要有 tag 发布一个版本时，我们通常先在版本库中打一个标签 (tag)，这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。 Git 的标签虽然是版本库的快照，但其实它就是指向某个 commit 的指针(跟分支很像对不对? 但是分支可以移动，标签不能移动)，所",head:[["meta",{property:"og:url",content:"https://mrhope.site/software/git/tag.html"}],["meta",{property:"og:title",content:"标签管理"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:author",content:"廖雪峰"}],["meta",{property:"article:tag",content:"Git"}],["meta",{property:"article:tag",content:"软件"}]]},excerpt:"",headers:[{level:2,title:"为什么要有 tag",slug:"为什么要有-tag",children:[]},{level:2,title:"创建轻量标签",slug:"创建轻量标签",children:[]},{level:2,title:"附注标签",slug:"附注标签",children:[{level:3,title:"添加小结",slug:"添加小结",children:[]}]},{level:2,title:"操作标签",slug:"操作标签",children:[{level:3,title:"管理标签小结",slug:"管理标签小结",children:[]}]}],git:{createdTime:1591204114e3,updatedTime:164464503e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:11}]},readingTime:{minutes:3.94,words:1181},filePathRelative:"software/git/tag.md"}}}]);