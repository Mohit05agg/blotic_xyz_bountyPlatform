import React, { Component } from "react";

class OrganiseEventRightComponent extends Component{
    render(){
        return(
            <div className="md:w-1/2 my-auto space-y-5 flex flex-col justify-center items-center">
                <p className="text-md text-gray-500 text-center">Provide your E-mail address to get the Google Form.</p>
                <div className="bg-black flex shadow-xl p-1 w-full">
                    <input placeholder="Email Id" className="bg-transparent flex-shrink w-full p-2 focus:outline-none outline-none text-white px-5 placeholder-slate-300" />
                    <button className="p-2 px-5 text-black font-medium text-sm flex-shrink-0 bg-white">Get the Link</button>
                </div>
            </div>
        )
    }
}

export default OrganiseEventRightComponent