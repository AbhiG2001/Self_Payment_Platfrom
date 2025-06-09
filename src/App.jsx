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
import Signup from "./Components/SignUp";
import DashboardSummary from "./Components/DashboardSummary";
import Notifications from "./Components/Notifications";
import Login from  "./Components/Login"
import MyProfilePicture from "./Components/MyProfilePicture";

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
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<DashboardSummary/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/myProfilepicture" element={<MyProfilePicture/>} />

        
      </Routes>
    </Router>
    
  );
};

export default App;
