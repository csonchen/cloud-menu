const qcloud = require('../../vendor/wafer2-client-sdk/index')


Page({
  session: qcloud.Session.get(),

  data: {
    account: null
  },

  onLoad() {
    if (this.session) {
      this.setData({ account: this.session.userinfo })
    }
  },

  bindGetUserInfo(e) {
    const _this = this
    this.setData({ loading: true })
    if (this.session) {
      qcloud.loginWithCode({
        success(res) {
          _this.setData({ 
            account: res,
            loading: false,
            errorData: null 
          })
        },
        fail(err) {
          _this.setData({
            errorData: err,
            loading: false
          })
        }
      })
    } else {
      qcloud.login({
        success(res) {
          _this.setData({ 
            account: res,
            loading: false,
            errorData: null 
          })
        },
        fail(err) {
          _this.setData({
            errorData: err,
            loading: false
          })
        }
      })
    }
  }
})