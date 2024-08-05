import React, { Component } from "react";

class FooterLeftComponent extends Component{
    render(){
        return(
            <div className="space-y-10">
                <p className="md:text-6xl text-4xl text-white">Newsletter</p>
                <p className="md:text-md text-sm text-slate-200">Subscribe to our newsletter to get more information and regular updates</p>

                <div className="bg-white w-full rounded-md p-1 space-x-1 justify-between flex">
                    <input placeholder="Email" className="placeholder-gray-500 focus:outline-none outline-none bg-transparent h-10 p-1 text-sm flex-grow w-full" />
                    <button className="bg-black shadow-md text-white p-2 flex-shrink-0 text-sm px-4 rounded-md flex-grow-0">Subscribe</button>
                </div>
            </div>
        )
    }
}

export default FooterLeftComponent