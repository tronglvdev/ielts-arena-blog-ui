import React from "react";
import ConsultForm from "../form/ConsultForm";
import {
  FOOTER_BRANCH_GROUPS,
  FOOTER_POLICIES,
  FOOTER_QUICK_LINKS,
  FOOTER_ROADMAPS,
} from "../../data/navigation";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <ConsultForm />
      </div>

      <div className="background-overlay">
        <div className="footer-contact">
          <div className="footer-contact-item">
            <img src="/images/logo-footer.png" alt="IELTS Arena Logo" />
          </div>
          <div className="footer-contact-item">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:092999525" className="f-bar-item">
              092 999 525
            </a>
          </div>
          <div className="footer-contact-item">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:contact@ieltsarena.edu.vn" className="f-bar-item">
              contact@ieltsarena.edu.vn
            </a>
          </div>

          <div className="footer-contact-item">
            <div className="f-bar-icons">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="f-info">
          <div className="f-info-widget">
            <div className="f-info-col">
              {FOOTER_BRANCH_GROUPS.map((group) => (
                <div key={group.title} className="f-info-group">
                  <div className="f-info-title">
                    <i
                      className="fa-solid fa-location-dot"
                      aria-hidden="true"
                    ></i>
                    <p>{group.title}</p>
                  </div>
                  <ul className="f-info-list">
                    {group.branches.map((branch) => (
                      <li key={branch}>{branch}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="f-info-col">
              <div className="f-info-group">
                <div className="f-info-title">
                  <p>Chính sách</p>
                </div>
                <ul className="f-info-list">
                  {FOOTER_POLICIES.map((policy) => (
                    <li key={policy}>{policy}</li>
                  ))}
                </ul>
              </div>

              <div className="f-info-group">
                <div className="f-info-title">
                  <p>Thông tin liên hệ</p>
                </div>
                <ul className="f-info-list-contact">
                  <li>
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                    <p>092 999 525</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:contact@ieltsarena.edu.vn">
                      contact@ieltsarena.edu.vn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cột 3: Truy cập nhanh */}
            <div className="f-info-col">
              <div className="f-info-group">
                <div className="f-info-title">
                  <p>Truy cập nhanh</p>
                </div>
                <ul className="f-info-list">
                  {FOOTER_QUICK_LINKS.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="f-info-col">
              <div className="f-info-group">
                <div className="f-info-title">
                  <p>Lộ trình học</p>
                </div>
                <ul className="f-info-list">
                  {FOOTER_ROADMAPS.map((roadmap) => (
                    <li key={roadmap}>{roadmap}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="copyright-left">
          <p>© Copyright 2024 by IELTS Arena. JSC</p>
          <span>|</span>
          <p>Giấy phép số 4480/GCN-SGDDT TP. Hà Nội</p>
        </div>
        <div className="copyright-right">
          <p>Giới thiệu</p>
          <span>|</span>
          <p>Điều khoản sử dụng</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
