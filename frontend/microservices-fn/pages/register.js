import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import "../app/globals.css";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    // Validar correo electrónico
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }

    // Validar contraseña
    if (password.trim() === '') {
      setPasswordError(true);
      return;
    }

    // Hacer solicitud POST al endpoint de register
    axios.post('http://localhost:8000/register', {
      email: email,
      password: password,
    })
      .then(response => {
        // Manejar respuesta exitosa del servidor
        window.location.replace('/login');
        console.log(response.data);
      })
      .catch(error => {
        // Manejar error del servidor
        console.error(error);
        if (error.response && error.response.status === 409) {
          setRegistrationError('User already registered');
        } else {
          setRegistrationError('An error occurred. Please try again later.');
        }
      });
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 px-8 py-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Create new account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-100">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              className={`block w-full mt-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring ${emailError ? 'border-red-500' : 'focus:ring-indigo-200 focus:ring-opacity-50'}`}
            />
            {emailError && <p className="text-red-500 mt-1">Invalid email</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-100">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              className={`block w-full mt-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring ${passwordError ? 'border-red-500' : 'focus:ring-indigo-200 focus:ring-opacity-50'}`}
            />
            {passwordError && <p className="text-red-500 mt-1">Password must not be empty</p>}
          </div>
          <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Create
          </button>
        </form>
        {registrationError && <p className="text-red-500 mt-1">{registrationError}</p>}
        <Link href="/login">
        <button className='button button_return'>Back to login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
