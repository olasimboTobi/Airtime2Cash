import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  ForgetPasswordPage,
  ForgotPasswordForm,
  HeaderLink,
} from "./styles/LoginPageStyles";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Inputs";
import Button from "../../components/common/Button";

function ForgotPassword() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { status } = await axios.post(
        "http://localhost:3000/api-v1/users/forgot-password",
        formData
      );
      if (status === 200) {
        navigate("/email-sent");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error?.response?.data?.message);
    }
  };

  return (
    <ForgetPasswordPage>
      <ForgotPasswordForm>
        <div className="forgot-section">
          <h1 className="main-text">Forgot Password</h1>
          <p className="forgot-section-subtext">
            Enter the email associated with your account and we'll send an email
            with instruction to reset your password
          </p>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your Email"
            />
            <Button
              text={"Reset password"}
              height={"48px"}
              width={"100%"}
              type="submit"
              isLoading={loading}
            />
            <HeaderLink secondary={"true"} to={"/login"}>
              <button className="back-btn">Back to Login</button>
            </HeaderLink>
          </form>
        </div>
      </ForgotPasswordForm>
    </ForgetPasswordPage>
  );
}

export default ForgotPassword;
