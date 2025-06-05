import React from "react";
import PaymentDashboard from "./Components/PaymentDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SendMoney from "./Components/SendMoney";
import ScanPay from "./Components/Scanpay";
import Offers from "./Components/Offers";
import Recharge from "./Components/Recharge";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentDashboard />} />
        <Route path="/send-money" element={<SendMoney/>} />
        <Route path="/scan-pay" element={<ScanPay />} />
        <Route path="/recharge" element={<Recharge/>} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </Router>
    
  );
};

export default App;
