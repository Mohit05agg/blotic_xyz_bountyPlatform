import React from "react";
import "./Testbox.css";
import Navbar from '../Components/Navbar2';
import FooterSection from '../HomePage/FooterSection/footer'
import Problem from './Problem'
import Solution from './Solution'
import AbtHeader from './AbtHeader'
import Invitation from './Invitation'
import flow1 from '../../assets/Flow/Flow1.jpg'
import flow8 from '../../assets/Flow/Flow 8.jpg'
import vm4 from '../../assets/Vm/Vm2.jpg'
import nft1 from '../../assets/events_hedaer_2.jpeg'
import mit8 from '../../assets/MIT5.jpeg'
import vm7 from '../../assets/Vm/Vm7.jpg'
import flow10 from '../../assets/Flow/Flow 10.jpg'
import nft2 from '../../assets/i2-2.jpeg'
export default function Example() {
  return (
    <>
    
      <div className="relative isolate overflow-hidden bg-black-8  pt-24 sm:pt-32 lg:overflow-visible lg:px-0">
      <Navbar />
        {/* Rectangke SVG */}
        {/* <div className="absolute inset-0 lg:visible invisible -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-cyan-100 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-cyan-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div> */}

        <AbtHeader/>
        

        {/* Image Exag */}
        <div class="container mx-auto mt-4 px-10 py-2 lg:px-32 lg:pt-24">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={
                    flow1
                  }
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={vm4}
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={mit8}
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={vm7}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                src= {flow8}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={nft1}
                />
              </div>
            </div>
          </div>
        </div>

        
        <Problem/>
        <Solution/>
        <Invitation/>
        <FooterSection/>
      </div>
      
    </>
  );
}
