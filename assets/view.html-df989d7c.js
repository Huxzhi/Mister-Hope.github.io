import{_ as l,Y as e,Z as a,a2 as r,a0 as i,a4 as t}from"./framework-e4e0e54d.js";const h={},s=i("p",null,"在 COMSOL Multiphysics 中，“图形” 窗口可供您对几何、网格和结果进行可视化。为此，我们需要认识可用于制定模型视图的众多工具和选项。并了解如何使用 “图形” 窗口工具栏按钮。",-1),d=i("p",null,"本节将介绍如何更改视图、在窗口内移动几何、隐藏部分几何元素、以及如何选择几何实体。",-1),p=t('<h2 id="更改视图" tabindex="-1"><a class="header-anchor" href="#更改视图" aria-hidden="true">#</a> 更改视图</h2><p>“图形” 窗口显示了几何的图形视图、网格以及结果。</p><ul><li>单击鼠标左键并四处拖动即可进行旋转。</li><li>单击鼠标右键并拖动，就可以将模型几何移到窗口的任意位置。</li><li>按住鼠标滚轮按钮向上拖动可以放大，向下拖动即可缩小。</li><li>您也可以使用 “图形” 窗口工具栏来更改几何视图。</li></ul><p>工具栏会根据组件的空间维度及模型树中当前选定的节点进行动态变化。</p><ul><li>使用 “切换到默认视图” 可以返回默认的等轴测视图。</li><li>除了使用鼠标滚轮进行缩放，也可以使用 “放大” 和 “缩小” 按钮完成这一操作。</li><li>使用 “缩放框” 来放大模型几何的特定区域。</li><li>使用 “缩放到窗口大小” 按钮来缩小几何，使其填满整个 “图形” 窗口。</li></ul><p>COMSOL 还提供多个平面视图按钮方便您从任意平面方向查看几何。我们可以在 xy 平面中查看几何，再次单击同一按钮就能查看几何的另一端。然后在 yz 平面和 zx 平面执行相同的操作。还可以更改图形渲染，改进几何的可视化效果。在选择几何时这项功能特别有用。可以打开或关闭 “布景灯”、使用 “透明”、或者对模型进行线框渲染。</p><h2 id="选择几何实体" tabindex="-1"><a class="header-anchor" href="#选择几何实体" aria-hidden="true">#</a> 选择几何实体</h2><p>保持 “透明” 在选择几何实体时会更容易一些。要在 “图形” 窗口中选择几何实体。只需将鼠标悬停在要选择的几何元素的上方。您会看到，此时几何以红色突出显示。继续单击即可完成选中。</p><p>要在重叠的几何实体中进行选择，可以使用鼠标滚轮按钮来选择几何。当您试图选择难以选中的几何实体或内部边界时，这种方法非常好用。</p><ul><li>向上滚动滚轮会选中更靠里层的几何</li><li>向下滚动滚轮会选中更靠外层的几何</li></ul><p>通过这种方式，可以选择部分几何元素。</p><h2 id="隐藏或显示几何实体" tabindex="-1"><a class="header-anchor" href="#隐藏或显示几何实体" aria-hidden="true">#</a> 隐藏或显示几何实体</h2><p>要在模型中隐藏或显示几何实体。需要选择 “单击和隐藏” 按钮，将鼠标悬停在要隐藏的几何元素的上方并单击选中将其隐藏。通过切换“域、边界、边、点”，您可以隐藏不同级别的几何。选择完要隐藏的几何后。请确保取消选择 “单击和隐藏” 按钮。</p><p>通过此功能，您可以查看原本难以看到的几何内部的其他部分，而无需实际更改或影响任何几何元素。</p><ul><li>使用 “查看未隐藏的对象” 按钮，可以查看所有未隐藏的实体。</li><li>使用 “仅查看隐藏的对象” 按钮，可以只查看隐藏的实体。</li><li>使用 “全部查看” 按钮，显示所有隐藏和未隐藏的几何。</li></ul><p>此外，当您隐藏部分几何元素时。COMSOL Multiphysics 会自动为这些实体创建显式选择的列表。您可以在 “定义” 节点下的 “视图” 节点中找到该列表。随后，可以重命名该显式选择。并修改隐藏实体的列表。如果希望重新开始，您始终可以通过 “重置隐藏” 按钮来重置所有隐藏的实体。您可以利用 “图形” 窗口和工具栏按钮。根据需要来完成定制模型视图，从而得到多种不同的分析透视图。</p><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h2><p>您除了可以</p><ul><li>在图形窗口中使用鼠标选择简单几何元素或单个实体</li><li>使用滚轮按钮选择内部几何实体</li></ul><p>您还可以</p><ul><li>使用图形窗口工具栏快速选择多个实体</li><li>使用选择列表窗口处理复杂的几何结构</li><li>使用设置窗口工具栏将几何实体列表从一个节点设置复制粘贴到另一个节点设置中</li><li>使用“预选”功能从功能区中添加物理场节点</li></ul>',21);function c(n,o){return e(),a("div",null,[s,d,r(" more "),p])}const _=l(h,[["render",c],["__file","view.html.vue"]]);export{_ as default};
