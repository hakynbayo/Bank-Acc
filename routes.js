// routes.js
const express = require("express");
const router = express.Router();
const {
  createAccount,
  resolveAccount,
  fetchAllAccounts,
} = require("./controller"); // Import controllers

/**
 * @swagger
 * /create_account:
 *   post:
 *     summary: Create a new bank account
 *     description: Create a new bank account.
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Account details
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             holderName:
 *               type: string
 *             dob:
 *               type: string
 *               format: date
 *             accountType:
 *               type: string
 *             initialBalance:
 *               type: number
 *     responses:
 *       201:
 *         description: Account created successfully
 *         schema:
 *           type: object
 *           properties:
 *             accountNumber:
 *               type: string
 */


// Create a new bank account
router.post("/create_account", createAccount);

// Resolve a bank account by account number
router.get("/resolve_account", resolveAccount);

// Fetch all bank accounts
router.get("/fetch_all_accounts", fetchAllAccounts);

module.exports = router;
