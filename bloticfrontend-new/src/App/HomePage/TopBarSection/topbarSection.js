import React, { Component } from "react";
import CompanyNameSection from "./companyNameSection";
import NavbarComponent from "./navbarComponent";
class TopbarSection extends Component{
    render(){
        return(
            <div className="flex fixed top-0 w-full z-50 bg-black bg-opacity-30">
                <CompanyNameSection />
                <NavbarComponent />
            </div>
        )
    }
}

export default TopbarSection