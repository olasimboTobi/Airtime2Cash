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
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 10rem 2rem 10rem;
    gap: 10px;
    width: 50%;
    background: #ffffff;
  }
  form {
    width: 100%;
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
    text-align: center;
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
    height: 120vh;
    .container {
      height: 100%;
      padding: 1rem;
      gap: 15px;
      width: 100%;
    }
  }
`;

// export const HeaderAndButton = styled.div`
//   width: 100%;
// `;
export const Back = styled.div`
  // display: flex;
  flex-grow: 0;
  // flex-direction: row;
  float: left;
  padding: 8px;
  font-weight: lighter;
  color: #21334f;
  border: none;
  width: 70px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  cursor: pointer;

  /* Inside auto layout */

  // flex: none;
  // order: 0;
  // flex-grow: 0;
  // margin-top: 40px;
  // & img {
  //   margin-right: 10px;
  //   width: 13;
  //   height: 13;
  // }
`;

// export const StyledLabel = styled.label`
//   font-weight: 400;
//   font-size: 15px;
//   line-height: 15px;

//   /* identical to box height */

//   color: #21334f;

//   /* Inside auto layout */

//   flex: none;
//   order: 0;
//   flex-grow: 0;
// `;
