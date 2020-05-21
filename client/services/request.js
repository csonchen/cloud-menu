const request = (cloudName, data) => {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: cloudName,
      data,
    }).then(res => {
      const { code, message } = res.result
      if (code == 200) {
        return resolve(res.result.data)
      } else {
        return reject({ code, message })
      }
    }).catch(err => {
      return reject(err)
    })
  })
}

module.exports = request