import React from 'react';
import { Button, Navbar } from '../components';

const Check1 = () => {
  return (
    <div class="m-5">
        <Navbar />
        <div class="m-20 ">
            <h2 class="text-2xl text-center">Fiskalisation Error ?</h2>
            <div class="flex flex-row gap-60 m-28 mx-96">
                <Button name="Yes" path="/i3"/>
                <Button name="No" path="/infrasys"/>
            </div>
        </div>
    </div>
  )
}

export default Check1