import React, { useState } from "react";
import { MdMediaBluetoothOff } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/navbar/Navbar";
import {
  DashboardWrapper,
  MainDashboard,
  Maincard,
} from "./Transaction.styles";

function Transaction() {
  // const [tab, setTab] = useState("Sell airtime")

  return (
    <>
      <Maincard>
        <span className="inner-text">
          <p id="date-text">Today, 10:15AM</p>
          <p id="withdraw-text">Withdraw fund</p>
          <label>25/5/2022</label>
        </span>
        <div className="btn">
          <button className="received">Received</button>
          <p className="naira">N5,000</p>
        </div>
      </Maincard>
      <br />

      <Maincard>
        <span className="inner-text">
          <p id="date-text">Today, 10:15AM</p>
          <p id="withdraw-text">Withdraw fund</p>
          <label>25/5/2022</label>
        </span>
        <div className="btn">
          <button className="received">Received</button>
          <p className="naira">N5,000</p>
        </div>
      </Maincard>
      <br />

      <Maincard>
        <span className="inner-text">
          <p id="date-text">Today, 10:15AM</p>
          <p id="withdraw-text">Withdraw fund</p>
          <label>25/5/2022</label>
        </span>
        <div className="btn">
          <button className="received">Received</button>
          <p className="naira">N5,000</p>
        </div>
      </Maincard>
    </>
  );
}

export default Transaction;
