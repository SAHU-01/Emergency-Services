import React from 'react';
import Shijipng from "./images/shiji.png";
import { BsTelephone } from "react-icons/bs";

const I2 = () => {
  return (
    <div class="text-center m-10 mx-96">

        <img src= {<Shijipng />} alt="logo"/>
        
        <div class="mt-10 mx-60">
            <div class="flex flex-row gap-5">
                <div>
                  <BsTelephone class="w-5 h-5 mt-2"/>
                </div>
                <div class="mt-1 text-xl">(+49) 8941207181</div>
            </div>
        </div>
        <div class="text-4xl text-blue-600">posssupport-eu@shijigroup.com</div>
    </div>
  )
}

export default I2