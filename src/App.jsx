import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPassPage from "./pages/ForgotPassPage";
import FeedPage from "./pages/FeedPage"; // Import the FeedPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassPage />} />
        <Route path="/feed" element={<FeedPage />} /> {/* Add FeedPage route */}
      </Routes>
    </Router>
  );
}

export default App;
