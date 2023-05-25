import React from "react";
import Quote from "./Quote";
import HomeCSS from "./Home.module.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
function Home() {
  return (
    <div className={HomeCSS.mainContainer}>
      <ResponsiveAppBar />
      <Quote />
    </div>
  );
}

export default Home;
