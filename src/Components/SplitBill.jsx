import React, { useState } from "react";

export default function SplitBill() {
  const [people, setPeople] = useState([{ name: "", amount: "" }]);
  const [result, setResult] = useState([]);

  const addPerson = () => {
    setPeople([...people, { name: "", amount: "" }]);
  };

  const handleChange = (i, field, value) => {
    const updated = [...people];
    updated[i][field] = value;
    setPeople(updated);
  };

  const calculateSplit = () => {
    const parsed = people.map((p, idx) => ({
      name: p.name.trim() !== "" ? p.name : `Person ${idx + 1}`,
      amount: parseFloat(p.amount) || 0,
    }));

    const total = parsed.reduce((sum, p) => sum + p.amount, 0);
    const share = total / parsed.length;

    const balances = parsed.map(p => ({
      ...p,
      bal: parseFloat((p.amount - share).toFixed(2)),
    }));

    const lenders = balances.filter(p => p.bal > 0);
    const owers = balances.filter(p => p.bal < 0);
    const settle = [];

    let li = 0, oi = 0;

    while (li < lenders.length && oi < owers.length) {
      const lender = lenders[li];
      const ower = owers[oi];
      const amt = Math.min(lender.bal, -ower.bal);

      settle.push({
        from: ower.name,
        to: lender.name,
        amount: amt.toFixed(2),
      });

      lender.bal -= amt;
      ower.bal += amt;

      if (lender.bal.toFixed(2) === "0.00") li++;
      if (ower.bal.toFixed(2) === "0.00") oi++;
    }

    setResult(settle);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Split Bill Calculator</h2>

      {people.map((p, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Name"
            value={p.name}
            onChange={e => handleChange(i, "name", e.target.value)}
            className="border rounded flex-1 p-2"
          />
          <input
            type="number"
            placeholder="Amount"
            value={p.amount}
            onChange={e => handleChange(i, "amount", e.target.value)}
            className="border rounded w-24 p-2"
            min="0"
          />
        </div>
      ))}

      <button
        onClick={addPerson}
        className="bg-gray-200 px-3 py-1 rounded mb-2"
      >
        + Add Person
      </button>
      <button
        onClick={calculateSplit}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Calculate
      </button>

      <div className="border-t pt-4">
        <h3 className="font-semibold mb-2">Who Pays Who:</h3>
        {result.length === 0 ? (
          <p className="text-gray-600">No results yet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {result.map((s, i) => (
              <li key={i}>
                {s.from} → {s.to}: ₹{s.amount}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}