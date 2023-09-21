import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import EmailSent from "./pages/forgotPassword/EmailSent";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import LandingPage from "./pages/landing-page/LandingPage";
import SellAirtimeTab from "./components/sellAirtime/SellAirtimeTab";
import Dashboard from "./pages/dashboard/Dashboard";
import Transaction from "./pages/transaction-history/Transaction";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Logout } from "./pages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/edit" element={<UpdateProfile />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/sell" element={<SellAirtimeTab />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="/transaction-history" element={<Transaction />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
