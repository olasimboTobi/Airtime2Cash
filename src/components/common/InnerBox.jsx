import React from "react";
import styled from "styled-components";

function InnerBox({ tab }) {
  return (
    <>
      <h2>
        {tab === "Sell airtime" || tab === "Withdraw Balance"
          ? "Dashboard"
          : tab}
      </h2>
      {(tab === "Sell airtime" || tab === "Withdraw Balance") && (
        <InnerBoxStyle>
          <small className="balanceLabel">Wallet balance</small>
          <h3 className="amount">N21,350.00</h3>
          <label className="account">Account is active</label>
        </InnerBoxStyle>
      )}
    </>
  );
}

export default InnerBox;

export const InnerBoxStyle = styled.div`
  color: #fff;
  text-align: center;
  background-color: #de3d6d;
  border-radius: 24px;
  padding: 24px;
`;
