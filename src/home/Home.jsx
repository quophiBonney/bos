import React from "react";
import Header from "./Header";
import Quote from "./Quote";
import HomeCSS from "./Home.module.css";
function Home() {
  return (
    <div className={HomeCSS.mainContainer}>
      <Header />
      <Quote />
    </div>
  );
}

export default Home;
