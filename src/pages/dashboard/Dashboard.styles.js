import styled from "styled-components";

export const DashboardWrapper = styled.div`
  & .top {
    height: 43vh;
    background-color: rgb(252, 236, 240);
  }
`;

export const MainDashboard = styled.div`
  margin: -12rem auto 0 auto;
  background-color: #fff;
  width: 45%;
  min-height: 80vh;
  padding: 2% 5% 5% 5%;
  border: 1px solid #d9d9d9;
  & h2 {
    /* padding: 5%; */
    margin: 3% 0 10% 0;
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }

  & .innerBox {
    color: #fff;
    text-align: center;
    background-color: #de3d6d;
    border-radius: 24px;
    padding: 24px;
  }
  & .balanceLabel {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
  }
  & .amount {
    margin: 4% 0 3% 0;
    font-size: 30px;
  }
  & .account {
    font-size: 10px;
    padding: 8px 10px 8px 8px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.04);
    opacity: 80%;
    color: #fff;
    border-radius: 100px;
  }
  & .items {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    margin: 4% 0 3% 0;
  }
  & button {
    background: none;
    border: none;
  }
  & .active {
    border-bottom: 1px solid #de3d6d;
  }

  & .itemsComponent {
    display: flex;
    /* align-items: center;
    justify-content: center; */
    flex-direction: column;
    width: 100%;
  }
  @media screen and (max-width: 807px) {
    flex-direction: column;
    width: 100%;

    button {
      font-size: 10px;
    }

    .active {
      border-bottom: none;
      border-bottom: 1px solid #de3d6d;
      text-underline-offset: 60%;
    }
  }
  @media screen and (max-width: 1365px) {
    width: 70%;
  }
  @media screen and (max-width: 1074px) {
    width: 80%;
  }

  @media screen and (max-width: 921px) {
    width: 100%;
  }
`;
