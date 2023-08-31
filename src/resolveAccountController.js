const db = require("../db/db");

// Resolve a bank account by account number
function resolveAccount(req, res) {
    const accountNumber = req.params.accountNumber;
  
    if (!accountNumber) {
      return res.status(400).json({ error: "Missing account_Number" });
    }
  
    const data = db.readData();
    const account = data.find((acc) => acc.accountNumber === accountNumber);
  
    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }
  
    res.status(200).json(account);
  }

  module.exports = resolveAccount;
