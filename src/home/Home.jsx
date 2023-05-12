import React from "react";
import Header from "./Header";
import HomeCSS from "./Home.module.css";
function Home() {
  return (
    <div className={HomeCSS.mainContainer}>
      <Header />
    </div>
  );
}

export default Home;
