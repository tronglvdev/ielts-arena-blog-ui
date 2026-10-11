import React, { useState } from "react";
import Header from "./components/layout/Header";
import PageHero from "./components/layout/PageHero";
import PostGrid from "./components/blog/PostGrid";
import Sidebar from "./components/blog/Sidebar";
import Footer from "./components/layout/Footer";
import FloatingWidgets from "./components/layout/FloatingWidgets";
import Modal from "./components/common/Modal";
import "./style.css";

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <Header />
      <PageHero />

      <div className="main-container">
        <main className="content-column">
          <PostGrid onSelectPost={handleSelectPost} />
          <Sidebar onSelectPost={handleSelectPost} />
        </main>
      </div>

      <Footer />
      <FloatingWidgets />

      <Modal
        isOpen={Boolean(selectedPost)}
        post={selectedPost}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default App;
