import React, { Component } from "react";
import blockfi_logo from "../../../assets/blockfi logo.jpg"

class DisplayTray extends Component{
    render(){
        
        var company_arr = [
            {
                logo: blockfi_logo,
                name: "Blockfi"
            },

            {
                logo: blockfi_logo,
                name: "Blockfi"
            },

            {
                logo: blockfi_logo,
                name: "Blockfi"
            },

            {
                logo: blockfi_logo,
                name: "Blockfi"
            },

            {
                logo: blockfi_logo,
                name: "Blockfi"
            },

            {
                logo: blockfi_logo,
                name: "Blockfi"
            },
        ]

        var company_arr_section = company_arr.map((company, index)=>{
            return(
                <div key={index} className="flex flex-col justify-center items-center">
                    <img src={company.logo} alt={company.name} className="w-20 h-20" />
                    <p className="text-lg text-center text-gray-700 font-semibold">{company.name}</p>
                </div>
            )
        })

        return(
            <div className="flex space-x-10 justify-evenly w-full">
                {company_arr_section}
            </div>
        )
    }
}

export default DisplayTray