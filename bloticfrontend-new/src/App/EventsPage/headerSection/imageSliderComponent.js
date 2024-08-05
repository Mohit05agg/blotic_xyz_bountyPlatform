import React, { Component, useEffect, useState } from "react";
import events_img from "../../../assets/events_header.jpg"
import events_img_2 from "../../../assets/events_hedaer_2.jpeg"
import events_img_3 from "../../../assets/events_header_3.jpg"
function ImageSliderComponent(){

    
    var events_arr = [
        {
            img: events_img,
            event_name: "Blockchain Bootcamp",
            location: "Pune, India",
            about_event: "To start our journey we conducted a workshop (Blockchain Bootcamp) on Blockchain Basics, Rust Programing, and Substrate.",
            transform_position: "-translate-x-0"
        },
        {
            img: events_img_2,
            event_name: "BlockChain Bootcamp",
            location: "Pune, India",
            about_event: "To start our journey we conducted a workshop (Blockchain Bootcamp) on Blockchain Basics, Rust Programing, and Substrate.",
            transform_position: "-translate-x-0"
        },

        {
            img: events_img_3,
            event_name: "Blockchain Bootcamp",
            location: "Pune, India",
            about_event: "To start our journey we conducted a workshop (Blockchain Bootcamp) on Blockchain Basics, Rust Programing, and Substrate.",
            transform_position: "-translate-x-0"
        },

    ]


    var events_arr_section = events_arr.map((event, index)=>{
        return(
            <div onClick={() => {
                console.log(`img_slider_${index}`)
                if(index === (events_arr.length - 1)){
                    var j = events_arr.length
                    for(var i = 0; i < events_arr.length; i++){
                        j = j - 1
                        document.getElementById(`img_slider_${j}`).style.transform = `translateX(${j}00vw)`
                    }
                }else{
                    document.getElementById(`img_slider_${index}`).style.transform = `translateX(-${index + 1}00vw)`
                    document.getElementById(`img_slider_${index + 1}`).style.transform = `translateX(-${index + 1}00vw)`
                }
            }} id={`img_slider_${index}`} key={index} className={`w-screen flex-shrink-0 h-102 relative transform transition-all duration-500 cursor-pointer`}> 
                <img src={event.img} alt = {event.event_name} className="w-full h-full object-cover object-center" />

                {/* <div className="absolute bottom-10 md:right-10 mx-5 space-y-5 bg-black bg-opacity-30 rounded-lg shadow-2xl backdrop-filter backdrop-blur-sm md:w-96 overflow-hidden h-48 p-3">
                    <div className="space-y-1 border-b-2 border-gray-300 p-1">
                        <p className="text-white md:text-3xl text-xl font-medium">{event.event_name}</p>
                        <p className="text-gray-300 md:text-md text-sm">{event.location}</p>
                    </div>
                    
                    <p className="text-gray-300 md:text-sm text-xs p-1">{event.about_event}</p>
                </div> */}
            </div>
        )
    })

    return(
        <div className="flex w-full overflow-hidden">
            {events_arr_section}

        </div>
    )
}

export default ImageSliderComponent