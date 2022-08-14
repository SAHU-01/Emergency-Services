import React from 'react';
import { Button, Navbar } from '../components';

const Check16 = () => {
  return (
    <div class="m-5">
        <Navbar />
        <div class="m-20 ">
            <h2 class="text-2xl text-center">Have you restarted the Printer ?</h2>
            <div class="flex flex-row gap-60 m-28 mx-96">
                <Button name="Yes" path="/check17"/>
                <Button name="No" path="/check21"/>
            </div>
        </div>
    </div>
  )
}

export default Check16