import React from "react";
// import logo from "./images/b-logo.png";
import astronaut from '../../assets/astronaut-in-tea-break.gif'

function Header(){
    return (
        <div class="row">
        <div class="col-1">
          <h1>Entry Gateway for any WEB3 <span>Enthusiast</span></h1>
          
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            perspiciatis eum aut distinctio adipisci quaerat molestiae odit
            obcaecati? Vero, iste. Voluptatum iure consectetur incidunt
            perferendis, libero cumque ut recusandae aliquam.
          </p>
          <br /><button type="button">Start Here!</button>
        </div>
        <div class="col-2">
          <img src={astronaut} alt="" />
          <div class="color-box"></div>
        </div>
      </div>

    );
}

export default Header;