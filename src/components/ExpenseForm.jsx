import { useState } from "react";

export const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [note, setNote] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    // validation
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const expenseData = {
      amount: parseFloat(amount),
      category,
      note,
      date: new Date(),
    };

    // passing to parent
    onAddExpense(expenseData);

    // Reset
    setAmount("");
    setCategory("Food");
    setNote("");
  };
  return (
    <section className="container">
      <form
        className="addExpenses-container"
        onSubmit={submitHandler}
        action="#"
      >
        <h2>Add Expenses</h2>
        <div className="amount-container">
          <p>Amount</p>
          {/* <p>zzzz0</p> */}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            required
          />
        </div>
        <div className="category-container">
          <p>Category</p>
          {/* <p>Food</p> */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Grocery">Grocery</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="note-container">
          <p>Note(optional)</p>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a note"
          />
        </div>
        <button className="add-btn" type="submit" onClick={submitHandler}>
          + Add Expense
        </button>
      </form>
    </section>
  );
};
