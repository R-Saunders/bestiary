import React from "react";

export default function Header(){
  return(
    <React.Fragment>
      <header>
        <div>
          {/* <img src="../imgs/Bestiary.png"/> */}
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