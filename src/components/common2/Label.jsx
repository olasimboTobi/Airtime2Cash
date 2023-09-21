import React from "react";
import styled from "styled-components";

function Label({ htmlFor }) {
  return (
    <LabelStyle>
      <label htmlFor={htmlFor} className="label">
        {Label}
      </label>
    </LabelStyle>
  );
}

export default Label;

const LabelStyle = styled.div`
  .label {
    width: 320px;
    padding: 2px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
  }
`;
