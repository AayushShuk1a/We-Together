import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Error = () => {
    const navigate=useNavigate();
    

    const handleClick=()=>{
        navigate("/register")
    }
  return (
    <div className="p-5rem mt-20">
      <div className="max-w-lg mx-auto  dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight text-white font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">401</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">User Not Found.</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find the User. Please Register User. </p>
            <a onClick={handleClick} href="#" class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Signup</a>
        </div> 
      </div>
    </div>
  );
};

export default Error;
