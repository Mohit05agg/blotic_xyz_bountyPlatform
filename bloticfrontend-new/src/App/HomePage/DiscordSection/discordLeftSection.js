import React, { Component } from "react";
import discord_vid from "../../../assets/discord_vid.mp4"


class DiscordLeftSection extends Component{
    render(){
        return(
            <div className="md:w-1/2 p-5 md:p-0">
                <video autoPlay muted loop className="">
                    <source src={discord_vid} type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default DiscordLeftSection