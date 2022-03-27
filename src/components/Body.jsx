import React from "react";
import moneyBackLogo from "../assets/icn_moneyback.svg";
import crownIcon from "../assets/icn_pricing_crown.svg";
import compIcon from "../assets/icn_devices.svg";

export default function Body() {
  return (
    <>
      <div className="bodyContainer">
        <div className="stats">
          <div className="statData">
            <h1>1,00,000+</h1>
            <p>Businesses trust us</p>
          </div>
          <div className="statData">
            <h1>30,00,000+</h1>
            <p>Invoices created</p>
          </div>
          <div className="statData">
            <h1>5,000+</h1>
            <p>Cities & Towns in India</p>
          </div>
          <div className="statData">
            <h1>4.5 ★</h1>
            <p>Rating on Google Play</p>
          </div>
        </div>
        <div className="trialPromo">
          <div>
            <h1>Now try all the Benefits of MyBillBook for Free</h1>
            <h1 id="freePromo">Free for 14 Days</h1>
          </div>
          <div style={{ paddingRight: "40px" }}>
            <img src={moneyBackLogo} alt="icon" />
          </div>
        </div>
        <div className="pricingContainer">
          <div className="pricingBox blue">
            <img src={crownIcon} alt="icon" />
            <h5>Silver Plan</h5>
            <h2>
              <small style={{ textDecoration: "line-through" }}>₹ 1299</small> ₹
              1799 / <small>Year</small>
            </h2>
            <div className="devicesCont">
              <img src={compIcon} alt="icon" /> <h5>Mobile + Desktop</h5>
            </div>
            <ul>
              <li>2 Businesses </li>
              <li>3 Users</li>
              <li>Mobile & Web</li>
              <li>Unlimited Device Logins</li>
            </ul>
          </div>
          <div className="pricingBox gold">
            <img src={crownIcon} alt="icon" />
            <h5>Silver Plan</h5>
            <h2>
              <small style={{ textDecoration: "line-through" }}>₹ 1299</small> ₹
              1799 / <small>Year</small>
            </h2>
            <div className="devicesCont">
              <img src={compIcon} alt="icon" /> <h5>Mobile + Desktop</h5>
            </div>
            <ul>
              <li>2 Businesses </li>
              <li>3 Users</li>
              <li>Mobile & Web</li>
              <li>Unlimited Device Logins</li>
            </ul>
          </div>
          <div className="pricingBox orange">
            <img src={crownIcon} alt="icon" />
            <h5>Silver Plan</h5>
            <h2>
              <small style={{ textDecoration: "line-through" }}>₹ 1299</small> ₹
              1799 / <small>Year</small>
            </h2>
            <div className="devicesCont">
              <img src={compIcon} alt="icon" /> <h5>Mobile + Desktop</h5>
            </div>
            <ul>
              <li>2 Businesses </li>
              <li>3 Users</li>
              <li>Mobile & Web</li>
              <li>Unlimited Device Logins</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
