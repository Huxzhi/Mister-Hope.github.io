const n=JSON.parse('{"key":"v-412da2a2","path":"/code/language/js/es6/function.html","title":"函数的扩展","lang":"zh-CN","frontmatter":{"icon":"function","author":"阮一峰","date":"2019-10-21T00:00:00.000Z","category":["JavaScript"],"copyright":"此部分博客采用 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">“保持署名—非商用”创意共享4.0许可证</a>","description":"函数的扩展 函数参数的默认值 基本用法 ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。 function log(x, y) { y = y || \\"World\\"; console.log(x, y); } log(\\"Hello\\"); // Hello World log(\\"Hello\\", \\"China\\"); // Hello China log(\\"Hello\\", \\"\\"); // Hello World","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/js/es6/function.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"函数的扩展"}],["meta",{"property":"og:description","content":"函数的扩展 函数参数的默认值 基本用法 ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。 function log(x, y) { y = y || \\"World\\"; console.log(x, y); } log(\\"Hello\\"); // Hello World log(\\"Hello\\", \\"China\\"); // Hello China log(\\"Hello\\", \\"\\"); // Hello World"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-12T05:50:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"阮一峰"}],["meta",{"property":"article:published_time","content":"2019-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-12T05:50:30.000Z"}]]},"headers":[{"level":2,"title":"函数参数的默认值","slug":"函数参数的默认值","link":"#函数参数的默认值","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"与解构赋值默认值结合使用","slug":"与解构赋值默认值结合使用","link":"#与解构赋值默认值结合使用","children":[]},{"level":3,"title":"参数默认值的位置","slug":"参数默认值的位置","link":"#参数默认值的位置","children":[]},{"level":3,"title":"函数的 length 属性","slug":"函数的-length-属性","link":"#函数的-length-属性","children":[]},{"level":3,"title":"作用域","slug":"作用域","link":"#作用域","children":[]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]}]},{"level":2,"title":"rest 参数","slug":"rest-参数","link":"#rest-参数","children":[]},{"level":2,"title":"严格模式","slug":"严格模式","link":"#严格模式","children":[]},{"level":2,"title":"name 属性","slug":"name-属性","link":"#name-属性","children":[]},{"level":2,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[{"level":3,"title":"箭头函数基本用法","slug":"箭头函数基本用法","link":"#箭头函数基本用法","children":[]},{"level":3,"title":"使用注意点","slug":"使用注意点","link":"#使用注意点","children":[]},{"level":3,"title":"嵌套的箭头函数","slug":"嵌套的箭头函数","link":"#嵌套的箭头函数","children":[]}]},{"level":2,"title":"双冒号运算符","slug":"双冒号运算符","link":"#双冒号运算符","children":[]},{"level":2,"title":"尾调用优化","slug":"尾调用优化","link":"#尾调用优化","children":[{"level":3,"title":"尾调用概念","slug":"尾调用概念","link":"#尾调用概念","children":[]},{"level":3,"title":"具体优化","slug":"具体优化","link":"#具体优化","children":[]},{"level":3,"title":"尾递归","slug":"尾递归","link":"#尾递归","children":[]},{"level":3,"title":"递归函数的改写","slug":"递归函数的改写","link":"#递归函数的改写","children":[]},{"level":3,"title":"尾调用与严格模式","slug":"尾调用与严格模式","link":"#尾调用与严格模式","children":[]},{"level":3,"title":"尾递归优化的实现","slug":"尾递归优化的实现","link":"#尾递归优化的实现","children":[]}]},{"level":2,"title":"函数参数的尾逗号","slug":"函数参数的尾逗号","link":"#函数参数的尾逗号","children":[]}],"git":{"createdTime":1591204114000,"updatedTime":1644645030000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":8}]},"readingTime":{"minutes":30.39,"words":9117},"filePathRelative":"code/language/js/es6/function.md","localizedDate":"2019年10月21日","excerpt":"<h1> 函数的扩展</h1>\\n<h2> 函数参数的默认值</h2>\\n<h3> 基本用法</h3>\\n<p>ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">x<span class=\\"token punctuation\\">,</span> y</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  y <span class=\\"token operator\\">=</span> y <span class=\\"token operator\\">||</span> <span class=\\"token string\\">\\"World\\"</span><span class=\\"token punctuation\\">;</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Hello\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Hello World</span>\\n<span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Hello\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"China\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Hello China</span>\\n<span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Hello\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Hello World</span>\\n</code></pre></div>","autoDesc":true}');export{n as data};