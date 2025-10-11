export const TotalExpenses = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return <h3 className="total">Total: ₹{total}</h3>;
};
