import React from "react";
import PaymentDashboard from "./Components/PaymentDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SendMoney from "./Components/SendMoney";
import ScanPay from "./Components/Scanpay";
import Offers from "./Components/Offers";
import Recharge from "./Components/Recharge";
import TransactionHistory from "./Components/TransactionHistory";
import Profile from "./Components/Profile";
import Support from "./Components/Support";
import Wallet from "./Components/Wallet";
import BillPayments from "./Components/BillPayments";
import Rewards from "./Components/Rewards";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentDashboard />} />
        <Route path="/send-money" element={<SendMoney/>} />
        <Route path="/scan-pay" element={<ScanPay />} />
        <Route path="/recharge" element={<Recharge/>} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/transactions" element={<TransactionHistory/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/bills" element={<BillPayments/>} />
        <Route path="/rewards" element={<Rewards/>} />
        
      </Routes>
    </Router>
    
  );
};

export default App;
