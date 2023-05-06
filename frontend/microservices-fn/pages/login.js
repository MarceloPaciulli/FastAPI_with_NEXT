import { useState } from "react";
import axios from "axios";
import Link from 'next/link';
import "../app/globals.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
        const response = await axios.post("http://localhost:8000/login", { email, password });
        const token = response.data.token;
        localStorage.setItem("token", token);
        //console.log(token);
        window.location.replace('/chats'); 
    } catch (error) {
        console.error(error);
        setError("Invalid email or password");
    }
};

  
  

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-800 rounded-md p-8">
        <h1 className="text-white font-bold text-2xl mb-8">Login</h1>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="flex justify-between">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link href="/register">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
