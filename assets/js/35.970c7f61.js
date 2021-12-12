(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{200:function(t,_,e){"use strict";e.r(_);var v=e(0),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("div",{staticClass:"content"},[e("p",[t._v("状态码的职责是返回请求的结果，借助状态码我们可以知道服务器是正常处理了请求还是出现了错误")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("100 Continue ：表明到目前为止都很正常，客户端可以继续发送请求或者忽略这个响应。")]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("200 OK")]),t._v(" "),e("p",[t._v("204 No Content ：请求已经成功处理，但是返回的响应报文不包含实体的主体部分。一般在只需要从客户端往服务器发送信息，而不需要返回数据时使用。")]),t._v(" "),e("p",[t._v("206 Partial Content ：表示客户端进行了范围请求，响应报文包含由 Content-Range 指定范围的实体内容。")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("301 Moved Permanently ：永久性重定向")]),t._v(" "),e("p",[t._v("302 Found ：临时性重定向")]),t._v(" "),e("p",[t._v("303 See Other ：和 302 有着相同的功能，但是 303 明确要求客户端应该采用 GET 方法获取资源。")]),t._v(" "),e("p",[t._v("注：虽然 HTTP 协议规定 301、302 状态下重定向时不允许把 POST 方法改成 GET 方法，但是大多数浏览器都会在 301、302 和 303 状态下的重定向把 POST 方法改成 GET 方法。")]),t._v(" "),e("p",[t._v("304 Not Modified ：如果请求报文首部包含一些条件，例如：If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since，如果不满足条件，则服务器会返回 304 状态码。")]),t._v(" "),e("p",[t._v("307 Temporary Redirect ：临时重定向，与 302 的含义类似，但是 307 要求浏览器不会把重定向请求的 POST 方法改成 GET 方法。")]),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("400 Bad Request ：请求报文中存在语法错误。")]),t._v(" "),e("p",[t._v("401 Unauthorized ：该状态码表示发送的请求需要有认证信息（BASIC 认证、DIGEST 认证）。如果之前已进行过一次请求，则表示用户认证失败。")]),t._v(" "),e("p",[t._v("403 Forbidden ：请求被拒绝，未获得文件系统的权限，访问权限出现问题都可能会导致403。")]),t._v(" "),e("p",[t._v("404 Not Found：服务器上面没有这个资源，也可能服务器拒绝请求且不想说明理由")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("500 Internal Server Error ：服务器正在执行请求时发生错误，可能web服务有故障。")]),t._v(" "),e("p",[t._v("503 Service Unavailable ：服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。比如大量请求会导致服务器不可用。")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"/http/"}},[t._v("返回目录 >")])],1)])}),[function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("类别")]),t._v(" "),e("th",[t._v("原因短语")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1XX")]),t._v(" "),e("td",[t._v("Informational（信息性状态码）")]),t._v(" "),e("td",[t._v("接收的请求正在处理")])]),t._v(" "),e("tr",[e("td",[t._v("2XX")]),t._v(" "),e("td",[t._v("Success（成功状态码）")]),t._v(" "),e("td",[t._v("请求正常处理完毕")])]),t._v(" "),e("tr",[e("td",[t._v("3XX")]),t._v(" "),e("td",[t._v("Redirection（重定向状态码）")]),t._v(" "),e("td",[t._v("需要进行附加操作以完成请求")])]),t._v(" "),e("tr",[e("td",[t._v("4XX")]),t._v(" "),e("td",[t._v("Client Error（客户端错误状态码）")]),t._v(" "),e("td",[t._v("服务器无法处理请求")])]),t._v(" "),e("tr",[e("td",[t._v("5XX")]),t._v(" "),e("td",[t._v("Server Error（服务器错误状态码）")]),t._v(" "),e("td",[t._v("服务器处理请求出错")])])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"_1xx-信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1xx-信息"}},[this._v("#")]),this._v(" 1XX 信息")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"_2xx-成功"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2xx-成功"}},[this._v("#")]),this._v(" 2XX 成功")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"_3xx-重定向"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向"}},[this._v("#")]),this._v(" 3XX 重定向")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"_4xx-客户端错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-客户端错误"}},[this._v("#")]),this._v(" 4XX 客户端错误")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"_5xx-服务器错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误"}},[this._v("#")]),this._v(" 5XX 服务器错误")])}],!1,null,null,null);_.default=r.exports}}]);