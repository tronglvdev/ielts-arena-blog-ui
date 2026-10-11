import React from "react";
import PostCard from "./PostCard";
import { POSTS_DATA } from "../../data/posts";

function PostGrid({ onSelectPost }) {
  return (
    <div className="post-grid">
      {POSTS_DATA.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onSelectPost={onSelectPost}
        />
      ))}
      <div className="load-more-wrapper">
        <button type="button" className="btn-read-more">
          Xem thêm
        </button>
      </div>
    </div>
  );
}

export default PostGrid;
