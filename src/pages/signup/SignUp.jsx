import React, { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Inputs";
import { LoginStyle, Back } from "./Signup.styles";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { status } = await axios.post(
        "http://localhost:3000/api-v1/users/signup",
        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          password: user.password,
          confirmPassword: user.confirmPassword,
        }
      );
      if (status === 201) {
        toast("User created successfully");
        navigate("/login");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
    }
  };

  return (
    <LoginStyle>
      <div className="container">
        <a href="/">
          <img src="logo1.svg" alt="Airtime" />
        </a>
        <a href="/">
          <Back a href="/dashboard">
            Go Back
          </Back>
        </a>
        <h3 id="Login">Create an Account</h3>
        <form onSubmit={handleSubmit}>
          <label>Firstname</label>
          <Input
            type={"text"}
            placeholder={"Enter your firstname"}
            value={user.firstName}
            onChange={handleChange}
            name="firstName"
          />
          <label>Lastname</label>
          <Input
            type={"text"}
            placeholder={"Enter your lastname"}
            value={user.lastName}
            onChange={handleChange}
            name="lastName"
          />
          <label>Email</label>
          <Input
            type={"email"}
            placeholder={"Enter your email"}
            value={user.email}
            onChange={handleChange}
            name="email"
          />
          <label>Phone Number</label>
          <Input
            type={"phoneNumber"}
            placeholder={"Enter your phone Number"}
            value={user.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
          />
          <label>Password</label>
          <Input
            type={"password"}
            placeholder={"Enter your password"}
            value={user.password}
            onChange={handleChange}
            name="password"
          />
          <label>Confirm password</label>
          <Input
            type={"password"}
            placeholder={"Enter your confirm password"}
            value={user.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />

          <Button
            text={"Sign Up"}
            height={"48px"}
            width={"100%"}
            onClick={handleSubmit}
            isLoading={loading}
          />
          <p>
            Already have an account?{" "}
            <span>
              <a href="/login">Login</a>
            </span>
          </p>
        </form>
      </div>
    </LoginStyle>
  );
};
export default Signup;
