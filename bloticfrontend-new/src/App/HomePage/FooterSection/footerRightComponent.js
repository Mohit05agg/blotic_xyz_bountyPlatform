import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterRightComponent extends Component{
    render(){

        var nav_item = [
            {
                heading: "Navigation",
                nav_links: [
                    {
                        nav_name: "Home",
                        nav_to: "/"
                    },

                    {
                        nav_name: "Events",
                        nav_to: "/events"
                    },

                    {
                        nav_name: "Learning",
                        nav_to: "/Learning"
                    },

                    {
                        nav_name: "About-US",
                        nav_to: "/About"
                    },

                    {
                        nav_name: "Bounty",
                        nav_to: "/Bounty"
                    },
                ]
            },
            {
                heading: "Help",
                nav_links: [
                    {
                        nav_name: "FAQs",
                        nav_to: "#"
                    },

                    {
                        nav_name: "We Are Hiring",
                        nav_to: "#"
                    },
                ]
            },

        ]

        var nav_footer_section = nav_item.map((nav, index)=>{
            return(
                <div key={`Nav_${index}`} className="space-y-5">
                    <p className="font-blod md:text-2xl text-xl text-white">{nav.heading}</p>
                    {
                        nav.nav_links.map((nav_link, nav_index)=>{
                            return(
                                <ul key={`ul_Nav_${nav_index}`} className="space-y-3">
                                    <li><Link className="border-b-2 text-slate-200 text-sm md:text-base border-slate-200 border-opacity-0 hover:border-opacity-100 transition-all duration-500" to={nav_link.nav_to} >{nav_link.nav_name}</Link></li>
                                </ul>
                            )
                        })
                    }
                </div>
            )
        })

        return(
            <div className="flex md:justify-evenly justify-between md:w-1/2">
                {nav_footer_section}
            </div>
        )
    }
}

export default FooterRightComponent