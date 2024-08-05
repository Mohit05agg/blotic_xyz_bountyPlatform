import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { getuser } from "../../helper/helper.js";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar2";
import { sendformdata } from "../../helper/helper.js";
import toast, { Toaster } from 'react-hot-toast';

let data = {};

const notify = () => toast.success('Data Saved');

export default function Example() {
  const handlechange = (event) => {
    console.log(event.target.id);
    console.log(event.target.value);
    data = {
      about: event.target.id === "about" ? event.target.value : data.about,
      username:
        event.target.id === "username" ? event.target.value : data.username,
      firstname:
        event.target.id === "firstname" ? event.target.value : data.firstname,
      lastname:
        event.target.id === "lastname" ? event.target.value : data.lastname,
      email: event.target.id === "email" ? event.target.value : data.email,
      country:
        event.target.id === "country" ? event.target.value : data.country,
      skill2: event.target.id === "skill2" ? event.target.value : data.skill2,
      skill3: event.target.id === "skill3" ? event.target.value : data.skill3,
      skill4: event.target.id === "skill4" ? event.target.value : data.skill4,
      skill5: event.target.id === "skill5" ? event.target.value : data.skill5,
      twitter:
        event.target.id === "twitter" ? event.target.value : data.twitter,
      linkedin:
        event.target.id === "linkedin" ? event.target.value : data.linkedin,
      insta: event.target.id === "insta" ? event.target.value : data.insta,
      discord:
        event.target.id === "discord" ? event.target.value : data.discord,
      github: event.target.id === "github" ? event.target.value : data.github,

      companyname:
        event.target.id === "companyname"
          ? event.target.value
          : data.companyname,
      designation:
        event.target.id === "designation"
          ? event.target.value
          : data.designation,
      timeframe:
        event.target.id === "timeframe" ? event.target.value : data.timeframe,
      desc: event.target.id === "desc" ? event.target.value : data.desc,

      companyname1:
        event.target.id === "companyname1"
          ? event.target.value
          : data.companyname1,
      designation1:
        event.target.id === "designation1"
          ? event.target.value
          : data.designation1,
      timeframe1:
        event.target.id === "timeframe1" ? event.target.value : data.timeframe1,
      desc1: event.target.id === "desc1" ? event.target.value : data.desc1,

      companyname2:
        event.target.id === "companyname2"
          ? event.target.value
          : data.companyname2,
      designation2:
        event.target.id === "designation2"
          ? event.target.value
          : data.designation2,
      timeframe2:
        event.target.id === "timeframe2" ? event.target.value : data.timeframe2,
      desc2: event.target.id === "desc2" ? event.target.value : data.desc2,

      skill1: event.target.id === "skill1" ? event.target.value : data.skill1,
    };
    console.log(data);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    sendformdata(data)
    // console.log("Input value:", data);
  };

  
  return (
    <div>
      <Navbar />
      <div className="lg:m-20 mt-28">
        {/* <p>Profile</p> */}
        <form
          onSubmit={handleSubmit}
          className="mx-8 p-6 my-20 lg:p-16 bg-gray-800 rounded-lg border-2 lg:mx-80 lg:my-40"
        >
          <div className="space-y-12">
            {/* Profile */}
            <div className="border-b border-white pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-white"
                  ></label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="first-name"
                        id="username"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      onChange={handlechange}
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Write a few sentences about yourself.
                  </p>
                </div>

                {/* <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      className="h-12 w-12 text-white"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-blue-500 px-2.5 py-1.5 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div> */}
                {/* <div className="sm:col-span-1">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Coins
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}
              </div>
            </div>

            {/* Personal Info */}
            <div className="border-b border-white pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="first-name"
                      id="firstname"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="lastname"
                      id="lastname"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
{/* 
                <div className="sm:col-span-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      onChange={handlechange}
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Skills */}
            <div className="border-b border-white pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">
                Skills
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                List down your top 5 skills.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Skill-1
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="first-name"
                      id="skill1"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Skill-2
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      onChange={handlechange}
                      name="last-name"
                      id="skill2"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Skill-3
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="first-name"
                      id="skill3"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Skill-4
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      name="last-name"
                      id="skill4"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Skill-5
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="last-name"
                      id="skill5"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="border-b border-white pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">
                Social Links
              </h2>
              

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Twitter
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="first-name"
                      id="twitter"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Linkedin
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="last-name"
                      id="linkedin"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Insta
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="first-name"
                      id="insta"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Discord
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="last-name"
                      id="discord"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Gituhub
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handlechange}
                      type="text"
                      name="last-name"
                      id="github"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="border-b border-white pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">
                Projects
              </h2>
              <p className="mt-1  text-sm leading-6 text-slate-400">
                List down your top three projects.
              </p>

              {/* Project-1 */}
              <h3 className="font-lg font-semibold mt-10 text-white">
                Project-1
              </h3>
              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-slate-200"
                  >
                    Project Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="username"
                        id="companyname"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Your Role
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="username"
                        id="designation"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Time Frame
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="username"
                        id="timeframe"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="2017-2018"
                      />
                    </div>
                  </div>
                </div> */}

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-slate-200"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      onChange={handlechange}
                      id="desc"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>

              {/* Project-2 */}
              <h3 className="font-sm font-semibold mt-10 text-white">
                Project-2
              </h3>
              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-slate-200"
                  >
                    Project Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="username"
                        id="companyname1"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Your Role
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="username"
                        id="designation1"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Time Frame
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="username"
                        id="timeframe1"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="2017-2018"
                      />
                    </div>
                  </div>
                </div> */}

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-slate-200"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      onChange={handlechange}
                      id="desc1"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>

              {/* Project-3 */}
              <h3 className="font-sm font-semibold mt-10 text-white">
                Project-3
              </h3>
              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4 mt-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-slate-200"
                  >
                    Project Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="username"
                        id="companyname2"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Your Role
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="username"
                        id="designation2"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div> */}
                {/* <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Time Frame
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        onChange={handlechange}
                        type="text"
                        name="username"
                        id="timeframe"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="2017-2018"
                      />
                    </div>
                  </div>
                </div> */}

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-slate-200"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      onChange={handlechange}
                      id="desc2"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={notify}
              className="rounded-md bg-blue-600 lg:w-1/3 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>

            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
}
