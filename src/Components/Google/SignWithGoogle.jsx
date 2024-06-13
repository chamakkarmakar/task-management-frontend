import React, { useContext } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignWithGoogle = () => {
    const {signWithGoogle} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signWithGoogle();
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} type="button" className="py-2 px-5 mb-4 mx-auto font-semibold hover:bg-cyan-500  hover:text-white block shadow-lg border rounded-md border-black hover:border-cyan-600">
                <FcGoogle className='inline w-7 h-7 mr-5' />Continue with Google
            </button>
        </div>
    )
}

export default SignWithGoogle
