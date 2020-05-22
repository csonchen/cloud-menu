const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (event, context) => {
  const { id = '' } = event

  const db = cloud.database()
  const params = id ? { _id: id } : null

  if (params) {
    let result = await db.collection('food_list').where(params).get()
    result = result.data.length > 0 ? result.data[0] : null

    return {
      code: 200,
      message: 'ok',
      data: {
        data: result
      }
    }
  }

  const result = await db.collection('food_list').get()
  return {
    code: 200,
    message: 'ok',
    data: {
      list: result.data
    }
  }
}