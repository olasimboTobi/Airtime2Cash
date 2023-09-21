import styled from "styled-components";

export const UpdateStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background: #f5f5f5;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .form-info {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 8% 2% 8%;
    gap: 60px;
    width: 50%;
    height: 70%;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    margin-top: -7rem;
  }

  .basic-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 40px;
    width: 100%;
    // height: 474px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .basic-info {
    /* Basic Information */
    width: 155px;
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    color: #21334f;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .input-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .input-field {
    width: 100%;
    // padding: 8px 16px;
    // height: 48px;
    // background: #ffffff;
    // border: 1px solid #d9d9d9;
  }

  .header {
    width: 100vw;
    height: 271px;
    background: rgba(222, 61, 109, 0.1);
  }

  .img-div {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .btn-upload {
    margin-top: 1rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    padding: 6px;
  }
  @media screen and (max-width: 650px) {
    .form-info {
      width: 100%;
      height: 100%;
    }
  }
`;
