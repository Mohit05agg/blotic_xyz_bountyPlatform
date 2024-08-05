import React from "react";
import "./bountydesc.css";
import blog from "../blogs";
import Head from "./header";
import FooterSection from "../../HomePage/FooterSection/footer";
import Navbar2 from "../../Components/Navbar2";
import FAQ from "./FAQ";

function bountydesc() {
  const string = window.location.search;
  const query = new URLSearchParams(string);
  console.log(query.get("id"));
  // blog.map((data)=>{
  //   if(data.id == query.get('id'))
  //   {
  //     console.log(data.author);
  //     console.log(data.deadline);
  //     console.log(data.heading);
  //   }
  // })
  return (
    <div>
      <Navbar2 />
      {blog.map((data, index) => {
        if (data.id == query.get("id")) {
          return (
            <div key={`${index}`}>
              <div className="BountContainer flex-col box-border">
                <div className="header h-40 mt-20 lg:mt-32 border-2 rounded-lg border-sky-700 shadow-lg flex items-center justify-center bg-gradient-to-r from-gray-700 to-slate-900">
                  {/* style={{ backgroundImage: `url(${gifBackground})` }} */}
                  <h1 className="text-2xl lg:text-4xl text-zinc-50">
                    {data.company}
                  </h1>
                </div>

                <h1 className="text-4xl text-slate-300 font-semibold p-10 ">
                  {data.heading}
                </h1>

                <div className="flex flex-col lg:flex-row">
                  <div className="header mb-10 w-full lg:w-3/4 p-4 bg-gray-800 rounded-lg  shadow-lg  items-center justify-center ">
                    <div className="flex w-full md:w-auto">
                      <div class=" p-4">
                        <h1 className="text-2xl text-sky-600 font-semibold">
                          About Bounty:-
                        </h1>
                        <p class=" text-base text-slate-300 font-light leading-relaxed">
                          {data.desc}
                        </p>

                        <hr class="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-25 dark:opacity-100" />

                        <div className="flex justify-between">
                          <h1 className="text-2xl text-sky-600 font-semibold">
                            About Company:-
                          </h1>
                          <div className="flex p-2 text-blue-500 justify-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="w-5 h-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <a className="space-x-reverse" href={data.compweb}>
                              Website
                            </a>
                          </div>
                        </div>
                        <p class=" text-base text-slate-300 font-light leading-relaxed">
                          {data.abtcomp}
                        </p>

                        <hr class="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-25 dark:opacity-100" />

                        <h1 className="text-2xl font-semibold text-sky-600 ">
                          Evaluation Criteria:-
                        </h1>
                        <p class=" text-base text-slate-300 font-light leading-relaxed">
                          {data.eval}
                        </p>
                        <hr class="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-25 dark:opacity-100" />

                        <h1 className="text-2xl font-semibold text-sky-600 ">
                          Resources:-
                        </h1>
                        <p class=" text-base text-slate-300 font-light leading-relaxed">
                          {data.resource}
                        </p>
                        <a href={data.apply}>
                          <button class="bg-sky-600 hover:bg-gradient-to-r invisible lg:visible from-cyan-500 to-blue-500 text-xl text-white font-bold w-1/3 mt-5 py-2 px-4 rounded-fullnpm start shadow hover:shadow-lg transition duration-500 transform hover:-translate-y-1 hover:scale-10">
                            Apply
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="w-full lg:w-1/4 mb-4 lg:ml-4 ">
                    <div class="bg-gray-800 p-4 rounded-md shadow-md">
                      <h2 class="text-lg text-slate-300 font-bold mb-3">
                        Required Skills
                      </h2>
                      <div class="list-disc  mb-4 flex space-x-4">
                        <button class="border border-sky-700 text-blue-500 hover:border-slate-300 hover:text-slate-300 py-1 px-2 rounded-full">
                          {data.skill1}
                        </button>
                        <button class="border border-sky-700 text-blue-500 hover:border-slate-300 hover:text-slate-300 py-1 px-2 rounded-full">
                          {data.skill2}
                        </button>
                      </div>
                      <div class="list-disc  mb-4 flex space-x-4">
                        <button class="border border-sky-700 text-blue-500 hover:border-slate-300 hover:text-slate-300 py-1 px-2 rounded-full">
                          {data.skill3}
                        </button>
                        <button class="border border-sky-700 text-blue-500 hover:border-slate-300 hover:text-slate-300 py-1 px-2 rounded-full">
                          {data.skill4}
                        </button>
                      </div>
                      <h2 class="text-lg text-slate-300 font-bold mb-1">
                        Incentives
                      </h2>
                      <button class="bg-green-600  w-1/3 text-white text-lg font-bold py-1 px-4 rounded ">
                        {data.inr}
                      </button>
                      <hr class="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-25 dark:opacity-100" />

                      <div className="flex mt-2">
                        <h1 className="text-lg text-slate-300 font-bold mr-8 text-center">
                          Dealine: {data.deadline}{" "}
                        </h1>
                      </div>
                    </div>
                    <a href={data.apply}>
                      <button class="bg-sky-600 hover:bg-gradient-to-r from-cyan-500 to-blue-500  text-white font-bold w-full mt-5 py-2 px-4 rounded shadow hover:shadow-lg transition duration-500 transform hover:-translate-y-1 hover:scale-10">
                        Apply
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}

      <FooterSection />
    </div>
  );
}

export default bountydesc;
