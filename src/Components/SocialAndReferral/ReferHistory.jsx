import React from "react";

const referrals = [
  { name: "Abhishek Ghuge", status:"Signed Up", reward: "₹50" },
  { name: "Vishal Jatti", status: "Pending", reward: "-" },
  { name: "Sandeep Kushwah", status: "Signed Up", reward: "₹50" },
  { name: "Rahul Peddapelli", status: "Pending", reward: "-" },
  { name: "Shraddha Choudhari", status: "Signed Up", reward: "₹50" },
  { name: "Parth k", status: "Pending", reward: "-" },
];

const ReferHistory = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Referral History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Reward</th>
          </tr>
        </thead>
        <tbody>
          {referrals.map((ref, index) => (
            <tr key={index} className="border-t text-gray-700">
              <td className="py-2 px-4">{ref.name}</td>
              <td className="py-2 px-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    ref.status === "Signed Up"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {ref.status}
                </span>
              </td>
              <td className="py-2 px-4">{ref.reward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferHistory;
