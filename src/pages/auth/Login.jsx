import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/Eduhome Logo.png";

function Login() {

  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    if (mobile === "9876543210") {

      navigate("/verify-otp");

    } else {

      setError("Invalid Mobile Number");

    }

  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 sm:p-8">

        {/* Logo */}

        <div className="flex justify-center">

          <img
            src={logo}
            alt="EduHome Logo"
            className="w-32 sm:w-40 md:w-44 object-contain"
          />

        </div>

        {/* Heading */}

        <div className="text-center mt-4">

          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">

            Student Login

          </h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">

            Login using your registered mobile number.

          </p>

        </div>

        {/* Input */}

        <div className="mt-8">

          <label className="block mb-2 font-medium">

            Mobile Number

          </label>

          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Mobile Number"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (

            <p className="text-red-500 text-sm mt-2">

              {error}

            </p>

          )}

        </div>

        {/* Button */}

        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >

          Continue

        </button>

      </div>

    </div>

  );

}

export default Login;