import React from 'react';

export const LoginScreen = () => {
  const handleLogin = ()=>{
    console.log('Login');
}
  return (
    <div className='container mt-5'>
        <h1>LoginScreen</h1>
        <hr/>
        <button
          className='btn btn-primary'
          onClick={handleLogin}
        >
          Login
        </button>   
    </div>
  )
}
