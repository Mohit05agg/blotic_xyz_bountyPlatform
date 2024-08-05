import React, { Component } from "react";
import img_grid_1 from "../../../assets/i-1.jpeg"
import img_grid_2 from "../../../assets/i-2.jpeg"
import img_grid_3 from "../../../assets/i-3.jpeg"
import img_grid_4 from "../../../assets/i-4.jpeg"
import img_grid_5 from "../../../assets/i-5.jpeg"
import img_grid_6 from "../../../assets/i-6.jpg"
import img_grid_7 from "../../../assets/img_grid_7.jpg"
import img_grid_8 from "../../../assets/img_grid_8.jpg"
import "atropos/atropos.css";
import Atropos from 'atropos/react';

class RecentEventsLeftComponent extends Component{
    render(){

        var img_arr = 
            [
            img_grid_1,
            img_grid_2,
            img_grid_3,
            img_grid_4,
            img_grid_5,
            img_grid_6,
            ]


        var image_grid_section = img_arr.map((img, index)=>{
            if(index % 2 === 0){
                return (
                    <div key={index} className="w-1/3 border-4 border-transparent">
                        <Atropos className="my-atropos w-full h-full object-cover"
                        activeOffset={40}
                        shadowScale={1.05}
                        onEnter={() => console.log('Enter')}
                        onLeave={() => console.log('Leave')}
                        onRotate={(x, y) => console.log('Rotate', x, y)}
                        >
                        <img src={img} alt={img} className="w-full h-full object-cover" />
                        </Atropos>
                    </div>
                )
            }else if(index % 2 === 1){
                return (
                    <div key={index} className="w-1/3 border-4 border-transparent">
                        <Atropos className="my-atropos w-full h-full object-cover"
                        activeOffset={40}
                        shadowScale={1.05}
                        onEnter={() => console.log('Enter')}
                        onLeave={() => console.log('Leave')}
                        onRotate={(x, y) => console.log('Rotate', x, y)}
                        >
                        <img src={img} alt={img} className="w-full h-full object-cover" />
                        </Atropos>
                    </div>
                )
            }
            
        })

        return(
            <div className="md:w-3/5 flex max-w-max flex-wrap">
                {image_grid_section}
            </div>
        )
    }
}

export default RecentEventsLeftComponent

// export default function App () {
//     return (
      
  
        
//         <Atropos className="my-atropos"
//           activeOffset={40}
//           shadowScale={1.05}
//           onEnter={() => console.log('Enter')}
//           onLeave={() => console.log('Leave')}
//           onRotate={(x, y) => console.log('Rotate', x, y)}
//         >
//           <img src={img_grid_1} data-atropos-offset="-5" />
//         </Atropos>
        
//     )
//   }