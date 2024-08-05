import React from "react";
import Home from "./home";
import TopBarSection from "../HomePage/TopBarSection/topbarSection";
import FooterSection from "../HomePage/FooterSection/footer";
import Navbar from '../Components/Navbar2';

export default function Homemain() {
  return (
    <div>
      {/* <TopBarSection /> */}
      <Navbar/>
      <Home />
      <FooterSection />
    </div>
  );
}
