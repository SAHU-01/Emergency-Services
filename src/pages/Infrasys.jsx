import React,{useState} from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import DropItem from '../components/DropItem';
import Solution from '../pages/Solution';
import { Navbar } from '../components';
import { Link } from 'react-router-dom';

const Infrasys = () => {
    const [isActive, setisActive] = useState(false);
  return (
    <div class="m-5">
        <div>
        <Navbar />
        </div>
        <h2 class="text-center text-2xl mt-20 mb-5">Choose the Problem</h2>
        <div class="relative mx-80 my-10">{/*dropdown */}
        <div class="flex flex-row gap-40 border border-yellow-500 px-5 py-4 border-2 text-blue-600 rounded-lg mx-44" 
        onClick={e => setisActive(!isActive)}>{/*dropdown btn*/}
            <h2>Choose option from the following</h2>
            <AiFillCaretDown class="pt-1 w-5 h-5"/>
        </div>
            {isActive && (
                <div class="absolute mx-44 p-4 w-7/12 my-5 shadow-2xl">{/*dropdown content */}
                    <Link to="/i1"><DropItem name="Can't pay with Adyen Terminal"/></Link>{/*dropdown item*/}
                    <Link to="/i2"><DropItem name="Daily Closure"/></Link>
                    <Link to="/check1"><DropItem name="Guest Check Can't be payed (TSE)"/></Link>
                    <Link to="/check2"><DropItem name="Bon-Printer Not Printing"/></Link>
                    <Link to="/check6"><DropItem name="Tablet not reacting"/></Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default Infrasys
