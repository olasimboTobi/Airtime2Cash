import styled from "styled-components";

const SellAirtimeTabStyle = styled.div`
  width: 100%;

  .container {
    width: 100%;
    background: #ffffff;
    border: none;
  }

  .container select {
    width: 100%;
    margin-top: 2%;
    margin-bottom: 3%;
    padding: 3%;
    border: 1px solid #d9d9d9;
    color: #c4c4c4;
    outline: none;
  }

  .container p {
    font-family: var(--font-family);
    color: #012a4a;
    font-weight: 600;
    font-style: normal;
    margin-bottom: 5%;
  }

  .label-field {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    color: #012a4a;
    margin-bottom: 100px;
  }

  .input {
    width: 100%;
    padding: 3%;
    margin-top: 2%;
    margin-bottom: 3%;
    border: 1px solid #d9d9d9;
    background: #ffffff;
    outline: none;
  }

  .solid-field {
    background: #f5f5f5;
  }

  ::placeholder {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: 400;
    color: #c4c4c4;
    font-size: 1.5em;
  }
`;

export default SellAirtimeTabStyle;


