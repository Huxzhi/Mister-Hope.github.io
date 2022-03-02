"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[75612],{4660:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(66252).uE)('<h2 id="原始尺寸与固有尺寸" tabindex="-1"><a class="header-anchor" href="#原始尺寸与固有尺寸" aria-hidden="true">#</a> 原始尺寸与固有尺寸</h2><p>在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。</p><p>一个空的 <code>&lt;div&gt;</code> 是没有尺寸的。如果您在您的 HTML 文件中添加一个空 <code>&lt;div&gt;</code> 并给予其边框，您会在页面上看到一条线。</p><div id="code-demo-2ae1a3c5" class="code-demo-wrapper" data-title="%E6%A1%88%E4%BE%8B" data-code="%7B%22html%22%3A%22%3Cimg%20src%3D%5C%22%2Fassets%2Fimg%2Fstar.png%5C%22%20alt%3D%5C%22star%5C%22%20%2F%3E%5Cn%3Cdiv%20class%3D%5C%22box%5C%22%20%2F%3E%5Cn%22%2C%22css%22%3A%22img%20%7B%5Cn%20%20border%3A%205px%20solid%20darkblue%3B%5Cn%7D%5Cn%5Cn.box%20%7B%5Cn%20%20border%3A%205px%20solid%20darkblue%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/img/star.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>star<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid darkblue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid darkblue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div></div><div class="code-demo-footer"></div></div><h2 id="设置具体的尺寸" tabindex="-1"><a class="header-anchor" href="#设置具体的尺寸" aria-hidden="true">#</a> 设置具体的尺寸</h2><p>当给元素指定尺寸时，我们将其称为<strong>外部尺寸</strong>。 我们可以给它一个具体的 <code>width</code> 和 <code>height</code> 值, 不论它的内容是什么，它将都是该尺寸。</p><div id="code-demo-0f167052" class="code-demo-wrapper" data-title="%E8%AE%BE%E7%BD%AE%E5%B0%BA%E5%AF%B8" data-code="%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22wrapper%5C%22%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%20%2F%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%E8%BF%99%E4%B8%A4%E4%B8%AA%E7%9B%92%E5%AD%90%E9%83%BD%E8%AE%BE%E7%BD%AE%E4%BA%86%E9%AB%98%E5%BA%A6%EF%BC%8C%E4%BD%86%E6%98%AF%E8%BF%99%E4%B8%AA%E7%9B%92%E5%AD%90%E5%9B%A0%E4%B8%BA%E5%86%85%E5%AE%B9%E5%BE%88%E5%A4%9A%EF%BC%8C%E6%97%A0%E6%B3%95%E8%A3%85%E4%B8%8B%EF%BC%8C%E6%89%80%E4%BB%A5%E6%9C%80%E7%BB%88%E4%BA%A7%E7%94%9F%E4%BA%86%E6%BA%A2%E5%87%BA%E3%80%82Mr.Hope%5Cn%20%20%20%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%5Cn%20%20%20%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.wrapper%20%7B%5Cn%20%20display%3A%20flex%3B%5Cn%7D%5Cn%5Cn.box%20%7B%5Cn%20%20border%3A%205px%20solid%20darkblue%3B%5Cn%20%20height%3A%20150px%3B%5Cn%20%20width%3A%20200px%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    这两个盒子都设置了高度，但是这个盒子因为内容很多，无法装下，所以最终产生了溢出。Mr.Hope\n    很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!\n    Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid darkblue<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div></div><div class="code-demo-footer"></div></div><h3 id="使用百分数" tabindex="-1"><a class="header-anchor" href="#使用百分数" aria-hidden="true">#</a> 使用百分数</h3><p>当使用百分数时，您需要清楚，它是什么东西的百分数。对于一个处于另外一个容器当中的盒子，如果您给予了子盒子一个百分数作为宽度，那么它指的是父容器宽度的百分数。</p><div id="code-demo-0e8d8960" class="code-demo-wrapper" data-title="%E4%BD%BF%E7%94%A8%E7%99%BE%E5%88%86%E6%95%B0" data-code="%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22box%5C%22%3E%E6%88%91%E6%98%AF%E7%99%BE%E5%88%86%E6%AF%94%E9%95%BF%E5%BA%A6%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.box%20%7B%5Cn%20%20border%3A%205px%20solid%20darkblue%3B%5Cn%20%20width%3A%2050%25%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是百分比长度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid darkblue<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div><div class="code-demo-footer"></div></div><p>百分数是以包含盒子的块为根据解析的。如果我们的 <code>&lt;div&gt;</code> 没有被指定百分数的值，那么它会占据 100%的可用空间，因为它是块级别的元素。如果我们给了它一个百分数作为宽度，那么这就是它原来情况下可以占据空间的百分数。</p><h3 id="把百分数作为内外边距" tabindex="-1"><a class="header-anchor" href="#把百分数作为内外边距" aria-hidden="true">#</a> 把百分数作为内外边距</h3><p>如果您把 <code>margin</code> 和 <code>padding</code> 设置为百分数的话，您会注意到一些奇怪的表现。</p><p>您也许会希望上下的外边距是元素高的一个百分数，左右外边距是元素宽的百分数。但是，情况不是这样的!</p><p>当您用百分数设定内外边距的时候，值是以<strong>内联尺寸</strong>进行计算的，也即对于左右书写的语言来说的宽度。在我们的例子里面，所有的内外边距是这一宽度的 10%，也就是说，您可以让盒子周围的内外边距大小相同。在您以这种方式使用百分数的时候，这是一个需要记住的事实。</p><div id="code-demo-87662f40" class="code-demo-wrapper" data-title="%E8%BE%B9%E8%B7%9D" data-code="%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22box%5C%22%3E%E6%89%80%E6%9C%89%E6%96%B9%E5%90%91%E7%9A%84%20margin%20and%20padding%20%E9%83%BD%E6%98%AF%2010%25%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.box%20%7B%5Cn%20%20border%3A%205px%20solid%20darkblue%3B%5Cn%20%20width%3A%20300px%3B%5Cn%20%20margin%3A%2010%25%3B%5Cn%20%20padding%3A%2010%25%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>所有方向的 margin and padding 都是 10%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid darkblue<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><div class="code-demo-footer"></div></div><h2 id="min-和-max" tabindex="-1"><a class="header-anchor" href="#min-和-max" aria-hidden="true">#</a> <code>min-</code> 和 <code>max-</code></h2><p>我们可以让 CSS 给定一个元素的最大或最小尺寸。</p><p>如果您有一个包含了变化容量的内容的盒子，而且您总是想让它至少有个确定的高度，您应该给它设置一个 <code>min-height</code> 属性。盒子就会一直保持大于这个最小高度，但是如果有比这个盒子在最小高度状态下所能容纳的更多内容，那么盒子就会变大。这在避免溢出的同时并处理变化容量的内容的时候是很有用的。</p><div id="code-demo-38a0ee88" class="code-demo-wrapper" data-title="%E6%9C%80%E5%A4%A7%E6%9C%80%E5%B0%8F%E5%B0%BA%E5%AF%B8" data-code="%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22wrapper%5C%22%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%20%2F%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%E8%BF%99%E4%B8%A4%E4%B8%AA%E7%9B%92%E5%AD%90%E9%83%BD%E8%AE%BE%E7%BD%AE%E4%BA%86%E6%9C%80%E5%B0%8F%E9%AB%98%E5%BA%A6%EF%BC%8C%E4%BD%86%E6%98%AF%E8%BF%99%E4%B8%AA%E7%9B%92%E5%AD%90%E5%9B%A0%E4%B8%BA%E5%86%85%E5%AE%B9%E5%BE%88%E5%A4%9A%EF%BC%8C%E6%97%A0%E6%B3%95%E8%A3%85%E4%B8%8B%EF%BC%8C%E6%89%80%E4%BB%A5%E6%9C%80%E7%BB%88%E9%AB%98%E5%BA%A6%E4%BA%A7%E7%94%9F%E4%BA%86%E6%89%A9%E5%A4%A7%E3%80%82Mr.Hope%5Cn%20%20%20%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%5Cn%20%20%20%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%20Mr.Hope%20%E5%BE%88%E5%B8%85!%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.wrapper%20%7B%5Cn%20%20display%3A%20flex%3B%5Cn%7D%5Cn%5Cn.box%20%7B%5Cn%20%20border%3A%205px%20solid%20darkblue%3B%5Cn%20%20min-height%3A%20150px%3B%5Cn%20%20width%3A%20200px%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    这两个盒子都设置了最小高度，但是这个盒子因为内容很多，无法装下，所以最终高度产生了扩大。Mr.Hope\n    很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!\n    Mr.Hope 很帅! Mr.Hope 很帅! Mr.Hope 很帅!\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid darkblue<span class="token punctuation">;</span>\n  <span class="token property">min-height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div></div><div class="code-demo-footer"></div></div><p><code>max-width</code> 的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大。这个技术是用来让图片可响应的，所以在更小的设备上浏览的时候，它们会合适地缩放。</p><div id="code-demo-47535dee" class="code-demo-wrapper" data-title="%E6%9C%80%E5%A4%A7%E5%AE%BD%E5%BA%A6%E4%B8%8E%E5%9B%BE%E5%83%8F" data-code="%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22wrapper%5C%22%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%3Cimg%20src%3D%5C%22%2Fassets%2Fimg%2Fstar.png%5C%22%20alt%3D%5C%22star%5C%22%20class%3D%5C%22width%5C%22%20%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%5C%22%3E%5Cn%20%20%20%20%3Cimg%20src%3D%5C%22%2Fassets%2Fimg%2Fstar.png%5C%22%20alt%3D%5C%22star%5C%22%20class%3D%5C%22max%5C%22%20%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22minibox%5C%22%3E%5Cn%20%20%20%20%3Cimg%20src%3D%5C%22%2Fassets%2Fimg%2Fstar.png%5C%22%20alt%3D%5C%22star%5C%22%20class%3D%5C%22max%5C%22%20%2F%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.wrapper%20%7B%5Cn%20%20display%3A%20flex%3B%5Cn%7D%5Cn%5Cn.box%20%7B%5Cn%20%20width%3A%20200px%3B%5Cn%7D%5Cn%5Cn.minibox%20%7B%5Cn%20%20width%3A%2050px%3B%5Cn%7D%5Cn%5Cn.width%20%7B%5Cn%20%20width%3A%20100%25%3B%5Cn%7D%5Cn%5Cn.max%20%7B%5Cn%20%20max-width%3A%20100%25%3B%5Cn%7D%5Cn%22%7D"><div class="demo-wrapper"><div class="code-demo-app"></div></div><div class="code-wrapper"><div class="code"><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/img/star.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>star<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/img/star.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>star<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>max<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>minibox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/img/star.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>star<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>max<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.minibox</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.width</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.max</span> <span class="token punctuation">{</span>\n  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></div></div><div class="code-demo-footer"></div></div><h2 id="viewpoint" tabindex="-1"><a class="header-anchor" href="#viewpoint" aria-hidden="true">#</a> viewpoint</h2><p>viewpoint，即您在浏览器中看到的部分页面，也是有尺寸的。在 CSS 中，我们有 viewpoint 宽度相关的 vw 单位，以及 viewpoint 高度相关的 vh 单位。</p><p>1vh 等于 viewpoint 高度的 1%，1vw 则为 viewpoint 宽度的 1%.您可以用这些单位约束盒子的大小，还有文字的大小。</p><p>如果您改变了 vh 和 vw 的对应值，盒子和字体的大小也会改变； viewpoint 大小的变化也会让它们的大小变化，因为它们是依照 viewpoint 来定大小的。</p>',26),t={},e=(0,a(83744).Z)(t,[["render",function(n,s){return p}]])},20122:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-503fc08f",path:"/code/website/css/intro/sizing.html",title:"调整大小",lang:"zh-CN",frontmatter:{title:"调整大小",icon:"resize",date:"2019-09-06T00:00:00.000Z",category:["CSS"],summary:"原始尺寸与固有尺寸 在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。 一个空的 是没有尺寸的。如果您在您的 HTML 文件中添加一个空 并给予其边框，您会在页面上看到一条线。 案例 设置具体的尺寸 当给元素指定尺寸时，我们将其称为外部尺寸。 我们可以给它一个具体的",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/website/css/intro/sizing.html"}],["meta",{property:"og:title",content:"调整大小"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{property:"article:published_time",content:"2019-09-06T00:00:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"原始尺寸与固有尺寸",slug:"原始尺寸与固有尺寸",children:[]},{level:2,title:"设置具体的尺寸",slug:"设置具体的尺寸",children:[{level:3,title:"使用百分数",slug:"使用百分数",children:[]},{level:3,title:"把百分数作为内外边距",slug:"把百分数作为内外边距",children:[]}]},{level:2,title:"min- 和 max-",slug:"min-和-max",children:[]},{level:2,title:"viewpoint",slug:"viewpoint",children:[]}],git:{createdTime:1605516411e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:8}]},readingTime:{minutes:4.18,words:1253},filePathRelative:"code/website/css/intro/sizing.md"}}}]);