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
import Login from "./Components/Login";
import MyProfilePicture from "./Components/MyProfilePicture";
import SplitBill from "./Components/SplitBill";
import ElectricityBill from "./Components/ElectricityBill";
import TravelBooking from "./Components/TravelBooking";
import MovieTickets from "./Components/MovieTickets";
import Donate from "./Components/Donate";
import Refer from "./Components/Refer";
import Settings from "./Components/Settings";
import Logout from "./Components/Logout";
import CreditCardBill from "./Components/Bill/CreditCardBill"
import WaterBill from "./Components/Bill/WaterBill"
import GasBill from "./Components/Bill/GasBill"
import Insurance from "./Components/Bill/Insurance";
import FastagRecharge from "./Components/Bill/FastagRecharge";
import EMIPayments from "./Components/Bill/EMIPayments";
import LoanRepayment from "./Components/Bill/LoanRepayment";
import FlightBooking from "./Components/Bill/FlightBooking";
import HotelBooking from "./Components/Bill/HotelBooking";
import EventBooking from "./Components/Bill/EventBooking";
import GiftCards from "./Components/Bill/GiftCards";
import Subscription from "./Components/Bill/Subscription";
import AddBankAccount from "./Components/Bill/AddBankAccount";
import KYCVerification from "./Components/Bill/KYCVerification";
import TaxPayments from "./Components/Bill/TaxPayments";4
import UPIAccounts from "./Components/Bill/UPIAccounts";
import WalletTopup from "./Components/Bill/WalletTopup";
import NearbyOffers from "./Components/Bill/NearbyOffers";
import ReferHistory from "./Components/Bill/ReferHistory";
import AccountLimits from "./Components/Bill/AccountLimits";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentDashboard />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/scan-pay" element={<ScanPay />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/transactions" element={<TransactionHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/bills" element={<BillPayments />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardSummary />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/myProfilepicture" element={<MyProfilePicture />} />
        <Route path="/SplitBill" element={<SplitBill/>} />
        <Route path="/electricity" element={<ElectricityBill/>} />
        <Route path="/travel-booking" element={<TravelBooking/>} />
        <Route path="/movies" element={<MovieTickets/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/refer" element={<Refer/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/logout" element={<Logout/>} />

        <Route path="/credit-card-bill" element={<CreditCardBill/>} />
        <Route path="/water-bill" element={<WaterBill />} />
        <Route path="/gas-bill" element={<GasBill />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/fastag-recharge" element={<FastagRecharge />} />
        <Route path="/emi-payments" element={<EMIPayments />} />
        <Route path="/loan-repayment" element={<LoanRepayment />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/hotel-booking" element={<HotelBooking />} />
        <Route path="/event-booking" element={<EventBooking />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/add-bank-account" element={<AddBankAccount />} />
        <Route path="/kyc-verification" element={<KYCVerification />} />
        <Route path="/tax-payments" element={<TaxPayments />} />
        <Route path="/upi-accounts" element={<UPIAccounts />} />
        <Route path="/wallet-topup" element={<WalletTopup />} />
        <Route path="/nearby-offers" element={<NearbyOffers />} />
        <Route path="/refer-history" element={<ReferHistory />} />
        <Route path="/account-limits" element={<AccountLimits />} />
      </Routes>
    </Router>
  );
};

export default App;
