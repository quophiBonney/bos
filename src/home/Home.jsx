import React from "react";
import Header from "./Header";
import Quote from "./Quote";
import HomeCSS from "./Home.module.css";
import Categories from "./Categories";
function Home() {
  return (
    <div className={HomeCSS.mainContainer}>
      <Header />
      <Categories />
      <Quote />
    </div>
  );
}

export default Home;
