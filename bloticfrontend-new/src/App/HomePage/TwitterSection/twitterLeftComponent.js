import React, { Component } from "react";
import twitter from "../../../assets/twitter.png"

class TwitterLeftComponent extends Component{
    render(){
        return(
            <div className="md:w-1/2 md:p-20 p-5 py-20 md:space-y-16 space-y-10 flex flex-col justify-evenly">
                <div className="space-y-5">
                    <p className="md:text-6xl text-4xl tracking-wider text-white font-semibold">Check Out Our</p>
                    <p className="md:text-6xl text-4xl tracking-wider text-white font-semibold">Twitter Page!</p>
                </div>

                

                <a href="https://twitter.com/Blotic_web3" className="bg-white rounded-md p-20 shadow-md py-3 space-x-5 flex uppercase tracking-wider text-lg max-w-max font-bold">
                    <img src={twitter} alt="twitter" className="w-5 h-5 my-auto" />
                    <p className="text-sm md:text-base">Check us out !</p>
                </a>
            </div>
        )
    }
}

export default TwitterLeftComponent