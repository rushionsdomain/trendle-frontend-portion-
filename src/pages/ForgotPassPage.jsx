// src/pages/ForgotPassPage.jsx
import { Link } from "react-router-dom";

const ForgotPassPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-[350px] space-y-4">
        <h1 className="text-3xl font-bold text-center mb-2">Reset Password</h1>
        <p className="text-center text-gray-500 mb-4">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <form className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md">
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/" className="text-blue-500 font-semibold">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassPage;
