import React from "react";

function PageHero() {
  return (
    <div className="page-hero">
      <div className="page-hero-item1">
        <img src="/images/Banner.png" alt="IELTS ARENA Banner" />
      </div>
      <div className="page-hero-item2">
        <div className="breadcrumb">
          Trang chủ <span>&rsaquo;</span> Blog <span>&rsaquo;</span> Tiếng Anh cơ
          bản
        </div>
        <h1 className="page-title">Tiếng Anh cơ bản</h1>
      </div>
    </div>
  );
}

export default PageHero;
