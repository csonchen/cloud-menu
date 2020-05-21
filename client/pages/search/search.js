const { fetchMenuList } = require('../../services/menu');

Page({
  keyword: '',
  
  data: {
    menuList: []
  },

  handleSearch({ detail: keyword }) {
    this.setData({ loading: true })
    
    // 判断是否为搜索查找
    if (keyword) {
      this.keyword = keyword
    }

    console.log(this.keyword)
    fetchMenuList({
      keyword: this.keyword
    }).then(res => {
      const { menuList } = res
      const errorData = menuList.length == 0 && { message: '换个关键词试试吧~' }
      this.setData({ 
        loading: false,
        errorData,
        menuList,
      })
    }).catch(err => {
      this.setData({
        loading: false,
        errorData: err,
      })
    })
  }
})