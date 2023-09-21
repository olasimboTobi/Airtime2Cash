import React from "react";
import styled from "styled-components";

const Button = ({ width, height, text, onClick }) => {
  return (
    <ButtonStyle width={width} height={height} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 8px 16px;
  color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: linear-gradient(92.1deg, #de3d6d 55.67%, #f5844c 101.51%);
`;
