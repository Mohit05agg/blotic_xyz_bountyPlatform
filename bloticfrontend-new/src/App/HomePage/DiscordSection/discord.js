import React, { Component } from "react";
import discord from "../../../assets/discord.PNG"
import DiscordLeftSection from "./discordLeftSection";
import DiscordRightSection from "./discordRightSection";
import discord_logo from "../../../assets/discord_logo.png"
class DiscordSection extends Component{
    render(){
        return(
            <div className="md:p-20 md:space-y-20">
                <p className="md:text-6xl p-5 md:p-0 text-4xl tracking-wider text-black text-center font-semibold">Connect with us on Discord</p>
                <p className="md:text-xl text-md p-5 md:p-0 tracking-wider text-gray-400 text-center font-semibold">Get connected with our blockchain experts here on discord</p>

                <div className="md:flex md:space-x-10 space-y-10 md:space-y-0 justify-center items-center">
                    <DiscordLeftSection />
                    <DiscordRightSection />
                </div>

                <a href="https://discord.com/channels/962557015975149580/962562037681111110" className="bg-black md:rounded-md mx-auto p-20 shadow-md py-3 space-x-5 flex uppercase tracking-wider text-lg md:max-w-max  font-bold">
                    <img src={discord_logo} alt="discord_logo" className="w-5 h-5 my-auto" />
                    <p className="text-white md:text-base text-sm text-center">Connect with us !</p>
                </a>
            </div>
        )
    }
}

export default DiscordSection