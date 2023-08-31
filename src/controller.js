const db = require("../db/db");

// Define the generateAccountNumber function here
function generateAccountNumber() {
  const randomDigits = Math.floor(Math.random() * 9000000000) + 1000000000;

  return `${randomDigits}`;
}

// Create a new bank account
function createAccount(req, res) {
  // Validation and account creation logic
  const { holderName, dob, accountType, initialBalance } = req.body;

  if (
    !holderName ||
    !dob ||
    !accountType ||
    initialBalance === undefined ||
    initialBalance < 0
  ) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  const accountNumber = generateAccountNumber(
    holderName,
    accountType,
    initialBalance
  );

  const newAccount = {
    accountNumber,
    holderName,
    dob,
    accountType,
    balance: initialBalance,
  };

  const data = db.readData();
  data.push(newAccount);
  db.writeData(data);

  res.status(201).json(newAccount);
}


// Resolve a bank account by account number
function resolveAccount(req, res) {
  console.log("hay")
  const { accountNumber } = req.body;
  console.log(accountNumber)

  if (!accountNumber) {
    return res.status(400).json({ error: "Missing account" });
  }

  const data = db.readData();
  const account = data.find((acc) => acc.accountNumber === accountNumber);

  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }

  res.status(200).json(account);
}


// Fetch all bank accounts
function fetchAllAccounts(req, res) {
  const data = db.readData();
  res.json(data);
}

module.exports = { createAccount, resolveAccount, fetchAllAccounts };
