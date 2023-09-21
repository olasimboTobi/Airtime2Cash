import axios from "axios";
import React, { useState } from "react";
import logo from "../../images/Airtime2CashLogo.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import {
  HeaderLink,
  ResetContent,
  ResetPasswordPage,
  RestFormContainer,
} from "./resetPassword.styles";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const navigate = useNavigate();
  let { token } = useParams();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { status } = await axios.post(
        `http://localhost:3000/api-v1/users/change-password`,
        formData,
        {
          headers: { token },
        }
      );
      if (status === 200) {
        toast("Password Reset Successful");
        navigate("/login");
      }
      setLoading(false);
    } catch (error) {
      setLoading(true);
      toast(error?.response?.data?.message);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ResetPasswordPage>
      <RestFormContainer>
        <ResetContent>
          <div className="logo-and-text">
            <img src={logo} alt="Airtime2CashLogo" />
            <p>
              Airtime<span>2Cash</span>
            </p>
          </div>

          <h2 className="reset-password">Reset Password</h2>

          <form>
            <div className="inputs-container">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="inputs-container">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>

            <HeaderLink>
              <button type="submit" onClick={handleSubmit}>
                {!loading ? (
                  "Reset Password"
                ) : (
                  <ClipLoader color="white" size={40} />
                )}
              </button>
            </HeaderLink>
          </form>
        </ResetContent>
      </RestFormContainer>
    </ResetPasswordPage>
  );
};

export default ResetPassword;
