import React  from "react";
import "./menu.css"
import datamenu from "./admin.json"
import { Link } from "react-router-dom";


class Menu extends React.Component {


 

  render() {

//console.log(datamenu);
    return (
      <div>
      <div className="container">
      <div className="left-menu">
        <h3>Admin Menu</h3>
        <ul>
        {datamenu.map((item, index) => (
          <li key={index}>
            <a href={`/${item.link}`}>{item.name}</a>
            
          </li>
        ))}
            </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to the Admin Panel</h1>
      </div>
    </div>
    <div className="bottom-menu">
      <ul>
      {datamenu.map((item, index) => (
          <li key={index}>
            <a href={`/${item.link}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
    </div>
    );
  }
}
export default Menu;