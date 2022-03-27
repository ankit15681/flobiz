import React from "react";
import whtsapp from "../assets/icn_whatsapp.svg";
import chat from "../assets/icn_chat.svg";
import yt from "../assets/icn_youtube.svg";
import fa from "../assets/icn_Facebook.svg";
import lin from "../assets/icn_linkedin.svg";
import ins from "../assets/icn_instagram.svg";
import tw from "../assets/icn_Twitter.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="fsection">
          <h3>Get in touch</h3>
          <p>help@flobiz.com</p>
          <h3>+91 88900 36165</h3>
          <div className="socialContainer1">
            <div className=" iconWtext iconWtext1">
              <img src={whtsapp} />
              <p>WhatsApp us</p>
            </div>
            <div className="iconWtext iconWtext2">
              <img src={chat} />
              <p>Chat with us</p>
            </div>
          </div>
        </div>
        <div className="fsection">
          <h3>Information</h3>
          <div className="footerMenu">
            <div>
              <p>Refund Policy</p>
              <p>Privacy Policy</p>
              <p>Terms and Condiitons</p>
            </div>
            <div>
              <p>FAQs</p>
              <p>Pricing</p>
              <p>FloBiz Business Group</p>
              <p>Blogs</p>
            </div>
          </div>
        </div>
        <div className="fsection">
          <h3>Follow us</h3>
          <div>
            <img src={yt} />
            <img src={tw} />
            <img src={fa} />
            <img src={ins} />
            <img src={lin} />
          </div>
          <h5>
            FlowBook is product by <a href="#">FloBiz</a>
          </h5>
        </div>
      </div>
    </>
  );
}
