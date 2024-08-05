import React, { Component } from "react";
import UpcomingEventsLeftComponent from "./upcomingEventsLeftComponent";
import UpcomingEventsRightComponent from "./upcomingEventsRightComponent";

class UpcomingEvent extends Component{
    render(){
        return(
            <div>
                <div className="md:flex bg-black md:p-20 p-5 py-20 space-y-10 md:space-y-0">
                    <UpcomingEventsLeftComponent />
                    <UpcomingEventsRightComponent />
                </div>
            </div>
        )
    }
}

export default UpcomingEvent