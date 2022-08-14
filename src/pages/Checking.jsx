import React from 'react';
import { Button, Navbar } from '../components';

const Check7 = () => {
  return (
    <div class="m-5">
        <Navbar />
        <div class="m-20 ">
            <h2 class="text-2xl text-center">Payment Can't be Processed on ?</h2>
            <div class="flex flex-row gap-60 m-28 mx-96">
                <Button name="Terminal" path="/check11"/>
                <Button name="SEP" path="/i1"/>
            </div>
        </div>
    </div>
  )
}

export default Check7