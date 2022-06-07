import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import  anonymousUserImage from './Anonymous_emblem.jpg';

export default function Account() {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await logout();
            navigate('/');
            console.log('You are logut');
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className='max-w-[600px] mx-auto my-16 p-4'>
            <h1 className='text-2xl font-bold py-4'>Account</h1>
            <img className="w-24 h-24 rounded-full" src={
                user.photoURL === null ? anonymousUserImage : user && user.photoURL
            } alt="" width="384" height="512"></img>
            
            <p>{ user.displayName === null ? 'Name: Anonymous user' : `Name: ${user && user.displayName}` }</p>
            
            <p>User Email: {user && user.email}</p>
            <button onClick={handleLogout} className='border px-6 py-2 my-4'>Logout</button>
        </div>
    )
}