import React from "react";
import img from "../../assets/Vm/Vm2.jpg";
import img_grid_1 from "../../assets/Flow/Flow 5.jpg";
import img_grid_2 from "../../assets/Flow/Flow 6.jpg";
import img_grid_3 from "../../assets/MIT1.jpeg";
import img_grid_4 from "../../assets/Vm/Vm5.jpg";
import img_grid_5 from "../../assets/i2-5.jpeg";
import img_grid_6 from "../../assets/i2-6.jpeg";
import img_grid_7 from "../../assets/i2-7.jpeg";

export default function AbtHeader() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left lg:px-60 lg:mt-10">
      <div className="lg:w-1/2 ">
        <h1 className="lg:text-8xl lg:ml-0 text-left ml-10 text-5xl  text-white">
          About Us
        </h1>
        <p className="lg:text-2xl lg:w-11/12 text-sm leading-4 text-left  px-10 lg:border-l-4 border-sky-900 lg:mt-5 opacity-90 p-3 rounded-xl shadow-md lg:p-5 text-white ">
          BLOTIC aims to create an inclusive community of web3 enthusiasts in
          India through a blended online and offline approach.{" "}
        </p>
      </div>
      <div class="lg:h-[450px] invisible lg-visible md:visible min-h-[1em] w-1 self-stretch bg-gradient-to-tr from-transparent via-cyan-500 to-transparent opacity-20 dark:opacity-100"></div>

      <div className="p-0.5">
        <div class="slides lg:w-1/2 ">
          <img src={img} class="image image-1" />
          <img src={img} class="image image-2" />
          <img src={img_grid_1} class="image image-3" />
          <img src={img_grid_1} class="image image-4" />
          <img src={img_grid_2} class="image image-5" />
          <img src={img_grid_2} class="image image-6" />
          <img src={img_grid_3} class="image image-7" />
          <img src={img_grid_3} class="image image-8" />
          <img src={img_grid_4} class="image image-9" />
          <img src={img_grid_4} class="image image-10" />
        </div>
      </div>
    </div>
  );
}
