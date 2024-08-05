import React, { Component } from "react";
import RecentEventsLeftComponent from "./recentEventsLeftComponent";
import RecentEventsRightComponent from "./recentEventsRightComponent";

class RecentEventsSection3 extends Component{
    render(){
        return(
            <div className="bg-black w-full md:p-20 p-5 py-20 space-y-20">

                <div className="md:flex md:space-x-5 sapce-y-10 md:space-y-0 space-y-10">
                    <RecentEventsLeftComponent />
                    <RecentEventsRightComponent />
                </div>
            </div>
        )
    }
}

export default RecentEventsSection3