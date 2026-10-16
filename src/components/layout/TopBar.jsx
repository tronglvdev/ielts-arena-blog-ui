import React from "react";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-left">
          <div className="svg">
            <i className="fa-solid fa-envelope"></i>
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
            <a href="#" className="svg">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="svg">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="svg">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="svg">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
