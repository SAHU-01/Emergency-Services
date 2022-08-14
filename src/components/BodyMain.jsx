import React from 'react';
import Button from './Button';

const BodyMain = () => {
  return (
    <div class="my-40">
      <h2 class="text-3xl text-center">Select where the emergency Occured</h2>
      <div class="flex flex-row justify-between mx-56 my-20">
        <Button name="Infrasys(POS)" path="/infrasys"/>
        <Button name="Shiji SEP(PMS)" path="/shiji"/>
        <Button name="Kiosk" path="/kiosk"/>
      </div>
    </div>
  )
}

export default BodyMain
