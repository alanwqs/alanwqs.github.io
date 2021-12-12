(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{187:function(t,_,i){"use strict";i.r(_);var v=i(0),s=Object(v.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,_=t.$createElement,i=t._self._c||_;return i("div",{staticClass:"content"},[i("p",[t._v("关于css的知识点，持续更新中...")]),t._v(" "),i("h2",{attrs:{id:"_1、css-优先级是怎么计算的"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1、css-优先级是怎么计算的"}},[t._v("#")]),t._v(" 1、css 优先级是怎么计算的")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("第一优先级：!important 会覆盖页面内任何位置的元素样式")])]),t._v(" "),i("li",[i("p",[t._v('内联样式，如 style="color: green"，权值为 1000')])]),t._v(" "),i("li",[i("p",[t._v("ID 选择器，如#app，权值为 0100")])]),t._v(" "),i("li",[i("p",[t._v('类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为 0010')])]),t._v(" "),i("li",[i("p",[t._v("标签、伪元素选择器，如 div::first-line，权值为 0001")])]),t._v(" "),i("li",[i("p",[t._v("通配符、子类选择器、兄弟选择器，如*, >, +，权值为 0000")])]),t._v(" "),i("li",[i("p",[t._v("继承的样式没有权值")])])]),t._v(" "),i("h2",{attrs:{id:"_2、position-有哪些值，作用分别是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2、position-有哪些值，作用分别是什么"}},[t._v("#")]),t._v(" 2、position 有哪些值，作用分别是什么")]),t._v(" "),i("p",[i("code",[t._v("static")])]),t._v(" "),i("p",[t._v("static(没有定位)是 position 的默认值，元素处于正常的文档流中，会忽略 left、top、right、bottom 和 z-index 属性")]),t._v(" "),i("p",[i("code",[t._v("relative")])]),t._v(" "),i("p",[t._v("relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响")]),t._v(" "),i("p",[t._v("使用场景：子元素相对于父元素进行定位")]),t._v(" "),i("p",[i("code",[t._v("absolute")])]),t._v(" "),i("p",[t._v("absolute(绝对定位)是指给元素设置绝对的定位，相对定位的对象可以分为两种情况：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("设置了 absolute 的元素如果存在有祖先元素设置了 position 属性为 relative 或者 absolute，则这时元素的定位对象为此已设置 position 属性的祖先元素")])]),t._v(" "),i("li",[i("p",[t._v("如果并没有设置了 position 属性的祖先元素，则此时相对于 body 进行定位")])])]),t._v(" "),i("p",[t._v("使用场景：跟随图标 图标使用不依赖定位父级的 absolute 和 margin 属性进行定位，这样，当文本的字符个数改变时，图标的位置可以自适应")]),t._v(" "),i("p",[i("code",[t._v("fixed")])]),t._v(" "),i("p",[t._v("可以简单说 fixed 是特殊版的 absolute，fixed 元素总是相对于 body 定位的。")]),t._v(" "),i("p",[t._v("使用场景：侧边栏或者广告图")]),t._v(" "),i("p",[i("code",[t._v("inherit")])]),t._v(" "),i("p",[t._v("继承父元素的 position 属性，但需要注意的是 IE8 以及往前的版本都不支持 inherit 属性")]),t._v(" "),i("p",[i("code",[t._v("sticky")])]),t._v(" "),i("p",[t._v("设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。")]),t._v(" "),i("p",[t._v("当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了 top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px 的位置时固定，不再向上移动（相当于此时 fixed 定位）。")]),t._v(" "),i("p",[t._v("使用场景：跟随窗口")]),t._v(" "),i("h2",{attrs:{id:"_3、垂直水平居中实现方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3、垂直水平居中实现方式"}},[t._v("#")]),t._v(" 3、垂直水平居中实现方式")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://juejin.cn/post/6844903982960214029",alt:"垂直水平居中实现方式"}})])])}],!1,null,null,null);_.default=s.exports}}]);