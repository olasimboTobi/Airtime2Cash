import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const Button = ({
  width,
  height,
  text,
  label,
  onClick,
  isLoading = false,
  type,
  className,
}) => {
  return (
    <ButtonStyle
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      disabled={isLoading}
      className={className}
    >
      {!isLoading ? text : <ClipLoader color="white" size={40} />}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  padding: 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: linear-gradient(
    92.1deg,
    #de3d6d 55.67%,
    #f5844c 101.51%
  ) !important;
`;


