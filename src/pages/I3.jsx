import React from 'react';
import Aobis from "./images/aobis.png";
import { BsTelephone } from "react-icons/bs";

const I3 = () => {
  return (
    <div class="text-center m-10 mx-40">

        <img src= {<Aobis  />} alt="logo"/>
        
        <div class="mt-10 ml-80">
            <div class="grid grid-cols-3">
                <div>
                    <div>Monday - Friday</div>
                    <div>08:30 - 17:30</div>
                </div>
                <div class="flex flex-row gap-5">
                    <div>
                        <BsTelephone class="w-5 h-5 mt-2"/>
                    </div>
                    <div class="mt-1 text-xl">(+49) (0) 8022508000</div>
                </div>
            </div>
            <div class="grid grid-cols-3">
                <div>
                    <div>Weekends/Holidays </div>
                    <div>17:30 - 23:00</div>
                </div>
                <div class="flex flex-row gap-5">
                    <div>
                        <BsTelephone class="w-5 h-5 mt-2"/>
                    </div>
                    <div class="mt-1 text-xl">(+49) (0) 80225094629</div>
                </div>
            </div>
        </div>
        
    </div> 
  )
}

export default I3