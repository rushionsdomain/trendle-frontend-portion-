import PhoneDisplay from "../components/landing/PhoneDisplay";
import LoginForm from "../components/auth/LoginForm";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="flex space-x-16">
        {/* Left Side: Phone Display */}
        <PhoneDisplay />

        {/* Right Side: Login Form */}
        <div className="flex flex-col items-center space-y-8">
          <LoginForm />

          <div className="text-center text-gray-500">
            <p>
              Don’t have an account?{" "}
              <span className="text-blue-500">Sign up</span>
            </p>
          </div>

          <div className="space-y-2">
            <p>Get the app.</p>
            <div className="flex space-x-4">
              <img src="/app-store.png" alt="App Store" className="w-32" />
              <img src="/google-play.png" alt="Google Play" className="w-32" />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
