const t=JSON.parse('{"key":"v-04af9900","path":"/note/innenu/tag-list.html","title":"小程序页面简易参数表","lang":"zh-CN","frontmatter":{"title":"小程序页面简易参数表","icon":"list","category":["小程序"],"description":"总体结构 参数 必填 值类型 内容 备注 title 是 string 导航栏标题 一般不超过八个字，六字及以下为佳 desc 否 string 页面描述 会显示在页脚 author 否 string 页面的作者 会显示在页脚 time 否 string 页面更新时间 会显示在页脚 grey 否 boolean 使用灰色背景 默认为白色背景 cite 否 string | string[] 页面引用链接 content 否 ComponentConfig[] 页面的内容 数组的每个对象会最终渲染为一个组件 outdated 否 boolean 是否已过时 可展示一条“页面过时”提示 shareable 否 boolean 是否可被分享 是否可以使用小程序的界面分享，默认为 false","head":[["meta",{"property":"og:url","content":"https://mrhope.site/note/innenu/tag-list.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"小程序页面简易参数表"}],["meta",{"property":"og:description","content":"总体结构 参数 必填 值类型 内容 备注 title 是 string 导航栏标题 一般不超过八个字，六字及以下为佳 desc 否 string 页面描述 会显示在页脚 author 否 string 页面的作者 会显示在页脚 time 否 string 页面更新时间 会显示在页脚 grey 否 boolean 使用灰色背景 默认为白色背景 cite 否 string | string[] 页面引用链接 content 否 ComponentConfig[] 页面的内容 数组的每个对象会最终渲染为一个组件 outdated 否 boolean 是否已过时 可展示一条“页面过时”提示 shareable 否 boolean 是否可被分享 是否可以使用小程序的界面分享，默认为 false"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-30T03:43:15.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-30T03:43:15.000Z"}]]},"headers":[{"level":2,"title":"总体结构","slug":"总体结构","link":"#总体结构","children":[]},{"level":2,"title":"支持的组件","slug":"支持的组件","link":"#支持的组件","children":[]},{"level":2,"title":"title","slug":"title","link":"#title","children":[]},{"level":2,"title":"text","slug":"text","link":"#text","children":[]},{"level":2,"title":"p","slug":"p","link":"#p","children":[]},{"level":2,"title":"ul","slug":"ul","link":"#ul","children":[]},{"level":2,"title":"ol","slug":"ol","link":"#ol","children":[]},{"level":2,"title":"list","slug":"list","link":"#list","children":[{"level":3,"title":"通用参数","slug":"通用参数","link":"#通用参数","children":[]}]},{"level":2,"title":"img","slug":"img","link":"#img","children":[]},{"level":2,"title":"doc","slug":"doc","link":"#doc","children":[]},{"level":2,"title":"phone","slug":"phone","link":"#phone","children":[]},{"level":2,"title":"action","slug":"action","link":"#action","children":[]},{"level":2,"title":"account","slug":"account","link":"#account","children":[{"level":3,"title":"LocationConfig","slug":"locationconfig","link":"#locationconfig","children":[]}]},{"level":2,"title":"location","slug":"location","link":"#location","children":[{"level":3,"title":"Point","slug":"point","link":"#point","children":[]}]},{"level":2,"title":"carousel","slug":"carousel","link":"#carousel","children":[]},{"level":2,"title":"card","slug":"card","link":"#card","children":[]},{"level":2,"title":"grid","slug":"grid","link":"#grid","children":[{"level":3,"title":"GridItem","slug":"griditem","link":"#griditem","children":[]}]},{"level":2,"title":"media","slug":"media","link":"#media","children":[{"level":3,"title":"audio","slug":"audio","link":"#audio","children":[]},{"level":3,"title":"video","slug":"video","link":"#video","children":[]}]}],"git":{"createdTime":1636980404000,"updatedTime":1659152595000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":7.53,"words":2259},"filePathRelative":"note/innenu/tag-list.md","localizedDate":"2021年11月15日","excerpt":"<p><img src=\\"https://img.shields.io/badge/版本-V5-blue.svg?style=for-the-badge\\" alt=\\"版本: V5\\"></p>\\n<h2> 总体结构</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">参数</th>\\n<th style=\\"text-align:center\\">必填</th>\\n<th style=\\"text-align:center\\">值类型</th>\\n<th>内容</th>\\n<th>备注</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\">title</td>\\n<td style=\\"text-align:center\\">是</td>\\n<td style=\\"text-align:center\\"><code>string</code></td>\\n<td>导航栏标题</td>\\n<td>一般不超过八个字，六字及以下为佳</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">desc</td>\\n<td style=\\"text-align:center\\">否</td>\\n<td style=\\"text-align:center\\"><code>string</code></td>\\n<td>页面描述</td>\\n<td>会显示在页脚</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">author</td>\\n<td style=\\"text-align:center\\">否</td>\\n<td style=\\"text-align:center\\"><code>string</code></td>\\n<td>页面的作者</td>\\n<td>会显示在页脚</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">time</td>\\n<td style=\\"text-align:center\\">否</td>\\n<td style=\\"text-align:center\\"><code>string</code></td>\\n<td>页面更新时间</td>\\n<td>会显示在页脚</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">grey</td>\\n<td style=\\"text-align:center\\">否</td>\\n<td style=\\"text-align:center\\"><code>boolean</code></td>\\n<td>使用灰色背景</td>\\n<td>默认为白色背景</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">cite</td>\\n<td style=\\"text-align:center\\">否</td>\\n<td style=\\"text-align:center\\"><code>string | string[]</code></td>\\n<td>页面引用链接</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">content</td>\\n<td style=\\"text-align:center\\">否</td>\\n<td style=\\"text-align:center\\"><code>ComponentConfig[]</code></td>\\n<td>页面的内容</td>\\n<td>数组的每个对象会最终渲染为一个组件</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">outdated</td>\\n<td style=\\"text-align:center\\">否</td>\\n<td style=\\"text-align:center\\"><code>boolean</code></td>\\n<td>是否已过时</td>\\n<td>可展示一条“页面过时”提示</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">shareable</td>\\n<td style=\\"text-align:center\\">否</td>\\n<td style=\\"text-align:center\\"><code>boolean</code></td>\\n<td>是否可被分享</td>\\n<td>是否可以使用小程序的界面分享，默认为 <code>false</code></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};