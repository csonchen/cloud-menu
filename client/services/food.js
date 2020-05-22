
const request = require('../services/request');

const fetchFoodList = () => {
  return request('food')
}

const fetchFoodItem = ({ id = '' }) => {
  return request(
    'food', 
    {
      id,
    }
  )
}

module.exports = {
  fetchFoodList,
  fetchFoodItem,
}