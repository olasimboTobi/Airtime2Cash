import React, { useEffect, useState } from "react";
import { BulletList } from "react-content-loader";
import styled from "styled-components";
import Button from "../common/Button";
import axios from "axios";
import { toast } from "react-toastify";

function ViewBank({ toggleSwitch }) {
  const [accounts, setAccounts] = useState("");
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const updateLoading = () => {
    setTimeout(() => setLoading(false), 2000);
  };

  const handleDelete = async (accountId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:3000/api-v1/accounts/delete/${accountId}`,
        {
          headers: { token },
        }
      );
      console.log(response);
      setRefresh(!refresh)
    } catch (err) {
      toast(err.response.data.message);
    }

    const newAccounts = accounts.filter(el => el.accountId !== accountId)
    setAccounts(newAccounts)
  }

  const getAcctData = async (e) => {
    try {
      const token = localStorage.getItem("token");
      const { status, data } = await axios.get(
        "http://localhost:3000/api-v1/accounts/all-accounts",
        {
          headers: { token },
        }
      );
      if (status === 200) {
        setAccounts(data.data.record);
      }
    } catch (err) {
      toast(err.response.data.message);
    }
  };
  useEffect(() => {
    getAcctData();
    updateLoading();
  }, [refresh]);
  return loading ? (
    <MyBulletListLoader />
  ) : (
    <ViewBankStyle>
      <div className="header-content">
        <h3 className="sub-header">Bank Accounts</h3>
        <p className="paragraph">View Bank Accounts</p>
      </div>
      {  accounts && accounts.length> 0 ?
        accounts.map((account) => (
          <div className="inputWrapper">
            <div>
              <div>{account.bankName}</div>
              <div>{account.accountNumber}</div>
              <div>{account.accountName}</div>
            </div>
            <button className="remove" onClick={() => handleDelete(account.accountId)}>Remove</button>
          </div>
        )) : <p>Sorry, No existing accounts available!</p>
      }

      <Button
        text="Add New Bank"
        onClick={() => {
          toggleSwitch(true);
        }}
      />
    </ViewBankStyle>
  );
}

export default ViewBank;

const ViewBankStyle = styled.div`
  p {
    color: red;
    cursor: pointer;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    margin: 9% 0 9% 0;
  }
  .inputWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px;
    width: 100%;
    height: 75px;
    color: #012a4a;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    margin-bottom: 40px;
  }

  .remove {
    color: #012a4a;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 50px;
    padding: 8px;
  }
  .sub-header {
    margin: 10px;
    color: #012a4a;
  }
`;

const MyBulletListLoader = () => <BulletList />;
