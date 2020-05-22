//index.js
Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: ''
    },

    toSearchPage() {
        wx.navigateTo({
            url: '/pages/search/search'
        })
    },
})
