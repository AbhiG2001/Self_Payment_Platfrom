import React, { useState } from "react";

const AddBankAccount = () => {
  const [name, setName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [ifsc, setIfsc] = useState("");

  const handleAdd = () => {
    if (name && accountNo && ifsc) {
      alert(`Bank account added for ${name}`);
      setName(""); setAccountNo(""); setIfsc("");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-blue-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Add Bank Account</h1>
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Account Holder Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Account Number"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="IFSC Code"
          value={ifsc}
          onChange={(e) => setIfsc(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800"
        >
          Add Account
        </button>
      </div>
    </div>
  );
};

export default AddBankAccount;
