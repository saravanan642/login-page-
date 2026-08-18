import React from 'react'
import { User, Mail, Lock, EyeOff,  ArrowRight  } from 'lucide-react';

const Header = () => {
    return (
        <section>

            <div className="flex justify-center items-center border border-solid rounded-full w-16 h-16 hover:bg-blue-100">
                <User size={35} />
            </div>

            <p className="text-black font-bold text-5xl font-serif">
                Create an Account
            </p>

            <p className="font-normal text-2xl mt-8">
                Enter Your details to get started with Core.
            </p>

            <form>

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
                            className="border border-solid w-64 h-8 px-8 rounded-md bg-[#faf9ff]"
                        />
                    </div>
                </div>

                <div className="flex flex-col text-xl mt-4">
                    <label className="font-bold">Email Address</label>

                    <div className="relative">
                        <Mail
                            size={16}
                            className="absolute left-2 top-1/2 -translate-y-1/2"
                        />

                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="border border-solid w-64 h-8 px-8 rounded-md bg-[#faf9ff]"
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
                            className="border border-solid w-64 h-8 px-8 rounded-md bg-[#faf9ff]"
                        />

                        <EyeOff
                            size={18}
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                        />
                    </div>

                    <p className="text-xs mt-1">
                        Must be at least 8 characters.
                    </p>
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
                            className="border border-solid w-64 h-8 px-8 rounded-md bg-[#faf9ff]"
                        />

                        <EyeOff
                            size={18}
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>

            </form>

            <div className="flex items-center gap-2 text-xl">
                <input type="checkbox" className="w-5 h-5" />
                <label>I agree to the Terms & Conditions</label>
            </div>

            <button className='  flex  justify-center  border border-solid  font-bold p-2 w-[18%]' >
                Create Account   <ArrowRight />
            </button>

           <p className=' text-xl'>Already  have an account ?</p>
            
        </section>
    )
}

export default Header