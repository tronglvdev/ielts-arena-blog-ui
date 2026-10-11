import React from "react";

function FloatingWidgets() {
  const scrollToConsult = () => {
    const consultSection = document.getElementById("consultForm");
    if (consultSection) {
      consultSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="floating-widgets">
      <div
        className="float-btn"
        role="button"
        tabIndex={0}
        aria-label="Chat tư vấn"
      >
        <i className="fa-solid fa-comment-dots" aria-hidden="true"></i>
      </div>
      <div
        className="float-btn"
        role="button"
        tabIndex={0}
        aria-label="Nhận tư vấn"
        onClick={scrollToConsult}
      >
        <p>
          Nhận
          <br />
          tư vấn
        </p>
      </div>
    </div>
  );
}

export default FloatingWidgets;
