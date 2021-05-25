import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import Expenses from "../components/Expenses";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 11, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      const newExpenses = [
        ...prevExpenses,
        { ...expense, id: String(Math.random()) },
      ];
      console.log("- newExpenses = ", newExpenses);
      return newExpenses;
    });
    setEditing(false);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="app-container">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue-mt">
          <a className="navbar-brand" href="/">
            Expenses
          </a>
        </nav>
      </header>
      <main role="main">
        <div className="container py-4">
          <div className="d-flex flex-wrap justify-content-between align-items-center my-4">
            <h2 className="my-0">Expenses</h2>
            {!isEditing && (
              <button
                className="btn btn-sm btn-primary"
                onClick={startEditingHandler}
              >
                Add
              </button>
            )}
          </div>
          {isEditing && (
            <ExpenseForm
              onSaveExpenseData={saveExpenseDataHandler}
              onCancel={stopEditingHandler}
            />
          )}
          <Expenses expenses={expenses} />
        </div>
      </main>
    </div>
  );
};

export default App;
