import React, { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Inputs";
import { LoginStyle } from "./Login.styles";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      //api call to the backend with your data
      let formData = {
        email,
        password,
      };
      const { status, data } = await axios.post(
        "http://localhost:3000/api-v1/users/login",
        formData
      );
      if (status === 200) {
        window.localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data.message);
    }
  };
  return (
    <LoginStyle>
      <div className="container">
        <img src="logo1.svg" alt="Airtime" />
        <h3 id="Login">Login</h3>
        <label htmlFor="Email">Email</label>
        <Input
          placeholder={"Enter your email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <Input
          placeholder={"Enter your password"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a className="forgot" href="/forgot-password">
          Forgot Password?
        </a>
        <Button
          text={"Login"}
          height={"48px"}
          width={"100%"}
          onClick={handleSubmit}
          isLoading={loading}
        />
        <p>
          Don't have an account?{" "}
          <span>
            <a href="/signup">Create Account</a>
          </span>
        </p>
      </div>
    </LoginStyle>
  );
};
export default Login;
