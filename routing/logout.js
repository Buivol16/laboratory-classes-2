const path = require('path');
const logoutRouting = (response) => {
  response.setHeader("Content-Type", "text/html");
  response.sendFile(path.join(__dirname, '../views', 'logout.html'));
};

module.exports = { logoutRouting };

