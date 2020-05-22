const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
    wx.hideToast();

    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}

let windowWidth = 0
let windowHeight = 0
wx.getSystemInfo({
  success(res) {
    windowWidth = res.windowWidth
    windowHeight = res.windowHeight
  }
})

const getSystemInfo = () => {
  return [ windowWidth, windowHeight ]
}

const bindData = (() => {
  let instance = null
  return function(bindName, data) {
    if (!instance) {
      instance = {
        [bindName]: data
      } 
    }
    return instance[bindName]
  }
})();

module.exports = { 
  formatTime, 
  showBusy, 
  showSuccess, 
  showModel,
  getSystemInfo,
  bindData,
}
