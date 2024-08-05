import React, { Component } from "react";
import Twritter_1_w from "../../../assets/Twritter-1_w.PNG"
import "atropos/atropos.css";
import Atropos from 'atropos/react';

class TwitterImagesGrid extends Component{
    render(){

        var images_arr = [Twritter_1_w, Twritter_1_w, Twritter_1_w, Twritter_1_w, Twritter_1_w, Twritter_1_w, Twritter_1_w, Twritter_1_w]
        var images_arr_under_md = [Twritter_1_w, Twritter_1_w, Twritter_1_w, Twritter_1_w]

        var images_arr_section = images_arr.map((img, index)=>{
            if(index % 2 === 0){
                return(
                    <div key={`${index}`} className="w-3/12 -mx-12 -mt-5">
                        <Atropos className="my-atropos shadow-2xl rounded-md overflow-hidden"
                        activeOffset={40}
                        shadowScale={1.05}
                        onEnter={() => console.log('Enter')}
                        onLeave={() => console.log('Leave')}
                        onRotate={(x, y) => console.log('Rotate', x, y)}
                        >
                        <img src={img} alt="img" className="shadow-2xl rounded-md overflow-hidden"  />
                        </Atropos>
                    </div>
                )
            }else{
                return(
                    <div key={`${index}`} className="w-3/12 -mx-12 mt-5">
                        <Atropos className="my-atropos shadow-2xl rounded-md overflow-hidden"
                        activeOffset={40}
                        shadowScale={1.05}
                        onEnter={() => console.log('Enter')}
                        onLeave={() => console.log('Leave')}
                        onRotate={(x, y) => console.log('Rotate', x, y)}
                        >
                        <img src={img} alt="img" className="shadow-2xl rounded-md overflow-hidden"  />
                        </Atropos>
                    </div>
                )
            }

            // return(
            //     <div className="w-3/12 -mx-12">
            //         <img src={img} alt="img" className="shadow-2xl rounded-md overflow-hidden"  />
            //     </div>
            // )
        })

        var images_arr_section_under_md = images_arr_under_md.map((img, index)=>{
            if(index % 2 === 0){
                return(
                    <div key={`${index}`} className="w-4/5 -mx-12 -mt-5">
                        <Atropos className="my-atropos  w-full h-full object-cover"
                        activeOffset={40}
                        shadowScale={1.05}
                        onEnter={() => console.log('Enter')}
                        onLeave={() => console.log('Leave')}
                        onRotate={(x, y) => console.log('Rotate', x, y)}
                        >
                        <img src={img} alt="img" className="shadow-2xl rounded-md overflow-hidden"  />
                        </Atropos>
                    </div>
                )
            }else{
                return(
                    <div key={`${index}`} className="w-4/5 -mx-12 mt-5">
                        <Atropos className="my-atropos  "
                        activeOffset={40}
                        shadowScale={1.05}
                        onEnter={() => console.log('Enter')}
                        onLeave={() => console.log('Leave')}
                        onRotate={(x, y) => console.log('Rotate', x, y)}
                        >
                        <img src={img} alt="img" className="shadow-2xl rounded-md overflow-hidden"  />
                        </Atropos>
                    </div>
                )
            }

            // return(
            //     <div className="w-3/12 -mx-12">
            //         <img src={img} alt="img" className="shadow-2xl rounded-md overflow-hidden"  />
            //     </div>
            // )
        })

        return(
            <div className="w-full">
                <div className="w-full hidden md:flex flex-wrap justify-evenly -mt-44 p-14 ">
                    {images_arr_section}
                </div>

                {/* <div className="w-full flex md:hidden flex-wrap justify-evenly -mt-44 p-12 ">
                    {images_arr_section_under_md}
                </div> */}
            </div>
        )
    }
}

export default TwitterImagesGrid