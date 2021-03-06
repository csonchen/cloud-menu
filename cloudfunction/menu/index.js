// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const menuJoinFood = async (fid) => {
  const db = cloud.database()
  db.collection('menu_list').aggregate()
    .lookup({
      from: 'food_list',
      localField: 'foodType',
      foreignField: "_id",
      as: 'foodList'
    })
    .end()
    .then(res => {
      debugger
      console.log(res)
    })
}

const menuJoinCategory = () => {

}

const getMenuItem = async(mid) => {
  const db = cloud.database()
  let result = await db.collection('menu_list').where({
    _id: mid
  }).get()
  result = result.data.length > 0 ? result.data[0] : null

  return {
    code: 200,
    message: 'ok',
    data: {
      data: result
    }
  }
}

// 云函数入口函数
exports.main = async (event, context) => {
  const { keyword = '', foodType, id } = event

  // 与食物表联查
  // if (foodType) {
  //   await menuJoinFood(foodType)
  //   return
  // }

  if (id) {
    const result = await getMenuItem(id)
    return result
  }

  const db = cloud.database()
  let params = { }
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

