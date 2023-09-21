import React from "react";
import styled from "styled-components";

const Input = ({ onChange, placeholder, name, type }) => {
  return (
    // <InputStyle>
    <input
      type={type}
      name={name}
      className="input"
      onChange={onChange}
      placeholder={placeholder}
    />
    // </InputStyle>
  );
};

export default Input;

// const InputStyle = styled.div`
//   .input {
//     width: 320px;
//     padding: 8px 16px;
//     height: 48px;
//     background: #ffffff;
//     border: 1px solid #d9d9d9;
//   }
// `;
// const InputStyle = styled.div`
//   .input {
//     /* Frame 8754 */

//     box-sizing: border-box;

//     /* Auto layout */

//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 60px 160px;
//     gap: 60px;

//     position: absolute;
//     width: 640px;
//     height: 710px;
//     left: 400px;
//     top: 176px;

//     background: #ffffff;
//     border: 1px solid #d9d9d9;
//   }
// `;
