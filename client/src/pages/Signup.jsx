import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
    console.log(formData, "Datattt");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return
      }
      navigate('/sign-in')
    } catch (error) {
      console.log(error, "Error");
      setLoading(false);
      setError(true);
    }

  };



  return (
    <div className='px-4 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder='UserName'
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input type="email" placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input type="password" placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-slate-700
        text-white
         p-3
         rounded-lg
         uppercase
         hover:opacity-95
         disabled:opacity-80
         '

        >
          {loading ? 'loading...' : ' Sign Up'}
        </button>
      </form>


      <div className='mt-4 ml-1'>
        <p>Have an account ? <Link to="/Sign-in"><span className='text-blue-500'>Sign in</span></Link></p>
      </div>
      <p className="text-red-400 mt-4 ">
        {error && 'Something Went Wrong!'}
      </p>
    </div>
  )
}
