import React, { memo  }from "react";
import "./header.css"
const Header =()=>
   {
    console.log("Rendering Header")
    return(
      <header>
      <div className="header-image"></div>

      </header>
    );
  }


export default memo(Header);