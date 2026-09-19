import { useState } from "react";

const Fund = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    console.log("Payment amount:", amount);
  };

  return (
    <div>
      <h1>Support Fund</h1>

      <p>
        Choose an amount to support our work.
      </p>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Fund;
