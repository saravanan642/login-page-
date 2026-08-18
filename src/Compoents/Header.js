import React from 'react'
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const Header = () => {
    return (
        <section className="flex flex-col items-center mt-28">

            <div className='  bg-blue-50/90 p-8 rounded-xl '>

                <div className=' flex flex-col items-center'>
                    <div className="flex justify-center items-center border border-solid rounded-full w-16 h-16 hover:bg-blue-100">
                        <User size={35} />
                    </div>

                    <p className="text-black font-bold text-5xl font-serif">
                        Create an Account
                    </p>

                    <p className="font-normal text-2xl mt-8">
                        Enter Your details to get started with Core.
                    </p>

                </div>

                <form className='mt-6 space-y-6'>

                    <div className="flex flex-col text-xl mt-4">
                        <label className="font-bold">Full Name</label>

                        <div className="relative">
                            <User
                                size={16}
                                className="absolute left-2 top-1/2 -translate-y-1/2"
                            />

                            <input
                                type="text"
                                placeholder="Jane Doe"
                                className="border border-solid py-2 px-3  w-full mx-auto  rounded-md bg-[#faf9ff] pl-10"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col text-xl mt-4">
                        <label className="font-bold">Email Address</label>

                        <div className="relative">
                            <Mail
                                size={16}
                                className="absolute left-2 top-1/2 py-2 px-3 -translate-y-1/2"
                            />

                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="border border-solid py-2 px-3 w-full mx-auto rounded-md bg-[#faf9ff]  pl-10"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col text-xl mt-4">
                        <label className="font-bold">Password</label>

                        <div className="relative">
                            <Lock
                                size={16}
                                className="absolute left-2 top-1/2 -translate-y-1/2"
                            />

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="border border-solid   py-2 px-3 w-full mx-auto rounded-md bg-[#faf9ff] pl-10"
                            />

                        </div>
                    </div>

                    <div className="flex flex-col text-xl mt-4">
                        <label className="font-bold">Confirm Password</label>

                        <div className="relative">
                            <Lock
                                size={16}
                                className="absolute left-2 top-1/2 -translate-y-1/2"
                            />

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="border border-solid py-2 px-3 rounded-md bg-[#faf9ff] w-full mx-auto pl-10"
                            />

                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-xl">
                        <input type="checkbox" className="w-5 h-5" />
                        <label>I agree to the Terms & Conditions</label>
                    </div>

                    <button
                        type="submit"
                        className="border border-solid py-2 px-3 rounded-md bg-blue-600 text-white w-full mx-auto flex justify-center items-center gap-2"
                    >
                        Create Account
                        <ArrowRight size={18} />
                    </button>


                </form>

                <div className='flex gap-2 text-xl mt-4'>
                    <p>Already have an account ?</p>
                    <a href='/' className='text-blue-500'>Login</a>
                </div>
            </div>
        </section>
    )
}

export default Header