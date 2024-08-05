import "./Roadmap.css";
import Button from "./button";
import FlowChart from "./flowchart";
import Sidebar from "./slider";
import Navbar2 from "../Components/Navbar2";
import FooterSection from "../HomePage/FooterSection/footer";

function App() {
  return (
    <div>
      <Navbar2 />
      <section className="roadmap-section">
        <div className="roadmap-heading">
          <div>
            <h1 className="font-bold mx-3">
              Embark on your journey in
              <br />
              WEB3 with us!
            </h1>
            <p className="lg:px-16">
              Discover the essential resources and steps needed to successfully
              traverse the landscape of WEB3 development, 
              <br/>
              from blockchain basics
              and smart contracts to decentralized applications and beyond.
            </p>

            <Button />
          </div>
        </div>

        <div className="roadmap-air roadmap-air1"></div>
        <div className="roadmap-air roadmap-air2"></div>
        <div className="roadmap-air roadmap-air3"></div>
        <div className="roadmap-air roadmap-air4"></div>

        {/* rectangles */}

        <div className="roadmap-area">
          <ul className="roadmap-circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
      <Sidebar />
      <h1 className="roadmap-heading-flowchart">0-1 WEB3 Roadmap</h1>

      <div>
        <FlowChart />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
