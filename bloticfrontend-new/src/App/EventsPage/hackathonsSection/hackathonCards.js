import React, { Component } from "react";
import {Link} from "react-router-dom"
class HackathonCards extends Component{
    render(){

        var hackathon_arr = [
            {
                event_name: "Web3 CrackIt",
                event_date: "31-06-2022",
                event_time: "6:00 PM",
                event_type: "hackathon",
                event_about: "A hackathon is a design sprint-like event, in which often computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects",
                nav_to: "",
                event_thumbn: "",
                category: "upcoming",
                venue: "online"
            },

            {
                event_name: "Web3 CrackIt",
                event_date: "31-06-2022",
                event_time: "6:00 PM",
                event_type: "hackathon",
                event_about: "A hackathon is a design sprint-like event, in which often computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects",
                nav_to: "",
                event_thumbn: "",
                category: "upcoming",
                venue: "online"
            },
        ]

        var card_section = hackathon_arr.map((card, index)=>{
            var nav_button
            if(card.category === "upcoming"){
                nav_button = (
                    <div className="flex justify-between">
                        <button className="text-white bg-black font-medium text-xl p-3 px-5 text-center">Register Now</button>
                        <button className="text-black font-medium text-xl p-3 px-5 text-center">Know More</button>
                    </div>
                )
            }else{
                nav_button = (<button className="text-white bg-black font-medium text-xl p-3 px-5 text-center">Know More</button>)
            }
            return(
                <div key={index} className="bg-white rounded-xl p-10 md:w-1/2 space-y-10">
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
            <div className="md:flex w-full space-y-5 md:space-y-0">
                <div className="md:w-2/5 my-auto">
                    <ul className="flex md:flex-col md:space-y-2 mx-auto">
                        <Link to={""} className="text-white text-center md:text-left p-3 px-5 pl-0 text-xl border-b-2 border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 border-white transition-all duration-300">Upcoming Hackathons</Link>
                        <Link to={""} className="text-white text-center md:text-left p-3 px-5 pl-0 text-xl border-b-2 border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 border-white transition-all duration-300">Recent Hackathons</Link>
                    </ul>
                </div>

                <div className="w-full md:flex md:space-x-3 space-y-5 md:space-y-0">
                    {card_section}
                </div>
            </div>
        )
    }
}

export default HackathonCards