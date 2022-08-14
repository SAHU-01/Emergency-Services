import React from 'react';
import { Button, Navbar } from '../components';

const Check20 = () => {
  return (
    <div class="m-5">
        <Navbar />
        <div class="m-20 ">
            <h2 class="text-2xl text-center text-red-600 font-bold">Please fill up the card in the Printer !</h2>
            <h2 class="text-lg text-center">Problem Solved?</h2>
            <div class="flex flex-row gap-60 m-28 mx-96">
                <Button name="Yes" path="/home"/>
                <Button name="No" path="/check18"/>
            </div>
        </div>
    </div>
  )
}

export default Check20