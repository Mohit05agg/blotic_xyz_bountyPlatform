import React, { Component } from "react";
import vector from "../../../assets/astronaut-in-tea-break.gif"
class TwitterRightComponent extends Component{
    render(){
        return(
            <div className=" w-1/2 p-20 py-10">
                <img src={vector} alt = "vector" className="w-full h-auto" />
            </div>
        )
    }
}

export default TwitterRightComponent