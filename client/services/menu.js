const request = require('../services/request');

const fetchMenuList = ({ keyword = '' } = {}) => {
  return request(
    'add', 
    {
      keyword,
    }
  )
}

module.exports = {
  fetchMenuList,
}