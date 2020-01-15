import React, { useState } from "react";
import { dateBuilder } from "./methods.js";
import "../css/index.css";

const Footer = () => {
  const [weather, setWeather] = useState({});
  return (
    <footer
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "foot warm"
            : "foot"
          : "foot"
      }
    >
      <p class="footer-company-motto">
        Website Designed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          id="cartersName"
          href="https://cjwagn1.github.io/personalsite/"
        >
          Carter Wagner
        </a>
      </p>
    </footer>
  );
};
export default Footer;
