// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const { keyword = '' } = event

  const db = cloud.database()
  let params = { foodType: 1 }
  if (keyword) {
    params.title = db.RegExp({
      regexp: keyword,
      options: 'i'
    })
  }
  const result = await db.collection('menu_list').where(params).get()

  return {
    code: 200,
    message: 'ok',
    data: {
      menuList: result.data
    }
  }
}