"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3554],{89081:(e,t,d)=>{d.r(t),d.d(t,{default:()=>c});const o=(0,d(66252).uE)('<h2 id="文件系统" tabindex="-1"><a class="header-anchor" href="#文件系统" aria-hidden="true">#</a> 文件系统</h2><p>目录就相当于 Windows 中的文件夹，目录中存放的既可以是文件，也可以是其他的子目录，而文件中存储的是真正的信息。</p><p>文件系统的最顶层是由根目录开始的，系统使用“<code>/</code>”来表示根目录，在根目录之下的既可以是目录，也可以是文件，而每一个目录中又可以包含(子)目录或文件。如此反复就可以构成一个庞大的文件系统。 其实，使用这种树状、具有层次的文件结构主要目的是方便文件系统的管理和维护，想象一下，如果所有的文件都放在一个目录下，其文件系统的管理和维护将变成一场噩梦。</p><p>现实中也有许多类似的例子，例如在整个行政管理体制中，村民就相当于文件，他们住在一个村庄中，村庄就是存储村民的目录。许多村又组成了个乡，这个乡就相当于存储村的目录，依此类推，最终就构建出了一个庞大的行政区域管理结构图。</p><p>注意，目录名或文件名都是区分大小写的，如 dog、DOG 和 Dog 为 3 个不同的目录或文件。完整的目录或文件路径是由一连串的目录名所组成的，其中每一个目录由“/”来分隔。如 cat 的完整路径是 <code>/home/cat</code>。</p><p>在文件系统中，有两个特殊的目录，一个是用户所在的工作目录，即当前目录，可用一个点“<code>.</code>”表示；另一个是当前目录的上一层目录，也叫父目录，用两个点“<code>..</code>”表示。</p><p>如果一个目录或文件名是以一个点开始，就表示这个目录或文件是一个隐藏目录或文件。即以默认方式査找(后续会讲查找命令)时，不显示该目录或文件。</p><p>为了方便管理和维护，Linux 系统采用了文件系统层次标准，也称为 FHS 标准，它规定了根目录下各个目录应该存在哪些类型的文件(或子目录)，比如说，在 <code>/bin</code> 和 <code>/sbin</code> 目录中存放的应该是可执行文件，有关各个目录存放文件的类型，已在《Linux 文件目录结构一览表》一节中作了详解介绍，这里不再过多赘述。</p><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h2><p>虽然从名称上不容易分辨，但是可以从颜色上进行区分。一般情况下，Linux 用蓝色代表目录，其他颜色则表示是文件。</p><p>和 Linux 不同，Windows 下带有 <code>&lt;DIR&gt;</code> 标记的行或使用中括号 <code>[]</code> 括起来的名称就是目录，其他的则是文件。</p><p>不仅如此，Linux 中还可以用不同的颜色来区分不同种类的文件，例如绿色代表可执行文件、红色代表压缩文件、浅绿色代表链接文件、白色代表其他文件、黄色代表设备文件等。</p><p>但是，不同颜色所代表的文件类型不一定是这样，更准确的对应方式还取决于配置文件 <code>/etc/DIR_COLORS</code> 中的规定。因此，如果想详细了解不同文件类型所对应的颜色，可以使用 <code>man</code> 命令，例如:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man dir_colors</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意，有些 Linux 发行版单独使用 <code>ls</code> 命令，无法显示出带有不同颜色的文件和目录，此时就需要使用 <code>ls --color=auto</code> 命令，明确令其使用颜色来区分文件类型。</p><p>在此基础上，如果不想每次使用 <code>ls</code> 命令时，都显式附带 <code>--color=auto</code>，可以执行如下命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># alias ls = &#39;ls --color=auto&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过给 <code>ls --color==auto</code> 这个整体设置一个别名 <code>ls</code>，这样当后续使用 <code>ls</code> 命令时，就等同于执行 <code>ls --color=auto</code> 命令。</p><p>同时，如果想使这个设置永远生效，还需要将其添加到 <code>/etc/bashrc</code> 或 <code>/home/&lt;user&gt;/.bashrc</code> 文件中，前者对所有用户有效，而后者仅对用户 <code>&lt;user&gt;</code> 有效。</p><p>其实，那些默认提供颜色功能的 Linux 发行版，也是通过这个方法开启的功能。</p><p>当然，通过颜色来区分文件类型，难免有些牵强，对于颜色不太敏感的读者来说，很容易搞错。Linux 中精确判断文件类型的方法，是通过文件本身所具有的属性进行判断。</p><p>通过 <code>ls -l</code> 命令，我们就可以查看当前目录下所有文件和目录各自的属性</p><h2 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h2><ul><li>除了字符“/”之外，所有的字符都可以使用，但是要注意，在目录名或文件名中，使用某些特殊字符并不是明智之举。例如，在命名时应避免使用 <code>&lt;</code>、<code>&gt;</code>、<code>?</code>、<code>*</code> 和非打印字符等。如果一个文件名中包含了特殊字符，例如空格，那么在访问这个文件时就需要使用引号将文件名括起来。</li><li>目录名或文件名的长度不能超过 255 个字符。</li><li>目录名或文件名是区分大小写的。如 DOG、dog、Dog 和 DOg ，是互不相同的目录名或文件名，但使用字符大小写来区分不同的文件或目录，也是不明智的。</li></ul><h2 id="不同字符对应的文件类型" tabindex="-1"><a class="header-anchor" href="#不同字符对应的文件类型" aria-hidden="true">#</a> 不同字符对应的文件类型</h2><table><thead><tr><th>第一个字符</th><th>文件类型</th></tr></thead><tbody><tr><td>-</td><td>普通文件，包括纯文本文件、二进制文件、各种压缩文件等。</td></tr><tr><td>d</td><td>目录，类似 Windows 系统中的文件夹。</td></tr><tr><td>b</td><td>块设备文件，就是保存大块数据的设备，比如最常见的硬盘。</td></tr><tr><td>c</td><td>字符设备文件，例如键盘、鼠标等。</td></tr><tr><td>s</td><td>套接字文件，通常用在网络数据连接，可以启动一个程序开监听用户的要求，用户可以通过套接字进行数据通信。</td></tr><tr><td>p</td><td>管道文件，其主要作用是解决多个程序同时存取一个文件所造成的错误。</td></tr><tr><td>l</td><td>链接文件，类似 Windows 系统中的快捷方式。</td></tr></tbody></table>',26),a={},c=(0,d(83744).Z)(a,[["render",function(e,t){return o}]])},14424:(e,t,d)=>{d.r(t),d.d(t,{data:()=>o});const o={key:"v-53becefe",path:"/linux/file/file.html",title:"文件",lang:"zh-CN",frontmatter:{title:"文件",icon:"file",date:"2019-11-17T00:00:00.000Z",category:["Linux"],summary:"文件系统 目录就相当于 Windows 中的文件夹，目录中存放的既可以是文件，也可以是其他的子目录，而文件中存储的是真正的信息。 文件系统的最顶层是由根目录开始的，系统使用“/”来表示根目录，在根目录之下的既可以是目录，也可以是文件，而每一个目录中又可以包含(子)目录或文件。如此反复就可以构成一个庞大的文件系统。 其实，使用这种树状、具有层次的文件结构主要目",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/file/file.html"}],["meta",{property:"og:title",content:"文件"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:published_time",content:"2019-11-17T00:00:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"文件系统",slug:"文件系统",children:[]},{level:2,title:"文件",slug:"文件",children:[]},{level:2,title:"命名规则",slug:"命名规则",children:[]},{level:2,title:"不同字符对应的文件类型",slug:"不同字符对应的文件类型",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:5.16,words:1549},filePathRelative:"linux/file/file.md"}}}]);