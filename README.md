# 总览

以下统计数据统计于 2019年 7 月底

## API 一致性统计
1. API 数量：百度 354， 微信 453， 阿里 230
2. 从文档来看，入参和返回值完全相同 API 有 101 个。
3. 在这 101 个 API 中，非界面相关的 API 有 36 个（此部分可以更容易被定义为标准的实现和表现）。见 [一致 API](./api)
4. 三家同名 API 有135 个，也就是理应这 135 个 API 都应该一致，然而实际上其中有 12个 API 有轻微的可选入参差异，22个 API 有参数命名或者类型不一致的问题。见 [可选 API](./alternative-api)
5. canvas 相关API由于参数较多，而且有 w3c 规范约定。要求和浏览器规范保持一致，这样的 API 有 39 个，包含在了101个中


## 一些主要的差异问题
1. 支付宝小程序的 API 不够完善
   - 百度与微信的同名 API 有 263 个
   - 支付宝与微信的同名 API 只有 164 个
   - 百度与支付宝的同名 API 只有 139 个
2. 支付宝的同步 API 的差异很大
   - 支付宝的所有 sync API 的传参都是以对象的方式传递。而微信和百度是按顺序传递。比如setStorageSync 等。这一差异导致所有同步 API 无法达成一致。
3. 支付宝的文档不太规范
   - 部分异步 API 没有提到 success、fail 和 complete 等。需要写 demo 验证是否存在相关回调。比如 my. clearStorage
   - 文档错误，导致可能影响统计结果。比如对于参数传参方式的 API，描述里却描述了“Object 类型，属性如下：”，如 my.createMapContext

## 待定疑问
1. 是否应该包含实现层面的规范，否则可能会导致边界问题。
2. 开发者文档过于简略，不足够表达规范，除了入参返回值，还需要扩充哪些内容？
3. 界面相关 API 是否也应该制定规范。参考 [whatwg 的用户弹窗](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#simple-dialogs)
，虽然没有规定 UI 部分，但是规定了执行过程。同理，像 navigateTo 这类 API 是否也应该规定执行过程
4. canvas 目前实现的和浏览器差异较大，能否直接以 w3c 的 canvas 规范为规范（至少百度小程序有改造的计划） ？