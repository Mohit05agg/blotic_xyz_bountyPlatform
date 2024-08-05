import React, { Component } from "react";
import events_img_2 from "../../../assets/Flow/Flow1.jpg"
import right_arrow from "../../../assets/right-arrow.png"
class RecentEventsRightComponent extends Component{
    render(){

        var events_arr = [
            {
                events_img: events_img_2,
                event_name: "Flow Hackathon",
                event_location: "Pune, India",
                event_date: "22nd Feb 2023",
                event_about: "The 5-day hybrid hackathon brought together innovators from Pune to showcase their talent and work on innovative projects. The event was a blend of online and in-person participation, providing a unique opportunity for teams to collaborate and build their ideas. Over the course of the hackathon, 12 projects were submitted.",
                nav_to: "https://www.instagram.com/p/CpkVUu4oEbc/"
            },
            
            // {
            //     events_img: events_img_2,
            //     event_name: "Blotic Meetup",
            //     event_location: "Mumbai, India",
            //     event_date: "12th June 2022",
            //     event_about: "But, rather than a debate, I believe everyone just spoke about cryptocurrencies, placing their hopes and worries on board. I think a video version of the event will be put up online. I will update this post with the link when I get it. Below, are my take-aways from each of the speakers."
            // },

            // {
            //     events_img: events_img_2,
            //     event_name: "Blotic Meetup",
            //     event_location: "Mumbai, India",
            //     event_date: "12th June 2022",
            //     event_about: "But, rather than a debate, I believe everyone just spoke about cryptocurrencies, placing their hopes and worries on board. I think a video version of the event will be put up online. I will update this post with the link when I get it. Below, are my take-aways from each of the speakers."
            // },

            // {
            //     events_img: events_img_2,
            //     event_name: "Blotic Meetup",
            //     event_location: "Mumbai, India",
            //     event_date: "12th June 2022",
            //     event_about: "But, rather than a debate, I believe everyone just spoke about cryptocurrencies, placing their hopes and worries on board. I think a video version of the event will be put up online. I will update this post with the link when I get it. Below, are my take-aways from each of the speakers."
            // },
        ]

        var events_card = events_arr.map((event, index)=>{
            return(
                <div key={index} id={`event_slider_${index}`} className="bg-white rounded-b-2xl flex-shrink-0 h-full w-full space-y-5 transform transition-all duration-500">
                    <img src={event.events_img} alt={event.event_name} className="w-full h-96 object-cover object-top" />
                    <div className="p-5 space-y-5 flex flex-col  justify-between">
                        <div className="flex">
                            <div className="space-y-1 flex flex-col flex-grow">
                                <p className="text-2xl font-medium">{event.event_name}</p>
                                <p className="text-md font-medium">{event.event_location}</p>
                            </div>

                            <p className="text-md my-auto font-light text-gray-500">{event.event_date}</p>
                        </div>

                        <p className="tracking-wider">{event.event_about}</p>

                        <div className="flex justify-between">
                            <button className="text-center p-3 px-5 max-w-max bg-black text-white"><a href={event.nav_to}>Know More</a></button>
                            <button onClick={() => {
                                console.log(`event_slider_${index}`)
                                if(index === (events_arr.length - 1)){
                                    var j = events_arr.length
                                    for(var i = 0; i < events_arr.length; i++){
                                        j = j - 1
                                        document.getElementById(`event_slider_${j}`).style.transform = `translateX(${j}00vw)`
                                    }
                                }else{
                                    document.getElementById(`event_slider_${index}`).style.transform = `translateX(-${index + 1}00%)`
                                    document.getElementById(`event_slider_${index + 1}`).style.transform = `translateX(-${index + 1}00%)`
                                }
                            }} ><img src={right_arrow} alt="right_arrow" className="w-12 h-12 p-2 rounded-full bg-gray-200" /></button>
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div className="md:w-2/5 flex overflow-hidden">
                {events_card}
            </div>
        )
    }
}

export default RecentEventsRightComponent