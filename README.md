# Expense Tracker App

A modern and intuitive expense tracking application built with React and Vite that helps you manage your personal finances by tracking your income and expenses.

## Features

- Track both income and expenses
- View net balance at a glance
- Add new transactions with description and amount
- Categorize transactions as income or expense
- View transaction history with color-coded entries
- Real-time balance calculations
- Clean and responsive user interface

## Tech Stack

- React 
- Vite
- CSS for styling
- JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

1. View your current balance at the top of the app
2. Click "Add Transaction" to open the transaction form
3. Enter the transaction details:
   - Amount
   - Description
   - Type (Income/Expense)
4. Submit the form to add the transaction
5. View your updated balance and transaction history
6. Transactions are color-coded:
   - Green: Income
   - Red: Expense

## Components

- `App`: Main component that manages state and renders child components
- `Balance`: Displays net balance and controls transaction form visibility
- `AddTransaction`: Form component for adding new transactions
- `Section`: Displays income/expense sections with totals
- `History`: Renders individual transaction entries
- `Button`: Reusable button component

## Contributing

Feel free to submit issues and enhancement requests!



---
Built with  using React + Vite
