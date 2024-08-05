import React, { Component } from "react";
import RecentEventsLeftComponent from "./recentEventsLeftComponent";
import RecentEventsRightComponent from "./recentEventsRightComponent";

class RecentEventsSection extends Component{
    render(){
        return(
            <div className="bg-black  w-full md:p-20 p-5 py-20 space-y-20">
                {/* <p className="text-6xl text-white text-center">Recent Events</p> */}

                <div className="md:flex md:space-x-5 sapce-y-10 md:space-y-0 space-y-10">
                    <RecentEventsLeftComponent />
                    <RecentEventsRightComponent />
                </div>
            </div>
        )
    }
}

export default RecentEventsSection