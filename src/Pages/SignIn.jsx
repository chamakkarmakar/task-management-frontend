import React from 'react'
import { Link } from 'react-router-dom'
import SignWithGoogle from '../Components/Google/SignWithGoogle';

const SignIn = () => {

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }

    return (
        <div className="flex h-screen items-center justify-center bg-cyan-500/20 p-6 md:p-0">
            <div className="flex items-center justify-center h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                    <h2 className="pb-8 text-center text-3xl font-bold text-cyan-500">Sign In Here</h2>
                    <form onSubmit={handleSignIn} className="flex  w-full flex-col items-center justify-center gap-4">
                        <input className="w-[80%] rounded-lg border border-cyan-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 md:w-[60%]" type="email" placeholder="Email" name="email" />
                        <input className="w-[80%] rounded-lg border border-cyan-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 md:w-[60%]" type="password" placeholder="Password" name="password" />
                        <p className="text-[14px] text-gray-400">Do not have an account ? <Link to="/registration" className="text-cyan-500 ">Create one</Link></p>
                        <input className="w-[80%] rounded-lg bg-cyan-500 cursor-pointer hover:bg-cyan-700 px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
                    </form>
                    {/* divider  */}
                    <div className="my-8 flex items-center px-8">
                        <hr className="flex-1" />
                        <div className="mx-4 text-gray-400">OR</div>
                        <hr className="flex-1" />
                    </div>
                    {/* sign with google */}
                    <SignWithGoogle />
                </div>
            </div>
        </div>
    )
}

export default SignIn
