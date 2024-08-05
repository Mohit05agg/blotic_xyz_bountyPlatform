import React, { Component } from "react";
import OrganiseEventRightComponent from "./organiseEventRightComponent";

class OrganiseEventSection extends Component{
    render(){
        return(
            <div className="md:p-20 p-5 py-20 md:flex space-y-10 md:space-y-0 justify-between">
                <div className="space-y-5 md:w-1/2 max-w-max mx-auto md:mx-0">
                    <p className="md:text-8xl text-6xl font-bold text-black">Organise</p>
                    <p className="md:text-3xl text-2xl tracking-wider text-gray-500">an event with <span className="text-black md:text-6xl text-3xl">Blotic</span></p>
                </div>

                <OrganiseEventRightComponent />
            </div>
        )
    }
}

export default OrganiseEventSection