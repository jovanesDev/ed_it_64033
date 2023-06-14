import React from "react";
import Counter from "./Counter/Counter";
import Feed from "./Feed/Feed";
// import Navbar from "./Navbar/Navbar";
// import Asaid from "./Asaid/Asaid";
// import Container from "./Container/Container";
// import Footer from "./Footer/Footer";
// import { cards, navbar_item } from "../config";
// import WithH1 from "./WithH1/WithH1";
// import WithH2 from "./WithH1/WithH2";

const Main = (props) => {
  return (
    <main
      // style={{ minHeight: "100vh" }}
      // className="d-flex flex-column justify-content-around"
    >
      <Counter/>
      <Feed/>

    </main>
  );
};

export default Main;



// props = {
//   navbar_item:["Home", "Link", "Dropdown", "Disabled"],
//   navbar_bg:"bg-primary",
//   navbar_brand_name:"React-Brand-Name"
// }