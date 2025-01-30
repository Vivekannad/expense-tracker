# 💰 Expense Tracker App

> A modern and intuitive expense tracking application built with React and Vite that helps you manage your personal finances by tracking your income and expenses.

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://vivekannad.github.io/expense-tracker)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)](https://vitejs.dev/)

## ✨ Features

- 💸 **Smart Transaction Management**: 
  - Add income and expense transactions
  - Search transactions by description
  - Color-coded transaction history (🟢 income, 🔴 expense)

- 📊 **Visual Financial Overview**:
  - Real-time net balance calculation
  - Color-coded balance displays
    - Income total in green
    - Expense total in red
  - Transaction history with visual indicators

- 🎯 **User Experience**: 
  - Clean, intuitive interface
  - Quick transaction entry
  - Easy transaction filtering
  - Responsive design for all devices

## 🚀 Demo

![App Demo](<Screenshot 2025-01-30 131837.png>)

👉 **[Try it live](https://vivekannad.github.io/expense-tracker)**

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 6.0
- **Styling**: Pure CSS with modern design principles
- **Language**: JavaScript (ES6+)
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

1. **Clone the repository**
```bash
git clone [your-repo-url]
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

## 💡 How to Use

1. **Managing Transactions**
   - Click "Add Transaction" to open the form
   - Enter amount and description
   - Select transaction type:
     - Income (displays in green)
     - Expense (displays in red)
   - Submit to add to history

2. **Viewing Finances**
   - Net balance at the top
   - Color-coded totals:
     - Green for total income
     - Red for total expenses
   - Chronological transaction history

3. **Finding Transactions**
   - Use the search bar to filter transactions
   - Search by transaction description
   - Real-time filtering as you type

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── AddTransaction.jsx  # Transaction form
│   ├── Balance.jsx        # Balance display
│   ├── Button.jsx        # Reusable button
│   ├── History.jsx       # Transaction history
│   ├── Search.jsx        # Transaction filter
│   └── Section.jsx       # Income/Expense sections
├── App.jsx               # Main component
└── app.css              # Styles
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---
Built with 💝 using React + Vite
