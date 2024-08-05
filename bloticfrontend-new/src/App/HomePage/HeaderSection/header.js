import React, { Component } from "react";
import LeftComponent from "./leftComponent";
import RightComponent from "./rightComponent";
import BlockChainBg2 from "../../../assets/BlockChainBg2.mp4";

import TopbarSection from "../TopBarSection/topbarSection";
import header_bg from "../../../assets/header_bg.jpg";
class HeaderSection extends Component {
  render() {
    return (
      <div className="relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-screen h-screen object-cover md:block hidden"
        >
          <source src={BlockChainBg2} type="video/mp4" />
        </video>
        <img
          src={header_bg}
          alt="header_bg"
          className="w-screen h-screen object-cover md:hidden"
        />
        <div className="absolute h-full space-y-12 md:space-y-0 bg-black bg-opacity-70 top-0 md:right-0">
          <TopbarSection />
          <div className=" md:flex justify-center md:space-x-5 pt-20 md:pt-52 space-y-10 md:space-y-0 md:pb-20 items-center h-full">
            <LeftComponent />
            <RightComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSection;
