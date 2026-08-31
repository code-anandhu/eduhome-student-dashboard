import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { studentLogin, sendOtp } from "../../services/authService";

function VerifyOtp() {
    const navigate = useNavigate();
    const location = useLocation();

    const mobile = location.state?.mobile;
    const confirmationResult = window.confirmationResult;

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState("");
    const [resending, setResending] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(30);
    const [successMessage, setSuccessMessage] = useState(
        "OTP sent successfully."
    );

    const inputRefs = useRef([]);

    // Focus first OTP box
    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    // Resend cooldown timer
    useEffect(() => {
        if (resendCooldown <= 0) return;

        const timer = setInterval(() => {
            setResendCooldown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [resendCooldown]);

    // Handle OTP input
    const handleOtpChange = (index, value) => {
        // Allow only numbers
        const numericValue = value.replace(/\D/g, "");

        if (!numericValue) {
            const updatedOtp = [...otp];
            updatedOtp[index] = "";
            setOtp(updatedOtp);
            return;
        }

        // Handle paste / multiple digits
        if (numericValue.length > 1) {
            const pastedOtp = numericValue.slice(0, 6).split("");

            const updatedOtp = ["", "", "", "", "", ""];

            pastedOtp.forEach((digit, i) => {
                updatedOtp[i] = digit;
            });

            setOtp(updatedOtp);

            const focusIndex = Math.min(pastedOtp.length, 5);
            inputRefs.current[focusIndex]?.focus();

            return;
        }

        const updatedOtp = [...otp];
        updatedOtp[index] = numericValue;
        setOtp(updatedOtp);

        // Move to next box
        if (index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = async () => {
        try {
            setError("");
            setSuccessMessage("");

            const otpValue = otp.join("");

            if (!confirmationResult) {
                setError("OTP session expired. Please login again.");
                return;
            }

            if (otpValue.length !== 6) {
                setError("Please enter the complete 6-digit OTP.");
                return;
            }

            // Verify OTP with Firebase
            const result = await confirmationResult.confirm(otpValue);

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
                "Something went wrong. Please try again.";

            setError(message);
        }
    };

    const handleResendOtp = async () => {
        if (resendCooldown > 0 || resending) return;

        try {
            setError("");
            setSuccessMessage("");
            setResending(true);

            const newConfirmationResult = await sendOtp(mobile);

            window.confirmationResult = newConfirmationResult;

            setOtp(["", "", "", "", "", ""]);
            setSuccessMessage("A new OTP has been sent successfully.");
            setResendCooldown(30);

            inputRefs.current[0]?.focus();

        } catch (err) {
            console.error(err);

            setError(
                err.response?.data?.message ||
                err.message ||
                "Unable to resend OTP. Please try again."
            );
        } finally {
            setResending(false);
        }
    };

    const handleChangeNumber = () => {
        navigate("/login");
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

                    {/* Mobile Number */}
                    <p className="text-slate-800 font-semibold mt-3">
                        {mobile}
                    </p>

                </div>

                {/* Success Message */}
                {successMessage && (
                    <div className="mt-6 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm text-center">
                        ✓ {successMessage}
                    </div>
                )}

                {/* OTP Input */}
                <div className="mt-8">

                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Enter OTP
                    </label>

                    <div className="flex justify-center gap-2 sm:gap-3">

                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(element) => {
                                    inputRefs.current[index] = element;
                                }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) =>
                                    handleOtpChange(index, e.target.value)
                                }
                                onKeyDown={(e) =>
                                    handleKeyDown(index, e)
                                }
                                className="w-11 h-12 sm:w-12 sm:h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        ))}

                    </div>

                    <p className="text-gray-500 text-sm mt-4 text-center">
                        OTP may take a few moments to arrive. Please wait.
                    </p>

                    {error && (
                        <p className="text-red-500 text-sm mt-3 text-center">
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

                {/* Change Number */}
                <div className="text-center mt-4">

                    <button
                        onClick={handleChangeNumber}
                        className="text-sm text-gray-500 hover:text-blue-600 transition"
                    >
                        Change mobile number
                    </button>

                </div>

                {/* Resend */}
                <div className="mt-6 text-center">

                    <p className="text-sm text-gray-500">
                        Didn't receive the OTP?
                    </p>

                    <button
                        onClick={handleResendOtp}
                        disabled={resending || resendCooldown > 0}
                        className={`mt-2 font-medium transition ${
                            resendCooldown > 0 || resending
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-blue-600 hover:text-blue-700"
                        }`}
                    >
                        {resending
                            ? "Sending OTP..."
                            : resendCooldown > 0
                                ? `Resend OTP in ${resendCooldown}s`
                                : "Resend OTP"
                        }
                    </button>

                </div>

            </div>

        </div>
    );
}

export default VerifyOtp;