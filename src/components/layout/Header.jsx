import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import AnnouncementBanner from "./AnnouncementBanner";

function Header() {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY >= 58);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <TopBar />
      <div className={`sticky-heading${isStuck ? " is-stuck" : ""}`}>
        <MainNav />
        <AnnouncementBanner />
      </div>
    </header>
  );
}

export default Header;
