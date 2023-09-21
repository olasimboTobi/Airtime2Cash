import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "../../assets/links/links";
import { NavbarStyle } from "./Navbar.styles";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { sideBarLinks } from "../../assets/links/links";

const Navbar = ({ dashboard, userName, avatar, isLoggedIn }) => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRefContainer = useRef(null);
  const linksRef = useRef(null);
  const [sideBar, setSideBar] = useState(false);
  const handleClick = () => {
    setSideBar(!sideBar);
  };
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const linksHeight = linksRef?.current?.getBoundingClientRect().height;
    if (showLinks) {
      linksRefContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksRefContainer.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <NavbarStyle>
      <div className="navbar">
        <div className="logo-container">
          <img
            src="logo1.svg"
            className="logo"
            alt=""
            onClick={() => navigate("/")}
          />
          <button className="nav-toggle" onClick={toggleLinks}>
            {!dashboard && <FaBars />}
            {/* I changed the icon to the image of the user that is logged in for responsiveness */}
          </button>
        </div>
        <div className="links-container" ref={linksRefContainer}>
          {!dashboard && (
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
              {!isLoggedIn && (
                <li className="login">
                  <a href="/login">Login</a>
                </li>
              )}
              {isLoggedIn && avatar && (
                <img
                  src={avatar}
                  onClick={() => {
                    setSideBar(!sideBar);
                  }}
                  style={{
                    cursor: "pointer",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              )}
              {isLoggedIn && !avatar && (
                <li className="login">
                  <a href="/dashboard">Dashboard</a>
                </li>
              )}
            </ul>
          )}

          {dashboard && !avatar && (
            <div className="wrapper avatar">
              <FaRegUserCircle
                onClick={handleClick}
                color="black"
                size="2em"
                style={{ cursor: "pointer" }}
              />
            </div>
          )}

          {dashboard && (
            <div className="content">
              <div className="wrapper">
                {/* I changed the icon to the image of the user that is logged in */}
                {/* <FaRegUserCircle
                  onClick={handleClick}
                  color="black"
                  size="1.4em"
                  style={{ cursor: "pointer" }}
                /> */}
                <img
                  src={avatar}
                  onClick={() => {
                    setSideBar(!sideBar);
                  }}
                  style={{
                    cursor: "pointer",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </div>
              {sideBar && (
                <div className="card">
                  {sideBarLinks.map((sideBarLink) => {
                    const { id, icon, text, url } = sideBarLink;
                    return (
                      <div key={id} className="row">
                        <div>{icon}</div>
                        <div className="paragraph">
                          <a href={url}>{text}</a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
