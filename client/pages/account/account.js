const qcloud = require('../../vendor/wafer2-client-sdk/index')


Page({
  bindGetUserInfo(e) {
    const session = qcloud.Session.get()

    debugger
    if (session) {
      qcloud.loginWithCode({
        success(res) {
          console.log(res)
        },
        fail(err) {
          console.log(err)
        }
      })
    } else {
      qcloud.login({
        success(res) {
          console.log(res) 
        },
        fail(err) {
          console.log(err)
        }
      })
    }
  }
})