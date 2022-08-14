import React from 'react';
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div>
        <Link to={props.path}>
        <div class="border border-2 border-yellow-400 p-3 w-40 text-blue-600 text-center">
        {props.name}
        </div>
        </Link>
    </div>
    
  )
}

export default Button
