import React from "react";
import logo from "../assets/images/logo.png"; // Ensure this is the Jaladhija Smart Bio Toilets logo
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="gg-container">
        <div className="gg-grid">
          <div className="gg-col-sm-1 gg-col-4">
          <h1 className="foot-logo">Jaladhija</h1>
          </div>
          <div className="gg-col-sm-2 gg-col-2">
            <div className="foot_det">
              <ul>
                <li>
                  <Link to={"/about-us"}>About Company</Link>
                </li>
                <li>
                  <Link to={"/contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gg-col-sm-2 gg-col-12">
            <div className="foot_links">
              {/* <div className="sybHead">Do what matters</div> */}
              <ul>
                <li>
                  <Link to={"mailto:jaladhijainfragst@gmail.com"}>
                    jaladhijainfragst@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to={"tel:+91-7838974389"}>+91-7838974389</Link>
                </li>
              </ul>
              <div className="social_link">
                <Link to={"https://in.linkedin.com/company/"} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="27"
                    viewBox="0 0 24 27"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_138_7535)">
                      <path
                        d="M5.37214 26.4884H0.396429V9.73646H5.37214V26.4884ZM2.8816 7.45134C1.29053 7.45134 0 6.07354 0 4.41012C1.13882e-08 3.61111 0.303597 2.84484 0.844004 2.27985C1.38441 1.71487 2.11736 1.39746 2.8816 1.39746C3.64586 1.39746 4.3788 1.71487 4.91921 2.27985C5.45962 2.84484 5.76322 3.61111 5.76322 4.41012C5.76322 6.07354 4.47214 7.45134 2.8816 7.45134ZM23.9947 26.4884H19.0296V18.3336C19.0296 16.3902 18.9922 13.8979 16.4427 13.8979C13.8557 13.8979 13.4593 16.0093 13.4593 18.1936V26.4884H8.48893V9.73646H13.2611V12.0216H13.3307C13.9949 10.7054 15.6177 9.31639 18.0386 9.31639C23.0743 9.31639 24 12.7833 24 17.2863V26.4884H23.9947Z"
                        fill="#3D3D3D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_138_7535">
                        <rect
                          width="24"
                          height="25.0909"
                          fill="white"
                          transform="translate(0 0.925781)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link to={"https://www.instagram.com/"} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="27"
                    viewBox="0 0 24 27"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_138_7537)">
                      <path
                        d="M12.0027 7.50992C8.59743 7.50992 5.85075 10.3821 5.85075 13.9429C5.85075 17.5038 8.59743 20.3759 12.0027 20.3759C15.4079 20.3759 18.1546 17.5038 18.1546 13.9429C18.1546 10.3821 15.4079 7.50992 12.0027 7.50992ZM12.0027 18.1252C9.80212 18.1252 8.00313 16.2496 8.00313 13.9429C8.00313 11.6362 9.79677 9.76063 12.0027 9.76063C14.2085 9.76063 16.0022 11.6362 16.0022 13.9429C16.0022 16.2496 14.2032 18.1252 12.0027 18.1252ZM19.8411 7.24678C19.8411 8.081 19.1987 8.74725 18.4063 8.74725C17.6085 8.74725 16.9714 8.0754 16.9714 7.24678C16.9714 6.41816 17.6138 5.7463 18.4063 5.7463C19.1987 5.7463 19.8411 6.41816 19.8411 7.24678ZM23.9157 8.76965C23.8247 6.75968 23.3856 4.97928 21.9775 3.5124C20.5747 2.04552 18.8721 1.58642 16.9499 1.48564C14.9689 1.36807 9.03112 1.36807 7.05009 1.48564C5.1333 1.58082 3.43068 2.03992 2.02253 3.5068C0.614389 4.97368 0.180703 6.75409 0.084328 8.76405C-0.0281093 10.8356 -0.0281093 17.0446 0.084328 19.1162C0.175348 21.1261 0.614389 22.9066 2.02253 24.3734C3.43068 25.8403 5.12794 26.2994 7.05009 26.4002C9.03112 26.5177 14.9689 26.5177 16.9499 26.4002C18.8721 26.305 20.5747 25.8459 21.9775 24.3734C23.3803 22.9066 23.8193 21.1261 23.9157 19.1162C24.0281 17.0446 24.0281 10.8412 23.9157 8.76965ZM21.3564 21.3388C20.9388 22.4363 20.1303 23.2816 19.0755 23.724C17.496 24.379 13.7482 24.2279 12.0027 24.2279C10.2572 24.2279 6.50396 24.3734 4.92984 23.724C3.88042 23.2873 3.07195 22.4419 2.64897 21.3388C2.02253 19.6872 2.16709 15.7681 2.16709 13.9429C2.16709 12.1177 2.02789 8.19297 2.64897 6.54693C3.06659 5.44958 3.87507 4.60416 4.92984 4.16186C6.50931 3.5068 10.2572 3.65797 12.0027 3.65797C13.7482 3.65797 17.5013 3.5124 19.0755 4.16186C20.125 4.59856 20.9335 5.44397 21.3564 6.54693C21.9828 8.19857 21.8383 12.1177 21.8383 13.9429C21.8383 15.7681 21.9828 19.6929 21.3564 21.3388Z"
                        fill="#3D3D3D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_138_7537">
                        <rect
                          width="24"
                          height="25.0909"
                          fill="white"
                          transform="translate(0 0.925781)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link to={"https://twitter.com/"} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                  >
                    <path
                      d="M26 5.88032C25.0434 6.30499 24.0153 6.59099 22.9363 6.71991C24.0381 6.06016 24.8842 5.01474 25.2818 3.76891C24.2515 4.37991 23.1097 4.82407 21.8942 5.06349C20.9224 4.02674 19.5347 3.37891 18.0007 3.37891C14.5567 3.37891 12.0261 6.59207 12.8039 9.92766C8.372 9.70557 4.44167 7.58224 1.81025 4.35499C0.41275 6.75241 1.0855 9.88866 3.46017 11.4768C2.587 11.4487 1.76367 11.2092 1.04542 10.8095C0.986917 13.2806 2.75817 15.5924 5.3235 16.107C4.57275 16.3107 3.7505 16.3583 2.91417 16.198C3.59233 18.317 5.56183 19.8586 7.8975 19.9019C5.655 21.6602 2.82967 22.4456 0 22.1119C2.36058 23.6253 5.16533 24.5082 8.177 24.5082C18.0808 24.5082 23.6763 16.1438 23.3382 8.64174C24.3804 7.88882 25.285 6.94957 26 5.88032Z"
                      fill="#3D3D3D"
                    />
                  </svg>
                </Link>
                <Link to={"https://www.facebook.com/"} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_138_7541)">
                      <path
                        d="M9.75 9.61003H6.5V13.9434H9.75V26.9434H15.1667V13.9434H19.1122L19.5 9.61003H15.1667V7.80411C15.1667 6.76953 15.3747 6.36003 16.3746 6.36003H19.5V0.943359H15.3747C11.479 0.943359 9.75 2.65828 9.75 5.94294V9.61003Z"
                        fill="#3D3D3D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_138_7541">
                        <rect
                          width="26"
                          height="26"
                          fill="white"
                          transform="translate(0 0.47168)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <p>
            Address: 2nd Floor, Emerald Heights, Laxmi Nagar, Sinhagad Road Pune, Maharashtra.
          </p>
          <p>
            Contact: 7838974389 | Email:{" "}
            <a href="mailto:jaladhijainfragst@gmail.com">jaladhijainfragst@gmail.com</a>
          </p>
          <div className="copyRight">
            © {new Date().getFullYear()} Jaladhija Smart Bio Toilets. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;