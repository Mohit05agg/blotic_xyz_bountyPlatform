import React, { useState } from "react";
import Logo from "../../assets/BLOTIC-OGO-(2)logo.png";
import { HandRaisedIcon } from "@heroicons/react/24/outline";
import { senddata } from "../../helper/helper";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';



export default function Example() {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handlesubmit = (event) => {
    event.preventDefault();
    senddata(username , email ,password ).then((res)=>{console.log(res)
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
    <Toaster />
      <div className="h-screen">
        <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
          <div className="lg:h-1/2 lg:w-1/3 bg-gray-800 px-8 py-10 rounded-xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <a href="/">
                <img
                  className="mx-auto h-12 w-auto"
                  src={Logo}
                  alt="Your Company"
                />
              </a>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-100">
                Sign up to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e)=>{setemail(e.target.value)}}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Password.
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                     onChange={(e)=>{setpassword(e.target.value)}}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Username
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                     onChange={(e)=>{setusername(e.target.value)}}
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                   onClick={handlesubmit}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-lg text-gray-500">
                Already a member?{" "}
                <a
                  href="/Log"
                  className="font-semibold text-lg leading-6 text-blue-600 hover:text-blue-500"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
