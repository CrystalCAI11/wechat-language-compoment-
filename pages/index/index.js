Page({
  data: {},
  onLoad() {
    this.setData({
      content: wx.getStorageSync('content')
    })
  }
})