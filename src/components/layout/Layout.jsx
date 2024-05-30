import React, { useState } from "react";
import Header from "./header/Header"
import Menu from "./menu/Menu"
import Footer from "./footer/Footer"
import "./layout.css"
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Layout = ({ children }) => {
 // console.log("render layout")
  return (
    
    <div>
      <Header />
      <Menu>{children}</Menu>
      <Footer />
    </div>
  );
};
export default Layout;