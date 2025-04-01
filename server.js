const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getErrorLog, getInfoLog } = require('./utils/logger');
const config = require("./config");
const { STATUS_CODE } = require("./constants/statusCode");
const { homeRouting } = require("./routing/home");
const { renderAddProductPage, addNewProduct, renderNewProductPage } = require("./routing/product");
const { logoutRouting } = require("./routing/logout");
const killRouting = require("./routing/kill");

const app = express();

app.listen(config.PORT, () => {
  
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const { url, method } = req;
  getInfoLog(
    `INFO (${new Date(Date.now()).toUTCString()}): ${method} - ${url}`
  );
  next();
});

app.get('/product/get', (req, res) => {
  return renderAddProductPage(res);
})

app.post("/product/add", (req, res) => {
    return addNewProduct(req, res);
})

app.get('/product/new', (req, res) => {
  return renderNewProductPage(res);
})

app.use('/logout', (req, res) => {
  return logoutRouting(res);
});

app.use('/kill', (req, res) => {
  killRouting(res);
});

app.get('/', (req, res) => {
  return homeRouting(res);
});

app.use((req, res, next) => {
  getErrorLog('404 - ROUTE NOT FOUND');
  res.status(STATUS_CODE.NOT_FOUND).sendFile(path.join(__dirname, 'views', '404.html'));
});