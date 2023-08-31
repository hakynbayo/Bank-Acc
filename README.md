# Bank Account Management App

This is a simple Express.js application for managing bank accounts. It provides endpoints to create bank accounts, resolve account details, and fetch all accounts.

## Getting Started

These instructions will help you set up and run the application on your local machine.

### Prerequisites

- Node.js 
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hakynbayo/Bank-Acc

2. Navigate to the project directory:

3. Install the required dependencies:
    npm install/ yarn

4. Create a .env file in the root directory and set the desired port:
    PORT=5000

### Usage
1. Run the application:
    npm run start
This will start the Express server and make it available at http://localhost:5000.

2. Access the Swagger documentation:

Open your web browser and visit http://localhost:5000/api-docs to view the API documentation.

API Endpoints
POST /create_account: Create a new bank account.
GET /resolve_account/:{account_number}: Fetch account details by account number.
GET /fetch_all_accounts: Fetch details of all bank accounts.

3. Deployment: 

Open your web browser and visit https://akinbayo-bank-acc.onrender.com/fetch_all_accounts to view the deployed API.












