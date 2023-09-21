import React from "react";
import styled from "styled-components";

const Input = ({
  onChange,
  placeholder,
  name,
  type,
  id,
  value,
  className,
  onClick,
}) => {
  return (
    <InputStyle>
      <input
        name={name}
        className={"input"}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
      />
    </InputStyle>
  );
};

export default Input;

const InputStyle = styled.div`
  width: 100%;
  .input {
    width: 100%;
    padding: 8px 16px;
    height: 48px;
    margin-bottom: 1rem;
  }
`;


