import React from "react";
import PopularPostItem from "./PopularPostItem";
import { POPULAR_POSTS } from "../../data/popularPosts";

function Sidebar({ onSelectPost }) {
  return (
    <aside className="sidebar-column">
      <div className="sidebar-widget">
        <h3 className="widget-heading">Bài viết có lượt xem nhiều nhất</h3>
        <div className="popular-posts-list">
          {POPULAR_POSTS.map((post) => (
            <PopularPostItem
              key={post.id}
              post={post}
              onSelectPost={onSelectPost}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
