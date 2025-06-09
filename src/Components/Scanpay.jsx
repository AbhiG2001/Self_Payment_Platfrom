import React, { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import BlurText from "./Animations/BlurText"; 
import "./Scanpay.css";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Scanpay = () => {
  const [upiId, setUpiId] = useState("");
  const [qrData, setQrData] = useState("");
  const [message, setMessage] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const scannerRef = useRef(null);

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

  useEffect(() => {
    if (showScanner && !scannerRef.current) {
      const scanner = new Html5QrcodeScanner("qr-reader", {
        fps: 10,
        qrbox: 250,
      });

      scanner.render(
        (decodedText) => {
          setQrData(decodedText);
          setMessage(`Scanned: ${decodedText}`);
          setShowScanner(false);
          scanner.clear();
        },
        (error) => {
          console.warn("QR scan error:", error);
        }
      );

      scannerRef.current = scanner;
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(() => {});
        scannerRef.current = null;
      }
    };
  }, [showScanner]);

  return (
    <div className="scanpay-container">
      <div className="scanpay-box">
        <BlurText
          text="Scan & Pay"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="scanpay-heading"
        />

        <p className="scanpay-description">
          Scan a QR code using your camera or enter UPI ID manually.
        </p>

        <input
          type="text"
          placeholder="Enter UPI ID (e.g. yourname@upi)"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="scanpay-input"
        />

        <button
          onClick={() => setShowScanner((prev) => !prev)}
          className="scanpay-toggle-btn"
        >
          {showScanner ? "Hide QR Scanner" : "Scan via Camera"}
        </button>

        {showScanner && (
          <div
            id="qr-reader"
            className="scanpay-scanner"
            style={{ width: "100%", height: "300px" }}
          ></div>
        )}

        <button onClick={handlePay} className="scanpay-submit-btn">
          Proceed to Pay
        </button>

        {message && <p className="scanpay-message">{message}</p>}
      </div>
    </div>
  );
};

export default Scanpay;
