import styled from "styled-components";

export const NavbarStyle = styled.div`
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: fixed;
  width: 100%;
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .avatar {
    display: flex;
    align-item: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 2rem;
  }
  .logo1 {
    /* height: 10px; */
    width: 85%;
  }
  .wrapper {
    display: flex;
  }
  .wrapper p {
    margin-left: 10px;
  }

  .links-container {
    height: 0px;
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .show-container {
    height: 10rem;
  }
  .links a {
    color: hsl(209, 34%, 30%);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    display: block;
    transition: all 0.3s linear;
    text-decoration: none;
  }
  .links li {
    list-style: none;
    padding: 0.5rem 0.5rem;
  }
  .login {
    background: linear-gradient(#de3d6d, #f5844c);
    gap: 10px;
    border-radius: 4px;
    padding-top: 20px;
    text-align: center;
  }
  .login a {
    color: #fff;
    font-weight: bold;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: #de3d6d;
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: hsl(205, 86%, 17%);
    transform: rotate(90deg);
  }
  .navbar {
    position: relative;
  }

  .card {
    position: absolute;
    top: 90px;
    border: box-sizing;
    width: 200px;
    background: #fff;
    padding: 10px;
  }
  .row {
    display: flex;
    width: 100%;
    padding: 5px;
  }
  .row .paragraph {
    padding-left: 10px;
  }
  .paragraph a {
    color: black;
    text-decoration: none;
  }
  .row:hover {
    background: rgb(220, 220, 220);
    cursor: pointer;
  }
  @media screen and (min-width: 800px) {
    .navbar {
      max-width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* padding: 1rem; */
    }

    .nav-header {
      padding: 0;
    }

    .nav-toggle {
      display: none;
    }

    .links-container {
      height: auto !important;
    }

    .links {
      display: flex;
    }

    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }

    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }
  
`;
