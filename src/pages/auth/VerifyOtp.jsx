import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {

    const navigate = useNavigate();

    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleVerify = () => {

        if (otp === "123456") {

          localStorage.setItem("isLoggedIn","true");

            navigate("/dashboard");

        } else {

            setError("Invalid OTP");

        }

    };

    return (

        <div className="min-h-screen bg-slate-100 flex items-center justify-center">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

                <h1 className="text-3xl font-bold text-center">

                    Verify OTP

                </h1>

                <p className="text-center text-gray-500 mt-2">

                    Enter the 6-digit OTP

                </p>

                <input

                    type="text"

                    placeholder="Enter OTP"

                    value={otp}

                    onChange={(e) => setOtp(e.target.value)}

                    className="w-full border rounded-lg px-4 py-3 mt-8"

                />

                {

                    error &&

                    <p className="text-red-500 mt-3">

                        {error}

                    </p>

                }

                <button

                    onClick={handleVerify}

                    className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"

                >

                    Verify OTP

                </button>
<div className="mt-5 text-center">

  <p className="text-sm text-gray-500">
    Didn't receive the OTP?
  </p>

  <button
    className="mt-2 text-blue-600 font-medium hover:text-blue-700 transition"
  >
    Resend OTP
  </button>

</div>
            </div>

        </div>

    );

}

export default VerifyOtp;