import React from "react";
import statsimage from "../../assets/CHLogo.png";
import gifBackground from '../../assets/cloner-cubes-generative-copy.gif'
import communityIMG from '../../assets/team.png';
import events from '../../assets/calendar (2).png';
import College from '../../assets/school.png';

const StatsPage = () => {
  // Dummy data
  const Students = 1500;
  const Events = 25;
  const CollegeChapter = 15;

  return (
    <div
      className="flex flex-col justify-center p-8 md:p-20 bg-fixed bg-cover "
      style={{ backgroundImage: `url(${gifBackground})` }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-pulse">
        STATISTICS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-32 mx-auto max-w-7xl ">
        <div className="p-6 md:p-10 shadow-lg h-72 w-72 md:w-72 flex flex-col items-center justify-center rounded-3xl bg-white transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <img src={communityIMG} className="h-20 w-20 mb-4" alt="logo" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 my-2 text-center">
            Students
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-700 text-center">
            {Students}+
          </p>
        </div>
        <div className="p-6 md:p-10 shadow-lg h-72 w-full md:w-72 flex flex-col items-center justify-center rounded-3xl bg-white transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <img src={events} className="h-20 w-20 mb-4" alt="logo" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 my-2 text-center">
            Events
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-700 text-center">
            {Events}+
          </p>
        </div>
        <div className="p-6 md:p-10 shadow-lg h-72 w-full md:w-72 flex flex-col items-center justify-center rounded-3xl bg-white transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <img src={College} className="h-20 w-20 mb-4" alt="logo" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 my-2 text-center">
            College Chapters
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-700 text-center">
            {CollegeChapter}+
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
