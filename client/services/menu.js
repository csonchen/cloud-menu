const request = require('../services/request');

const fetchMenuList = ({ keyword = '', foodType, id } = {}) => {
  return request(
    'menu', 
    {
      id,
      keyword,
      foodType,
    }
  )
}

module.exports = {
  fetchMenuList,
}