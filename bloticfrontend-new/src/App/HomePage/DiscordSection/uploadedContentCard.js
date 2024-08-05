import React, { Component } from "react";
import discord_resources_1 from "../../../assets/discord_resources_1.jpg"
import res_2 from "../../../assets/res_2.png"
import res_1 from "../../../assets/res_1.png"
class UploadedContentCard extends Component{
    render(){
        
        var content_arr = [
            {
                img: res_1,
                heading: "Solarweave's library",
                brief: "Solarweave's library functionality has been updated with a new RetrieveSlot function.",
                nav_to: "https://discord.com/channels/962557015975149580/962558987155415070/985457203005763634"
            },
    
            {
                img: res_2,
                heading: "Solana resources",
                brief: "Everything You Need to Get Started Building Full Stack Dapps on Solana.",
                nav_to: "https://discord.com/channels/962557015975149580/962558987155415070/975967531229642773"
            },

            // {
            //     img: discord_resources_1,
            //     heading: "Solana resources",
            //     brief: "This channel provides free education about smart contracts on open decentralized blockchains. Join us in our adventures where we explore cutting edge innovations in smart contract programming, security and applications.",
            //     nav_to: "https://discord.com/channels/962557015975149580/962558987155415070/975967531229642773"
            // },

            // {
            //     img: discord_resources_1,
            //     heading: "Solana resources",
            //     brief: "This channel provides free education about smart contracts on open decentralized blockchains. Join us in our adventures where we explore cutting edge innovations in smart contract programming, security and applications.",
            //     nav_to: "https://discord.com/channels/962557015975149580/962558987155415070/975967531229642773"
            // },

            // {
            //     img: discord_resources_1,
            //     heading: "Solana resources",
            //     brief: "This channel provides free education about smart contracts on open decentralized blockchains. Join us in our adventures where we explore cutting edge innovations in smart contract programming, security and applications.",
            //     nav_to: "https://discord.com/channels/962557015975149580/962558987155415070/975967531229642773"
            // },
        ]
    
        var content_card = content_arr.map((card, index)=>{
            return(
                <a  href={card.nav_to} key={index} className="bg-white md:w-1/2 h-96 flex-shrink-0 flex flex-col rounded-md space-y-3 hover:shadow-lg transition-all duration-500">
                    <img className="w-full object-cover h-1/2 overflow-hidden" src={card.img} alt={card.heading} />
                    <div className="p-3 space-y-5 h-1/2 overflow-hidden">
                        <p className="text-xl font-medium text-sky-600">{card.heading}</p>
                        <p className="text-xs text-gray-500">{card.brief}</p>
                    </div>

                    <button className="text-md bg-sky-600 p-2 px-5 font-medium text-white  shadow-lg">Know More</button>
                </a>
            )
        })
        
        return(
            <div className="md:flex md:space-x-3 p-4 space-y-5 md:space-y-0 overflow-x-hidden">
                {content_card}
            </div>
        )
    }
}

export default UploadedContentCard