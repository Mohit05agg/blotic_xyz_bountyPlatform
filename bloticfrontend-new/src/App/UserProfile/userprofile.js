import React, { useEffect } from "react";
import Navbar from "../Components/Navbar2";
import FooterSection from "../HomePage/FooterSection/footer";
import coin from "../../assets/coin.gif";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord_logo.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/githubicon.png";
import { getuser } from "../../helper/helper";
import { useState } from "react";
import coin1 from "../../assets/icons8-coin-80 (1).png";
// const data2 = {
//   username: "luv",
//   password: "erer",
//   about: "LUADA LASSUN",
//   tagline: "bhak teri ....e",
//   coins: "1000",
// };

// const [username, setUsername] = useState();
// getuser(data2);

let username = "";
export default function Userprofile() {
  const [urdata, seturdata] = useState({});
  // setUsername(data2.username);

  useEffect(() => {
    username = localStorage.getItem("username");
    console.log("form userprofile", username);
    getuser(username).then((res) => {
      seturdata(res.data);
      console.log("ur data : ", urdata);
    });
  }, []);

  return (
    <div>
      <Navbar />
      {/* Profile */}
      <div class="bg-gray">
        <div class="container mt-20 mx-auto py-8">
          <img src="" alt="" />
          <div class="grid grid-cols-4  sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4  sm:col-span-3">
              <div class="bg-slate-800  shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/lego/5.jpg"
                    class="w-24 h-24 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 class="text-xl text-slate-100 font-bold">
                    {urdata.username}
                  </h1>
                  <p class="text-slate-400">{urdata.email}</p>
                  <div class="mt-6 flex flex-wrap gap-3 justify-center">
                    <img className="w-12 h-12" src={coin1} alt="" />
                    <h1 className="font-bold text-2xl text-slate-300  py-3 ">
                      {urdata.coins ? urdata.coins : "0"}
                    </h1>
                  </div>
                </div>
                <hr class="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-25 dark:opacity-100" />

                <div class="flex flex-col">
                  <span class="text-blue-500 uppercase font-bold text-xl mb-2">
                    Skills
                  </span>
                  <ul className="pl-4 text-slate-300 list-disc">
                    <li class="mb-2">
                      {urdata.skill1 ? urdata.skill1 : "----"}
                    </li>
                    <li class="mb-2">
                      {urdata.skill2 ? urdata.skill2 : "----"}
                    </li>
                    <li class="mb-2">
                      {urdata.skill3 ? urdata.skill3 : "----"}
                    </li>
                    <li class="mb-2">
                      {urdata.skill4 ? urdata.skill4 : "----"}
                    </li>
                    <li class="mb-2">
                      {urdata.skill5 ? urdata.skill5 : "----"}
                    </li>
                  </ul>
                </div>

                <div className="w-full pt-4 space-y-3">
                  {/* <p className="text-center text-xl text-blue-500 font-medium">Follow us on</p> */}
                  <div className="flex justify-between w-full md:max-w-max  md:space-x-8 mx-auto">
                    <a target="_blank" href={urdata.twitter}>
                      <img src={twitter} alt="twitter" className="w-6 h-6" />
                    </a>

                    <a target="_blank" href={urdata.linkedin}>
                      <img src={linkedin} alt="linkedin" className="w-6 h-6" />
                    </a>

                    <a target="_blank" href={urdata.insta}>
                      <img
                        src={instagram}
                        alt="instagram"
                        className="w-6 h-6"
                      />
                    </a>

                    <a
                      target="_blank"
                      href="https://discord.com/channels/962557015975149580/962562037681111110"
                    >
                      <img src={discord} alt="discord" className="w-6 h-6" />
                    </a>
                    <a target="_blank" href={urdata.github}>
                      <img src={github} alt="discord" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-slate-800   shadow rounded-lg p-6">
                <div className="flex justify-between">
                  <h2 class="text-xl font-bold text-blue-500 mb-4">About Me</h2>
                </div>
                <p class="text-slate-300">
                  {urdata.about ? urdata.about : "Edit your profile"}
                </p>

                <hr class="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-25 dark:opacity-100" />

                <h2 class="text-xl font-bold text-blue-500 mt-6 mb-4">
                  Projects
                </h2>
                <div class="mb-6">
                  <div class="flex justify-between">
                    <span class="text-white font-bold">
                      {urdata.companyname ? urdata.companyname : "Project 1"}
                    </span>
                    {/* <p>
                      
                      <span class="text-slate-400 mr-2">{urdata.desc}time</span>
                      <span class="text-slate-400">{urdata.desc}time</span>
                    </p> */}
                  </div>
                  <p class="mt-2 text-slate-300">
                    {urdata.desc ? urdata.desc : "Description"}
                  </p>
                </div>
                <div class="mb-6">
                  <div class="flex justify-between">
                    <span class="text-white font-bold">
                      {urdata.companyname1 ? urdata.companyname1 : "Project 2"}
                    </span>
                  </div>
                  <p class="mt-2 text-slate-300">
                    {urdata.desc1 ? urdata.desc1 : "Description"}
                  </p>
                </div>
                <div class="mb-6">
                  <div class="flex justify-between">
                    <span class="text-white font-bold">
                      {urdata.companyname2 ? urdata.companyname2 : "Project 2"}
                    </span>
                  </div>
                  <p class="mt-2 text-slate-300">
                    {urdata.desc2 ? urdata.desc2 : "Description"}
                  </p>
                </div>
                <div class="mb-6">
                  <a href="/UserProfileform">
                    <button class="bg-blue-600 hover:bg-blue-500  text-white px-4 py-2 tracking-widest font-semibold text-sm lg:text-lg rounded-lg shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Edit Profile
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
