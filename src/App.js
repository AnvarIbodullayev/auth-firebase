import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Account from './components/Account/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { BsToggle2Off } from 'react-icons/bs';
import useLocalStorage from 'use-local-storage';
import './App.css';

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className='app' data-theme={theme}>
      <div className='navbar mt-4'>
        <h1 className='text-center text-3xl font-bold'>
        Firebase Auth & Context
      </h1>
      <BsToggle2Off onClick={switchTheme} className='darkmode-icon' />
      </div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;