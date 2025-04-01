const path = require('path');

const homeRouting = (response) => {
  return response.sendFile(path.join(__dirname, '../views', 'home.html'));
};

module.exports = { homeRouting };
