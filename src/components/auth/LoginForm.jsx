const LoginForm = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md w-[350px] space-y-4">
      <h1 className="text-3xl font-bold text-center mb-2">Instagram</h1>
      <p className="text-center text-gray-500 mb-4">
        Sign up to see photos and videos from your friends.
      </p>

      <button className="bg-blue-500 text-white w-full py-2 rounded-md flex items-center justify-center space-x-2">
        <img src="/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
        <span>Log in with Facebook</span>
      </button>

      <div className="flex items-center space-x-2 my-4">
        <hr className="w-full border-gray-300" />
        <span className="text-gray-400">OR</span>
        <hr className="w-full border-gray-300" />
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
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="text-xs text-gray-500 text-center">
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <a href="#" className="text-blue-500">
            Learn More
          </a>
        </p>

        <p className="text-xs text-gray-500 text-center">
          By signing up, you agree to our{" "}
          <a href="#" className="text-blue-500">
            Terms
          </a>
          ,{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500">
            Cookies Policy
          </a>
          .
        </p>

        <button className="w-full bg-blue-500 text-white py-2 rounded-md">
          Sign up
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm">
          Have an account?{" "}
          <a href="#" className="text-blue-500 font-semibold">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
