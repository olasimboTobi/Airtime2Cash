import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  ForgetPasswordPage,
  ForgotPasswordForm,
} from "./styles/LoginPageStyles";

const EmailSent = () => {
  const navigate = useNavigate();
  return (
    <ForgetPasswordPage className="App">
      <ForgotPasswordForm>
        <MdOutlineMarkEmailRead size={"5.625rem"} color={"#03435F"} />
        <h1 className="main-text-verified">Check your mail</h1>
        <div className="text-container">
          <p className="first">
            We sent a password to reset link to your email. Please click he link
            to reset the password
          </p>
          <p className="second">
            Don't receive the email?{" "}
            <span className="red-text">Click to resend link</span>
          </p>
        </div>

        <button
          className="reset-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Back to Login
        </button>
      </ForgotPasswordForm>
    </ForgetPasswordPage>
  );
};

export default EmailSent;
