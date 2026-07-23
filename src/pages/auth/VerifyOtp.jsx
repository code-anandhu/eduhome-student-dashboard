import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { studentLogin } from "../../services/authService";

function VerifyOtp() {

    const navigate = useNavigate();
    const location = useLocation();

    const mobile = location.state?.mobile;
    const confirmationResult = window.confirmationResult;
    


    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleVerify = async () => {
        try {
            setError("");

            if (!confirmationResult) {
                setError("OTP session expired. Please login again.");
                return;
            }

            // Verify OTP with Firebase
            const result = await confirmationResult.confirm(otp);

            console.log("Firebase User:", result.user);

            // Get Firebase ID Token
            const idToken = await result.user.getIdToken();

            console.log("Firebase ID Token:", idToken);

            // Call Backend Login API
            const response = await studentLogin(idToken);

            console.log("Backend Response:", response);

            // Save JWT Token
            localStorage.setItem("token", response.result.token);


            // Save Student Data
            localStorage.setItem(
                "student",
                JSON.stringify(response.result.student)
            );

            // Login Status
            localStorage.setItem("isLoggedIn", "true");

            // Navigate
            navigate("/dashboard");

        } catch (err) {
            console.error(err);
            const message = 
            err.response?.data?.message || 
            err.message ||
            "Something went wrong"
            setError(message)
        }
    };

    return (

        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 sm:p-8">

                {/* Heading */}

                <div className="text-center">

                    <h1 className="text-2xl md:text-3xl font-bold text-slate-800">

                        Verify OTP

                    </h1>

                    <p className="text-gray-500 mt-2 text-sm md:text-base">

                        Enter the 6-digit OTP sent to your registered mobile number.

                    </p>

                </div>

                {/* OTP Input */}

                <div className="mt-8">

                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        maxLength={6}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {error && (

                        <p className="text-red-500 text-sm mt-3">

                            {error}

                        </p>

                    )}

                </div>

                {/* Verify Button */}

                <button
                    onClick={handleVerify}
                    className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                >

                    Verify OTP

                </button>

                {/* Resend */}

                <div className="mt-6 text-center">

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