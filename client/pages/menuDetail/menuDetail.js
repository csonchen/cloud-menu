const { fetchMenuList } = require('../../services/menu');

Page({
  data: {
    menuDesc: "<div style='color: red;'>测试下富文本</div>"
  },

  onLoad() {
    fetchMenuList({
      foodType: '1'
    }).then(res => {})
  }
})