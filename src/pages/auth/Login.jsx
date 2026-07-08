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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        <div className="flex justify-center mb-8">

          <img
            src={logo}
            alt="EduHome Logo"
            className="w-44 object-contain"
          />

        </div>
        <div className="text-center mb-8">

          <h2 className="text-3xl font-bold text-slate-800">
            Student Login
          </h2>

        </div>

        <div className="mt-8">

          <label className="block mb-2 font-medium">
            Mobile Number
          </label>

          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Mobile Number"
            className="w-full border rounded-lg px-4 py-3"
          />
          {
            error && (

              <p className="text-red-500 mt-2">

                {error}

              </p>

            )
          }

        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >

          Continue

        </button>

      </div>

    </div>
  );
}

export default Login;