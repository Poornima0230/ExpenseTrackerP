import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { TotalExpenses } from "./components/TotalExpenses";
// import { useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const addExpense = (expense) => {
    setExpenses((prev) => {
      const updated = [expense, ...prev];
      localStorage.setItem("expenses", JSON.stringify(updated)); // write once here
      return updated;
    });
  };

  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  // useEffect(() => {
  //   localStorage.setItem("expenses", JSON.stringify(expenses));
  // }, [expenses]);

  return (
    <div className="app">
      <h1 className="title">Expense Tracker</h1>
      {/* <h2 className="wish">Good Morning</h2> */}
      <p className="date">{formattedDate}</p>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      <TotalExpenses expenses={expenses} />
      <button
        onClick={() => {
          setExpenses([]);
          localStorage.removeItem("expenses");
        }}
        className="clear-btn"
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
