import React, { Component } from "react";
import HackathonCards from "./hackathonCards";

class HackathonSection extends Component{
    render(){
        return(
            <div className="bg-black md:p-20 p-5 py-20 space-y-20">
                <p className="text-6xl text-white text-center font-medium">Hackathons</p>
                {/* <HackathonCards /> */}

                <p className="text-gray-500 text-center text-4xl font-medium">Comming Soon !</p>
            </div>
        )
    }
}

export default HackathonSection