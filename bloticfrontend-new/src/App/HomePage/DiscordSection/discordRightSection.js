import React, { Component } from "react";
import UploadedContentCard from "./uploadedContentCard";

class DiscordRightSection extends Component{
    render(){
        return(
            <div className="md:w-1/2 w-full md:rounded-xl space-y-5 bg-gray-100  bg-opacity-30">
                {/* <div className="flex md:justify-between justify-center items-center space-x-3 p-5">
                    <button className="p-2 md:px-5 text-sm md:text-base bg-sky-200 bg-opacity-10 rounded-md text-gray-500 font-medium hover:shadow-sm hover:bg-opacity-20 transition-all duration-300">Featured Resources</button>
                    <button className="p-2 md:px-5 text-sm md:text-base bg-sky-200 bg-opacity-10 rounded-md text-gray-500 font-medium hover:shadow-sm hover:bg-opacity-20 transition-all duration-300">Internship/Job Offers</button>
                    <button className="p-2 md:px-5 text-sm md:text-base bg-sky-200 bg-opacity-10 rounded-md text-gray-500 font-medium hover:shadow-sm hover:bg-opacity-20 transition-all duration-300">Daily News</button>
                </div> */}

                <UploadedContentCard />
            </div>
        )
    }
}

export default DiscordRightSection