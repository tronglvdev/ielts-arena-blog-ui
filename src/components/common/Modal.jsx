import React, { useEffect } from "react";

function Modal({ isOpen, onClose, post }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  return (
    <>
      <div className="blur-bg" onClick={onClose} />
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="modal-header">
          <h3 id="modalTitle">{post.title}</h3>
          <button
            type="button"
            className="close-modal"
            aria-label="Đóng"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          {post.image && (
            <img
              className="modal-image"
              src={post.image}
              alt={post.title}
            />
          )}
          <p>{post.summary}</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
