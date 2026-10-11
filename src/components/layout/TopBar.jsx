import React from "react";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-left">
          <div className="svg">
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          </div>
          <a
            href="mailto:contact@ieltsarena.edu.vn"
            className="top-bar-item mail-item"
          >
            contact@ieltsarena.edu.vn
          </a>
          <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
          <span className="top-bar-item">
            54 Trương Công Giai, Cầu Giấy, Hà Nội
          </span>
        </div>
        <div className="top-bar-right">
          <div className="svg">
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
          </div>
          <a href="tel:0929999535" className="top-bar-item phone-item">
            092 9999 535
          </a>
          <div className="top-bar-icons">
            <a href="#" className="svg" aria-label="Facebook">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" className="svg" aria-label="YouTube">
              <i className="fa-brands fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="#" className="svg" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" className="svg" aria-label="TikTok">
              <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
