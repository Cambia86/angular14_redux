

const category_business = require('../business/category.business');
var uuid = require('uuid');

exports.retrieveCategory = function (req, res) {
  category_business.getCategory((data) => {
    res.send(data);
  });
}

exports.retrieveCategoryById = function (req, res) {
  let categoryId = req.params.categoryId
  category_business.getCategoryById(transactionId, (data) => {
    res.send(data);
  });
}

exports.updateCategoryById = function (req, res) {
  let categoryId = req.params.categoryId
  let category = req.body.category;
  category_business.updateCategoryById(categoryId, category, (data) => {
    res.send({ results: data });
  });
}

exports.createCategory = function (req, res) {
  let categoryId = uuid.v4();// req.params.transactionId
  let category = req.body.category;
  category.id = categoryId;
  category_business.createCategory(category, (data) => {
    res.send({ categoryId: categoryId });
  });
}

exports.deleteCategoryIdById = function (req, res) {
  let categoryId = req.params.categoryId
  category_business.deleteCategoryById(categoryId, (data) => {
    res.send(data);
  });
}


