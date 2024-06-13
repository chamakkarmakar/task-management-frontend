import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SignWithGoogle from '../Components/Google/SignWithGoogle';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';

const SignIn = () => {
    const { signIn ,user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";
    
    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        event.target.reset();
    }
    useEffect(() => {
        if (user) {
          navigate(from, { replace: true });
        }
      }, [user, from, navigate]);

    return (
        <div className="flex h-screen items-center justify-center bg-cyan-500/20 p-4 md:p-0">
            <div className="flex items-center justify-center h-auto w-full overflow-hidden rounded-xl shadow-md md:h-[70%] md:w-[50%]">
                <div className="flex w-full  flex-col justify-center bg-white py-10">
                    <h2 className="pb-8 text-center text-3xl font-bold text-cyan-500">Sign In Here</h2>
                    <form onSubmit={handleSignIn} className="flex  w-full flex-col items-center justify-center gap-4">
                        <input className="w-[80%] rounded-lg border border-cyan-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 md:w-[60%]" type="email" placeholder="Email" name="email" />
                        <input className="w-[80%] rounded-lg border border-cyan-500 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 md:w-[60%]" type="password" placeholder="Password" name="password" />
                        <p className="text-[14px] text-gray-400">Do not have an account ? <Link to="/register" className="text-cyan-500 ">Create one</Link></p>
                        <input className="w-[80%] rounded-lg bg-cyan-500 cursor-pointer hover:bg-cyan-700 px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
                    </form>
                    {/* divider  */}
                    <div className="my-4 flex items-center px-8">
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
