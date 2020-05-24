const { fetchMenuList } = require('../../services/menu');

Page({
  data: {
    menu: null,
  },

  onLoad(options) {
    const { id } = options || {}
    if (!id) {
      return
    }
 
    this.setData({ loading: true })
    fetchMenuList({
      id
    }).then(res => {
      const { data: menu } = res
      this.setData({ 
        menu,
        loading: false,
        errorData: null, 
      })
    }).catch(err => {
      this.setData({
        loading: false,
        errorData: err,
      })
    })
  }
})