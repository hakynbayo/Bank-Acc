const db = require("../db/db");

// Fetch all bank accounts
function fetchAllAccounts(req, res) {
  const data = db.readData();
  res.json(data);
}

module.exports = fetchAllAccounts;
