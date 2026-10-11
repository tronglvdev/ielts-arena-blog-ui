import React from "react";

function PostCard({ post, onSelectPost }) {
  const { title, summary, date, image } = post;

  return (
    <article className="post-card">
      <div className="image-wrapper">
        <img
          src={image}
          alt={title}
          onClick={() => onSelectPost?.(post)}
        />
        <div className="post-date">
          <span>{date.day}</span>
          <span>{date.month}</span>
        </div>
      </div>
      <div className="post-card-content">
        <a
          href="#"
          className="card-title"
          onClick={(e) => {
            e.preventDefault();
            onSelectPost?.(post);
          }}
        >
          {title}
        </a>
        <p className="card-content">{summary}</p>
        <div className="read-more-link">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSelectPost?.(post);
            }}
          >
            Xem chi tiết
          </a>
          <p aria-hidden="true">&rarr;</p>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
