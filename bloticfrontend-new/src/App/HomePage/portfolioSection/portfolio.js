import React, { Component } from "react";
import DisplayTray from "./displayTray";

class PortfolioSection extends Component{
    render(){
        return(
            <div className="bg-white w-full md:p-20 py-10 p-5 md:flex md:space-x-5 space-y-10 md:space-y-0 overflow-hidden">
                <p className="text-6xl font-semibold my-auto text-center">Our<br className="" />Partners</p>
                <DisplayTray />
            </div>
        )
    }
}

export default PortfolioSection