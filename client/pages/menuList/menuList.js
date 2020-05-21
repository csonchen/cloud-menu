const { fetchMenuList } = require('../../services/menu');

Page({
  data: {
    menuList: []
  },

  onLoad() {
    fetchMenuList().then(res => {
      const { menuList } = res
      const errorData = menuList.length == 0 && { message: '暂无数据' }
      this.setData({
        loading: false,
        errorData,
        menuList
      })
    }).catch(err => {
      this.setData({
        loading: false,
        errorData: err,
      })
    })
  }
})