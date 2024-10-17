// src/pages/SignupPage.jsx
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-[350px] space-y-4">
        <h1 className="text-3xl font-bold text-center mb-2">Trendle</h1>
        <p className="text-center text-gray-500 mb-4">
          Sign up to see photos and videos from your friends.
        </p>

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
          {/* <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md">
            Sign up
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            Have an account?{" "}
            <Link to="/" className="text-blue-500 font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
