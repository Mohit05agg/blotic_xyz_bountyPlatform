import React, { Component } from "react";
import rocket from "../../assets/rocket.gif"
import TopbarSection from "../HomePage/TopBarSection/topbarSection";
import Contact from '../../assets/Contact.jpg'
class ContactUs extends Component{
    render(){
        return(
            <div className="bg-[#110e1b]">

                <TopbarSection />
                {/* <div className="flex space-x-5">
                    <div className="w-1/2 flex flex-col justify-center items-center p-10 space-y-4">
                        <div class="relative w-full border rounded-md">
                            <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-200 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#110e1b] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Full Name</label>
                        </div>

                        <div class="relative w-full border rounded-md">
                            <input type="email" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-200 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#110e1b] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email Id</label>
                        </div>

                        <div class="relative w-full border rounded-md">
                            <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-200 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#110e1b] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Profession</label>
                        </div>

                        <div class="relative w-full border rounded-md">
                            <textarea type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-200 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#110e1b] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Message</label>
                        </div>

                        <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 w-96  focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  mb-2">Submit</button>
                    </div>
 
                    <div className="w-1/2">
                        <img src={rocket} alt = "rocket" className="w-full " />
                    </div>
                </div> */}


<div class=" flex  flex-col md:flex-row md:space-x-6 md:space-y-0 w-full min-h-screen justify-center  "> 
        <div class=" p-8 ">
           {/* <!-- image Div --> */}
           <div class="flex flex-col  space-y-8 justify-between">
            <h1 class=" font-black text-4xl tracking-wide md:text-6xl  md:font-black ">Contact us</h1>
            <p class=" font-semibold pt-5 text-sm md:text-lg "> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

           </div>
           <div class=" pt-6 md:max-w-5xl mt-24">

        <img class=" rounded-xl shadow-md " src={Contact} alt="logo"/>

           </div>
            
            
        </div>
        <div class=" flex md:w-full md:pr-10 md:pt-7 md:pb-8 md:justify-center md:items-center bg-skyblue ">
            {/* <!-- form Div --> */}
            <div class=" bg-skyblue rounded-xl  p-8 w-full  md:p-10 ">
                <form  class="flex flex-col space-y-4 " onsubmit="sendEmail(); reset(); return false;">
                    <div>
                        <label   for="fullname"> Full Name</label>
                        <input type="text" 
                        class=" ring-1 ring-gray-300 w-full rounded-md  px-4 py-2 outline-none focus:ring-2  focus:ring-teal-300"/>

                    </div>
                  

                    
                        <div>
                            <label  for="email"> EMAIL</label>
                            <input type="email" 
                            class=" ring-1 ring-gray-300 w-full rounded-md  px-4 py-2 outline-none focus:ring-2  focus:ring-teal-300"/>
    
                        </div>
                       <div>
                        <label  for="message"> MESSAGE</label>

                        <textarea name="" id=""  rows="4" class=" ring-1 ring-gray-300 w-full rounded-md  px-4 py-2 outline-none focus:ring-2  focus:ring-teal-300"></textarea>
                            
    
                        </div>

                       
                    <button class="bg-indigo-500 rounded-md px-3 mt-2 inline-block py-3 shadow-lg text-white uppercase tracking-wider
                    font-semibold text-sm hover:bg-indigo-400 hover:-translate-y-0.5 focus:outline-none focus:ring
                    focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 transition transform" >Send Message</button>

                </form>
            </div>

        </div>
    </div>

            {/* <script src="https://smtpjs.com/v3/smtp.js" charset="utf-8"></script>
            <script>

            function sendEmail(){
                Email.send({
            Host : "smtp.elasticemail.com",
            Username : "",
            Password : "",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
        message => alert(message)
        );
            }

            </script> */}

            </div>
        )
    }
}

export default ContactUs