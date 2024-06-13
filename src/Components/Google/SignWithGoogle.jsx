import React from 'react'
import { FcGoogle } from "react-icons/fc";

const SignWithGoogle = () => {
  return (
    <div>
                          <button type="button" className="py-2 px-5 mb-4 mt-8 mx-auto font-semibold hover:bg-cyan-500  hover:text-white block shadow-lg border rounded-md border-black hover:border-cyan-600">
                          <FcGoogle className='inline w-7 h-7 mr-5'/>Continue with Google
                            </button>
    </div>
  )
}

export default SignWithGoogle
