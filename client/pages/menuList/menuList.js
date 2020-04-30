Page({
  data: {
    menuList: []
  },

  onLoad() {
    wx.cloud.callFunction({
      name: 'add',
      success: (res) => {
        if (res.result.code == 200) {
          const { menuList } = res.result.data
          this.setData({ menuList })
        }
      },
      fail: console.error
    })
  }
})