import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const navigate = useNavigate();

  const handleSignIn=()=>{
    navigate("/login");
  }

  const HandleStart = async (e) => {
    e.preventDefault();

  

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        username,
        password,
        email,
        firstName,
        lastName
      });
      
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='p-5rem mt-20'>
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">SignUp</h1>
        <form action="#" className="w-full flex flex-col gap-4">

        <div className="flex items-start flex-col justify-start">
            <label htmlFor="username" className="text-sm text-gray-700 dark:text-gray-200 mr-2">First Name:</label>
            <input onChange={(e) => { setFirstName(e.target.value); }} type="text" id="username" name="username" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label htmlFor="username" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Last Name:</label>
            <input onChange={(e) => { setLastName(e.target.value); }} type="text" id="username" name="username" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label htmlFor="username" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Username:</label>
            <input onChange={(e) => { setUsername(e.target.value); }} type="text" id="username" name="username" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
            <input onChange={(e) => { setEmail(e.target.value); }} type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>

          <div className="flex items-start flex-col justify-start">
            <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
            <input onChange={(e) => { setPassword(e.target.value); }} type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>

          <button onClick={HandleStart} type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
          <a onClick={handleSignIn} href="#" className="text-blue-500 hover:text-blue-600">Login</a>
        </div>

      </div>

    </div>
  )
}

export default Register;
