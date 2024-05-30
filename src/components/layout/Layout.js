import React from "react"
import Header from "./header/Header"
import Menu from "./menu/Menu"
import Footer from "./footer/Footer"
import "./layout.css"



class Layout extends React.Component {
  render(){
    return (
      <>
        <Header />
       { /*<main>{this.props.children}</main>*/}
        <Menu>{this.props.children}</Menu>
       <Footer />
       
      </>
    )
  }
}
export default Layout;