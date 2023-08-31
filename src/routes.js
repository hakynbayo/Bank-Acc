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
 * /resolve_account/{accountNumber}:
 *   get:
 *     summary: Resolve a bank account by account number
 *     description: Resolve a bank account using its account number.
 *     parameters:
 *       - name: accountNumber
 *         in: path
 *         required: true
 *         description: Account number of the bank account to resolve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bank account details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accountNumber:
 *                   type: string
 *                 holderName:
 *                   type: string
 *                 dob:
 *                   type: string
 *                   format: date
 *                 accountType:
 *                   type: string
 *                 balance:
 *                   type: number
 *       404:
 *         description: Account not found
 */


/**
 * @swagger
 * /fetch_all_accounts:
 *   get:
 *     summary: Fetch all bank accounts
 *     description: Fetch a list of all bank accounts.
 *     responses:
 *       200:
 *         description: List of all bank accounts
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               accountNumber:
 *                 type: string
 *               holderName:
 *                 type: string
 *               dob:
 *                 type: string
 *                 format: date
 *               accountType:
 *                 type: string
 *               balance:
 *                 type: number
 */

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
router.get('/resolve_account/:accountNumber', resolveAccount);

// Fetch all bank accounts
router.get("/fetch_all_accounts", fetchAllAccounts);

module.exports = router;
