import styled from "styled-components";

export const Maincard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  width: 100%;
  height: 99px;

  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  #time-text {
    width: 110px;
    height: 17px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    color: #21334f;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  #withdraw-text {
    width: 115px;
    height: 17px;
    margin-botton: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #21334f;
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  #date-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #21334f;
    flex: none;
    order: 2;
    flex-grow: 0;
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .received {
    width: 88px;
    height: 28px;
    background: rgba(52, 168, 83, 0.1);
    border-radius: 100px;
    color: #34a853;
  }

  .naira {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #03435f;
    padding: 10px;
  }

  @media (max-width: 650px) {
    width: 100%;
    height: 99px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  }
`;
