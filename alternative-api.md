# 有轻微差异的 API

## 设备

### addPhoneContact
 可选入参不一样

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/contact) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_phonecontact/#swan-addPhoneContact/) 
 调用后，用户可以选择将联系人数据以"新增联系人"或"添加到已有联系人"的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加 



### makePhoneCall
 　
 phoneNumber没找到同名参数; success没找到同名参数; fail没找到同名参数; complete没找到同名参数 
 　
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/macke-call)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_call/#swan-makePhoneCall/)
 拨打电话




### getSystemInfo
 
 SDKVersion 没找到同名参数; benchmarkLevel 没找到同名参数; albumAuthorized 没找到同名参数; cameraAuthorized 没找到同名参数; locationAuthorized 没找到同名参数; microphoneAuthorized 没找到同名参数; notificationAuthorized 没找到同名参数; notificationAlertAuthorized 没找到同名参数; notificationBadgeAuthorized 没找到同名参数; notificationSoundAuthorized 没找到同名参数; bluetoothEnabled 没找到同名参数; locationEnabled 没找到同名参数; wifiEnabled 没找到同名参数; safeArea 没找到同名参数 
成功回调内容不一致 

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/system-info)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfo/) 
 获取系统信息


### getSystemInfoSync 
返回值内容不一致 

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/gawhvz) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfoSync/) 
 获取系统信息同步接口
 
 
### getNetworkType
 成功回调不一致

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/network-status) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_network/#swan-getNetworkType/)
 获取网络类型

### onCompassChange 
 wx 有，ali 没有
 wx 和 swan缺少 paramsAttribute
 　
可选入参 不一样。微信接受选填参数，其他两家没有
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/compass) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_compass/#swan-onCompassChange/)
 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听 


                        

### setScreenBrightness 
 　
 ali 缺少 paramsAttribute
 　
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ccf32t) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_screen/#swan-setScreenBrightness/) 
 设置屏幕亮度

 
 
## 网络



### request
 　
 data 参数类型不同; header没找到同名参数; responseType没找到同名参数
 statusCode 没找到同名参数; header 没找到同名参数
可选入参 参数名不一样；可选参数数量不一致
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/owycmh) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_request/#swan-request/) 
 发起网络请求，请参考使用注意事项进行开发

### downloadFile 
 　
 header 参数类型不同; filePath没找到同名参数
 tempFilePath 没找到同名参数; filePath 没找到同名参数; statusCode 没找到同名参数 
成功回调参数名不一样
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/xr054r) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#swan-downloadFile/)
 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径 



### uploadFile 
 　
 name没找到同名参数; header 参数类型不同; formData 参数类型不同 
 　
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/kmq4hc) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#swan-uploadFile/)
 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data如页面通过 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器 


### closeSocket
 　 
 code没找到同名参数; reason没找到同名参数
 
 可选入参 不一样
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/network) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-closeSocket/)
 关闭 WebSocket 连接


###connectSocket
 　 
 header 参数类型不同; protocols没找到同名参数; tcpNoDelay没找到同名参数
 　
可选入参 不一样
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/vx19c3)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-connectSocket/)
 创建一个 WebSocket 连接


###onSocketOpen 
 wx 有，ali 没有
 wx 和 swan缺少 paramsAttribute
 　
支付宝未提到返回值 header 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/itm5og)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketOpen/) 
 监听 WebSocket 连接打开事件
 


### sendSocketMessage 
 　 
 data 参数类型不同 
 　
入参类型不同。支付宝不支持 arraybuffer 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/mr91d1)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-sendSocketMessage/) 
 通过 WebSocket 连接发送数据，需要先调用 swan.connectSocket，并在 回调之后才能发送 


## 位置

### openLocation 
 　
 latitude 参数类型不同; longitude 参数类型不同; scale 参数类型不同
 　
必填参数类型不同 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/as9kin) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/location_open/#swan-openLocation/) 
 使用宿主 App 内置地图查看位置 



### getLocation
 　
 type 参数类型不同; altitude没找到同名参数 
 speed 没找到同名参数; altitude 没找到同名参数; verticalAccuracy 没找到同名参数
选填参数类型 不一样；成功回调返回内容不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/mkxuqd) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/location_get/#swan-getLocation/)
 获取当前的地理位置、速度 



## 文件

### getSavedFileInfo 
 　 
 filePath没找到同名参数 
 　
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/qrx6ze) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getSavedFileInfo/)
 获取本地文件的文件信息 

### getFileInfo
 　 
 ali 缺少 paramsAttribute
 　
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/file)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getFileInfo/)
 获取文件信息




### removeSavedFile 
 　
 filePath没找到同名参数
 　
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/dgi1fr) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/file_remove/#swan-removeSavedFile/)
 删除本地存储的文件




### saveFile 
 　
 tempFilePath没找到同名参数 
 savedFilePath 没找到同名参数
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/xbll1q) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-saveFile/)
 保存文件到本地 



## 数据存储

### getStorageSync 
 wx 有，ali 没有 
 wx 和 swan缺少 paramsAttribute
 　
传参方式不一致
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ox0wna) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageSync/) 
 从本地缓存中同步获取指定 key 对应的内容




### setStorageSync 
 wx 有，ali 没有 
 wx 和 swan缺少 paramsAttribute
 　
传参方式不一致
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/cog0du) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-setStorageSync/) 
 将数据存储在本地缓存中指定的 key 中


### removeStorageSync 
 wx 有，ali 没有 
 　
 　
传参方式不一致
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ytfrk4) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_remove/#swan-removeStorageSync/)
 从本地缓存中同步移除指定 key





## 界面

###createSelectorQuery 
 　 
 wx 和 swan缺少 paramsAttribute
 　
可选入参 不一样。支付宝接受选填参数，其他两家没有 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/selector-query) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#swan-createSelectorQuery/)
 返回一个 SelectorQuery 对象实例
 
 
 

###navigateTo 
 events没找到同名参数
 可选入参 不一样。微信接受选填参数，其他两家没有
 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/zwi8gx)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateTo/) 
 保留当前页面，跳转到应用内的某个页面，但是不能跳转到 tabbar 页面，使用 可以返回到原页面

 

###pageScrollTo 

 duration没找到同名参数; selector没找到同名参数; success没找到同名参数; fail没找到同名参数; complete没找到同名参数 
 　
可选入参 不一样。微信接受选填参数，其他两家没有
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/scroll)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_pagescrollto/#swan-pageScrollTo/)
 将页面滚动到目标位置（可以设置滚动动画时长） 


### hideLoading
 wx 没有，swan 有 
 swan 缺少 paramsAttribute
 　
可选入参 不一样。支付宝接受选填参数，其他两家没有 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/nzf540)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-hideLoading/)
 隐藏 loading 提示框 




### chooseImage
 　
 sizeType 参数类型不同; sourceType 参数类型不同
 tempFilePaths 没找到同名参数; tempFiles 没找到同名参数 
成功回调参数名不一样
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/media-image) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/media_image/#swan-chooseImage/) 
 从本地相册选择图片或使用相机拍照


### createAnimation 
 　
 duration 参数类型不同; timingFunction没找到同名参数; delay 参数类型不同
 　
可选入参 参数名不一样 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ui-animation)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_createanimation/#swan-createAnimation/)
 创建一个动画实例 animation


### createIntersectionObserver 
 wx 有，ali 没有 
 wx 和 swan缺少 paramsAttribute
 　
可选入参 参数名不一样 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/intersectionobserver) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#swan-createIntersectionObserver/) 
 创建并返回一个 IntersectionObserver 对象实例


### setTabBarItem
 　
 　
参数必填性不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/zu37bk) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-setTabBarItem/)
 动态设置 tabBar 某一项的内容


### showActionSheet
 
 itemList没找到同名参数; itemColor没找到同名参数 
 ali 缺少 successParams-
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/hr092g) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showActionSheet/)
 ​显示操作菜单 


### showLoading
 　 
 title没找到同名参数; mask没找到同名参数 
 　
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/bm69kb) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showLoading/)
 显示 loading 提示框， 需主动调用 hideLoading 才能关闭提示框


### showToast 
 　 
 title没找到同名参数; icon没找到同名参数; image没找到同名参数; mask没找到同名参数 
 　
必填参数名不一致 
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/fhur8f) 
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html) 
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showToast/) 
 显示消息提示框 



