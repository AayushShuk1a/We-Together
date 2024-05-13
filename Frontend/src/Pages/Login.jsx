import React, {  useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '../Components/AuthContext/APICalls';
import { AuthContext } from '../Components/AuthContext/AuthContext';
import Error from './Error';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setshowError] = useState(false);
  

 


  const navigate = useNavigate();


  const handleSignUp=()=>{
    navigate("/register");
  }

  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };

      await login(user, dispatch);

      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        navigate("/dashboard");
      } else {
        setshowError(true);
      }
  };

  return (
    <div className='p-5rem mt-20'>
      {!showError&&<div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Login</h1>
        <form action="#" className="w-full flex flex-col gap-4">

         

          <div className="flex items-start flex-col justify-start">
            <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
            <input onChange={(e) => { setEmail(e.target.value); }} type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
            <input onChange={(e) => { setPassword(e.target.value); }} type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>

          <button  onClick={handleLogin} type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Login</button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">Create Account </span>
          <a onClick={handleSignUp} href="#" className="text-blue-500 hover:text-blue-600">SignUp</a>
        </div>

      </div>}

      {showError&&<Error/>}

    </div>
  )
}

export default Login;
