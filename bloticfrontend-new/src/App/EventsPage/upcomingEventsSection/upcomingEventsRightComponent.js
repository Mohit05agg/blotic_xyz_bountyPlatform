import React, { Component } from "react";
import events_img_2 from "../../../assets/web3meet.jpeg"
import right_arrow from "../../../assets/right-arrow.png"
class UpcomingEventsRightComponent extends Component{
    constructor(props){
        super(props)

        this.state = {index: 0}
    }
    render(){
        var index = 0
        var events_arr = [
            {
                events_img: events_img_2,
                event_name: "Blotic Meetup",
                event_location: "Mumbai, India",
                event_date: "12th June 2022",
                event_about: "But, rather than a debate, I believe everyone just spoke about cryptocurrencies, placing their hopes and worries on board. I think a video version of the event will be put up online. I will update this post with the link when I get it. Below, are my take-aways from each of the speakers."
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
                <div  id={`upcoming_event_slider_${index}`} key={index} className="bg-white rounded-2xl h-full w-full flex-shrink-0 space-y-5 overflow-hidden shadow-2xl transition-all duration-500">
                    <img src={event.events_img} alt={event.event_name} className="w-full h-full" />
                    {/* <div className="p-5 space-y-5 flex flex-col  justify-between">
                        <div className="flex">
                            <div className="space-y-1 flex flex-col flex-grow">
                                <p className="text-2xl font-medium">{event.event_name}</p>
                                <p className="text-md font-medium">{event.event_location}</p>
                            </div>

                            <p className="text-md my-auto font-light text-gray-500">{event.event_date}</p>
                        </div>

                        <p className="tracking-wider">{event.event_about}</p>

                        <div className="flex justify-between">
                            <button className="text-center p-3 px-5 max-w-max bg-black text-white">Know More</button>
                            </div>
                        </div> */}
                </div>
            )
        })

        return(
            <div className="md:w-3/5 relative flex flex-col my-auto justify-center items-center">
                <div className="flex overflow-hidden">
                    {events_card}
                </div>
                {/* <button onClick={()=>{
                    console.log(`upcoming_event_slider_${index}`)
                    if(index === (events_arr.length - 1)){
                        var j = events_arr.length
                        for(var i = 0; i < events_arr.length; i++){
                            j = j - 1
                            document.getElementById(`upcoming_event_slider_${j}`).style.transform = `translateX(${j}00vw)`
                        }
                    }else{
                        document.getElementById(`upcoming_event_slider_${index}`).style.transform = `translateX(-${index + 1}00%)`
                        document.getElementById(`upcoming_event_slider_${index + 1}`).style.transform = `translateX(-${index + 1}00%)`
                    }
                    index++
                }} className="mt-10"><img src={right_arrow} alt="right_arrow" className="w-12 h-12 p-2 rounded-full bg-gray-200" /></button> */}
            </div>
        )
    }
}

export default UpcomingEventsRightComponent