import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://fsd-assignments.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">
      
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center text-white p-10 bg-white/10">
          <h1 className="text-5xl font-bold mb-4">
            Welcome Back 
          </h1>

          <p className="text-lg text-center leading-8">
            Login to manage your customers, track
            records, and grow your CRM business
            efficiently.
          </p>

          <img
            src="https://www.shutterstock.com/image-vector/crm-creative-minimalist-letter-logo-600nw-2549557457.jpg"
            alt="login"
            className="rounded-full mt-6"
          />
        </div>

        {/* Right Section */}
        <div className="bg-white p-10 flex flex-col justify-center">
          <h1 className="text-center text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-6 -mt-10">
            MERN-TASK-CRM
          </h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Login
          </h2>

          <p className="text-gray-500 mb-8">
            Please sign in to continue
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-5">
              <label className="block text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            {/* Button */}
            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-3 rounded-xl font-semibold shadow-lg transition duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Register */}
          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
