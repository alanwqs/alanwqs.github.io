(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{210:function(a,_,t){"use strict";t.r(_);var v=t(0),e=Object(v.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,_=a.$createElement,t=a._self._c||_;return t("div",{staticClass:"content"},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("Big shark@LX")]),a._v(" "),t("p",[a._v("链接：https://juejin.cn/post/7004638318843412493")]),a._v(" "),t("p",[a._v("著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])]),a._v(" "),t("h2",{attrs:{id:"一、简单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、简单"}},[a._v("#")]),a._v(" 一、简单")]),a._v(" "),t("h3",{attrs:{id:"_1-从输入一个-url-地址到浏览器完成渲染的整个过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-从输入一个-url-地址到浏览器完成渲染的整个过程"}},[a._v("#")]),a._v(" 1 从输入一个 URL 地址到浏览器完成渲染的整个过程")]),a._v(" "),t("ul",[t("li",[a._v("浏览器地址栏输入 URL 并回车")]),a._v(" "),t("li",[a._v("浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期")]),a._v(" "),t("li",[a._v("DNS 解析 URL 对应的 IP")]),a._v(" "),t("li",[a._v("根据 IP 建立 TCP 连接（三次握手）")]),a._v(" "),t("li",[a._v("发送 http 请求")]),a._v(" "),t("li",[a._v("服务器处理请求，浏览器接受 HTTP 响应")]),a._v(" "),t("li",[a._v("浏览器解析并渲染页面")]),a._v(" "),t("li",[a._v("关闭 TCP 连接（四次握手）")])]),a._v(" "),t("h3",{attrs:{id:"_2-什么是事件代理（事件委托）-有什么好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是事件代理（事件委托）-有什么好处"}},[a._v("#")]),a._v(" 2 什么是事件代理（事件委托） 有什么好处")]),a._v(" "),t("p",[a._v("事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。")]),a._v(" "),t("p",[t("strong",[a._v("优点")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("减少内存消耗和 dom 操作，提高性能\n在 JavaScript 中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的操作 dom,那么引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变的越长，这也就是为什么要减少 dom 操作的原因。每一个事件处理函数，都是一个对象，多一个事件处理函数，内存中就会被多占用一部分空间。如果要用事件委托，就会将所有的操作放到 js 程序里面，只对它的父级进行操作，与 dom 的操作就只需要交互一次，这样就能大大的减少与 dom 的交互次数，提高性能；")])]),a._v(" "),t("li",[t("p",[a._v("动态绑定事件\n因为事件绑定在父级元素 所以新增的元素也能触发同样的事件")])])]),a._v(" "),t("h3",{attrs:{id:"_3-addeventlistener-默认是捕获还是冒泡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-addeventlistener-默认是捕获还是冒泡"}},[a._v("#")]),a._v(" 3 addEventListener 默认是捕获还是冒泡")]),a._v(" "),t("p",[a._v("默认是冒泡")]),a._v(" "),t("p",[a._v("addEventListener第三个参数默认为 false 代表执行事件冒泡行为。")]),a._v(" "),t("p",[a._v("当为 true 时执行事件捕获行为")]),a._v(" "),t("h3",{attrs:{id:"_4-css-的渲染层合成是什么-浏览器如何创建新的渲染层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-css-的渲染层合成是什么-浏览器如何创建新的渲染层"}},[a._v("#")]),a._v(" 4 css 的渲染层合成是什么 浏览器如何创建新的渲染层")]),a._v(" "),t("p",[a._v("在 DOM 树中每个节点都会对应一个渲染对象（RenderObject），当它们的渲染对象处于相同的坐标空间（z 轴空间）时，就会形成一个 RenderLayers，也就是渲染层。渲染层将保证页面元素以正确的顺序堆叠，这时候就会出现层合成（composite），从而正确处理透明元素和重叠元素的显示。对于有位置重叠的元素的页面，这个过程尤其重要，因为一旦图层的合并顺序出错，将会导致元素显示异常")]),a._v(" "),t("p",[t("strong",[a._v("浏览器如何创建新的渲染层")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("根元素 document")])]),a._v(" "),t("li",[t("p",[a._v("有明确的定位属性（relative、fixed、sticky、absolute）")])]),a._v(" "),t("li",[t("p",[a._v("opacity < 1")])]),a._v(" "),t("li",[t("p",[a._v("有 CSS fliter 属性")])]),a._v(" "),t("li",[t("p",[a._v("有 CSS mask 属性")])]),a._v(" "),t("li",[t("p",[a._v("有 CSS mix-blend-mode 属性且值不为 normal")])]),a._v(" "),t("li",[t("p",[a._v("有 CSS transform 属性且值不为 none")])]),a._v(" "),t("li",[t("p",[a._v("backface-visibility 属性为 hidden")])]),a._v(" "),t("li",[t("p",[a._v("有 CSS reflection 属性")])]),a._v(" "),t("li",[t("p",[a._v("有 CSS column-count 属性且值不为 auto 或者有 CSS column-width 属性且值不为 auto")])]),a._v(" "),t("li",[t("p",[a._v("当前有对于 opacity、transform、fliter、backdrop-filter 应用动画")])]),a._v(" "),t("li",[t("p",[a._v("overflow 不为 visible")])])]),a._v(" "),t("h3",{attrs:{id:"_5-webpack-plugin-和-loader-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-webpack-plugin-和-loader-的区别"}},[a._v("#")]),a._v(" 5 webpack Plugin 和 Loader 的区别")]),a._v(" "),t("ul",[t("li",[a._v("Loader：")])]),a._v(" "),t("p",[a._v("用于对模块源码的转换，loader 描述了 webpack 如何处理非 javascript 模块，并且在 buld 中引入这些依赖。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或者将内联图像转换为 data URL。比如说：CSS-Loader，Style-Loader 等。")]),a._v(" "),t("ul",[t("li",[a._v("Plugin")])]),a._v(" "),t("p",[a._v("目的在于解决 loader 无法实现的其他事,它直接作用于 webpack，扩展了它的功能。在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。")]),a._v(" "),t("h3",{attrs:{id:"_6-apply-call-bind-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-apply-call-bind-区别"}},[a._v("#")]),a._v(" 6 apply call bind 区别")]),a._v(" "),t("p",[a._v("三者都可以改变函数的 this 对象指向。")]),a._v(" "),t("p",[a._v("三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。")]),a._v(" "),t("p",[a._v("三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。")]),a._v(" "),t("p",[a._v("bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。")]),a._v(" "),t("p",[a._v("bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例")])])}],!1,null,null,null);_.default=e.exports}}]);