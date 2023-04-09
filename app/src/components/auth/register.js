import { useState } from "react";
import axios from 'axios'

// register form
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await axios.post('/api/auth/register',{
      name,
      email,
      password
    })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className="w-full h-full">
      <form
        className="flex flex-col items-center justify-center w-full h-full gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-1/3 gap-2">
          <button className="bg-blue-500 p-2 rounded-lg text-gray-200 flex justify-center items-center w-full">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

