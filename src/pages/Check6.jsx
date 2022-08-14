import React from 'react';
import { Button, Navbar } from '../components';

const Check6 = () => {
  return (
    <div class="m-5">
        <Navbar />
        <div class="m-20 ">
            <h2 class="text-2xl text-center">Tablet has Internet Connection ?</h2>
            <div class="flex flex-row gap-60 m-28 mx-96">
                <Button name="Yes" path="/check7"/>
                <Button name="No" path="/check8"/>
            </div>
        </div>
    </div>
  )
}

export default Check6