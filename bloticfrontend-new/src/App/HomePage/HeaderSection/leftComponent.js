import React, { Component } from "react";

class LeftComponent extends Component{
    render(){
        return(
            <div>

                <p className="text-2xl text-white font-mono text-center md:hidden">Connecting Blocks...</p>

                <div className="w-1/2 space-y-5 h-auto p-16 pt-14 hidden md:block">
                    <p className="text-8xl text-white font-mono">Connecting</p>
                    <p className="text-7xl text-white font-mono">Blocks...</p>
                    
                    {/* <div className="">
                        <button className="">Twitter</button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default LeftComponent