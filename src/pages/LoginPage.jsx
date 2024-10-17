// src/pages/LoginPage.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#112103] shadow-md py-6 px-10 flex items-center justify-between">
      <div className="flex-grow text-center">
        {/* You can add a title or logo here if needed */}
      </div>
      <Link to="/">
        <img
          src="/logo.png" // Ensure this path matches where you placed the logo
          alt="Trendle Logo"
          className="h-12 cursor-pointer"
        />
      </Link>
    </nav>
  );
};

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#85A161] flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        {/* Left Section with Image and Text */}
        <div className="flex flex-col flex-grow items-center justify-center">
          <h2 className="text-white text-5xl mb-4">
            Welcome
          </h2>
          <img
            src="/photo.jpeg" // Replace with the path to your image
            alt="Description of Image"
            className="h-[600px] w-auto" // Adjust height as needed
          />
        </div>
        {/* Right Section with Form */}
        <div className="flex-grow flex items-center justify-end pr-32">
          <div className="bg-[#112103] p-10 rounded-lg shadow-md w-[350px] space-y-4">
            <div className="flex items-center justify-center mb-2">
              <h1 className="text-white text-3xl font-bold mr-2">Trendle</h1>
              <img
                src="/logo.png" // Ensure this path matches where you placed the logo
                alt="Trendle Logo"
                className="h-8" // Adjust height as needed
              />
            </div>

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
              <button className="w-full bg-green-500 text-white py-2 rounded-md">
                Log in
              </button>
            </form>

            <p className="text-green-500 text-sm text-center mt-4">
              <Link to="/forgot-password">Forgot password?</Link>
            </p>

            <div className="text-center text-gray-500">
              <p>
                Don’t have an account?{" "}
                <Link to="/signup" className="text-green-500">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
