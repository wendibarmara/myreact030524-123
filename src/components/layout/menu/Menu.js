import React , { useContext } from 'react'
import "./menu.css"
import datamenu from "./admin.json"
import { NavLink } from "react-router-dom";
import { NavContext } from '../../../common/navContext'


  const Menu = ({children}) => {
  const {setNamaLink } = useContext(NavContext);
  const handleNamaLinkClick = (link) => {
    setNamaLink(link);
  };
 // console.log("render menu")
  return (
        <div>
          <div className="container">
              <div className="left-menu">
                <ul>
                    {datamenu.map((item, index) => (
                    <li key={index}>
                        <NavLink to={`/${item.link}`}onClick={() => handleNamaLinkClick(`/${item.name}`)}  activeclassname="active">
                                    {item.name}
                       </NavLink>
                   </li>
        ))}
            </ul>
      </div>
        <div className="main-content">
            <h1>{children}</h1>
        </div>
      </div>
    <div className="bottom-menu">
      <ul>
      {datamenu.map((item, index) => (
          <li key={index}>
                         <NavLink to={`/${item.link}`} activeclassname="active">
                  {item.name}
        </NavLink>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};
export default Menu;
