// import logo from './logo.svg';
import "./Learning.css";
import Header from "./Header";
import Card from "./blogCard";
import blog from "./blogs";
import Head from "./BountyDesc/header";
import FooterSection from "../HomePage/FooterSection/footer";
import Navbar from "../Components/Navbar2";
import Compbounty from './Compbounty'

function App() {
  return (
    <div className="bounty-tilebg">
      <Navbar />
      <Head />
        <div className="band">
          {blog.map((blog) => (
            <Card
              src={blog.icon}
              heading={blog.heading}
              deadline={blog.deadline}
              status={blog.status}
              skill1={blog.skill1}
              skill2={blog.skill2}
              inr={blog.inr}
              href={blog.href}
            />
          ))}
        </div>
        <Compbounty/>
      <FooterSection />
    </div>
  );
}

export default App;
