// const { homeRouting } = require("./home");
// const { productRouting } = require("./product");
// const { logoutRouting } = require("./logout");
// const { STATUS_CODE } = require("../constants/statusCode");
// const { getErrorLog, getInfoLog, getProcessLog } = require('../utils/logger')

// const requestRouting = (request, response) => {
//   const { url, method } = request;
//   getInfoLog(
//     `INFO (${new Date(Date.now()).toUTCString()}): ${method} - ${url}`
//   );

//   if (url === "/") {
//     return homeRouting(method, response);
//   }

//   if (url.includes("/product")) {
//     return productRouting(request, response);
//   }

//   if (url === "/logout") {
//     return logoutRouting(method, response);
//   }

//   if (url === "/kill") {
//     getProcessLog(
//       `PROCESS (${new Date(
//         Date.now()
//       ).toUTCString()}): logout has been initiated and the application will be closed.`
//     );
//     process.exit();
//   }

//   response.statusCode = STATUS_CODE.NOT_FOUND;
//   response.setHeader("Content-Type", "text/html");
//   response.write("<html><body><h1>404 - Not Found</h1></body></html>");
//   response.end();

//   getErrorLog(
//     `ERROR (${new Date(
//       Date.now()
//     ).toUTCString()}): requested url ${url} doesn't exist.`
//   );
// };

// module.exports = { requestRouting };
