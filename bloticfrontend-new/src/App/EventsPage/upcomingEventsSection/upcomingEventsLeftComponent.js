import React, { Component } from "react";

class UpcomingEventsLeftComponent extends Component{
    render(){

        var events_arr = [
            {
                event_name: "Web3 Talk",
                event_date: "02-07-2022",
                event_time: "3:00 PM",
                event_type: "learning",
                event_about: "The third-generation internet also called Web 3.0 is the next evolution of the World Wide Web.📈 Heartily welcomes you all in the marvelous event on 'An Introduction to Web 3.0' organised by BLOTIC today at 3:00P.M. - 5:00 P.M.",
                nav_to: "https://discord.gg/eHcaHc3t?event=992685732609146910",
                event_thumbn: "",
                category: "upcoming",
                venue: "Online | Discord"
            },
        ]

        var card_section = events_arr.map((card, index)=>{
            var nav_button
            if(card.category === "upcoming"){
                nav_button = (
                    <div className="flex justify-between">
                        {/* <button className="text-white bg-black font-medium text-xl p-3 px-5 text-center">Register Now</button> */}
                        <button className="text-black font-medium text-xl p-3 px-5 text-center"><a href={card.nav_to}>Know More</a></button>
                    </div>
                )
            }else{
                nav_button = (<button className="text-white bg-black font-medium text-xl p-3 px-5 text-center">Know More</button>)
            }
            return(
                <div key={index} className="bg-slate-100 rounded-xl p-10 md:w-full space-y-10 shadow-lg">
                    <div className="flex">
                        <div className="space-y-1 flex-grow">
                            <p className="text-3xl font-medium">{card.event_name}</p>
                            <p className="text-md text-gray-500">{card.event_date} | {card.event_time}</p>
                        </div>
                        <p className="text-md text-gray-500 my-auto">{card.venue}</p>
                    </div>
                    <p className="text-sm text-gray-500">{card.event_about}</p>
                    {nav_button}
                </div>
            )
        })

        return(
            <div className="md:w-2/5 p-5 space-y-20">
                {/* <p className="md:text-7xl text-6xl text-black">Upcoming<br />Events!</p> */}

                {card_section}
            </div>
        )
    }
}

export default UpcomingEventsLeftComponent