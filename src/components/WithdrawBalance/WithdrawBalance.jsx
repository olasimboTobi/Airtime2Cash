import React from "react";
import { useState, useEffect } from "react";
import "./WithdrawBalance.styles";
import { WithdrawStyle } from "./WithdrawBalance.styles";
import Button from "../common/Button";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select";

const WithdrawBalanceForm = () => {
  const [accounts, setAccounts] = useState([]);
  const [accountOption, setAccountOption] = useState(null);
  const [currentSelection, setCurrentSelection] = useState({});

  const handleChange = (accountOption) => {
    setAccountOption(accountOption);
    setCurrentSelection({
      accountNumber: accountOption.label.split("-")[1],
      accountName: accountOption.name,
    });
  };

  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const updateLoading = () => {
    setTimeout(() => setLoading(false), 2000);
  };

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
      toast(err.message);
    }
  };
  useEffect(() => {
    getAcctData();
    updateLoading();
  }, []);


  const banks = [];
  accounts.map((acc) => {
    return banks.push({
      value: acc.accountId,
      label: `${acc.bankName} - ${acc.accountNumber}`,
      name: `${acc.accountName}`,
    });
  });


  return (
    <>
      <div>
        <WithdrawStyle>
          <div className="containerBody">
            <p className="Whead">Withdraw</p>
            <form className="wrap">
              <div className="form-wrapper">
                <label>Select Account</label>
                <br />
                <Select
                  value={accountOption}
                  defaultInputValue="Select"
                  onChange={handleChange}
                  options={banks}
                />
              </div>
              <div>
                <label>Account Name</label>
                <br />
                <input
                  className="form-input"
                  type="text"
                  value={currentSelection.accountName}
                  name="accountName"
                  required
                />
              </div>
              <div>
                <label>Account Number</label>
                <br />
                <input
                  className="form-input"
                  type="text"
                  value={currentSelection.accountNumber}
                  name="accountNumber"
                  required
                />
              </div>
              <div>
                <label>Amount</label>
                <br />
                <input
                  className="form-entry"
                  type="text"
                  placeholder="NGN"
                  name="amount"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <br />
                <input
                  className="form-entry"
                  type="text"
                  placeholder="Password"
                  name="password"
                  style={{ marginBottom: "30px" }}
                  required
                />
              </div>

              <Button
                type="submit"
                height={"48px"}
                width={"198px"}
                text={"Withdraw"}
              />
            </form>
          </div>
        </WithdrawStyle>
      </div>
    </>
  );
};
export default WithdrawBalanceForm;
