import React, { useState } from "react";
import { QrReader } from "react-qr-reader";


const Scanpay = () => {
  const [upiId, setUpiId] = useState("");
  const [qrData, setQrData] = useState("");
  const [message, setMessage] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const handlePay = () => {
    const value = upiId || qrData;
    if (!value) {
      setMessage("Please enter UPI ID or scan QR code.");
    } else {
      setMessage("Processing payment...");
      setTimeout(() => {
        setMessage(`Payment to ${value} successful!`);
        setUpiId("");
        setQrData("");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow max-w-md mx-auto text-center">
        <h2 style={{fontFamily:"monospace"}} className="text-2xl font-bold text-blue-600 mb-4">Scan & Pay</h2>
        <p style={{fontFamily: 'Montserrat, sans-serif'}}>Scan a QR code using your camera or enter UPI ID manually.</p>

        {/* input of the UPI ID */}
        <input
          type="text"
          placeholder="Enter UPI ID (e.g. misssakshi@upi)"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="bg-gray-50 w-full border border-gray-300  rounded p-2 mb-4 "
        />
        {/* Scanner */}
        <button
          onClick={() => setShowScanner((prev) => !prev)}
          className="w-full bg-gray-200 text-black py-2 rounded hover:bg-gray-300 transition mb-4"
        >
          {showScanner ? "Hide QR Scanner" : "Scan via Camera"}
        </button>
        {/* QR Reader */}
       { showScanner &&(
          <div className="mb-4 border rounded p-2">
            <QrReader
            onResult={(result, error)=>{
              if (!!result){
                setQrData(result?.text || "");
                setMessage(`Scanned: ${result?.text}`);
                setShowScanner(false);
              }
            }}
            constraints={{facingMode:"environment"}}
            containerStyle={{width: "100%"}}  
            />         

          </div>          
        )}
        <button onClick={handlePay}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Proceed to Pay 
        </button>
        {/* Message */}
        {message && (
          <p className="mt-4 text-green-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Scanpay;
