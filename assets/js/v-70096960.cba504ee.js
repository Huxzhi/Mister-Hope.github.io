"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80734],{74960:(n,e,t)=>{t.r(e),t.d(e,{default:()=>Un});var a=t(66252);const o=(0,a.Uk)("注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 "),s=(0,a.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。</p></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><h3 id="object-object" tabindex="-1"><a class="header-anchor" href="#object-object" aria-hidden="true">#</a> Object object</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>onLaunch</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序初始化。</td><td></td></tr><tr><td>onShow</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序启动或切前台。</td><td></td></tr><tr><td>onHide</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序切后台。</td><td></td></tr><tr><td>onError</td><td>function</td><td></td><td>否</td><td>错误监听函数。</td><td></td></tr><tr><td>onPageNotFound</td><td>function</td><td></td><td>否</td><td>页面不存在监听函数。</td><td>1.9.90</td></tr><tr><td>onUnhandledRejection</td><td>function</td><td></td><td>否</td><td>未处理的 Promise 拒绝事件监听函数。</td><td>2.10.0</td></tr><tr><td>onThemeChange</td><td>function</td><td></td><td>否</td><td>监听系统主题变化</td><td>2.11.0</td></tr></tbody></table><p>| 其他 | any | | 否 | 开发者可以添加任意的函数或数据变量到 <code>Object</code> 参数中，用 <code>this</code> 可以访问 |</p>',5),p=(0,a.Uk)("关于小程序前后台的定义和小程序的运行机制，请参考 "),r=(0,a.Uk)("运行机制"),c=(0,a.Uk)("。"),l=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something initial when launch.</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something when show.</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something when hide.</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token string">&quot;I am global data&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="onlaunch-object-object" tabindex="-1"><a class="header-anchor" href="#onlaunch-object-object" aria-hidden="true">#</a> onLaunch(Object object)</h3>',2),i=(0,a.Uk)("小程序初始化完成时触发，全局只触发一次。参数也可以使用 "),d={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},u=(0,a._)("code",null,"wx.getLaunchOptionsSync",-1),h=(0,a.Uk)(" 获取。"),b=(0,a.Uk)("参数: 与 "),m={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},k=(0,a._)("code",null,"wx.getLaunchOptionsSync",-1),g=(0,a.Uk)(" 一致"),j=(0,a._)("h3",{id:"onshow-object-object",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onshow-object-object","aria-hidden":"true"},"#"),(0,a.Uk)(" onShow(Object object)")],-1),v=(0,a.Uk)("小程序启动，或从后台进入前台显示时触发。也可以使用 "),_={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},f=(0,a._)("code",null,"wx.onAppShow",-1),w=(0,a.Uk)(" 绑定监听。"),x=(0,a.Uk)("参数: 与 "),U={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},q=(0,a._)("code",null,"wx.onAppShow",-1),A=(0,a.Uk)(" 一致"),y=(0,a._)("h2",{id:"onhide",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onhide","aria-hidden":"true"},"#"),(0,a.Uk)(" onHide()")],-1),O=(0,a.Uk)("小程序从前台进入后台时触发。也可以使用 "),W={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html",target:"_blank",rel:"noopener noreferrer"},P=(0,a._)("code",null,"wx.onAppHide",-1),S=(0,a.Uk)(" 绑定监听。"),T=(0,a._)("h2",{id:"onerror-string-error",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onerror-string-error","aria-hidden":"true"},"#"),(0,a.Uk)(" onError(String error)")],-1),E=(0,a.Uk)("小程序发生脚本错误或 API 调用报错时触发。也可以使用 "),N={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},C=(0,a._)("code",null,"wx.onError",-1),R=(0,a.Uk)(" 绑定监听。"),F=(0,a.Uk)("参数: 与 "),L={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},H=(0,a._)("code",null,"wx.onError",-1),D=(0,a.Uk)(" 一致"),I=(0,a._)("h2",{id:"onpagenotfound-object-object",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onpagenotfound-object-object","aria-hidden":"true"},"#"),(0,a.Uk)(" onPageNotFound(Object object)")],-1),Z=(0,a.Uk)("小程序要打开的页面不存在时触发。也可以使用 "),z={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},B=(0,a._)("code",null,"wx.onPageNotFound",-1),M=(0,a.Uk)(" 绑定监听。注意事项请参考 "),Y={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},G=(0,a._)("code",null,"wx.onPageNotFound",-1),J=(0,a.Uk)("。"),K=(0,a.Uk)("参数: 与 "),Q={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},V=(0,a._)("code",null,"wx.onPageNotFound",-1),X=(0,a.Uk)(" 一致"),$=(0,a.uE)('<p>示例代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onPageNotFound</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;pages/...&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果是 tabbar 页面，请使用 wx.switchTab</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="onunhandledrejection-object-object" tabindex="-1"><a class="header-anchor" href="#onunhandledrejection-object-object" aria-hidden="true">#</a> onUnhandledRejection(Object object)</h2><blockquote><p>基础库 2.10.0 开始支持</p></blockquote>',4),nn=(0,a.Uk)("小程序有未处理的 Promise 拒绝时触发。也可以使用 "),en={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},tn=(0,a._)("code",null,"wx.onUnhandledRejection",-1),an=(0,a.Uk)(" 绑定监听。注意事项请参考 "),on={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},sn=(0,a._)("code",null,"wx.onUnhandledRejection",-1),pn=(0,a.Uk)("。"),rn=(0,a.Uk)("参数: 与 "),cn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},ln=(0,a._)("code",null,"wx.onUnhandledRejection",-1),dn=(0,a.Uk)(" 一致"),un=(0,a._)("h2",{id:"onthemechange-object-object",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onthemechange-object-object","aria-hidden":"true"},"#"),(0,a.Uk)(" onThemeChange(Object object)")],-1),hn=(0,a._)("blockquote",null,[(0,a._)("p",null,"基础库 2.11.0 开始支持")],-1),bn=(0,a.Uk)("系统切换主题时触发。也可以使用 "),mn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},kn=(0,a._)("code",null,"wx.onThemeChange",-1),gn=(0,a.Uk)(" 绑定监听。"),jn=(0,a.Uk)("参数: 与 "),vn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},_n=(0,a._)("code",null,"wx.onThemeChange",-1),fn=(0,a.Uk)(" 一致"),wn=(0,a.uE)('<h2 id="appobject-getapp-object-object" tabindex="-1"><a class="header-anchor" href="#appobject-getapp-object-object" aria-hidden="true">#</a> AppObject getApp(Object object)</h2><p>获取到小程序全局唯一的 App 实例。</p><h3 id="getapp-参数" tabindex="-1"><a class="header-anchor" href="#getapp-参数" aria-hidden="true">#</a> getApp 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>allowDefault</td><td>boolean</td><td>false</td><td>否</td><td>在 <code>App</code> 未定义时返回默认实现。当 <code>App</code> 被调用时，默认实现中定义的属性会被覆盖合并到 App 中。一般用于独立分包</td><td>2.2.4</td></tr></tbody></table><p>示例代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// other.js</span>\n<span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I am global data</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>不要在定义于 <code>App()</code> 内的函数中，或调用 <code>App</code> 前调用 <code>getApp()</code> ，使用 <code>this</code> 就可以拿到 app 实例。</li><li>通过 <code>getApp()</code> 获取实例之后，不要私自调用生命周期函数。</li></ul></div>',8),xn={},Un=(0,t(83744).Z)(xn,[["render",function(n,e){const t=(0,a.up)("Badge"),xn=(0,a.up)("RouterLink"),Un=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("p",null,[o,(0,a.Wm)(t,{text:"重要",type:"error"})]),s,(0,a._)("p",null,[p,(0,a.Wm)(xn,{to:"/code/mini-app/guide/service/run.html"},{default:(0,a.w5)((()=>[r])),_:1}),c]),l,(0,a._)("p",null,[i,(0,a._)("a",d,[u,(0,a.Wm)(Un)]),h]),(0,a._)("p",null,[b,(0,a._)("a",m,[k,(0,a.Wm)(Un)]),g]),j,(0,a._)("p",null,[v,(0,a._)("a",_,[f,(0,a.Wm)(Un)]),w]),(0,a._)("p",null,[x,(0,a._)("a",U,[q,(0,a.Wm)(Un)]),A]),y,(0,a._)("p",null,[O,(0,a._)("a",W,[P,(0,a.Wm)(Un)]),S]),T,(0,a._)("p",null,[E,(0,a._)("a",N,[C,(0,a.Wm)(Un)]),R]),(0,a._)("p",null,[F,(0,a._)("a",L,[H,(0,a.Wm)(Un)]),D]),I,(0,a._)("p",null,[Z,(0,a._)("a",z,[B,(0,a.Wm)(Un)]),M,(0,a._)("a",Y,[G,(0,a.Wm)(Un)]),J]),(0,a._)("p",null,[K,(0,a._)("a",Q,[V,(0,a.Wm)(Un)]),X]),$,(0,a._)("p",null,[nn,(0,a._)("a",en,[tn,(0,a.Wm)(Un)]),an,(0,a._)("a",on,[sn,(0,a.Wm)(Un)]),pn]),(0,a._)("p",null,[rn,(0,a._)("a",cn,[ln,(0,a.Wm)(Un)]),dn]),un,hn,(0,a._)("p",null,[bn,(0,a._)("a",mn,[kn,(0,a.Wm)(Un)]),gn]),(0,a._)("p",null,[jn,(0,a._)("a",vn,[_n,(0,a.Wm)(Un)]),fn]),wn],64)}]])},83744:(n,e)=>{e.Z=(n,e)=>{const t=n.__vccOpts||n;for(const[n,a]of e)t[n]=a;return t}},34037:(n,e,t)=>{t.r(e),t.d(e,{data:()=>a});const a={key:"v-70096960",path:"/code/mini-app/guide/service/app.html",title:"App",lang:"zh-CN",frontmatter:{title:"App",icon:"app",category:["小程序"],summary:"注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 \n注意\nApp() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/service/app.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"App"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-03-21T09:53:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-03-21T09:53:58.000Z"}]]},excerpt:'<p>注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 <Badge text="重要" type="error" /></p>\n<div class="custom-container warning"><p class="custom-container-title">注意</p>\n<p>App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。</p>\n</div>\n',headers:[{level:2,title:"参数",slug:"参数",children:[{level:3,title:"Object object",slug:"object-object",children:[]},{level:3,title:"onLaunch(Object object)",slug:"onlaunch-object-object",children:[]},{level:3,title:"onShow(Object object)",slug:"onshow-object-object",children:[]}]},{level:2,title:"onHide()",slug:"onhide",children:[]},{level:2,title:"onError(String error)",slug:"onerror-string-error",children:[]},{level:2,title:"onPageNotFound(Object object)",slug:"onpagenotfound-object-object",children:[]},{level:2,title:"onUnhandledRejection(Object object)",slug:"onunhandledrejection-object-object",children:[]},{level:2,title:"onThemeChange(Object object)",slug:"onthemechange-object-object",children:[]},{level:2,title:"AppObject getApp(Object object)",slug:"appobject-getapp-object-object",children:[{level:3,title:"getApp 参数",slug:"getapp-参数",children:[]}]}],git:{createdTime:1604856934e3,updatedTime:1616320438e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:7}]},readingTime:{minutes:2.92,words:875},filePathRelative:"code/mini-app/guide/service/app.md"}}}]);