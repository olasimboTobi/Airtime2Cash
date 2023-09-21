import React, { useState, useEffect } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Inputs";
import { AccountStyle } from "./ManageAcct.style";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";

const ManageAcct = ({ toggleSwitch }) => {
  const [addAccount, setAddAccount] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [banks, setBanksData] = useState([{id:"", name:""}])

 
  useEffect(()=>{
    axios.get("https://api.paystack.co/bank").then((res)=>{
     
      const responseAllBanks = res.data;
      setBanksData(responseAllBanks.data)
       
    })
  },[])

  const handleChange = (e) => {
    setAddAccount({ ...addAccount, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const { status } = await axios.post(
        "http://localhost:3000/api-v1/accounts/add-account",
        addAccount,
        {
          headers: { token },
        }
      );
      if (status === 201) {
        toast("Account added successful");
        setAddAccount({});
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
    }
  };

  return (
    <AccountStyle>
      <div className="container">
        <div className="header-content">
          <h3 className="sub-header">Bank Account</h3>

          <p
            className="paragraph"
            onClick={() => {
              toggleSwitch(false);
            }}
          >
            View Bank Accounts
          </p>
        </div>
        <label htmlFor="">Bank Name</label>
        <form onSubmit={handleSubmit}>
          {/* {console.log(banks)} */}
          <select
            className="banks"
            defaultValue={{ value: "" }}
            name="bankName"
            onChange={handleChange}
          >
            <option value="select-bank">Select Bank</option>
            {/* {console.log(banks)} */}
            {banks.map((bank)=>{
              return(
                
                <option key={bank.id} value="select-bank">{bank.name}</option>
              )
            })}
          </select>
        </form>
        <label htmlFor="">Account Name</label>
        <br />
        <Input
          placeholder={"Enter your name"}
          name="accountName"
          value={addAccount.accountName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Account Number</label>
        <br />
        <Input
          placeholder={"Enter your account number"}
          name="accountNumber"
          value={addAccount.accountNumber}
          onChange={handleChange}
        />
        <Button
          text="Add Account"
          width="30%"
          height="100%"
          onClick={handleSubmit}
          isLoading={loading}
        />
      </div>
    </AccountStyle>
  );
};

export default ManageAcct;
