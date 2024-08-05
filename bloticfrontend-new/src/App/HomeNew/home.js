import { Outlet } from "react-router-dom";
import logo from "../../assets/astronaut-in-tea-break.gif";
// import Button from "../../components/button/button.component";
import Home2 from "./home2";
import StatsPage from "./stats";
import FeedbackSlider from "./feedbackSlider";
// import { Canvas } from 'react-three-fiber';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { useLoader } from 'react-three-fiber';
import clon from "../../assets/cloner-cube-simple-copy (3).gif";

const Home = () => {
  // const fbx = useLoader(FBXLoader, '/path/to/my-model.fbx');

  return (
    <div className=" ">
      <div class="flex flex-col md:flex-row items-center justify-around min-h-screen mt-11 mr-4 ml-4 md:m-0 md:ml-9">
        <div class="w-full md:w-3/4 md:pl-12">
          <h1 class="mt-12 md:h-auto font-bold text-white text-4xl md:text-6xl leading-12 md:leading-20 mx-5 text-left md:text-left">
            ENTRY GATEWAY FOR ANY{" "}
            <span class="text-blue-500">WEB3 ENTHUSIAST</span>
          </h1>
          <p class="font-normal text-md mx-5 my-5 lg:mx-5 text-white md:text-3xl  md:leading-12  text-left md:text-left">
            Embark on your Web3 journey today and discover rewarding
            opportunities to earn without the need for advanced expertise.
          </p>
          <div class="mx-5 md:text-left">
            <a href="Bounty">
              <button class="bg-blue-600 hover:bg-blue-500  text-white px-8 py-4 uppercase tracking-widest font-semibold text-sm lg:text-lg rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Explore Now
              </button>
            </a>
          </div>
        </div>
        <div class="w-full md:w-auto md:ml-6 mt-8 md:mt-0">
          <img src={clon} class="mx-auto md:mx-0" alt="logo" />
        </div>
      </div>

      <Home2 />
      <StatsPage />

      <FeedbackSlider />

      <Outlet />
    </div>
  );
};

export default Home;
