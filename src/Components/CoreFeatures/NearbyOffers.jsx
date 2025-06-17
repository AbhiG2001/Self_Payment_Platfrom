import React from 'react';
import ServicePage from '../Bill/ServicePage';

const NearbyOffers = () => {
  const offers = [
    {
      id: 1,
      name: '10% Cashback on UPI Payments',
      location: 'Applicable at select grocery stores',
      method: 'UPI'
    },
    {
      id: 2,
      name: 'Flat ₹100 Off on Credit Card Payments',
      location: 'Zomato, Swiggy',
      method: 'Credit Card'
    },
    {
      id: 3,
      name: '15% Off on Wallet Payments',
      location: 'Myntra, Amazon',
      method: 'Wallet'
    }
  ];

  return (
    <ServicePage
      title="Exclusive Payment Offers"
      description="Get the best deals when you pay online using cards, UPI or wallets"
      offers={offers}
    />
  );
};

export default NearbyOffers;
