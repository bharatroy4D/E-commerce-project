import React, { useState } from 'react';
import slide1 from '../../assets/slider-1.png'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="hero bg-base-200 min-h-screen flex items-center py-10 lg:py-20">
            <div className="hero-content flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20 w-full px-6 lg:px-20 mt-15 md:my-5">
                {/* Image Section */}
                <div className=" w-full hidden lg:inline-flex justify-center">
                    <img className="rounded-lg shadow-lg w-full max-w-full lg:max-w-full" src={slide1} alt="Sign Up Image" />
                </div>

                {/* Card with Form */}
                <div className="card bg-base-100 w-full max-w-sm  shadow-xl  rounded-lg ">
                    <div className="card-body">
                        <h2 className="text-3xl font-semibold text-center mb-4 text-blue-600">Sign Up</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Email Field with Icon */}
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-xl text-gray-500" />
                                <div className="w-full">
                                    <label className="block text-lg font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        className="input input-bordered w-full p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Password Field with Icon */}
                            <div className="flex items-center space-x-4">
                                <FaLock className="text-xl text-gray-500" />
                                <div className="w-full">
                                    <label className="block text-lg font-medium text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        className="input input-bordered w-full p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Forgot Password Link */}
                            <div className="text-right">
                                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-neutral w-full py-2 mt-6 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Sign Up
                                </button>
                                <h1 className='text-center text-lg font-semibold'>or</h1>
                                <div className='flex gap-4 items-center justify-center'>
                                <FcGoogle className='text-3xl' />
                                <SiFacebook className='text-2xl' />


                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
