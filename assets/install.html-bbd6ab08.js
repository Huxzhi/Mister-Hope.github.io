import{_ as o,Y as c,Z as r,a0 as s,a1 as t,$ as a,a3 as l,a4 as i,F as p}from"./framework-e4e0e54d.js";const d="/assets/install1-e737c8ad.png",h="/assets/install2-0399c579.png",_="/assets/install3-6bd1e570.png",g="/assets/install4-b46348f5.png",u="/assets/install5-9293a8b5.png",m="/assets/install6-6851c6f6.png",b="/assets/install7-bd9be111.png",f="/assets/install8-53e542e6.png",G="/assets/install9-a06d6fe3.png",v="/assets/install10-8a4d24a4.png",S="/assets/install11-feef8c86.png",k="/assets/install12-10d0a837.png",x="/assets/install13-b28ae7fd.png",w="/assets/install14-4abea878.png",H="/assets/shell-715d658a.png",q="/assets/github-39baf0e9.png",C="/assets/githubSSH-22e31019.png",L={},y=s("h2",{id:"git-下载",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#git-下载","aria-hidden":"true"},"#"),t(" Git 下载")],-1),B={href:"https://git-scm.com/downloads/",target:"_blank",rel:"noopener noreferrer"},V=i('<h2 id="git-的安装" tabindex="-1"><a class="header-anchor" href="#git-的安装" aria-hidden="true">#</a> Git 的安装</h2><ol><li><p>同意协议并选择安装位置 (不建议更改安装位置)</p><p><img src="'+d+'" alt="安装协议"></p><p><img src="'+h+'" alt="安装位置"></p></li><li><p>启用 LFS 支持，其他随意 (影响不大)</p><p><img src="'+_+'" alt="组件选择"></p></li><li><p>自行决定是否创建启动菜单</p><p><img src="'+g+'" alt="是否创建启动菜"></p></li><li><p>选择使用 VS Code 作为 git 的默认编辑器。</p><p><img src="'+u+'" alt="设置默认编辑器"></p></li><li><p>选择 Git 使用的默认分支名，GitHub 已经将默认分支名称改为 main。</p><p><img src="'+m+'" alt="设置默认分支名称"></p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在 2020 年的黑人运动中，部分黑人认为 master 这个词是对它们的冒犯。</p></div></li><li><p>选择第二项，这将允许您在第三方工具中使用 Git，同时不会覆盖默认的 Windows 命令。</p><p><img src="'+b+'" alt="Git 命令行"></p></li><li><p>使用 OpenSSL Library</p><p><img src="'+f+'" alt="Git SSL"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果自己公司有 CA，或者在开发中需要 Git 承认某些自签 CA，则需要选择第二项。</p></div></li><li><p>务必选择最后一项 “原样检出与提交”</p><p><img src="'+G+'" alt="Git 行尾设置"></p></li><li><p>选择 Git 终端</p><p><img src="'+v+'" alt="Git 终端"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您对 VS Code 和 PowerShell 还不熟悉，建议选择 MinTTY，以方便您接下来在学习中对 Git Bash 的临时使用。</p></div></li><li><p>选择 <code>git pull</code> 的默认行为，保持默认不要改动</p><p><img src="'+S+'" alt="Git Pull Action"></p></li><li><p>选择凭据储存管理器，请选择第一个跨平台管理器</p><p><img src="'+k+'" alt="凭据储存管理器设置"></p></li><li><p>额外的选项确认，均勾选即可</p><p><img src="'+x+'" alt="额外选项"></p></li><li><p>一些实验性的功能，通常不太稳定或有 bug，不同 Git 版本会有差异，可根据自身情况确定</p><p><img src="'+w+'" alt="实验性功能"></p></li></ol><h2 id="git-bash" tabindex="-1"><a class="header-anchor" href="#git-bash" aria-hidden="true">#</a> Git Bash</h2><p>安装完成后，您可以通过搜索找到“Git Bash” (Mac 上叫 Git Shell)，这是一个 Git 提供的命令窗口，您可以在这里运行 Git 命令。</p><p><img src="'+H+'" alt="Git Bash"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您对 VS Code 和 PowerShell 还不熟悉，您可以在接下来的学习与操作中使用 Git Bash。</p><p>否则，你可以:</p><ul><li>在 Linux 上直接通过终端来使用 Git。</li><li>在 Windows 上安装最新的 PowerShell，并在终端中使用 Git。</li></ul></div><h2 id="git-的初次配置" tabindex="-1"><a class="header-anchor" href="#git-的初次配置" aria-hidden="true">#</a> Git 的初次配置</h2>',7),A=i(`<li><p>为 Git 全局配置用户名和邮箱。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;email@example.com&quot;</span>
</code></pre></div><p>将上方的字符串换成您自己的名字和邮箱。</p><p>如:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Mr.Hope&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;mister-hope@outlook.com&quot;</span>
</code></pre></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>由于 Git 是一个多人协作的版本控制系统，首先您应当设置您的身份。</p></div></li>`,1),N=i(`<p>创建 SSH Key。打开 Shell (Windows 下打开 cmd)，创建 SSH Key:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;youremail@example.com&quot;</span>
</code></pre></div><p>您需要把邮件地址换成您自己的邮件地址，然后一路回车，使用默认值即可，由于这个 Key 也不是用于军事目的，所以也无需设置密码。</p><p>如果一切顺利的话，可以在用户主目录里找到 .ssh 目录，里面有 id_rsa 和 id_rsa.pub 两个文件，这两个就是 SSH Key 的秘钥对，id_rsa 是私钥，不能泄露出去，id_rsa.pub 是公钥，可以放心地告诉任何人。</p>`,4),K={class:"hint-container tip"},P=s("p",{class:"hint-container-title"},"提示",-1),R=s("li",null,[s("p",null,"ssh-keygen 用来生成一堆密钥，作为您的身份识别信息，您可以放心的把公钥交给别人，留下自己的私钥。")],-1),W=s("code",null,".ssh",-1),E=s("div",{class:"hint-container info"},[s("p",{class:"hint-container-title"},"RSA"),s("p",null,"RSA 是一种不对称加密，公钥的加密只能通过私钥解开，反之私钥的加密只能由公钥解开。也就是说当您给别人自己的公钥的时候，他们也无法冒充您。")],-1),M={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},T=s("p",null,[s("img",{src:q,alt:"GitHub 界面简介"})],-1),Y=s("p",null,"登陆 GitHub 后，点击右上角头像，进入设置。",-1),F=s("p",null,'进入 "安全设置" 下的 "SSH 公钥" 界面。',-1),I=s("p",null,[s("img",{src:C,alt:"GitHub 界面简介"})],-1),O=s("p",null,"在标题中填写公钥的备注名称，把 id_rsa.pub 文件的内容粘贴到底下的输入框中，设置一个标识此电脑的备注。",-1);function Z($,j){const n=p("RouterLink"),e=p("ExternalLinkIcon");return c(),r("div",null,[y,s("p",null,[t("官网在国外，网速较慢。在安装 Git 前推荐安装好 "),a(n,{to:"/software/vscode/"},{default:l(()=>[t("VS Code")]),_:1}),t("。")]),s("ul",null,[s("li",null,[s("a",B,[t("官网下载"),a(e)])])]),V,s("ol",null,[A,s("li",null,[N,s("div",K,[P,s("ul",null,[R,s("li",null,[s("p",null,[W,t(" 目录是默认隐藏的。Win10 查看隐藏文件详见 "),a(n,{to:"/code/windows/hidden-file.html"},{default:l(()=>[t("显示隐藏的文件")]),_:1})])])])]),E]),s("li",null,[s("p",null,[t("打开 "),s("a",M,[t("GitHub"),a(e)]),t(' 并选择 "Sign in" 注册自己的账号。')]),T,Y,F,I,O])])])}const D=o(L,[["render",Z],["__file","install.html.vue"]]);export{D as default};
