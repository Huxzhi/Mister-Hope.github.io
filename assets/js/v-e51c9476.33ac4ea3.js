"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[16519],{30939:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});var n=s(95393);const t=[(0,n.uE)('<h2 id="使用密码登录" tabindex="-1"><a class="header-anchor" href="#使用密码登录" aria-hidden="true">#</a> 使用密码登录</h2><ol><li><p>执行以下命令，连接 Linux 云服务器。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>hostname or IP address<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>username 即为前提条件中获得的默认帐号。</li><li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li></ul></li><li><p>输入已获取的密码，按 Enter，即可完成登录。</p></li></ol><h2 id="使用密钥登录" tabindex="-1"><a class="header-anchor" href="#使用密钥登录" aria-hidden="true">#</a> 使用密钥登录</h2><ol><li><p>执行以下命令，赋予私钥文件仅本人可读权限。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">400</span> <span class="token operator">&lt;</span>下载的与云服务器关联的私钥的绝对路径<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行以下命令，进行远程登录。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -i <span class="token operator">&lt;</span>下载的与云服务器关联的私钥的绝对路径<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>hostname or IP address<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>username 即为前提条件中获得的默认帐号。</li><li>hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。</li></ul><p>例如，执行 <code>ssh -i &quot;id_rsa&quot; ubuntu@123.206.113.227</code> 命令，远程登录 Linux 云服务器。</p></li></ol><h2 id="断开链接" tabindex="-1"><a class="header-anchor" href="#断开链接" aria-hidden="true">#</a> 断开链接</h2><p><code>Ctrl + D</code> 或 输入 <code>logout</code>.</p>',6)],r={},o=(0,s(78732).Z)(r,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,t)}]])},78732:(e,a)=>{a.Z=(e,a)=>{const s=e.__vccOpts||e;for(const[e,n]of a)s[e]=n;return s}},46958:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n={key:"v-e51c9476",path:"/linux/ssh.html",title:"ssh",lang:"zh-CN",frontmatter:{title:"ssh",icon:"mount",date:"2019-11-23T00:00:00.000Z",category:["基础"],summary:"使用密码登录 1. 执行以下命令，连接 Linux 云服务器。 username 即为前提条件中获得的默认帐号。; hostname or IP address 为您的 Linux 实例公网 IP 或自定义域名。; 1. 输入已获取的密码，按 Enter，即可完成登录。 使用密钥登录 1. 执行以下命令，赋予私钥文件仅本人可读权限。 1. 执行以下命令，进行",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/ssh.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"ssh"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-11-23T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"",headers:[{level:2,title:"使用密码登录",slug:"使用密码登录",children:[]},{level:2,title:"使用密钥登录",slug:"使用密钥登录",children:[]},{level:2,title:"断开链接",slug:"断开链接",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:.76,words:229},filePathRelative:"linux/ssh.md"}}}]);