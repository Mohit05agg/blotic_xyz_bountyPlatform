import React from "react";
import img from "../../assets/MIT4.jpeg";

const gradientStyle = {
  backgroundImage: "linear-gradient(#141217, #0e0c12)",
};

export default function Problem() {
  return (
    <div className="  justify-between mt-10 py-10 px-12  lg:py-20 lg:px-80 ">
      <h1 className="text-6xl text-white lg:text-8xl">Problems </h1>
      <p className="text-3xl lg:text-5xl text-gray-500">
        in the <span className="text-blue-500">Industry</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 py-5">
        <div className="p-3 bg-gray-50 about-prob-card  rounded-xl shadow-md lg:p-5 ">
          <h1 className="lg:text-4xl text-3xl text-blue-500">Community</h1>
          <ul className="pl-4 pt-2 text-neutral-200 list-disc">
            <li>
              <p>
                Despite the numerous advancements in technology and the
                widespread availability of information, peer to peer learning is
                not evident in today's world .
              </p>
            </li>
            <li>
              <p>
                Online platforms have become prevalent in the Web3 industry.
                However, the absence of face-to-face interactions can hinder
                effective communication.
              </p>
            </li>
          </ul>
        </div>
        <div className=" p-3 bg-gray-50 about-prob-card  rounded-xl shadow-md lg:p-5">
          <h1 className="lg:text-4xl text-3xl text-blue-500">Jobs</h1>
          <ul className="pl-4 pt-2 text-zinc-300 list-disc">
            <li>
              <p>
                The job market in the Web3 industry is still evolving, and the
                demand for skilled professionals often outpaces the supply.
              </p>
            </li>
            <li>
              <p>
                A lack of intermediaries between Web 3.0 jobs and students
                seeking employment can hinder the hiring process.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 py-5">
        <div className=" p-3 bg-gray-50 about-prob-card rounded-xl shadow-md lg:p-5">
          <h1 className="lg:text-4xl text-3xl text-blue-500">Students</h1>
          <ul className="pl-4 pt-2 text-zinc-300 list-disc">
            <li>
              <p>
                Without a clear roadmap, transitioning from Web 2.0 to Web 3.0
                can be a daunting and confusing process.
              </p>
            </li>
            <li>
              <p>
                The lack of accessible and reliable resources can make it
                challenging to start learning about Web 3.0.
              </p>
            </li>
          </ul>
        </div>
        <div className=" p-3 bg-gray-50 about-prob-card rounded-xl shadow-md lg:p-5">
          <h1 className="lg:text-4xl text-3xl text-blue-500">Fragmentation</h1>
          <ul className="pl-4 pt-2 text-zinc-300 list-disc">
            <li>
              <p>
                The Web3 industry consists of various communities, protocols,
                and platforms that operate independently, leading to
                fragmentation. This can make it challenging to collaborate
                effectively.
              </p>
            </li>
            <li>
              <p>
                Communities within the Web3 industry often operate in isolation,
                hindering knowledge sharing, collaboration, and the collective
                growth of the ecosystem.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
