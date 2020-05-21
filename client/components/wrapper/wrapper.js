Component({
  options: {
    multipleSlots: true
  },

  properties: {
    loading: {
      type: Boolean,
      value: false,
      observer(val) {
        val ? wx.showLoading() : wx.hideLoading()
      }
    },

    errorData: {
      type: Object,
      value: null
    },

    btnText: {
      type: String,
      value: '重新加载'
    }
  },

  methods: {
    handleBtnTap() {
      this.triggerEvent('btntap')
    }
  }
})