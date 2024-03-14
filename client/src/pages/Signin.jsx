import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';
import { loginAction } from '../Reusable/Action/AuthenticationAction';


function Signin(props) {

  const dd = import.meta.env.API_KEY;

  console.log(dd,"dd4");

  const { loginAction } = props;

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      loginAction(formData);

      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return
      }
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(true);
    }

  };

  return (
    <div className='px-4 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign In
      </h1>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}
      >
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
          {loading ? 'loading...' : ' Sign In'}
        </button>
        <OAuth />
      </form>


      <div className='mt-4 ml-1'>
        <p>Dont Have an account ? <Link to="/Sign-up"><span className='text-blue-500'>Sign up</span></Link></p>
      </div>

    </div>
  )
}


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (val) => {
      dispatch(loginAction(val));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
