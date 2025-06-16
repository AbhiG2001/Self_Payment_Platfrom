import React from "react";
import PaymentDashboard from "./Components/PaymentDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FinancialServices from "./Components/FinancialServices/FinancialServices";
import ECommerceAndDelivery from "./Components/ECommerceAndDelivery/ECommerceAndDelivery";
import TravelAndBooking from "./Components/TravelAndBooking/TravelAndBooking";
import UtilityAndGovernment from "./Components/UtilityAndGovernment/UtilityAndGovernment";
import EducationAndLearning from "./Components/EducationAndLearning/EducationAndLearning";
import LifestyleAndDigital from "./Components/LifestyleAndDigital/LifestyleAndDigital";
import CoreFeatures from "./Components/CoreFeatures/CoreFeatures";
import SocialAndReferral from "./Components/SocialAndReferral/SocialAndReferral";
import UserAccount from "./Components/UserAccount/UserAccount";

import SendMoney from "./Components/FinancialServices/SendMoney";
import CreditCardBill from "./Components/FinancialServices/CreditCardBill";
import EMIPayments from "./Components/FinancialServices/EMIPayments";
import LoanRepaymemt from "./Components/FinancialServices/LoanRepayment"
import MutualFunds from "./Components/FinancialServices/MutualFund"
import StockTrading from "./Components/FinancialServices/StockTrading"
import CryptoWallet from "./Components/FinancialServices/CryptoWallet"
import FixedDeposit from "./Components/FinancialServices/FixedDeposit"
import DigitalGold from "./Components/FinancialServices/DigitalGold"
import WalletTopup from "./Components/FinancialServices/WalletTopup"
import AccountLimits from "./Components/FinancialServices/AccountLimits"
import TaxPayments from "./Components/FinancialServices/TaxPayments"
import AddBankAccount from "./Components/FinancialServices/AddBankAccount";
import KycVerification from "./Components/FinancialServices/KYCVerification"

import GroceryOrder from "./Components/ECommerceAndDelivery/GroceryOrders"
import FoodDelivery from "./Components/ECommerceAndDelivery/FoodDelivery"
import Courier from "./Components/ECommerceAndDelivery/CourierBooking"
import GiftCards from "./Components/ECommerceAndDelivery/GiftCards"
import Subscription from "./Components/ECommerceAndDelivery/Subscription"

import BTT from "./Components/TravelAndBooking/TravelBooking"
import FlightBooking from "./Components/TravelAndBooking/FlightBooking"
import HotelBooking from "./Components/TravelAndBooking/HotelBooking"
import MovieTickets from "./Components/TravelAndBooking/MovieTickets"
import Event from "./Components/TravelAndBooking/EventBooking"

import ElectricityBill from "./Components/UtilityAndGovernment/ElectricityBill"
import WaterBill from "./Components/UtilityAndGovernment/WaterBill"
import GasBill from "./Components/UtilityAndGovernment/GasBill"
import PropertyTax from "./Components/UtilityAndGovernment/PropertyTax"
import TrafficChallan from "./Components/UtilityAndGovernment/TrafficChallan"
import AadhaarServices from "./Components/UtilityAndGovernment/AadhaarServices"
import Insurance from "./Components/UtilityAndGovernment/Insurance"
import Fastag from "./Components/UtilityAndGovernment/FastagRecharge"

import SchoolFees from "./Components/EducationAndLearning/SchoolFees"
import OnlineCourses from "./Components/EducationAndLearning/OnlineCourses"

import GamingCredits from "./Components/LifestyleAndDigital/GamingCredits";
import OTTSubscriptions from "./Components/LifestyleAndDigital/OTTSubscriptions";

import ScanPay from "./Components/CoreFeatures/Scanpay"
import Recharge from "./Components/CoreFeatures/Recharge"
import Offers from "./Components/CoreFeatures/Offers"
import TransactionHistory from "./Components/CoreFeatures/TransactionHistory"
import Wallet from "./Components/CoreFeatures/Wallet"
import Profile from "./Components/CoreFeatures/Profile"
import MyProfilePicture from "./Components/CoreFeatures/MyProfilePicture" 
import Rewards from "./Components/CoreFeatures/Rewards"
import SplitBill from "./Components/CoreFeatures/SplitBill"
import NearbyOffers from "./Components/CoreFeatures/NearbyOffers"

import Donate from "./Components/SocialAndReferral/Donate"
import Refer from "./Components/SocialAndReferral/Refer"
import ReferHistory from "./Components/SocialAndReferral/ReferHistory"

import Login from "./Components/UserAccount/Login"
import Signup from './Components/UserAccount/SignUp'
import DashboardSummary from "./Components/UserAccount/DashboardSummary"
import Notifications from "./Components/UserAccount/Notifications"
import Support from "./Components/UserAccount/Support"
import AccountSettings from "./Components/UserAccount/Settings" 
import Logout from "./Components/UserAccount/Logout"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentDashboard />} />
        <Route path="/financialServices" element={<FinancialServices />} />
        <Route
          path="/eCommerceAndDelivery"
          element={<ECommerceAndDelivery />}
        />
        <Route path="/travelAndBooking" element={<TravelAndBooking />} />
        <Route
          path="/utilityAndGovernment"
          element={<UtilityAndGovernment />}
        />
        <Route
          path="/educationAndLearning"
          element={<EducationAndLearning />}
        />
        <Route path="/lifestyleAndDigital" element={<LifestyleAndDigital />} />
        <Route path="/coreFeatures" element={<CoreFeatures />} />
        <Route path="/socialAndReferral" element={<SocialAndReferral />} />
        <Route path="/userAccount" element={<UserAccount />} />

        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/credit-card-bill" element={<CreditCardBill />} />
        <Route path="/emi-payment" element={<EMIPayments />} />
        <Route path="/loan-repayment" element={<LoanRepaymemt/>} />
        <Route path="/mutual-funds" element={<MutualFunds />} />
        <Route path="/stock-trading" element={<StockTrading />} />
        <Route path="/crypto-wallet" element={<CryptoWallet />} />
        <Route path="/fixed-deposit" element={<FixedDeposit />} />
        <Route path="/digital-gold" element={<DigitalGold />} />
        <Route path="/wallet-topup" element={<WalletTopup />} />
        <Route path="/account-limits" element={<AccountLimits />} />
        <Route path="/tax-payment" element={<TaxPayments />} />
        <Route path="/add-bank" element={<AddBankAccount />} />
        <Route path="/kyc-verification" element={<KycVerification />} />

        <Route path="/grocery" element={<GroceryOrder/>} />
        <Route path="/food-delivery" element={<FoodDelivery/>} />
        <Route path="/courier-booking" element={<Courier/>} />
        <Route path="/gift-cards" element={<GiftCards/>} />
        <Route path="/subscriptions" element={<Subscription/>} />

        <Route path="/travel-booking" element={<BTT/>} />
        <Route path="/flight-booking" element={<FlightBooking/>} />
        <Route path="/hotel-booking" element={<HotelBooking/>} />
        <Route path="/movies" element={<MovieTickets/>} />
        <Route path="/event-booking" element={<Event/>} />

        <Route path="/electricity" element={<ElectricityBill/>} />
        <Route path="/water-bill" element={<WaterBill/>} />
        <Route path="/gas-bill" element={<GasBill/>} />
        <Route path="/property-tax" element={<PropertyTax/>} />
        <Route path="/traffic-challan" element={<TrafficChallan/>} />
        <Route path="/aadhaar-services" element={<AadhaarServices/>} />
        <Route path="/insurance" element={<Insurance/>} />
        <Route path="/fastag" element={<Fastag/>} />
        <Route path="/bills" element={<Event/>} />

        <Route path="/school-fees" element={<SchoolFees/>} />
        <Route path="/online-courses" element={<OnlineCourses/>} />

        <Route path="/gaming-credits" element={<GamingCredits/>} />
        <Route path="/ott-subscriptions" element={<OTTSubscriptions/>} />

        <Route path="/scan-pay" element={<ScanPay/>} />
        <Route path="/recharge" element={<Recharge/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/transactions" element={<TransactionHistory/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/myProfilepicture" element={<MyProfilePicture />} />
        <Route path="/rewards" element={<Rewards/>} />
        <Route path="/SplitBill" element={<SplitBill/>} />
        <Route path="/nearby-offers" element={<NearbyOffers/>} />

        <Route path="/donate" element={<Donate/>} />
        <Route path="/refer" element={<Refer/>} />
        <Route path="/refer-history" element={<ReferHistory/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<DashboardSummary/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/settings" element={<AccountSettings/>} />
        <Route path="/logout" element={<Logout/>} />

      </Routes>
    </Router>
  );
};

export default App;
