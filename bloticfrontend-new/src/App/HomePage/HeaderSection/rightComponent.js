import React, { Component } from "react";
import { Link } from "react-router-dom";

class RightComponent extends Component{
    render(){
        return(
            <div className="md:w-1/2 flex-grow-0 md:pt-14 md:pl-0 md:p-20 p-5 flex-shrink-0">
                <div className="bg-white bg-opacity-80 h-auto rounded-xl md:rounded-l-none p-10 px-5 space-y-6">
                    <p className="md:text-5xl text-xl font-serif text-black">What is Blotic?</p>

                    <div className="bg-black bg-opacity-70 rounded-xl md:p-10 p-5 px-5 shadow-2xl space-y-4">
                        <p className="text-md  font-mono md:hidden text-gray-200 tracking-wider"> An entry gateway for any web3 enthusiasts 🚀🚀</p>
                        <p className="text-md md:block hidden  font-mono text-gray-200 tracking-wider"> An entry gateway for any web3 enthusiasts 🚀🚀</p>
                        <p className="text-md md:block hidden  font-mono text-gray-200 tracking-wider"> An ecosystem to acquire Web3 knowledge with practical expertise. A way to unlock your quest for blockchain</p>
                    </div>

                    <div className="space-y-5">
                        <p className="text-gray-900 text-2xl font-semibold text-center">Learn more about us</p>
                        <ul className="justify-between space-x-5 md:space-x-10 flex max-w-max md:w-9/12 mx-auto md:list-disc">
                            <li><a href="https://www.linkedin.com/company/blotic/" className="border-b-2 border-black text-gray-800 border-opacity-0 hover:border-opacity-100 transition-all duration-500 font-medium">Linkedin</a></li>
                            <li><a href="https://twitter.com/Blotic_web3" className="border-b-2 border-black text-gray-800 border-opacity-0 hover:border-opacity-100 transition-all duration-500 font-medium" >Twitter</a></li>
                            <li><a href="https://www.instagram.com/blotic_web3/" className="border-b-2 border-black text-gray-800 border-opacity-0 hover:border-opacity-100 transition-all duration-500 font-medium" >Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightComponent