import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoMdCopy } from "react-icons/io";

export const ShareExpenses = ({ expenses }) => {
  const handleShare = async () => {
    if (navigator.share) {
      const expenseText = expenses
        .map(
          (exp) =>
            `${exp.category}: ₹${exp.amount}${exp.note ? `(${exp.note})` : ""}`
        )
        .join("\n");

      try {
        await navigator.share({
          title: "My Expenses",
          text: `Here are my expenses:\n${expenseText}`,
        });
        alert("Shared Successfully!");
      } catch (error) {
        console.error("Error sharing: ", error);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };
  const handleCopy = () => {
    const expenseText = expenses
      .map(
        (exp) =>
          `${exp.category}: ₹${exp.amount}${exp.note ? ` (${exp.note})` : ""}`
      )
      .join("\n");
    navigator.clipboard.writeText(expenseText);
    alert("Copied to clipboard! You can now paste it to share.");
  };
  return (
    <div className="share-container">
      <p className="share" onClick={handleShare} style={{ cursor: "pointer" }}>
        Share Expenses <FaRegShareFromSquare />
      </p>
      <p className="share" onClick={handleCopy} style={{ cursor: "pointer" }}>
        Copy <IoMdCopy />
      </p>
    </div>
  );
};
