import React from "react";
import Navbar from "./Navbar/Navbar";
import Asaid from "./Asaid/Asaid";
import Container from "./Container/Container";
import Footer from "./Footer/Footer";

const Main = (props) => {
  const navbar_item = ["Home", "Link", "Dropdown", "Disabled","Dropdown","Profe",""];
  const cards = [
    {
      id:1,
      img:'https://http2.mlstatic.com/D_NQ_NP_2X_983891-MLA69716877633_052023-F.webp',
      title:'Batman',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure, aperiam ducimus doloribus',
      button:{
        btnColor:'warning',
        btnText:'Go DC'
      }
    },
    {
      id:2,
      img:'https://i.ebayimg.com/images/g/6VkAAOSw~FhdEQeB/s-l500.jpg',
      title:'Iron Man',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure, aperiam ducimus doloribus',
      button:{
        btnColor:'danger',
        btnText:'Go Marvel'
      }
    },
    {
      id:3,
      img:null,
      title:null,
      description:null,
      button:{}
    },
    {
      id:4,
      img:null,
      title:'Harry Poter',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure, aperiam ducimus doloribus',
      button:{
        btnColor:'dark',
        btnText:'Go Hogwarts'
      }
    },
  ]
  return (
    <main
      style={{ minHeight: "100vh" }}
      className="d-flex flex-column justify-content-around"
    >
      <Navbar
        navbar_item={navbar_item}
        navbar_bg={"bg-primary"}
        navbar_brand_name={"React-Brand-Name"}
      />
      <div className="d-flex">
        <Asaid options={navbar_item} />
        <Container cards={cards} />
      </div>
      <Footer />
    </main>
  );
};

export default Main;



// props = {
//   navbar_item:["Home", "Link", "Dropdown", "Disabled"],
//   navbar_bg:"bg-primary",
//   navbar_brand_name:"React-Brand-Name"
// }