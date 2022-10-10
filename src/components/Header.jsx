import React from "react";

export default function Header(){
  return(
    <React.Fragment>
      <header>
        <h2>Bestiary</h2>
        <div>
          <button>Random Article</button>
          <input type="text" placeholder="Search"/>
        </div>
      </header>
    </React.Fragment>
  )
}