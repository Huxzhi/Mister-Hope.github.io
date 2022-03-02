"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[47862],{540:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(66252).uE)('<p><code>generator</code> (生成器)是 ES6 标准引入的新的数据类型。一个 <code>generator</code> 看上去像一个函数，但可以返回多次。</p><p>ES6 定义 <code>generator</code> 标准的哥们借鉴了 Python 的 generator 的概念和语法，如果您对 Python 的 generator 很熟悉，那么 ES6 的 generator 就是小菜一碟了。</p><p>我们先复习函数的概念。一个函数是一段完整的代码，调用一个函数就是传入参数，然后返回结果:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> x<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用foo函数</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>函数在执行过程中，如果没有遇到 <code>return</code> 语句(函数末尾如果没有 <code>return</code>，就是隐含的 <code>return undefined;</code>)，控制权无法交回被调用的代码。</p><p><code>generator</code> 跟函数很像，定义如下:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>generator</code> 和函数不同的是，<code>generator</code> 由 <code>function*</code> 定义(注意多出的 <code>*</code> 号)，并且，除了 <code>return</code> 语句，还可以用 <code>yield</code> 返回多次。</p><p>大多数同学立刻就晕了，<code>generator</code> 就是能够返回多次的“函数”? 返回多次有啥用?</p><p>还是举个栗子吧。</p><p>我们以一个著名的斐波那契数列为例，它由 0，1 开头:</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:1em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:1em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:1em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:1em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:1em;"></span><span class="mord">5</span><span class="mspace" style="margin-right:1em;"></span><span class="mord">8</span><span class="mspace" style="margin-right:1em;"></span><span class="mord">13</span><span class="mspace" style="margin-right:1em;"></span><span class="mord">...</span></span></span></span></span></p><p>要编写一个产生斐波那契数列的函数，可以这么写:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 测试:</span>\n<span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 1, 1, 2, 3]</span>\n<span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>函数只能返回一次，所以必须返回一个 Array。但是，如果换成 generator，就可以一次返回一个数，不断返回多次。用 generator 改写如下:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">yield</span> a<span class="token punctuation">;</span>\n    <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    n<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>直接调用试试:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fib {[[GeneratorStatus]]: &quot;suspended&quot;, [[GeneratorReceiver]]: Window}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>直接调用一个 <code>generator</code> 和调用函数不一样，<code>fib(5)</code> 仅仅是创建了一个 <code>generator</code> 对象，还没有去执行它。</p><p>调用 <code>generator</code> 对象有两个方法，一是不断地调用 <code>generator</code> 对象的 <code>next()</code> 方法:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nf<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 0, done: false}</span>\nf<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 1, done: false}</span>\nf<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 1, done: false}</span>\nf<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 2, done: false}</span>\nf<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 3, done: false}</span>\nf<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: undefined, done: true}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>next()</code> 方法会执行 <code>generator</code> 的代码，然后，每次遇到 <code>yield x;</code> 就返回一个对象 <code>{value: x, done: true/false}</code>，然后“暂停”。返回的 <code>value</code> 就是 <code>yield</code> 的返回值，<code>done</code> 表示这个 <code>generator</code> 是否已经执行结束了。如果 <code>done</code> 为 <code>true</code>，则 <code>value</code> 就是 <code>return</code> 的返回值。</p><p>当执行到 <code>done</code> 为 <code>true</code> 时，这个 generator 对象就已经全部执行完毕，不要再继续调用 <code>next()</code> 了。</p><p>第二个方法是直接用 <code>for ... of</code> 循环迭代 generator 对象，这种方式不需要我们自己判断 <code>done</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">yield</span> a<span class="token punctuation">;</span>\n    <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    n<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 依次输出0, 1, 1, 2, 3, ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">generator 和普通函数相比，有什么用?</p><p>因为 generator 可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，利用这一点，写一个 generator 就可以实现需要用面向对象才能实现的功能。例如，用一个对象来保存状态，得这么写:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fib <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">;</span>\n    <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> t<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>n <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token operator">++</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> r<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>用对象的属性来保存状态，相当繁琐。</p><p>Generator 还有另一个巨大的好处，就是把异步回调代码变成“同步”代码。这个好处要等到后面学了 Ajax 以后才能体会到。</p><p>没有 generator 之前的黑暗时代，用 Ajax 时需要这么写代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-1&#39;</span><span class="token punctuation">,</span> data1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-2&#39;</span><span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-3&#39;</span><span class="token punctuation">,</span> data3<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n      err<span class="token operator">?</span> <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">success</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>回调越多，代码越难看。</p><p>有了 generator 的美好时代，用 Ajax 时可以这么写:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n  r1 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-1&#39;</span><span class="token punctuation">,</span> data1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  r2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-2&#39;</span><span class="token punctuation">,</span> data2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  r3 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-3&#39;</span><span class="token punctuation">,</span> data3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">success</span><span class="token punctuation">(</span>r3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>看上去是同步的代码，实际执行是异步的。</p></div>',26),e={},t=(0,a(83744).Z)(e,[["render",function(n,s){return p}]])},15890:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-88b653b6",path:"/code/language/js/function/generator.html",title:"generator",lang:"zh-CN",frontmatter:{title:"generator",icon:"cycle",date:"2019-10-07T00:00:00.000Z",category:["JavaScript"],summary:"generator (生成器)是 ES6 标准引入的新的数据类型。一个 generator 看上去像一个函数，但可以返回多次。\nES6 定义 generator 标准的哥们借鉴了 Python 的 generator 的概念和语法，如果您对 Python 的 generator 很熟悉，那么 ES6 的 generator 就是小菜一碟了。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/function/generator.html"}],["meta",{property:"og:title",content:"generator"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:published_time",content:"2019-10-07T00:00:00.000Z"}]]},excerpt:"<p><code>generator</code> (生成器)是 ES6 标准引入的新的数据类型。一个 <code>generator</code> 看上去像一个函数，但可以返回多次。</p>\n<p>ES6 定义 <code>generator</code> 标准的哥们借鉴了 Python 的 generator 的概念和语法，如果您对 Python 的 generator 很熟悉，那么 ES6 的 generator 就是小菜一碟了。</p>\n",headers:[],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:10}]},readingTime:{minutes:3.52,words:1055},filePathRelative:"code/language/js/function/generator.md"}}}]);