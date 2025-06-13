import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaTwitter, FaFacebook } from "react-icons/fa";

const Refer = () => {
  const referralCode = "PAYNOW123";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const encodedMessage = encodeURIComponent(
    `Hey! Use my referral code ${referralCode} to sign up and get rewards.`
  );

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedMessage}`,
    email: `mailto:?subject=Join PayNow&body=${encodedMessage}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedMessage}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=https://your-app.com`,
  };

  return (
    <div className="p-6 bg-white shadow-md rounded max-w-md mx-auto mt-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Refer & Earn</h2>
      <p className="text-gray-600 mb-2">Share your referral code with friends:</p>

      <div className="mb-4 bg-gray-100 p-3 rounded-lg text-xl font-mono tracking-wider text-blue-800 shadow-inner select-none">
        {referralCode}
      </div>

      <button
        onClick={handleCopy}
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg font-medium"
      >
        {copied ? "Copied!" : "Copy Code"}
      </button>

      {copied && (
        <p className="text-green-600 text-sm mt-2 transition-opacity duration-300">
          Referral code copied to clipboard.
        </p>
      )}

      <div className="mt-6">
        <p className="text-gray-800 mb-2 text-xl">Share via:</p>
        <div className="flex justify-between items-center flex-wrap">
          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:scale-90"><FaWhatsapp size={35}/></a>
          <a href={shareLinks.email} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:scale-90"><FaEnvelope size={35}/></a>
          <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-90"><FaTwitter size={35}/></a>
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-90"><FaFacebook size={35}/></a>
        </div>
      </div>
    </div>
  );
};

export default Refer;
