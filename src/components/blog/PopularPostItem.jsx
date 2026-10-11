import React from "react";

function PopularPostItem({ post, onSelectPost }) {
  const { date, title, summary, image } = post;

  return (
    <div
      className="popular-post-content"
      onClick={() => onSelectPost?.(post)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelectPost?.(post);
        }
      }}
    >
      <div className="popular-img">
        <img src={image} alt={title} />
      </div>
      <div className="popular-content">
        <div className="popular-date">
          <span aria-hidden="true">&#128340;</span>
          {date}
        </div>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default PopularPostItem;
