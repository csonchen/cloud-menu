
const request = require('../services/request');

const fetchCategoryList = () => {
  return request('category')
}

const fetchCategoryItem = ({ id = '' }) => {
  return request(
    'category', 
    {
      id,
    }
  )
}

module.exports = {
  fetchCategoryList,
  fetchCategoryItem,
}