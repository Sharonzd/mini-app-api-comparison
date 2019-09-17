(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(a,t,e){"use strict";e.r(t);var r=e(0),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"总览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总览","aria-hidden":"true"}},[a._v("#")]),a._v(" 总览")]),a._v(" "),e("p",[a._v("以下统计数据统计于 2019年 7 月底")]),a._v(" "),e("h2",{attrs:{id:"api-一致性统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-一致性统计","aria-hidden":"true"}},[a._v("#")]),a._v(" API 一致性统计")]),a._v(" "),e("ol",[e("li",[a._v("API 数量：百度 354， 微信 453， 阿里 230")]),a._v(" "),e("li",[a._v("从文档来看，入参和返回值完全相同 API 有 101 个。")]),a._v(" "),e("li",[a._v("在这 101 个 API 中，非界面相关的 API 有 35 个（此部分可以更容易被定义为标准的实现和表现）。见 "),e("a",{attrs:{href:"./api"}},[a._v("一致 API")])]),a._v(" "),e("li",[a._v("三家同名 API 有135 个，也就是理应这 135 个 API 都应该一致，然而实际上其中有 12个 API 有轻微的可选入参差异，22个 API 有参数命名或者类型不一致的问题。见 "),e("a",{attrs:{href:"./alternative-api"}},[a._v("可选 API")])]),a._v(" "),e("li",[a._v("canvas 相关API由于参数较多，而且有 w3c 规范约定。没有深究，默认应该一致，这样的 API 有 38个，包含在了101个中")])]),a._v(" "),e("h2",{attrs:{id:"一些主要的差异问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些主要的差异问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 一些主要的差异问题")]),a._v(" "),e("ol",[e("li",[a._v("支付宝小程序的 API 不够完善\n"),e("ul",[e("li",[a._v("百度与微信的同名 API 有 263 个")]),a._v(" "),e("li",[a._v("支付宝与微信的同名 API 只有 164 个")]),a._v(" "),e("li",[a._v("百度与支付宝的同名 API 只有 139 个")])])]),a._v(" "),e("li",[a._v("支付宝的同步 API 的差异很大\n"),e("ul",[e("li",[a._v("支付宝的所有 sync API 的传参都是以对象的方式传递。而微信和百度是按顺序传递。比如setStorageSync 等。这一差异导致所有同步 API 无法达成一致。")])])]),a._v(" "),e("li",[a._v("支付宝的文档不太规范\n"),e("ul",[e("li",[a._v("部分异步 API 没有提到 success、fail 和 complete 等。需要写 demo 验证是否存在相关回调。比如 my. clearStorage")]),a._v(" "),e("li",[a._v("文档错误，导致可能影响统计结果。比如对于参数传参方式的 API，描述里却描述了“Object 类型，属性如下：”，如 my.createMapContext")])])])]),a._v(" "),e("h2",{attrs:{id:"待定疑问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#待定疑问","aria-hidden":"true"}},[a._v("#")]),a._v(" 待定疑问")]),a._v(" "),e("ol",[e("li",[a._v("是否应该包含实现层面的规范，否则可能会导致边界问题。")]),a._v(" "),e("li",[a._v("开发者文档过于简略，不足够表达规范，除了入参返回值，还需要扩充哪些内容？")]),a._v(" "),e("li",[a._v("界面相关 API 是否也应该制定规范。参考 "),e("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#simple-dialogs",target:"_blank",rel:"noopener noreferrer"}},[a._v("whatwg 的用户弹窗"),e("OutboundLink")],1),a._v("\n，虽然没有规定 UI 部分，但是规定了执行过程。同理，像 navigateTo 这类 API 是否也应该规定执行过程")]),a._v(" "),e("li",[a._v("canvas 目前实现的和浏览器差异较大，能否直接以 w3c 的 canvas 规范为规范（至少百度小程序有改造的计划） ？")])])])}),[],!1,null,null,null);t.default=v.exports}}]);