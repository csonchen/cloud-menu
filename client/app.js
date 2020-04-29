//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        wx.cloud.init()
        qcloud.setLoginUrl(config.service.loginUrl)
    }
})