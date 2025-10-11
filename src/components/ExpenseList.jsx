import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { ShareExpenses } from "./Share";

export const ExpenseList = ({ expenses, setExpenses }) => {
  if (expenses.length === 0) {
    return <p style={{ textAlign: "center" }}>No expenses added yet.</p>;
  }

  const deleteExpense = (index) => {
    const updated = expenses.filter((_, i) => i !== index); // remove selected expense
    setExpenses(updated);
    localStorage.setItem("expenses", JSON.stringify(updated)); // update localStorage
  };

  return (
    <div className="expenseList-container">
      {expenses.map((exp, index) => (
        <div key={index} className="expense-card">
          <div className="expenseCard-item">
            <p>
              <strong>{exp.category}</strong>
            </p>
            <p>₹{exp.amount}</p>
          </div>
          {exp.note && <p>{exp.note}</p>}
          <p className="time-delete">
            <small>{exp.date.toLocaleString()}</small>
            <MdOutlineDeleteForever
              className="deleteBtn"
              onClick={() => deleteExpense(index)} // added click
            />
          </p>
        </div>
      ))}
      {/* <p className="share">
        Share Expenses
        <FaRegShareFromSquare />
      </p> */}
      <ShareExpenses expenses={expenses} />
    </div>
  );
};
