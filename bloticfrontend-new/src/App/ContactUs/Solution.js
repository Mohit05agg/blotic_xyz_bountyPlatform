import React from "react";
import solimg from "../../assets/SolutionVec.png";
import vic from '../../assets/Sitted-Victory.gif'

export default function Solution() {
  return (
    <div className="flex flex-col  justify-between  py-10 px-12 lg:py-18 lg:px-80 ">
      <h1 className="text-6xl text-neutral-100 lg:text-8xl">Solution </h1>
      <p className="text-3xl lg:text-5xl text-gray-500">
        by <span className="text-blue-500">Blotic</span>
      </p>
      <div className="lg:flex lg:flex-row lg:gap-8 justify-between">
        <div className="lg:w-3/5 lg:p-5 lg:pl-0">
          <p className="text-sm text-neutral-100 lg:text-lg mt-2 text-justify">
            BLOTIC is committed to building a vibrant and inclusive{" "}
            <span className="text-blue-500">community</span> of web3 enthusiasts
            across India. Our approach involves a blended online and offline
            model, which includes the formation of{" "}
            <span className="text-blue-500">college chapters</span> . These
            chapters embody our core principles of engagement, interactivity,
            gamification, and immersion. Our goal is to revolutionize the
            learning experience by providing a process that deviates from the
            conventional education curriculum of colleges in India. We
            prioritize the{" "}
            <span className="text-blue-500">
              practical application of knowledge over theoretical concepts
            </span>
            , which enables our members to gain valuable skills that will
            prepare them for the evolving demands of the industry. We are
            dedicated to creating a professional and dynamic environment that
            fosters{" "}
            <span className="text-blue-500">
              creativity, collaboration, and innovation
            </span>
            .
          </p>
          {/* <p className="text-sm lg:text-lg mb-10 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad minima
            placeat illum enim esse quisquam{" "}
            <span className="text-blue-500">consectetur</span> nesciunt,
            repellendus dolorem totam. Saepe quos eveniet, provident vitae cum
            neque nesciunt aspernatur voluptate quisquam nesciunt, repellendus{" "}
            <span className="text-blue-500">consectetur</span> dolorem totam.
            Saepe quos eveniet, provident vitae cum neque nesciunt aspernatur
            voluptate voluptas.
          </p> */}
        </div>
        <div className="lg:w-2/5  items-center place-content-center">
          <img className="solution-img" src={vic} alt="" />
        </div>
      </div>
    </div>
  );
}
