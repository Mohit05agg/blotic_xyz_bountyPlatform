import React, { Component } from "react";
import TwitterImagesGrid from "./twitterImagesGrid";
import TwitterLeftComponent from "./twitterLeftComponent";
import TwitterRightComponent from "./twitterRightComponent";

class TwitterSection extends Component{
    render(){
        return(
            <div className="md:space-y-0 space-y-10">
                <div className="md:flex sapce-y-10 md:space-y-0 md:pb-40 bg-black bg-opacity-90">
                    <TwitterLeftComponent />
                    <TwitterRightComponent />
                </div>
                <TwitterImagesGrid />
            </div>
        )
    }
}

export default TwitterSection