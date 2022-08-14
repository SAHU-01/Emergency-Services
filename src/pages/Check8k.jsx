import React from 'react';
import { Button, Navbar } from '../components';

const Check8k = () => {
  return (
    <div class="m-5">
        <Navbar />
        <div class="m-20 ">
            <h2 class="text-2xl text-center">Have you restarted the Tablet ?</h2>
            <div class="flex flex-row gap-60 m-28 mx-96">
                <Button name="Yes" path="/check15"/>
                <Button name="No" path="/check9"/>
            </div>
        </div>
    </div>
  )
}

export default Check8k