const { fetchMenuList } = require('../../services/menu');

Page({
  onLoad() {
    fetchMenuList({
      foodType: '1'
    }).then(res => {})
  }
})