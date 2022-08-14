import React from 'react';
import Aobis from "./images/aobis.png";
import { BsTelephone } from "react-icons/bs";
import Shijipng from "./images/shiji.png"

const I3 = () => {
  return (
    <div class="text-center m-10 mx-40">
        <div>
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
        <div class="border border-2 bg-black my-10"></div>
        <div class="mx-20">
            <img src= {<Shijipng />} alt="logo"/>
            
            <div class="mt-10 mx-96">
                <div class="flex flex-row gap-5">
                    <div>
                    <img
                        alt="Germany"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg" class="w-10 h-10"/>
                    </div>
                    <div class="mt-1 text-xl">(+49) 8941207181</div>
                </div>
                <div class="flex flex-row gap-5">
                    <div>
                    <img
                        alt="United Kingdom"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" class="w-10 h-10"/>
                    </div>
                    <div class="mt-1 text-xl">(+44) 2038268896</div>
                </div>
            </div>
            <div class="text-4xl text-blue-600">posssupport-eu@shijigroup.com</div>
        </div>
    </div> 
  )
}

export default I3