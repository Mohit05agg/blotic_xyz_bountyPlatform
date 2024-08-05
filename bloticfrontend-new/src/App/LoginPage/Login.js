import React, { useEffect, useState } from "react";
import Logo from "../../assets/BLOTIC-OGO-(2)logo.png";
import { useNavigate } from "react-router-dom";
import { sendlogin, getUser } from "../../helper/helper";
import toast, { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider, GoogleLogin  , useGoogleOneTapLogin} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { sendgoogle } from "../../helper/helper";

const notify = () => toast.error("Inavlid username or passwrod");

export default function Example() {
  const navigate = useNavigate();
  const usernamesign = localStorage.getItem("usernamesign");
  const [invalidcredmssg, setinvalidcredmssg] = useState("");
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const handlesubmit = (event) => {
    event.preventDefault();
    // console.log(email, password);
    sendlogin(email, password)
      .then((res) => {
        console.log("fdfghjkjh");
        window.location.reload();
        // console.log(res);
        // window.location.reload();
        // console.log("calling /Log");
      })
      .catch((err) => {
        // console.log(err);
        setinvalidcredmssg(err.message);
        console.log(invalidcredmssg);
        if (invalidcredmssg || err) {
          // alert("Inavlid username or passwrod");
          setinvalidcredmssg("");
          notify();
        }
      });
  };

  async function googellogin() {
    try {
      getUser();
      window.open(`http://localhost:8080/auth/google`, "_self");

      console.log("lccgh");
    } catch (err) {
      console.log(err);
    }
  }

  // googellogin().then(()=>{
  //    setTimeout(()=>{
  //     getUser()
  //    },5000)
  // })

  return (
    <>
      <div className="h-screen">
        <div className="flex min-h-full flex-1 flex-col items-center justify-center px-2 lg:py-12 lg:px-8">
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
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    User Email
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
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
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-blue-600 hover:text-blue-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
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
                  <a href="/Log">
                    <button
                      type="submit"
                      onClick={handlesubmit}
                      className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>

                    <Toaster />
                  </a>
                </div>
              </form>

              {/* <button
                onClick={googellogin}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in with google
              </button> */}

              {
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                  <GoogleLogin
                    onSuccess={async (credentialResponse) => {
                      console.log(credentialResponse)
                      // const decode = jwtDecode(credentialResponse.credential)
                      // console.log(decode.email)
                     await sendgoogle(credentialResponse.credential)
                     
                     // localStorage.setItem("username",decode.email)
                      window.location.reload()
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                    useOneTap
                  />
                </GoogleOAuthProvider>
              }

              <p className="mt-10 text-center text-lg text-gray-500">
                Not a member?{" "}
                <a
                  href="/Signup"
                  className="font-semibold text-lg leading-6 text-blue-600 hover:text-blue-500"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
