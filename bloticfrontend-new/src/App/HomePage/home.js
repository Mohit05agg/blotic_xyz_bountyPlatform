import React, { Component } from "react";
import HeaderSection from "./HeaderSection/header";
import PortfolioSection from "./portfolioSection/portfolio";
import TwitterSection from "./TwitterSection/twitter";
import DiscordSection from "./DiscordSection/discord";
import EventsSection from "./EventsSection/events";
import FooterSection from "./FooterSection/footer";

class HomePage extends Component{
    render(){
        return(
            <div className="">
                <HeaderSection />
                {/* <PortfolioSection /> */}
                <TwitterSection />
                <DiscordSection />
                {/* <EventsSection /> */}
                <FooterSection />
            </div>
        )
    }
}
export default HomePage