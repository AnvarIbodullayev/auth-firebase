import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { GoogleButton } from 'react-google-button';
import { BsGithub } from 'react-icons/bs';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { signIn, googleSignIn, gihubSignIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await signIn(email, password)
            navigate('/account')
        } catch(e) {
            setError(e.message)
            console.log(e.message);
        }
    }

    const handleGoogleSign = async (e) => {
        try {
            await googleSignIn()
            navigate('/account')
        } catch (e) {
            console.log(e);
        }
    }

    const handleGitubSign = async (e) => {
        try {
            await gihubSignIn()
            navigate('/account')
        } catch (e) {
            setError(e)
            console.log(e);
        }
    }

    return (
        <div className='max-w-[700px] mx-auto my-16 p-4'>
            <div>
                <h1 className='text-2xl font-bold py-2'>
                    Sign in to your account
                </h1>
                <p className='py-2'>
                    Don't have an account yet? {
                        <Link to='/signup' className='underline'>Sign Up</Link>
                    }
                </p>
            </div>
            {/* forms */}
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Email Address</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
                </div>
                <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                    Sign In
                </button>
                <GoogleButton onClick={handleGoogleSign} className='google-button' />
                <button onClick={handleGitubSign} className='md:flex justify-between border border-slate-500 bg-slate-600 hover:bg-slate-500 w-full p-4 my-2 text-white'>
                    <BsGithub className='github-icon' />
                    <code>Sign In with Gihub</code>
                </button>
            </form>
        </div>
    )
}