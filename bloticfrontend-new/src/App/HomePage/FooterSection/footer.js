import React from "react";
import { Component } from "react";
import FollowUsComponent from "./followUsComponent";
import FooterLeftComponent from "./footerLeftComponent";
import FooterRightComponent from "./footerRightComponent";

class FooterSection extends Component{
    render(){
        return(
            <div className="bg-black-8 bg-opacity-90 md:p-20 p-5 py-20 space-y-10">
                <div className="md:flex justify-between space-y-10 md:space-y-0">
                    <FooterLeftComponent />
                    <FooterRightComponent />
                </div>
                <FollowUsComponent />
            </div>
        )
    }
}

export default FooterSection