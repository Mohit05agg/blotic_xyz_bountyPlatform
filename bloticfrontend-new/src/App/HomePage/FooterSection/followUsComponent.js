import React, { Component } from "react";
import twitter from "../../../assets/twitter.png"
import discord from "../../../assets/discord_logo.png"
import instagram from "../../../assets/instagram.png"
import linkedin from "../../../assets/linkedin.png"
import youtube from "../../../assets/youtube.png"
import { Link } from "react-router-dom";

class FollowUsComponent extends Component{
    render(){
        return(
            <div className="w-full p-10 space-y-8">
                <p className="text-center text-xl text-white font-medium">Follow us on</p>
                <div className="flex justify-between w-full md:max-w-max  md:space-x-8 mx-auto">
                    <a href="https://twitter.com/Blotic_web3"><img src={twitter} alt="twitter" className="w-8 h-8"/></a>
                    <a href="https://www.linkedin.com/company/blotic/"><img src={linkedin} alt="linkedin" className="w-8 h-8"/></a>
                    <a href="https://www.instagram.com/blotic_web3/"><img src={instagram} alt="instagram" className="w-8 h-8"/></a>
                    <a href="https://discord.com/channels/962557015975149580/962562037681111110"><img src={discord} alt="discord" className="w-8 h-8"/></a>
                    {/* <a href=""><img src={youtube} alt="youtube" className="w-8 h-8"/></a> */}
                </div>
            </div>
        )
    }
}

export default FollowUsComponent