import axios from "axios"

const url = "http://localhost:8080/"

export const RegisterPerson = async (user) => {
    try {
      const person = await axios.post(`${url}api/auth/register`, user);
      console.log(person);
    } catch (err) {
      console.log(err);
    }
  };