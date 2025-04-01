const fileSystem = require("fs");
const { STATUS_CODE } = require("../constants/statusCode");
const viewNewProductPage = require("../views/renderNewProductPage");
const path = require('path');

const renderNewProductPage = (res) => {
  fileSystem.readFile("./product.txt", "utf-8", (err, data) => {
    viewNewProductPage(res, data, err);
  });
}

const renderAddProductPage = (response) => {
  return response.sendFile(path.join(__dirname, '../views', 'add-product.html'));
};

const addNewProduct = (request, response) => {
  const body = request.body;

  fileSystem.writeFile(
    "product.txt",
    `${body.name}, ${body.description}`,
    (err) => {
      response.statusCode = STATUS_CODE.FOUND;
      response.setHeader("Location", "/product/new");

      return response.end();
    }
  );
}

module.exports = { renderNewProductPage, renderAddProductPage, addNewProduct };
