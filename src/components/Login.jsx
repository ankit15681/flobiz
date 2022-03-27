import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../useToken";

async function loginUser(credentials) {
  return fetch("https://niobooks.in/api/web/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      client: "web",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
async function requestOtp(credentials) {
  return fetch("https://niobooks.in/api/web/request_otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      client: "web",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login() {
  const { token, setToken } = useToken();
  const [mobile, setMobile] = useState();
  const [otp, setOtp] = useState(false);
  const [otpData, setOtpData] = useState(false);
  const errorMsg = document.getElementById("errmsg");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpData) {
      if (!otp) {
        errorMsg.style.display = "block";
        errorMsg.innerText = `Error: Please Enter OTP`;
      } else {
        const token = await loginUser({
          mobile_number: mobile,
          otp_code: otp,
        });
        if (token.error) {
          errorMsg.style.display = "block";
          errorMsg.innerText = `Error: ${token.error}`;
          console.error("There was an error!", token);
          setToken({});
        } else {
          errorMsg.style.display = "none";
          const el = document.getElementById("otp");
          el.style.display = "block";
          setToken(token);
        }
      }
    } else {
      const otpData = await requestOtp({
        mobile_number: mobile,
      });
      if (otpData.error) {
        errorMsg.style.display = "block";
        errorMsg.innerText = `Error: ${otpData.error}`;
        console.error("There was an error!", otpData);
        setOtpData(false);
      } else {
        setOtpData(true);
        errorMsg.style.display = "none";
        const el = document.getElementById("otp");
        el.style.display = "block";
      }
    }
  };
  useEffect(() => {
    if (token) {
      window.location.reload(false);
    }
  }, [token]);
  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Login to BillBook</h1>
      <label>
        <p>Enter Mobile Number</p>
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />
      </label>
      <p id="errmsg">eror</p>
      <div id="otp" style={{ display: "none" }}>
        <label>
          <p>Enter OTP</p>
          <input
            type="text"
            name="otp"
            placeholder="One Time Password"
            onChange={(e) => setOtp(e.target.value)}
          />
        </label>
        <small>Resend OTP in {} Seconds</small>
      </div>

      <div>
        <input
          className="submitButton"
          type="submit"
          value={otpData ? "Verify" : "Login"}
        />
      </div>
    </form>
  );
}

export default Login;
