Component({
  properties: {
    menu: {
      type: Object,
      value: null
    }
  },

  methods: {
    toMenuDetail() {
      const { _id: id } = this.data.menu
      wx.navigateTo({
        url: `/pages/menuDetail/menuDetail?id=${id}`
      })
    }
  }
})