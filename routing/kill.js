const { getProcessLog } = require('../utils/logger');

const killRouting = (res) => {
    getProcessLog(
        `PROCESS (${new Date(
          Date.now()
        ).toUTCString()}): logout has been initiated and the application will be closed.`
      );
  res.send('Server is shutting down...');

  process.exit();
};

module.exports = killRouting;