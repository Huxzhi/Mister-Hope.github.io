"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[97423],{31017:(e,l,i)=>{i.r(l),i.d(l,{default:()=>Le});var t=i(66252);const a={class:"custom-container tip"},n=(0,t._)("p",{class:"custom-container-title"},"提示",-1),o=(0,t.Uk)("在开发小程序之前。应当掌握 "),d=(0,t.Uk)("HTML"),u=(0,t.Uk)("、"),r=(0,t.Uk)("CSS"),p=(0,t.Uk)("、"),m=(0,t.Uk)("JavaScript 基础"),c=(0,t.Uk)(" 以及 "),_=(0,t.Uk)("ES6"),h=(0,t.Uk)("。"),s=(0,t.uE)('<h2 id="小程序基础简介" tabindex="-1"><a class="header-anchor" href="#小程序基础简介" aria-hidden="true">#</a> 小程序基础简介</h2><p>在微信小程序中主要有四种文件结构: <code>wxml</code>、<code>wxss</code>、<code>js</code> 和 <code>json</code>。其中 <code>wxml</code> 对应带有 vue.js 特征的 html5，<code>wxss</code> 对应 css3，<code>js</code> 对应 ES6 标准的的 javaScript。</p><p>对于 QQ 小程序，其文件结构为 <code>QML</code>、<code>qss</code>、<code>js</code> 和 <code>json</code>。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>QQ 小程序本质还是换汤不换药的，且 QQ 开发者工具兼容 <code>wxml</code> 与 <code>wss</code>)</p></div><p>小程序开发与网页开发极其相似。所以必须有适当的网页开发基础。零基础的人可能很难直接上手小程序开发。</p><h2 id="教程目录" tabindex="-1"><a class="header-anchor" href="#教程目录" aria-hidden="true">#</a> 教程目录</h2>',6),g=(0,t.Uk)("文件结构"),f=(0,t.Uk)("运行环境"),w=(0,t.Uk)("小程序配置"),k=(0,t.Uk)("全局配置"),U=(0,t.Uk)("页面配置"),W=(0,t.Uk)("sitemap 配置"),v=(0,t.Uk)("小程序框架"),b=(0,t.Uk)("框架介绍"),x=(0,t.Uk)("场景值"),y=(0,t.Uk)(),q=(0,t.Uk)("运行环境"),S=(0,t.Uk)(),j=(0,t.Uk)("运行机制"),L=(0,t.Uk)(),Q=(0,t.Uk)("更新机制"),R=(0,t.Uk)(),M=(0,t.Uk)("逻辑层"),E=(0,t.Uk)("生命周期"),H=(0,t.Uk)("路由"),T=(0,t.Uk)("注册"),P=(0,t.Uk)("App()"),C=(0,t.Uk)("Page()"),A=(0,t.Uk)("运行"),X=(0,t.Uk)("模块化"),Z=(0,t.Uk)("API"),z=(0,t.Uk)("视图层"),N=(0,t.Uk)("WXML"),D=(0,t.Uk)("WXSS"),I=(0,t.Uk)("WXS"),J=(0,t.Uk)("事件"),B=(0,t.Uk)("基础组件"),G=(0,t.Uk)("动画"),O=(0,t.Uk)(),Y=(0,t.Uk)("WXS"),F=(0,t.Uk)(),K=(0,t.Uk)("WXS 事件"),V=(0,t.Uk)(),$=(0,t.Uk)("建议双向绑定"),ee=(0,t.Uk)(),le=(0,t.Uk)("获取界面上的节点信息"),ie=(0,t.Uk)(),te=(0,t.Uk)("相应显示区域变化"),ae=(0,t.Uk)(),ne=(0,t.Uk)("初始渲染缓存"),oe=(0,t.Uk)(),de=(0,t.Uk)("小程序能力"),ue=(0,t.Uk)("网络请求"),re=(0,t.Uk)("存储"),pe=(0,t.Uk)("文件系统"),me=(0,t.Uk)("调试"),ce=(0,t._)("h2",{id:"开发者工具",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#开发者工具","aria-hidden":"true"},"#"),(0,t.Uk)(" 开发者工具")],-1),_e=(0,t.Uk)("工具界面简介"),he=(0,t.Uk)("调试"),se=(0,t.Uk)("npm"),ge=(0,t.Uk)("体验评分"),fe=(0,t.uE)('<h2 id="官方教程" tabindex="-1"><a class="header-anchor" href="#官方教程" aria-hidden="true">#</a> 官方教程</h2><ul><li><a href="https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=0008aeea9a8978ab0086a685851c0a" target="_blank" rel="noopener noreferrer">点击前往</a></li></ul><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><ul><li><a href="https://github.com/Hope-Studio/wxminiappdemo" target="_blank" rel="noopener noreferrer">GitHub repository</a></li></ul><h2 id="mr-hope-框架说明" tabindex="-1"><a class="header-anchor" href="#mr-hope-框架说明" aria-hidden="true">#</a> Mr.Hope 框架说明</h2>',5),we=(0,t.Uk)("小程序框架使用说明"),ke=(0,t.Uk)("tag 值参数表"),Ue=(0,t.Uk)("setPage 库使用说明"),We=(0,t.Uk)("界面简单开发学习指南"),ve=(0,t.Uk)("社团资料提交说明"),be=(0,t.Uk)("分享相关"),xe=(0,t.uE)('<h2 id="学习视频" tabindex="-1"><a class="header-anchor" href="#学习视频" aria-hidden="true">#</a> 学习视频</h2><ul><li><p><a href="https://www.bilibili.com/video/av22790583/" target="_blank" rel="noopener noreferrer">零基础开发小程序</a>(比较新的视频，强调总体思想)</p></li><li><p><a href="https://www.bilibili.com/video/av11938917" target="_blank" rel="noopener noreferrer">小程序-从入门到入土</a>(比较老的视频，针对每个组件或者 API 进行了针对的讲解与示范，但部分内容已经与最新官方文档不符)</p></li></ul><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><ul><li><p><a href="https://github.com/wechat-miniprogram/miniprogram-demo" target="_blank" rel="noopener noreferrer">小程序实例源码</a></p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg" alt="小程序示例二维码"></p></li></ul><h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h2><ul><li><a href="https://q.qq.com/wiki/" target="_blank" rel="noopener noreferrer">QQ 小程序</a></li><li><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/" target="_blank" rel="noopener noreferrer">微信小程序</a></li><li><a href="https://developers.weixin.qq.com/community/develop/question" target="_blank" rel="noopener noreferrer">微信小程序社区</a><ul><li><a href="https://developers.weixin.qq.com/community/develop/list/2?id=" target="_blank" rel="noopener noreferrer">官方公告</a></li></ul></li></ul><h3 id="qq-开发者工具" tabindex="-1"><a class="header-anchor" href="#qq-开发者工具" aria-hidden="true">#</a> QQ 开发者工具</h3><p>现在很多功能还处于缺失状态，bug 到没之前那么多了。</p><ul><li><p><a href="https://q.qq.com/wiki/" target="_blank" rel="noopener noreferrer">查看详情</a></p></li><li><p><a href="https://q.qq.com/wiki/tools/devtool/" target="_blank" rel="noopener noreferrer">下载地址</a></p></li></ul><h2 id="微信开发者工具" tabindex="-1"><a class="header-anchor" href="#微信开发者工具" aria-hidden="true">#</a> 微信开发者工具</h2><p>微信开发者工具用来开发与调试微信小程序和微信相关网页的官方工具。小程序使用该开发工具进行开发。</p>',11),ye=(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"},"下载地址")])],-1),qe=(0,t.Uk)("开发者工具教程"),Se=(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html",target:"_blank",rel:"noopener noreferrer"},"官方使用指南")])],-1),je={},Le=(0,i(83744).Z)(je,[["render",function(e,l){const i=(0,t.up)("RouterLink"),je=(0,t.up)("Badge");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",a,[n,(0,t._)("p",null,[o,(0,t.Wm)(i,{to:"/code/website/html/"},{default:(0,t.w5)((()=>[d])),_:1}),u,(0,t.Wm)(i,{to:"/code/website/css/"},{default:(0,t.w5)((()=>[r])),_:1}),p,(0,t.Wm)(i,{to:"/code/language/js/guide/"},{default:(0,t.w5)((()=>[m])),_:1}),c,(0,t.Wm)(i,{to:"/code/language/js/es6/"},{default:(0,t.w5)((()=>[_])),_:1}),h])]),s,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/file-structure.html"},{default:(0,t.w5)((()=>[g])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/env.html"},{default:(0,t.w5)((()=>[f])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/config/"},{default:(0,t.w5)((()=>[w])),_:1})]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/config/app-config.html"},{default:(0,t.w5)((()=>[k])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/config/page-config.html"},{default:(0,t.w5)((()=>[U])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/config/sitemap-config.html"},{default:(0,t.w5)((()=>[W])),_:1})])])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/frame/"},{default:(0,t.w5)((()=>[v])),_:1})]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/frame/intro.html"},{default:(0,t.w5)((()=>[b])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/frame/scene.html"},{default:(0,t.w5)((()=>[x])),_:1}),y,(0,t.Wm)(je,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/frame/env.html"},{default:(0,t.w5)((()=>[q])),_:1}),S,(0,t.Wm)(je,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/frame/mechanism.html"},{default:(0,t.w5)((()=>[j])),_:1}),L,(0,t.Wm)(je,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/frame/update.html"},{default:(0,t.w5)((()=>[Q])),_:1}),R,(0,t.Wm)(je,{type:"grey",text:"高级"})])])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/"},{default:(0,t.w5)((()=>[M])),_:1})]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/lifetime.html"},{default:(0,t.w5)((()=>[E])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/route.html"},{default:(0,t.w5)((()=>[H])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/register.html"},{default:(0,t.w5)((()=>[T])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/app.html"},{default:(0,t.w5)((()=>[P])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/page.html"},{default:(0,t.w5)((()=>[C])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/run.html"},{default:(0,t.w5)((()=>[A])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/module.html"},{default:(0,t.w5)((()=>[X])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/service/api/"},{default:(0,t.w5)((()=>[Z])),_:1})])])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/"},{default:(0,t.w5)((()=>[z])),_:1})]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/wxml.html"},{default:(0,t.w5)((()=>[N])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/wxss.html"},{default:(0,t.w5)((()=>[D])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/wxs.html"},{default:(0,t.w5)((()=>[I])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/event.html"},{default:(0,t.w5)((()=>[J])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/component.html"},{default:(0,t.w5)((()=>[B])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/animation.html"},{default:(0,t.w5)((()=>[G])),_:1}),O,(0,t.Wm)(je,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/wxs.html"},{default:(0,t.w5)((()=>[Y])),_:1}),F,(0,t.Wm)(je,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/wxs-event.html"},{default:(0,t.w5)((()=>[K])),_:1}),V,(0,t.Wm)(je,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/model.html"},{default:(0,t.w5)((()=>[$])),_:1}),ee,(0,t.Wm)(je,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/selector.html"},{default:(0,t.w5)((()=>[le])),_:1}),ie,(0,t.Wm)(je,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/selector.html"},{default:(0,t.w5)((()=>[te])),_:1}),ae,(0,t.Wm)(je,{type:"grey",text:"高级"})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/view/rendering-cache.html"},{default:(0,t.w5)((()=>[ne])),_:1}),oe,(0,t.Wm)(je,{type:"grey",text:"高级"})])])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/ability/"},{default:(0,t.w5)((()=>[de])),_:1})]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/ability/network.html"},{default:(0,t.w5)((()=>[ue])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/ability/storage.html"},{default:(0,t.w5)((()=>[re])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/ability/file-system.html"},{default:(0,t.w5)((()=>[pe])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/guide/ability/debug.html"},{default:(0,t.w5)((()=>[me])),_:1})])])])])]),ce,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/tools/interface.html"},{default:(0,t.w5)((()=>[_e])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/tools/debug.html"},{default:(0,t.w5)((()=>[he])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/tools/npm.html"},{default:(0,t.w5)((()=>[se])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/tools/audit.html"},{default:(0,t.w5)((()=>[ge])),_:1})])])]),fe,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/framework/"},{default:(0,t.w5)((()=>[we])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/framework/tag-list.html"},{default:(0,t.w5)((()=>[ke])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/framework/setPage.html"},{default:(0,t.w5)((()=>[Ue])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/framework/simple-debug.html"},{default:(0,t.w5)((()=>[We])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/framework/corporation.html"},{default:(0,t.w5)((()=>[ve])),_:1})])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/qr-code.html"},{default:(0,t.w5)((()=>[be])),_:1})])])]),xe,(0,t._)("ul",null,[ye,(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(i,{to:"/code/mini-app/tools/"},{default:(0,t.w5)((()=>[qe])),_:1})])]),Se])],64)}]])},83744:(e,l)=>{l.Z=(e,l)=>{const i=e.__vccOpts||e;for(const[e,t]of l)i[e]=t;return i}},50909:(e,l,i)=>{i.r(l),i.d(l,{data:()=>t});const t={key:"v-7b13410a",path:"/code/mini-app/",title:"小程序",lang:"zh-CN",frontmatter:{title:"小程序",icon:"mini-app",date:"2019-11-25T00:00:00.000Z",category:["小程序"],star:!0,head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/"}],["meta",{property:"og:title",content:"小程序"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:published_time",content:"2019-11-25T00:00:00.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"小程序","image":[""],"datePublished":"2019-11-25T00:00:00.000Z","dateModified":"","author":[]}']]},excerpt:'<div class="custom-container tip"><p class="custom-container-title">提示</p>\n<p>在开发小程序之前。应当掌握 <RouterLink to="/code/website/html/">HTML</RouterLink>、<RouterLink to="/code/website/css/">CSS</RouterLink>、<RouterLink to="/code/language/js/guide/">JavaScript 基础</RouterLink> 以及 <RouterLink to="/code/language/js/es6/">ES6</RouterLink>。</p>\n</div>\n',headers:[{level:2,title:"小程序基础简介",slug:"小程序基础简介",children:[]},{level:2,title:"教程目录",slug:"教程目录",children:[]},{level:2,title:"开发者工具",slug:"开发者工具",children:[]},{level:2,title:"官方教程",slug:"官方教程",children:[]},{level:2,title:"案例",slug:"案例",children:[]},{level:2,title:"Mr.Hope 框架说明",slug:"mr-hope-框架说明",children:[]},{level:2,title:"学习视频",slug:"学习视频",children:[]},{level:2,title:"示例代码",slug:"示例代码",children:[]},{level:2,title:"官方文档",slug:"官方文档",children:[{level:3,title:"QQ 开发者工具",slug:"qq-开发者工具",children:[]}]},{level:2,title:"微信开发者工具",slug:"微信开发者工具",children:[]}],git:{createdTime:1644163298e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2}]},readingTime:{minutes:3.02,words:905},filePathRelative:"code/mini-app/README.md"}}}]);