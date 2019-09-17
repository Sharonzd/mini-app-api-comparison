---
sidebarDepth: 2
---

# API

## 媒体	

### getImageInfo	

**解释**：获取图片信息

**方法参数**：Object object

**`object`参数说明**：

| 参数名    | 类型      | 必填  | 默认值 | 说明                                                        |
|:---------|:---------|:-----|:------|:-----------------------------------------------------------|
| src      | String   | 是   | -     | 图片的路径，可以是相对路径、临时文件路径或存储文件路径、网络图片。 |
| success  | Function | 否   | -     | 接口调用成功的回调函数                                        |
| fail     | Function | 否   | -     | 接口调用失败的回调函数                                        |
| complete | Function | 否   | -     | 接口调用结束的回调函数（调用成功、失败都会执行）                 |

**success返回参数说明**：

| 参数         | 类型    | 说明                                                               |
|:------------|:-------|:------------------------------------------------------------------|
| width       | Number | 图片宽度（单位：px）                                                |
| height      | Number | 图片高度（单位：px）                                                |
| path        | String | 返回图片的本地路径                                                  |
| orientation | String | [拍照时设备方向](http://sylvana.net/jpegcrop/exif_orientation.html) |
| type        | String | 返回图片的格式                                                      |


**res.orientation 的合法值**

| 值             | 说明                                                           |
|:---------------|:--------------------------------------------------------------|
| up             | 默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。 |
| up-mirrored    | 同 up，但镜像翻转，对应 Exif 中的 2                              |
| down           | 旋转180度，对应 Exif 中的 3                                     |
| down-mirrored  | 同 down，但镜像翻转，对应 Exif 中的 4                            |
| left-mirrored  | 同 left，但镜像翻转，对应 Exif 中的 5                            |
| right          | 顺时针旋转90度，对应 Exif 中的 6                                 |
| right-mirrored | 同 right，但镜像翻转，对应 Exif 中的 7                           |
| left           | 逆时针旋转90度，对应 Exif 中的 8                                 |


#### 参考链接

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/yv9n6t)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/media_image/#swan-getImageInfo/)

### previewImage

**解释**： 预览图片。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名    | 类型              | 必填  | 默认值 | 说明                                         |
|:---------|:-----------------|:-----|:-------|:--------------------------------------------|
| current  | String           | 否   | -      | 当前显示图片的链接，不填则默认为 urls 的第一张。  |
| urls     | `Array.<string>` | 是   | -      | 需要预览的图片链接列表                         |
| images   | `Array.<object>` | 否   | -      | 支持原图的图片链接列表                         |
| success  | Function         | 否   | -      | 接口调用成功的回调函数                         |
| fail     | Function         | 否   | -      | 接口调用失败的回调函数                         |
| complete | Function         | 否   | -      | 接口调用结束的回调函数（调用成功、失败都会执行）  |
	

#### 参考链接
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/eei0av)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/media_image/#swan-previewImage/)	


## 设备
	
### getBatteryInfo

**解释** ：支持在小程序内获取当前设备电量。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名      | 类型       | 必填 | 默认值 | 说明                       |
|----------|----------|----|-----|--------------------------|
| success  | Function | 否  | -   | 接口调用成功的回调                |
| fail     | Function | 否  | -   | 接口调用失败的回调函数              |
| complete | Function | 否  | -   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**回调参数说明** ：

success回调函数参数：

| 参数名        | 类型      | 说明             |
|------------|---------|----------------|
| level      | string  | 设备电量， 范围为1-100 |
| isCharging | boolean | 设备是否正在充电       |


#### 参考链接
	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/nrnziy)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_battery/#swan-getBatteryInfo/)	

### getBatteryInfoSync	

**解释** ： 获取当前设备电量同步接口，ios系统不可用。

**方法参数** ：无

**返回值说明** ：

| 参数名      | 类型     | 说明                  |
|:-----------|:--------|:---------------------|
| level      | string  | 设备电量， 范围为1-100 |
| isCharging | boolean | 设备是否正在充电       |

#### 参考链接

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/vf7vn3)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfoSync.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_battery/#swan-getBatteryInfoSync/)

### getScreenBrightness	

**解释** ：获取屏幕亮度。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名    | 类型      | 必填  | 默认值 | 说明                                        |
|:---------|:---------|:-----|:-------|:-------------------------------------------|
| success  | Function | 否   | -      | 接口调用成功的回调                            |
| fail     | Function | 否   | -      | 接口调用失败的回调函数                        |
| complete | Function | 否   | -      | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success返回参数说明** ：

| 参数名   | 类型     | 说明                      |
|-------|--------|-------------------------|
| value | Number | 屏幕亮度值，范围 0~1，0 最暗，1 最亮。 |

#### 参考链接


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/screen-brightness)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_screen/#swan-getScreenBrightness/)

### onAccelerometerChange

监听加速度数据事件。频率根据 startAccelerometer() 的 interval 参数, 接口调用后会自动开始监听, 可使用 swan.stopAccelerometer 停止监听。

<!-- 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听 -->
<!-- todo 微信是根据 interval 决定-->
<!-- todo 为啥其他搭配着的 API 没有一致-->

**方法参数** ：Function callback

| 属性 | 类型    | 说明  |
|:-----|:--------|:------|
| x    | number  | X 轴  |
| y    | number  | Y 轴  |
| z    | number  | Z 轴  |

#### 参考链接
	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/accelerometer)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.onAccelerometerChange.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_accelerometer/#swan-onAccelerometerChange/)	


### 	onMemoryWarning	
**解释** ：监听内存不足的告警事件，Android 下有告警等级划分，只有 LOW 和 CRITICAL 会回调开发者；iOS 无等级划分。

**方法参数** ：Function callback

**`callback`参数说明** ：

| 参数名   | 类型     | 必填 | 默认值 | 说明                            |
|-------|--------|----|-----|-------------------------------|
| level | Number | 是  | -   | 仅 Android 有该字段，对应系统内存告警等级宏定义。 |

Android下告警等级对应系统宏：

``` 
TRIM_MEMORY_RUNNING_LOW = 10 
TRIM_MEMORY_RUNNING_CRITICAL = 15 
``` 

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/rb9o8p)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.onMemoryWarning.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_onmemory/#swan-onMemoryWarning/)	

### 	onNetworkStatusChange	


**解释** ：监听网络状态变化。

**方法参数** ：Function callback

**`callback`参数说明** ：

| 参数名         | 类型      | 必填 | 默认值 | 说明        |
|-------------|---------|----|-----|-----------|
| isConnected | Boolean | 是  | -   | 当前是否有网络连接 |
| networkType | String  | 是  | -   | 网络类型      |

**networkType 有效值** ：

| 值       | 说明                |
|---------|-------------------|
| wifi    | wifi 网络           |
| 2g      | 2g 网络             |
| 3g      | 3g 网络             |
| 4g      | 4g 网络             |
| none    | 无网络               |
| unknown | Android 下不常见的网络类型 |




- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ympi0l)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_network/#swan-onNetworkStatusChange/)	

### 	canIUse	

**解释** ： 判断智能小程序的API，回调，参数，组件等是否在当前版本可用。暂无法校验宿主扩展的API。

**方法参数** ： String schema

使用 `${API}.${method}.${param}.${options}`或者 `${component}.${attribute}.${option}` 方式来调用。

**`schema`参数说明** ：

| 参数           | 说明                                         |
|--------------|--------------------------------------------|
| ${API}       | API 名字                                     |
| ${method}    | 调用方式，有效值为return, success, object, callback |
| ${param}     | 参数或者返回值                                    |
| ${options}   | 参数的可选值                                     |
| ${component} | 组件名字                                       |
| ${attribute} | 组件属性                                       |
| ${option}    | 组件属性的可选值                                   |

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/can-i-use)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-canIUse/)	

### 	onUserCaptureScreen	

**解释** ：监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件。

**方法参数** ：Function callback

**`callback`参数说明** ：无


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/user-capture-screen)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_capture/#swan-onUserCaptureScreen/)

### 	vibrateLong	

**解释** ： 使手机发生较长时间的振动（400ms）

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名      | 类型       | 必填 | 默认值 | 说明                       |
|----------|----------|----|-----|--------------------------|
| success  | Function | 否  | -   | 接口调用成功的回调                |
| fail     | Function | 否  | -   | 接口调用失败的回调函数              |
| complete | Function | 否  | -   | 接口调用结束的回调函数（调用成功、失败都会执行） |

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ucm2he)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateLong.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_vibrate/#swan-vibrateLong/)

### 	vibrateShort	

**解释** ：使手机发生较短时间的振动（15ms），仅在 iPhone 7/7 Plus 以上及 Android 机型生效。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名      | 类型       | 必填 | 默认值 | 说明                       |
|----------|----------|----|-----|--------------------------|
| success  | Function | 否  | -   | 接口调用成功的回调函数              |
| fail     | Function | 否  | -   | 接口调用失败的回调函数              |
| complete | Function | 否  | -   | 接口调用结束的回调函数（调用成功、失败都会执行） |

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ad6c10)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_vibrate/#swan-vibrateShort/)	



## 数据存储

### 	clearStorage	

**解释** :清理本地数据缓存。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名      | 类型       | 必填 | 默认值 | 说明                       |
|----------|----------|----|-----|--------------------------|
| success  | Function | 否  | -   | 接口调用成功的回调函数              |
| fail     | Function | 否  | -   | 接口调用失败的回调函数              |
| complete | Function | 否  | -   | 接口调用结束的回调函数（调用成功、失败都会执行） |


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/storage)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_remove/#swan-clearStorage/)

### 	clearStorageSync	

**解释** ：同步清理本地数据缓存。

**方法参数** ：无


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ulv85u)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorageSync.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_remove/#swan-clearStorageSync/)

### 	getStorage	

**解释** ：从本地缓存中异步获取指定 key 对应的内容。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名    | 类型      | 必填  | 默认值 | 说明                                              |
|:---------|:---------|:-----|:-------|:-------------------------------------------------|
| key      | String   | 是   | -      | 本地缓存中的指定的 key                              |
| success  | Function | 否   | -      | 接口调用成功的回调函数，res = {data: key对应的内容}。 |
| fail     | Function | 否   | -      | 接口调用失败的回调函数                              |
| complete | Function | 否   | -      | 接口调用结束的回调函数（调用成功、失败都会执行）       |

**success返回参数说明** ：

| 参数   | 类型                         | 说明        |
|------|----------------------------|-----------|
| data | Object/String/Number/Array | key 对应的内容 |


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/azfobl)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorage/)

### 	getStorageInfo	

**解释** ：异步获取当前 storage 的相关信息。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名      | 类型       | 必填 | 默认值 | 说明                       |
|----------|----------|----|-----|--------------------------|
| success  | Function | 否  | -   | 接口调用成功的回调函数，详见返回参数说明。    |
| fail     | Function | 否  | -   | 接口调用失败的回调函数              |
| complete | Function | 否  | -   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success返回参数说明** ：

| 参数          | 类型               | 说明                   |
|-------------|------------------|----------------------|
| keys        | `Array.<string>` | 当前 storage 中所有的 key。 |
| currentSize | Number           | 当前占用的空间大小, 单位 kB。    |
| limitSize   | Number           | 限制的空间大小，单位 kB。       |


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/zvmanq)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageInfo/)

### 	getStorageInfoSync	
**解释** ：同步获取当前 storage 的相关信息。

**方法参数** ： 无


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/uw5rdl)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfoSync.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageInfoSync/)	

### 	removeStorage
	
**解释** ：从本地缓存中异步移除指定 key。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名    | 类型      | 必填  | 默认值 | 说明                                        |
|:---------|:---------|:-----|:-------|:-------------------------------------------|
| key      | String   | 是   | -      | 本地缓存中的指定的 key                        |
| success  | Function | 否   | -      | 接口调用成功的回调函数                        |
| fail     | Function | 否   | -      | 接口调用失败的回调函数                        |
| complete | Function | 否   | -      | 接口调用结束的回调函数（调用成功、失败都会执行） |

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/of9hze)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_remove/#swan-removeStorage/)	

### 	setStorage	

**解释** ：将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。主动删除历史小程序，卸载手百，或在系统中清除百度app的缓存即可清除数据。目前单个 key 允许存储的最大数据长度无限制，没有自动清理存储机制。storage 上限 10MB，用户需主动清理，期间数据一直可用。

**方法参数** ： Object object

**`object`参数说明** ：

| 参数名      | 类型                         | 必填 | 默认值 | 说明                       |
|----------|----------------------------|----|-----|--------------------------|
| key      | String                     | 是  |     | 本地缓存中的指定的 key            |
| data     | Object/String/Number/Array | 是  |     | 需要存储的内容                  |
| success  | Function                   | 否  |     | 接口调用成功的回调函数              |
| fail     | Function                   | 否  |     | 接口调用失败的回调函数              |
| complete | Function                   | 否  |     | 接口调用结束的回调函数（调用成功、失败都会执行） |

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/eocm6v)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-setStorage/)	

## 网络
### websocket	onSocketClose	

**解释** ：监听 WebSocket 关闭。

**方法参数** ：Function callback


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/foqk6g)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketClose.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketClose/)	

### websocket	onSocketError

**解释** ：监听 WebSocket 错误。

**方法参数** ：Function callback
	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/giu3c2)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketError.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketError/)	

### websocket	onSocketMessage	

**解释** ：监听 WebSocket 接受到服务器的消息事件

**方法参数** ：Function callback

**`callback`参数说明** ：WebSocket 接受到服务器的消息事件的回调函数

`callback`方法参数：Object res

`res`参数说明：

| 参数名      | 类型                 | 必填 | 默认值 | 说明       |
|----------|--------------------|----|-----|----------|
| data     | String/ArrayBuffer | 是  | -   | 服务器返回的消息 |
| dataType | String             | 否  | -   | data 类型  |


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/gecnap)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketMessage.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketMessage/)






## 位置
	
###  chooseLocation	

**解释** ： 打开地图选择位置。需要用户授权 scope.userLocation。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名      | 类型       | 必填 | 默认值 | 说明                       |
|----------|----------|----|-----|--------------------------|
| success  | Function | 否  | -   | 接口调用成功的回调函数              |
| fail     | Function | 否  | -   | 接口调用失败的回调函数              |
| complete | Function | 否  | -   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success 返回参数说明** ：

| 参数        | 说明                                         |
|-----------|--------------------------------------------|
| name      | 位置名称                                       |
| address   | 详细地址                                       |
| latitude  | 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系。   |
| longitude | 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系。 |

#### 参考链接

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/location)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/location_get/#swan-chooseLocation/)



### 	createMapContext

**解释** ：创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例 this，以操作组件内 `<map/>` 组件。mapContext 通过 mapId 跟一个 组件绑定，通过它可以操作对应的 组件。

**方法参数** ：String mapId

**`mapId`参数说明** ：要获取 map 组件的 id。

**返回值** ：mapContext
	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ui-map)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/location_map/#swan-createMapContext/)	


### 	mapContext.getCenterLocation

**解释** ：获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 swan.openLocation。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名    | 类型      | 必填  | 默认值 | 说明                                                                  |
|:---------|:---------|:-----|:-------|:---------------------------------------------------------------------|
| success  | Function | 否   |        | 接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"} 。  |
| fail     | Function | 否   |        | 接口调用失败的回调函数                                                  |
| complete | Function | 否   |        | 接口调用结束的回调函数（调用成功、失败都会执行）                           |

	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/vc2gdt)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getCenterLocation.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/location_map/#mapContext-getCenterLocation/)

### 	mapContext.moveToLocation	

**解释** ：将地图中心移动到当前定位点，需要配合 map 组件的 show-location 使用 。

**方法参数** ：无

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ans8wt)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.moveToLocation.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/location_map/#mapContext-moveToLocation/)



### 	mapContext.translateMarker	

**解释** ：平移 marker，带动画 。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名        | 类型      | 必填  | 默认值 | 说明                                         |
|:-------------|:---------|:-----|:-------|:--------------------------------------------|
| markerId     | Number   | 是   |        | 指定 marker                                  |
| destination  | Object   | 是   |        | 指定marker移动到的目标点                       |
| autoRotate   | Boolean  | 是   |        | 移动过程中是否自动旋转 marker                  |
| rotate       | Number   | 是   |        | marker 的旋转角度                             |
| duration     | Number   | 否   |        | 动画持续时长，默认值1000ms，平移与旋转分别计算。  |
| fail         | Function | 否   |        | 接口调用失败的回调函数                         |
| animationEnd | Function | 否   |        | 动画结束时回调函数                             |
| success      | function | 否   |        | 接口调用成功的回调函数                         |

#### 参考链接	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/sg7chr)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.translateMarker.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/location_map/#mapContext-translateMarker/)


## 文件	

### getSavedFileList

**解释** ：获取本地已保存的文件列表

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名      | 类型       | 必填 | 默认值 | 说明                              |
|----------|----------|----|-----|---------------------------------|
| success  | Function | 否  | -   | 接口调用成功的回调函数，返回结果见success返回参数说明。 |
| fail     | Function | 否  | -   | 接口调用失败的回调函数                     |
| complete | Function | 否  | -   | 接口调用结束的回调函数（调用成功、失败都会执行）        |

**success返回参数说明** ：

| 参数名      | 类型               | 说明   |
|----------|------------------|------|
| fileList | `Array.<object>` | 文件列表 |

**fileList中的项目说明** ：

| 参数名        | 类型     | 说明                                        |
|------------|--------|-------------------------------------------|
| filePath   | String | 文件的本地路径                                   |
| createTime | Number | 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数。 |
| size       | Number | 文件大小，单位 B                                 |


#### 参考链接	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/cgohg1)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getSavedFileList/)


## 开放接口
	

### getSetting	

**解释** ： 获取用户的当前设置

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名      | 类型       | 必填 | 默认值 | 说明                       |
|----------|----------|----|-----|--------------------------|
| success  | Function | 否  | -   | 接口调用成功的回调函数              |
| fail     | Function | 否  | -   | 接口调用失败的回调函数              |
| complete | Function | 否  | -   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success返回参数说明** ：

| 参数          | 类型     | 说明                                                 |
|-------------|--------|----------------------------------------------------|
| authSetting | Object | 用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权。 |

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/xmk3ml)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/open_setting/#swan-getSetting/)	


### openSetting	
**解释** ： 调起客户端智能小程序设置界面，返回用户设置的操作结果。

**方法参数** ：Object object

**`object`参数说明** ：

| 参数名      | 类型       | 必填 | 默认值 | 说明                       |
|----------|----------|----|-----|--------------------------|
| success  | Function | 否  | -   | 接口调用成功的回调函数              |
| fail     | Function | 否  | -   | 接口调用失败的回调函数              |
| complete | Function | 否  | -   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success返回参数说明** ：

| 参数          | 类型     | 说明                                                 |
|-------------|--------|----------------------------------------------------|
| authSetting | Object | 用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权。 |

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/qflu8f)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/open_setting/#swan-openSetting/)	


### reportAnalytics	

**解释** ：自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。

**方法参数** ：String eventName, Object data

**`eventName`参数说明** ：事件名

**`data`参数说明** ：上报的自定义数据，key为配置中的字段名，value为上报的数据。


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/report)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/data/#swan-reportAnalytics/)

###     updateManager.applyUpdate	

**解释** ： 当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启

**方法参数** ：无

**说明** ：
* 检查更新操作由宿主APP在小程序冷启动时自动触发，不需由开发者主动触发，开发者只需监听检查结果即可。
* onUpdateReady(callback) 回调结果说明：当宿主APP检查到小程序有新版本，会主动触发下载操作（无需开发者触发），当下载完成后，会通过 onUpdateReady 告知开发者。
* onUpdateFailed(callback) 回调结果说明：当宿主APP检查到小程序有新版本，会主动触发下载操作（无需开发者触发），如果下载失败（可能是网络原因等），会通过 onUpdateFailed 告知开发者。
* applyUpdate() 说明：当小程序新版本已经下载时（即收到 onUpdateReady 回调），可以通过这个方法强制重启小程序并应用上最新版本。


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/neau2a)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/get/#updateManager-applyUpdate/)

### 	updateManager.onCheckForUpdate	

**解释** ：当向百度后台请求完新版本信息，会进行回调。

**方法参数** ：Function callback

**参数说明** ：

| 属性        | 类型      | 说明      |
|-----------|---------|---------|
| hasUpdate | Boolean | 是否有新的版本 |


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/nm7dtb)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/get/#updateManager-onCheckForUpdate/)

### 	updateManager.onUpdateFailed	

**解释** ：当新版本下载失败，会进行回调

**方法参数** ：Function callback


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/sy1k0e)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/get/#updateManager-onUpdateFailed/)

### 	updateManager.onUpdateReady	


**解释** ：当新版本下载完成，会进行回调。

**方法参数** ：Function callback


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/gfz316)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/get/#updateManager-onUpdateReady/)

### 	getUpdateManager	

**解释** ：获取全局唯一的版本更新管理器，用于管理小程序更新。

**方法参数** ：无

**返回值** ：updateManager


- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/zdblqg)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/get/#swan-getUpdateManager/)




## canvas
### canvasContext.arc	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/lut4uo)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.arc.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-arc/)	画一条弧线
 
### canvasContext.beginPath	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/vk0ohr)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.beginPath.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-beginPath/)	开始创建一个路径，需要调用 fill 或者 stroke 才会使用路径进行填充或描边
 
### canvasContext.bezierCurveTo	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/dzf516)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.bezierCurveTo.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-bezierCurveTo/)	创建三次方贝塞尔曲线路径
 
### canvasContext.clearRect	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/xg3h06)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.clearRect.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-clearRect/)	清除画布上在该矩形区域内的内容
 
### canvasContext.clip	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/rgl453)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.clip.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-clip/)	clip() 方法从原始画布中剪切任意形状和尺寸
 
### canvasContext.closePath	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/fg8c9b)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.closePath.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-closePath/)	关闭一个路径
 
### canvasContext.createCircularGradient	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ix6opq)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createCircularGradient.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-createCircularGradient/)	创建一个圆形的渐变颜色
 
### canvasContext.createLinearGradient	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/qgb1mf)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createLinearGradient.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-createLinearGradient/)	创建一个线性的渐变颜色
 
### canvasContext.draw	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/he6iwx)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.draw.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-draw/)	将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
 
### canvasContext.drawImage	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/pzmtqk)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.drawImage.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-drawImage/)	绘制图像到画布
 
### canvasContext.fill	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/yywmib)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fill.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-fill/)	对当前路径中的内容进行填充
 
### canvasContext.fillRect	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/vfpyra)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fillRect.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-fillRect/)	填充一个矩形
 
### canvasContext.fillText
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/saf43s)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fillText.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-fillText/)	在画布上绘制被填充的文本
 
### canvasContext.lineTo	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/zkno7s)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.lineTo.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-lineTo/)	lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线
 
### canvasContext.measureText	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/rn2r7f)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.measureText.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-measureText/)	测量文本尺寸信息，目前仅返回文本宽度，同步接口
 
### canvasContext.moveTo	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/avy1f9)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.moveTo.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-moveTo/)	把路径移动到画布中的指定点，不创建线条
 
### canvasContext.quadraticCurveTo	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/rq2yds)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.quadraticCurveTo.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-quadraticCurveTo/)	创建二次贝塞尔曲线路径
 
### canvasContext.rect	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/xgywt5)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.rect.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-rect/)	创建一个矩形

### canvasContext.restore	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/gwoqt0)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.restore.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-restore/)	恢复之前保存的绘图上下文

### canvasContext.rotate	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ncimzx)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.rotate.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-rotate/)	以原点为中心，原点可以用 translate 方法修改

### canvasContext.save	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/qnyf7h)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.save.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-save/)	保存当前的绘图上下文

### canvasContext.scale	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/gp3kpy)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.scale.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-scale/)	在调用scale方法后，之后创建的路径其横纵坐标会被缩放

### canvasContext.setFillStyle	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/vyfyp2)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFillStyle.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setFillStyle/)	设置填充色

### canvasContext.setFontSize	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/mg4uir)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFontSize.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setFontSize/)	设置字体的字号

### canvasContext.setGlobalAlpha	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/cptvsl)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setGlobalAlpha.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setGlobalAlpha/)	设置全局画笔透明度

### canvasContext.setLineCap	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/de22sq)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineCap.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setLineCap/)	设置线条的端点样式
 
### canvasContext.setLineDash	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/cvqcwt)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineDash.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setLineDash/)	设置线条虚线样式的间距和长度

### canvasContext.setLineJoin	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/sfqcgi)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineJoin.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setLineJoin/)	设置线条的交点样式

### canvasContext.setLineWidth	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ugcrcq)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineWidth.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setLineWidth/)	设置线条的宽度

### canvasContext.setMiterLimit	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/vul12s)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setMiterLimit.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setMiterLimit/)	设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离，当 setLineJoin() 为 miter 时才有效，超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示

### canvasContext.setShadow	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/btvtra)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setShadow.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setShadow/)	设置阴影样式

### canvasContext.setStrokeStyle	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/lqmreg)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setStrokeStyle.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setStrokeStyle/)	设置边框颜色

### canvasContext.setTextAlign	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/rf1uma)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextAlign.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setTextAlign/)	用于设置文字的对齐

### canvasContext.setTextBaseline	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/wo3gqy)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextBaseline.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setTextBaseline/)	用于设置文字的水平对齐
 
### canvasContext.setTransform	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/wt6glg)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTransform.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setTransform/)	使用矩阵重新设置（覆盖）当前变换的方法

### canvasContext.stroke	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/pgahxv)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.stroke.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-stroke/)	画出当前路径的边框

### canvasContext.strokeRect	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/vz04q8)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.strokeRect.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-strokeRect/)	画一个矩形(非填充)

### canvasContext.translate	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/lgqkb2)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.translate.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-translate/)	对当前坐标系的原点 (0， 0) 进行变换，默认的坐标系原点为页面左上角

### createCanvasContext	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ui-canvas)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_canvas/#swan-createCanvasContext/)	在 Page 中，推荐使用this.createCanvasContext(canvasId)，进行绘图上下文的创建




## 界面

<!--  todo 界面仍然可以制定规范，只是不约束 UI-->

### setTabBarStyle	

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/wcf0sv)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-setTabBarStyle/)	

动态设置 tabBar 的整体样式

### showNavigationBarLoading	
该方法在当前页面显示导航条加载动画

- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/lydg2a)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#swan-showNavigationBarLoading/)	

### startPullDownRefresh	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ui-pulldown)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.startPullDownRefresh.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_pull/#swan-startPullDownRefresh/)	开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
	
### stopPullDownRefresh	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/pmhkbb)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_pull/#swan-stopPullDownRefresh/)	停止当前页面下拉刷新

### tabbar	hideTabBar	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/at18z8)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-hideTabBar/)	隐藏 tabBar

### tabbar	hideTabBarRedDot	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/mg428a)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-hideTabBarRedDot/)	隐藏 tabBar 某一项的右上角的红点

### tabbar	removeTabBarBadge	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/lpbp5g)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-removeTabBarBadge/)	移除tabBar某一项右上角的文本

### tabbar	setTabBarBadge	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/qm7t3v)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-setTabBarBadge/)	为 tabBar 某一项的右上角添加文本

### tabbar	showTabBar	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/dpq5dh)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-showTabBar/)	显示 tabBar

### tabbar	showTabBarRedDot	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/dquxiq)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-showTabBarRedDot/)	显示 tabBar 某一项的右上角的红点

### 背景	setBackgroundColor	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/set-background)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_background/#swan-setBackgroundColor/)	设置窗口的背景颜色

### 背景	setBackgroundTextStyle	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/aamqae)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_background/#swan-setBackgroundTextStyle/)	设置窗口下拉背景loading样式

### 导航	reLaunch	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/fh18ky)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-redirectTo/)	关闭当前页面，跳转到应用内的某个页面

### 导航	redirectTo	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/hmn54z)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-reLaunch/)	关闭所有页面，打开到应用内的某个页面

### 导航	switchTab	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ui-tabbar)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-switchTab/)	跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

### 交互	hideToast	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/iygd4e)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-hideToast/)	隐藏消息提示框

### 交互	navigateBack	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/kc5zbx)	
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)	
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateBack/)	关闭当前页面，返回上一页面或多级页面

### 节点信息	intersectionObserver.disconnect	
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/xacdmn)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.disconnect.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#IntersectionObserver-disconnect/)	停止监听，回调函数将不再触发

### 节点信息	intersectionObserver.observe
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/pra7yc)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.observe.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#IntersectionObserver-observe/)	指定目标节点并开始监听相交状态变化情况

### 节点信息	intersectionObserver.relativeTo
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/oiuxz6)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeTo.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#IntersectionObserver-relativeTo/)	使用选择器指定一个节点，作为参照区域之一

### 节点信息	intersectionObserver.relativeToViewport
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/ghh846)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#IntersectionObserver-relativeToViewport/)	指定页面显示区域作为参照区域之一

### 节点信息	selectorQuery.exec
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/baz2hg)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.exec.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-exec/)	执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回

### 节点信息	selectorQuery.select
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/mwo97h)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-select/)	在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息

### 节点信息	selectorQuery.selectAll
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/aygfvh)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectAll.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-selectAll/)	在当前页面下选择匹配选择器 selector 的节点，返回一个 NodesRef 对象实例

### 节点信息	selectorQuery.selectViewport
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/kwbegi)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.selectViewport.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-selectViewport/)	选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例

### 屏幕亮度	setKeepScreenOn
- [阿里小程序原文档地址](https://docs.alipay.com/mini/api/qx0sap)
- [微信小程序原文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setKeepScreenOn.html)
- [百度小程序原文档地址](https://smartprogram.baidu.com/docs/develop/api/device_screen/#swan-setKeepScreenOn/)	设置是否保持常亮状态
