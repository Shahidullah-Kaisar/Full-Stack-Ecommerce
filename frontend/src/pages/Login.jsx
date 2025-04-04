import React, { useState } from 'react';

const Login = () => {

    const [currentState, setCurrentState] = useState('Sign Up')

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center gap-4 w-[96%] sm:max-w-96 m-auto mt-14 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none h-[2px] w-9 bg-gray-800'/>
            </div>
            { currentState === 'Login' ? " " : <input className='w-full px-3 py-3 border border-gray-800' type="text" placeholder='Name' required/> }
            <input className='w-full px-3 py-3 border border-gray-800' type="email" placeholder='Email' required/>
            <input className='w-full px-3 py-3 border border-gray-800' type="password" placeholder='Password' required/>
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer hover:underline'>Forgot your password?</p>
                {
                    currentState === "Login"
                    ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer hover:underline'>Create a account</p>
                    : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer hover:underline'>Login</p>
                }
            </div>
            <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up' }</button>
        </form>
    );
};

export default Login;