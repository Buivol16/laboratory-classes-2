// 🔄 Refactoro the Changer  
// Przenieś teraz odpowiednie wywołania logów z routing.js i zastąp tam logowanie bezpośrednie wywołaniem tych funkcji.

const getInfoLog = (message) => {console.log(message)};

const getErrorLog = (message) => {console.warn(message)};

const getProcessLog = (message) => {console.log(message)};

module.exports = {
  getInfoLog,
  getErrorLog,
  getProcessLog,
};
