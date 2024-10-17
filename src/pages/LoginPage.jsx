// src/pages/LoginPage.jsx
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-[350px] space-y-4">
        <h1 className="text-3xl font-bold text-center mb-2">Trendle</h1>

        <form className="space-y-3">
          <input
            type="email"
            placeholder="Mobile Number or Email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md">
            Log in
          </button>
        </form>

        <p className="text-blue-500 text-sm text-center mt-4">
          <Link to="/forgot-password">Forgot password?</Link>
        </p>

        <div className="text-center text-gray-500">
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
