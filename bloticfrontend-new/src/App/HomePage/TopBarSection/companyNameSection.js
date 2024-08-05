import React, { Component } from "react";
import {Link} from "react-router-dom"
import BLOTIC_logo from "../../../assets/BLOTIC-OGO-(2)logo.png"
class CompanyNameSection extends Component{
    render(){
        return(
            <div className="md:px-20 md:py-5 md:w-1/2 w-full z-50 p-2">
                <Link to={"/"}>
                    <img src={BLOTIC_logo} alt="BLOTIC_logo" className="w-28" />
                    {/* <p className="text-3xl font-bold text-white">Blotic</p> */}
                </Link>
            </div>
        )
    }
}

export default CompanyNameSection