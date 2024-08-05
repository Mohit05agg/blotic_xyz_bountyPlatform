import Cards from "./cards";

const Home2 = () => {
  return (
    <div className=" pb-24 lg:flex lg:flex-col lg:items-center lg:justify-center ml-10 mr-10 justify-around ">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around">
        <div className="w-full lg:w-1/2 flex flex-col lg:ml-8 lg:justify-start pt-8 lg:px-0">
          <h1 className="font-semibold text-4xl text-left md:text-6xl text-gray-100 lg:text-7xl leading-16  mb-4 md:mb-8 ">
            WHAT WE DO
          </h1>
          <p className="font-normal  leading-8 text-gray-300 md:leading-10 lg:text-2xl  lg:text-left mb-4 lg:mb-8">
            BLOTIC is building a pan-Indian community of web3 enthusiasts
            through a hybrid approach that blends online and offline
            interactions. We're creating college chapters that prioritize
            engagement, interactivity, gamification, and immersiveness.
          </p>
          <div class=" lg:text-left">
          <a href="About">
            <button class="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 uppercase tracking-widest font-semibold text-sm lg:text-lg rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Explore Now
            </button>
            </a>
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
};

export default Home2;
