import React from "react";
import Logo from '../imgs/Bestiary.png'

export default function Header(){
  return(
    <React.Fragment>
      <header>
        <div>
          <img src={Logo} alt="Bestiary Logo" />
          <h2>Bestiary</h2>
        </div>
        <div>
          <button>Random Article</button>
          <input type="text" placeholder="Search"/>
        </div>
      </header>
    </React.Fragment>
  )
}