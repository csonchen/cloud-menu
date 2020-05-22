const request = require('../services/request');

const fetchMenuList = ({ keyword = '', foodType } = {}) => {
  return request(
    'menu', 
    {
      keyword,
      foodType,
    }
  )
}

module.exports = {
  fetchMenuList,
}