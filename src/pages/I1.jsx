import React from 'react';
import Shijipng from "./images/shiji.png"

const I1 = () => {
  return (
    <div class="text-center m-10 mx-96">

        <img src= {<Shijipng />} alt="logo"/>
        
        <div class="mt-10 mx-60">
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
  )
}

export default I1