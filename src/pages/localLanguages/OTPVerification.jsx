import React, { useState } from "react";

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= 6) {
      setOTP(value);
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp.length === 6) {
      // Send OTP to server for verification
      console.log("OTP verified successfully");
      setOTP("");
    } else {
      setError("Please enter a valid OTP");
    }
  };

  return (
    <div className="mx-auto w-[500px] my-9 h-[100vh]">
      <form onSubmit={handleSubmit}>
        <label>
          Enter OTP:
          <input className="border-2 w-full bg-slate-100 bordered" type="text" value={otp} onChange={handleInputChange} />
        </label><br/><br/>
        <button type="submit" className="btn outline-none border-none bg-gradient-to-r from-green-400 to-blue-500 text-white">Verify OTP</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default OTPVerification;
