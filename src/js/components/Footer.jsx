import React from "react";
import "../../styles/footer.css";
import { ContactsArray } from "../variables/ContactsArray";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <h1>Contact Me</h1>

      <div className="contacts">
        <ul>
          {ContactsArray.map((detail, index) => {
            return (
              <li key={index}>
                <i className={detail.icon}></i>
                <strong>
                  {detail.subtitle}
                  <a href={detail.link}>{detail.displayedText}</a>
                </strong>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
