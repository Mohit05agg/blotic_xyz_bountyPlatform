import React, { Component } from "react";
import Navbar2 from '../../Components/Navbar2'
import ImageSliderComponent from "./imageSliderComponent";

class HeaderSection extends Component{
    render(){
        return(
            <div className="bg-black">
                <Navbar2 />
                <ImageSliderComponent />
            </div>
        )
    }
}

export default HeaderSection