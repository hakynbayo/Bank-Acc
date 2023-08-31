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

module.exports = createAccount;
