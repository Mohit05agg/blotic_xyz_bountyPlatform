import React, { Component } from "react";

class CompBounty extends Component {
  render() {
    return (
      <div className=" ">
        <div class="flex flex-col md:flex-row items-center justify-around mx-11 mr-4 ml-4 md:m-0 md:ml-2">
          <div class="w-full md:w-3/4 md:pl-0">
            <h1 class="mt-12 md:h-auto font-bold text-white text-3xl md:text-5xl leading-12 md:leading-20 mx-5 text-left md:text-left">
              List your
              <span class="text-blue-500"> bounties</span> here.
            </h1>
            <p class="font-normal text-md mx-5 my-5 lg:mx-5 text-white md:text-xl md:w-3/4 md:leading-12  text-left md:text-left">
              If you're looking to encourage and support individuals who are
              building their careers in the field of web3, you might consider
              offering bounties or rewards for their efforts. This can be done
              by either companies or individuals, and the process for
              participating is as simple as registering through the provided
              link. By doing so, you can list the specific bounties or rewards
              you're willing to provide, and potentially attract more talented
              individuals to the web3 industry.
            </p>
            <div class="mx-5 mb-10 md:text-left">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyufg0p_-q7hpAmuIQUZ1ZyXfJqZf9Ffc1smcs0JPvEe77Pg/viewform">
                <button class="bg-blue-600 hover:bg-blue-500  text-white px-4 py-2 uppercase tracking-widest font-semibold text-sm lg:text-lg rounded-full shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Register
                </button>
              </a>
            </div>
          </div>
          <div class="w-full md:w-auto md:ml-6 mt-8 md:mt-0">
            {/* <img src={clon} class="mx-auto md:mx-0" alt="logo" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CompBounty;
