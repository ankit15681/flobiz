import React from "react";
import madeByImage from "../assets/madewithlove.svg";
import iso from "../assets/icn_ISO.svg";
import Login from "./Login";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="headlines">
          <div>
            <h1>Simple GST Billing & Stock Management</h1>
            <h2>software for your business</h2>
            <h3>aatm nirbhar vyapari bane</h3>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img src={madeByImage} alt="icon" />
            <img src={iso} alt="icon" />
          </div>
        </div>
        <div className="formContainer">
          <Login />
        </div>
      </div>
    </>
  );
}
