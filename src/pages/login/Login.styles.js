import styled from "styled-components";

export const LoginStyle = styled.div`
  height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .container {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rem;
    gap: 15px;
    width: 50%;
    background: #ffffff;
  }
  a {
    font-style: normal;
    color: #de3d6d;
    text-decoration: none;
  }

  label {
    margin-bottom: 0%;
    text-align: left;
    width: 100%;
    font-weight: 400;
    font-size: 12px;
  }
  #Login {
    text-align: left;
    width: 100%;
    font-weight: 700;
  }
  .forgot {
    color: #4285f4;
    width: 100%;
    font-weight: 400;
    font-size: 12px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
  }
  @media screen and (max-width: 650px) {
    .container {
      height: 100%;
      padding: 1rem;
      gap: 15px;
      width: 100%;
    }
  }
`;
