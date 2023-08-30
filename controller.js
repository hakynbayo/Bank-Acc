// controllers.js
const bankAccounts = []; // In-memory storage for bank accounts

// Generate a random 10-digit account number
function generateAccountNumber(holderName, accountType, initialBalance) {
  const randomDigits = Math.floor(Math.random() * 9000000000) + 1000000000;
  return `${randomDigits}-${holderName.replace(
    /\s+/g,
    "_"
  )}-${accountType}-${initialBalance}`;
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

  bankAccounts.push(newAccount);

  res.status(201).json({ accountNumber });
}

// Resolve a bank account by account number
function resolveAccount(req, res) {
  // Resolve account logic
  const { accountNumber } = req.body;

  if (!accountNumber) {
    return res.status(400).json({ error: "Missing account_number" });
  }
  const account = bankAccounts.find(
      (acc) => acc.accountNumber === accountNumber
);

  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }

  res.status(200).json(account);
  console.log(account)
}

// Fetch all bank accounts
function fetchAllAccounts(req, res) {
  res.json(bankAccounts);
}

module.exports = { createAccount, resolveAccount, fetchAllAccounts };
