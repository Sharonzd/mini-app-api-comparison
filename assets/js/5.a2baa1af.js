(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{198:function(e,a,o){"use strict";o.r(a);var t=o(0),i=Object(t.a)({},function(){var e=this.$createElement,a=this._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[a("h2",{attrs:{id:"addphonecontact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addphonecontact","aria-hidden":"true"}},[this._v("#")]),this._v(" | addPhoneContact")]),this._v(" "),a("p",[this._v('weChatNumber没找到同名参数                                                            | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.addPhoneContact     | swan.addPhoneContact     | my.addPhoneContact     | 可选入参不一样                   | https://docs.alipay.com/mini/api/contact        | https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html        | https://smartprogram.baidu.com/docs/develop/api/device_phonecontact/#swan-addPhoneContact/ | 调用后，用户可以选择将联系人数据以"新增联系人"或"添加到已有联系人"的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加        |\n| closeSocket         | 　            | code没找到同名参数; reason没找到同名参数                                                     | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.closeSocket         | swan.closeSocket         | my.closeSocket         | 可选入参 不一样                  | https://docs.alipay.com/mini/api/network        | https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html         | https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-closeSocket/           | 关闭 WebSocket 连接                                                            |\n| connectSocket       | 　            | header 参数类型不同; protocols没找到同名参数; tcpNoDelay没找到同名参数                             | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.connectSocket       | swan.connectSocket       | my.connectSocket       | 可选入参 不一样                  | https://docs.alipay.com/mini/api/vx19c3         | https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html       | https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-connectSocket/         | 创建一个 WebSocket 连接                                                          |\n| createSelectorQuery | 　            | wx 和 swan缺少 paramsAttribute                                                    | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.createSelectorQuery | swan.createSelectorQuery | my.createSelectorQuery | 可选入参 不一样。支付宝接受选填参数，其他两家没有 | https://docs.alipay.com/mini/api/selector-query | https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html              | https://smartprogram.baidu.com/docs/develop/api/show_query/#swan-createSelectorQuery/      | 返回一个 SelectorQuery 对象实例                                                    |\n| getNetworkType      | 　            | 　                                                                              | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.getNetworkType      | swan.getNetworkType      | my.getNetworkType      | 成功回调不一致                   | https://docs.alipay.com/mini/api/network-status | https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html         | https://smartprogram.baidu.com/docs/develop/api/device_network/#swan-getNetworkType/       | 获取网络类型                                                                     |\n| navigateTo          | 　            | events没找到同名参数                                                                  | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.navigateTo          | swan.navigateTo          | my.navigateTo          | 可选入参 不一样。微信接受选填参数，其他两家没有  | https://docs.alipay.com/mini/api/zwi8gx         | https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html                      | https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateTo/                 | 保留当前页面，跳转到应用内的某个页面，但是不能跳转到 tabbar 页面，使用 swan.navigateBack 可以返回到原页面         |\n| onCompassChange     | wx 有，ali 没有  | wx 和 swan缺少 paramsAttribute                                                    | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.onCompassChange     | swan.onCompassChange     | my.onCompassChange     | 可选入参 不一样。微信接受选填参数，其他两家没有  | https://docs.alipay.com/mini/api/compass        | https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html        | https://smartprogram.baidu.com/docs/develop/api/device_compass/#swan-onCompassChange/      | 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听                        |\n| onSocketOpen        | wx 有，ali 没有  | wx 和 swan缺少 paramsAttribute                                                    | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.onSocketOpen        | swan.onSocketOpen        | my.onSocketOpen        | 支付宝未提到返回值 header          | https://docs.alipay.com/mini/api/itm5og         | https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html        | https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketOpen/          | 监听 WebSocket 连接打开事件                                                        |\n| pageScrollTo        | 　            | duration没找到同名参数; selector没找到同名参数; success没找到同名参数; fail没找到同名参数; complete没找到同名参数 | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.pageScrollTo        | swan.pageScrollTo        | my.pageScrollTo        | 可选入参 不一样。微信接受选填参数，其他两家没有  | https://docs.alipay.com/mini/api/scroll         | https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html                | https://smartprogram.baidu.com/docs/develop/api/show_pagescrollto/#swan-pageScrollTo/      | 将页面滚动到目标位置（可以设置滚动动画时长）                                                     |\n| sendSocketMessage   | 　            | data 参数类型不同                                                                    | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.sendSocketMessage   | swan.sendSocketMessage   | my.sendSocketMessage   | 入参类型不同。支付宝不支持 arraybuffer | https://docs.alipay.com/mini/api/mr91d1         | https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html   | https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-sendSocketMessage/     | 通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 swan.onSocketOpen 回调之后才能发送 |\n| getSystemInfo       | 　            | 　                                                                              | SDKVersion 没找到同名参数; benchmarkLevel 没找到同名参数; albumAuthorized 没找到同名参数; cameraAuthorized 没找到同名参数; locationAuthorized 没找到同名参数; microphoneAuthorized 没找到同名参数; notificationAuthorized 没找到同名参数; notificationAlertAuthorized 没找到同名参数; notificationBadgeAuthorized 没找到同名参数; notificationSoundAuthorized 没找到同名参数; bluetoothEnabled 没找到同名参数; locationEnabled 没找到同名参数; wifiEnabled 没找到同名参数; safeArea 没找到同名参数 | 1 | wx.getSystemInfo       | swan.getSystemInfo       | my.getSystemInfo       | 成功回调内容不一致                 | https://docs.alipay.com/mini/api/system-info    | https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html | https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfo/            | 获取系统信息                                                                     |\n| hideLoading         | wx 没有，swan 有 | swan 缺少 paramsAttribute                                                        | 　                                                                                                                                                                                                                                                                                                                                                                                                | 1 | wx.hideLoading         | swan.hideLoading         | my.hideLoading         | 可选入参 不一样。支付宝接受选填参数，其他两家没有 | https://docs.alipay.com/mini/api/nzf540         | https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html            | https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-hideLoading/              | 隐藏 loading 提示框                                                             |')]),this._v(" "),a("p",[this._v("|----------------------------|-------------|------------------------------------------------------------------|------------------------------------------------------------|---|-------------------------------|---------------------------------|-------------------------------|------------------------|-------------------------------------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|\n| chooseImage                | 　           | sizeType 参数类型不同; sourceType 参数类型不同                               | tempFilePaths 没找到同名参数; tempFiles 没找到同名参数                   | 2 | wx.chooseImage                | swan.chooseImage                | my.chooseImage                | 成功回调参数名不一样             | https://docs.alipay.com/mini/api/media-image          | https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html                   | https://smartprogram.baidu.com/docs/develop/api/media_image/#swan-chooseImage/               | 从本地相册选择图片或使用相机拍照                                                                                                                          |\n| createAnimation            | 　           | duration 参数类型不同; timingFunction没找到同名参数; delay 参数类型不同             | 　                                                          | 2 | wx.createAnimation            | swan.createAnimation            | my.createAnimation            | 可选入参 参数名不一样            | https://docs.alipay.com/mini/api/ui-animation         | https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html              | https://smartprogram.baidu.com/docs/develop/api/show_createanimation/#swan-createAnimation/  | 创建一个动画实例 animation                                                                                                                        |\n| createIntersectionObserver | wx 有，ali 没有 | wx 和 swan缺少 paramsAttribute                                      | 　                                                          | 2 | wx.createIntersectionObserver | swan.createIntersectionObserver | my.createIntersectionObserver | 可选入参 参数名不一样            | https://docs.alipay.com/mini/api/intersectionobserver | https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html           | https://smartprogram.baidu.com/docs/develop/api/show_query/#swan-createIntersectionObserver/ | 创建并返回一个 IntersectionObserver 对象实例                                                                                                         |\n| downloadFile               | 　           | header 参数类型不同; filePath没找到同名参数                                   | tempFilePath 没找到同名参数; filePath 没找到同名参数; statusCode 没找到同名参数 | 2 | wx.downloadFile               | swan.downloadFile               | my.downloadFile               | 成功回调参数名不一样             | https://docs.alipay.com/mini/api/xr054r               | https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html             | https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#swan-downloadFile/           | 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径                                                                                               |\n| getFileInfo                | 　           | ali 缺少 paramsAttribute                                           | 　                                                          | 2 | wx.getFileInfo                | swan.getFileInfo                | my.getFileInfo                | 必填参数名不一致               | https://docs.alipay.com/mini/api/file                 | https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html                          | https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getFileInfo/                 | 获取文件信息                                                                                                                                    |\n| getLocation                | 　           | type 参数类型不同; altitude没找到同名参数                                     | speed 没找到同名参数; altitude 没找到同名参数; verticalAccuracy 没找到同名参数  | 2 | wx.getLocation                | swan.getLocation                | my.getLocation                | 选填参数类型 不一样；成功回调返回内容不一致 | https://docs.alipay.com/mini/api/mkxuqd               | https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html                      | https://smartprogram.baidu.com/docs/develop/api/location_get/#swan-getLocation/              | 获取当前的地理位置、速度                                                                                                                              |\n| makePhoneCall              | 　           | phoneNumber没找到同名参数; success没找到同名参数; fail没找到同名参数; complete没找到同名参数 | 　                                                          | 2 | wx.makePhoneCall              | swan.makePhoneCall              | my.makePhoneCall              | 必填参数名不一致               | https://docs.alipay.com/mini/api/macke-call           | https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html                | https://smartprogram.baidu.com/docs/develop/api/device_call/#swan-makePhoneCall/             | 拨打电话                                                                                                                                      |\n| openLocation               | 　           | latitude 参数类型不同; longitude 参数类型不同; scale 参数类型不同                  | 　                                                          | 2 | wx.openLocation               | swan.openLocation               | my.openLocation               | 必填参数类型不同               | https://docs.alipay.com/mini/api/as9kin               | https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html                     | https://smartprogram.baidu.com/docs/develop/api/location_open/#swan-openLocation/            | 使用宿主 App 内置地图查看位置                                                                                                                         |\n| removeSavedFile            | 　           | filePath没找到同名参数                                                  | 　                                                          | 2 | wx.removeSavedFile            | swan.removeSavedFile            | my.removeSavedFile            | 必填参数名不一致               | https://docs.alipay.com/mini/api/dgi1fr               | https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html                      | https://smartprogram.baidu.com/docs/develop/api/file_remove/#swan-removeSavedFile/           | 删除本地存储的文件                                                                                                                                 |\n| removeStorageSync          | wx 有，ali 没有 | 　                                                                | 　                                                          | 2 | wx.removeStorageSync          | swan.removeStorageSync          | my.removeStorageSync          | 传参方式不一致                | https://docs.alipay.com/mini/api/ytfrk4               | https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html                 | https://smartprogram.baidu.com/docs/develop/api/storage_remove/#swan-removeStorageSync/      | 从本地缓存中同步移除指定 key                                                                                                                          |\n| request                    | 　           | data 参数类型不同; header没找到同名参数; responseType没找到同名参数                  | statusCode 没找到同名参数; header 没找到同名参数                         | 2 | wx.request                    | swan.request                    | my.request                    | 可选入参 参数名不一样；可选参数数量不一致  | https://docs.alipay.com/mini/api/owycmh               | https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html                   | https://smartprogram.baidu.com/docs/develop/api/net_request/#swan-request/                   | 发起网络请求，请参考使用注意事项进行开发                                                                                                                      |\n| saveFile                   | 　           | tempFilePath没找到同名参数                                              | savedFilePath 没找到同名参数                                      | 2 | wx.saveFile                   | swan.saveFile                   | my.saveFile                   | 必填参数名不一致               | https://docs.alipay.com/mini/api/xbll1q               | https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html                             | https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-saveFile/                    | 保存文件到本地                                                                                                                                   |\n| setScreenBrightness        | 　           | ali 缺少 paramsAttribute                                           | 　                                                          | 2 | wx.setScreenBrightness        | swan.setScreenBrightness        | my.setScreenBrightness        | 必填参数名不一致               | https://docs.alipay.com/mini/api/ccf32t               | https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html         | https://smartprogram.baidu.com/docs/develop/api/device_screen/#swan-setScreenBrightness/     | 设置屏幕亮度                                                                                                                                    |\n| setStorageSync             | wx 有，ali 没有 | wx 和 swan缺少 paramsAttribute                                      | 　                                                          | 2 | wx.setStorageSync             | swan.setStorageSync             | my.setStorageSync             | 传参方式不一致                | https://docs.alipay.com/mini/api/cog0du               | https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html                    | https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-setStorageSync/           | 将数据存储在本地缓存中指定的 key 中                                                                                                                      |\n| setTabBarItem              | 　           | 　                                                                | 　                                                          | 2 | wx.setTabBarItem              | swan.setTabBarItem              | my.setTabBarItem              | 参数必填性不一致               | https://docs.alipay.com/mini/api/zu37bk               | https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html                  | https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-setTabBarItem/             | 动态设置 tabBar 某一项的内容                                                                                                                        |\n| showActionSheet            | 　           | itemList没找到同名参数; itemColor没找到同名参数                                | ali 缺少 successParams                                       | 2 | wx.showActionSheet            | swan.showActionSheet            | my.showActionSheet            | 必填参数名不一致               | https://docs.alipay.com/mini/api/hr092g               | https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html            | https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showActionSheet/            | ​显示操作菜单                                                                                                                                   |\n| showLoading                | 　           | title没找到同名参数; mask没找到同名参数                                        | 　                                                          | 2 | wx.showLoading                | swan.showLoading                | my.showLoading                | 必填参数名不一致               | https://docs.alipay.com/mini/api/bm69kb               | https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html                | https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showLoading/                | 显示 loading 提示框， 需主动调用 hideLoading 才能关闭提示框                                                                                                 |\n| showToast                  | 　           | title没找到同名参数; icon没找到同名参数; image没找到同名参数; mask没找到同名参数             | 　                                                          | 2 | wx.showToast                  | swan.showToast                  | my.showToast                  | 必填参数名不一致               | https://docs.alipay.com/mini/api/fhur8f               | https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html                  | https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showToast/                  | 显示消息提示框                                                                                                                                   |\n| uploadFile                 | 　           | name没找到同名参数; header 参数类型不同; formData 参数类型不同                      | 　                                                          | 2 | wx.uploadFile                 | swan.uploadFile                 | my.uploadFile                 | 必填参数名不一致               | https://docs.alipay.com/mini/api/kmq4hc               | https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html                 | https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#swan-uploadFile/             | 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data如页面通过 swan.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器 |\n| getSavedFileInfo           | 　           | filePath没找到同名参数                                                  | 　                                                          | 2 | wx.getSavedFileInfo           | swan.getSavedFileInfo           | my.getSavedFileInfo           | 必填参数名不一致               | https://docs.alipay.com/mini/api/qrx6ze               | https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html                     | https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getSavedFileInfo/            | 获取本地文件的文件信息                                                                                                                               |\n| getStorageSync             | wx 有，ali 没有 | wx 和 swan缺少 paramsAttribute                                      | 　                                                          | 2 | wx.getStorageSync             | swan.getStorageSync             | my.getStorageSync             | 传参方式不一致                | https://docs.alipay.com/mini/api/ox0wna               | https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html                    | https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageSync/           | 从本地缓存中同步获取指定 key 对应的内容                                                                                                                    |\n| getSystemInfoSync          | 　           | 　                                                                | 　                                                          | 2 | wx.getSystemInfoSync          | swan.getSystemInfoSync          | my.getSystemInfoSync          | 返回值内容不一致               | https://docs.alipay.com/mini/api/gawhvz               | https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html | https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfoSync/          | 获取系统信息同步接口                                                                                                                                |")])])},[],!1,null,null,null);a.default=i.exports}}]);