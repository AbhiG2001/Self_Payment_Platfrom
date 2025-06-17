import React from 'react';
import ServicePage from '../Bill/ServicePage';

const WaterBill = () => {
  const providers = [
    'Delhi Jal Board',
    'Bangalore Water Supply',
    'Chennai Metro Water',
    'Mumbai Hydraulic Department'
  ];

  return (
    <ServicePage
      title="Water Bill Payment"
      description="Pay your water bills instantly through UPI, cards, or wallets. Select your water provider and enter your customer ID to continue."
      serviceType="Water"
      providers={providers}
    />
  );
};

export default WaterBill;
