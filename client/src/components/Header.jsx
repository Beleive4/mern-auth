import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className='bg-slate-200'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to="/">
                    <h1 className='font-bold'>My App</h1>
                </Link>
                <ul className='flex gap-4'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/About">
                        <li>About</li>
                    </Link>


                    <li
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            localStorage.clear();
                            navigate("/")
                            window.location.reload();
                        }}
                    >Log out</li>



                </ul>
            </div>
        </div>
    )
}
