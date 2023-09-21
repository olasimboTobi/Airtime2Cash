import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import InnerBox from "../../components/common/InnerBox";
import Navbar from "../../components/navbar/Navbar";
import SellAirtimeTab from "../../components/sellAirtime/SellAirtimeTab";
import { DashboardWrapper, MainDashboard } from "./Dashboard.styles";
import Transaction from "../transaction-history/Transaction";
import WithdrawBalanceForm from "../../components/WithdrawBalance/WithdrawBalance";
import BankAccountPage from "../BankAccount/BankAccountPage";

function Dashboard() {
  const [tab, setTab] = useState("Sell airtime");

  return (
    <>
      <Navbar dashboard={true} isLoggedIn={true} />
      <DashboardWrapper>
        <div className="top"></div>

        <MainDashboard>
          <InnerBox tab={tab} />

          <div className="items">
            <button
              onClick={() => setTab("Sell airtime")}
              className={`${tab === "Sell airtime" ? "active" : null}`}
            >
              Sell airtime
            </button>
            <button
              onClick={() => setTab("Withdraw Balance")}
              className={`${tab === "Withdraw Balance" ? "active" : null}`}
            >
              Withdraw balance
            </button>
            <button
              onClick={() => setTab("Manage bank account")}
              className={`${tab === "Manage bank account" ? "active" : null}`}
            >
              Manage bank account
            </button>
            <button
              onClick={() => setTab("Transaction history")}
              className={`${tab === "Transaction history" ? "active" : null}`}
            >
              Transaction history
            </button>
          </div>

          <div className="itemsComponent">
            {tab === "Sell airtime" ? (
              <SellAirtimeTab />
            ) : tab === "Withdraw Balance" ? (
              <WithdrawBalanceForm />
            ) : tab === "Manage bank account" ? (
              <BankAccountPage />
            ) : tab === "Transaction history" ? (
              <Transaction />
            ) : (
              ""
            )}
          </div>
        </MainDashboard>
      </DashboardWrapper>
    </>
  );
}

export default Dashboard;
