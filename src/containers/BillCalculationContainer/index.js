import { useState, useEffect } from "react";

const BillCalculationContainer = () => {
  const [billAmount, setBillAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [userSatisfiedValue, setUserSatisfiedValue] = useState(0);
  const [friendSatisfiedValue, setFriendSatisfiedValue] = useState(0);
  const [tip, setTip] = useState(0);

  function handleReset() {
    setBillAmount("");
    setTotalAmount(0);
    setUserSatisfiedValue(0);
    setFriendSatisfiedValue(0);
    setTip(0);
  }
  useEffect(() => {
    const diff =
      friendSatisfiedValue === 0 || userSatisfiedValue === 0
        ? Math.abs(friendSatisfiedValue - userSatisfiedValue)
        : Math.abs(friendSatisfiedValue - userSatisfiedValue) / 2;

    const calculatedTip =
      friendSatisfiedValue >= userSatisfiedValue
        ? userSatisfiedValue + diff
        : friendSatisfiedValue + diff;

    const amount = Number(billAmount || 0);
    const total = amount + amount * calculatedTip;
    setTip(calculatedTip);
    setTotalAmount(total);
  }, [billAmount, userSatisfiedValue, friendSatisfiedValue]);

  function handleOnChangeBillAmount(e) {
    setBillAmount(e.target.value);
  }

  function handleOnChangeFriendTip(e) {
    setFriendSatisfiedValue(Number(e.target.value));
  }

  function handleOnChangeUserTip(e) {
    setUserSatisfiedValue(Number(e.target.value));
  }

  return (
    <div>
      <form style={{ textAlign: "start" }}>
        <div>
          <label>How much was the bill? </label>
          <input
            value={billAmount}
            type="number"
            min="0"
            onChange={handleOnChangeBillAmount}
          />
        </div>
        <div>
          <label>How did you like the service? </label>
          <select value={userSatisfiedValue} onChange={handleOnChangeUserTip}>
            <option value={0}>DisSatisfied (0%)</option>
            <option value={0.05}>It was okay (5%)</option>
            <option value={0.1}>It was good (10%)</option>
            <option value={0.2}>Absolutely Amazing (20%)</option>
          </select>
        </div>
        <div>
          <label>How did your friend like the service? </label>
          <select
            value={friendSatisfiedValue}
            onChange={handleOnChangeFriendTip}
          >
            <option value={0}>DisSatisfied (0%)</option>
            <option value={0.05}>It was okay (5%)</option>
            <option value={0.1}>It was good (10%)</option>
            <option value={0.2}>Absolutely Amazing (20%)</option>
          </select>
        </div>
      </form>

      <div style={{ textAlign: "start" }}>
        <h2>
          You pay ${totalAmount} (
          {`$${Number(billAmount || 0)} + $${
            tip ? tip.toFixed(2) : "0.00"
          } tip`}
          )
        </h2>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};
export default BillCalculationContainer;
