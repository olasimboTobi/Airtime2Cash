import React, { useState, useEffect } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Inputs";
import { UpdateStyle } from "./UpdateProfile.style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/common2/Header";
import logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/avatar.png";

function UpdateProfile() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [avatarUrl, setAvatarUrl] = useState("");
  const [tempImage, setTempImage] = useState("");

  const getUrl = async (file) => {
    const body = new FormData();
    body.append("upload_preset", "bbr2dhfv");
    body.append("file", file);
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const { data, error } = await axios.post(
      "http://api.cloudinary.com/v1_1/dzepzvscz/image/upload",
      body,
      config
    );
    if (data) {
      return data.secure_url;
    } else {
      console.log(error);
    }
  };
  const Upload = async (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "image/jpeg" && file.type !== "image/png") {
      toast("Error: Only Jpeg and Png images are allowed");
    } else {
      if (file && file.size <= 3000000) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadstart = () => {};
        reader.onloadend = (event) => {
          const base64Url = event.target.result;
          if (base64Url) {
            setTempImage(base64Url.toString());
          }
        };
        const url = await getUrl(file);

        console.log(url);
        setAvatarUrl(url);
      } else {
        toast("Error: File is too large");
      }
    }
  };

  const getUser = async () => {
    // use axios to get data
    try {
      const token = localStorage.getItem("token");

      const { status, data } = await axios.get(
        `http://localhost:3000/api-v1/users/getuser`,
        {
          headers: { token },
        }
      );
      if (status === 200) {
        setFormData(data.data);
      }
    } catch (error) {
      toast(error.response.data.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const token = localStorage.getItem("token");
      const { status, data } = await axios.patch(
        `http://localhost:3000/api-v1/users/update/`,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          avatar: avatarUrl ? avatarUrl : formData.avatar,
        },
        {
          headers: { token },
        }
      );

      if (status === 201) {
        console.log(data);
        toast("Profile updated successfully");
        navigate("/dashboard");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response?.data?.message);
    }
  };
  return (
    <div className="whole-container">
      <Navbar
        dashboard={true}
        userName={formData.firstName}
        avatar={formData.avatar}
        isLoggedIn={true}
      />
      <UpdateStyle>
        <div className="container">
          <Header />
          <div className="form-info">
            <img src={logo} alt="logo" />
            <div className="basic-info-container">
              <h2 className="basic-info">Basic Information</h2>
              <div className="input-form">
                <div className="img-div">
                  <img
                    src={
                      tempImage
                        ? tempImage
                        : formData.avatar
                        ? formData.avatar
                        : Avatar
                    }
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </div>
                <div className="w-100 row">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      display: "inlineBlock",
                    }}
                    className="mx-auto"
                  >
                    <button
                      type="button"
                      className="btn-upload"
                      name="profilePhoto"
                    >
                      Upload new picture
                    </button>
                    <input
                      type="file"
                      name="avatar"
                      style={{
                        fontSize: "100px",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        opacity: "0",
                      }}
                      onChange={Upload}
                    />
                  </div>
                </div>
                <div className="input-field">
                  <label htmlFor="firstName">First Name</label>
                  <Input
                    type={"text"}
                    name={"firstName"}
                    placeholder={"Enter your first name"}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="lastName">Last Name</label>
                  <Input
                    type={"text"}
                    name={"lastName"}
                    placeholder={"Enter your last name"}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <Input
                    type={"tel"}
                    name={"phoneNumber"}
                    placeholder={"Enter your phone number"}
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <Input
                    type={"email"}
                    name={"email"}
                    placeholder={"Enter your email"}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="btn-modal-save"></div>
                <Button
                  text={"Save"}
                  height={"48px"}
                  width={"40%"}
                  onClick={handleSubmit}
                  isLoading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </UpdateStyle>
    </div>
  );
}

export default UpdateProfile;
