import React from 'react'
import { Link } from 'react-router-dom'


const Banner = () => {
  
    return (
        <div className='container mx-auto my-20 flex md:flex-row flex-col justify-between items-center'>
            <div className='md:w-1/2 w-full my-5'>
                <h1 className="text-5xl font-bold text-emerald-950 mb-5">Task Management</h1>
                <p className='text-stone-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nulla saepe et. Ut, odit saepe aut cum laborum necessitatibus ducimus quae illo molestias eos et, corrupti unde vel ipsum est.</p>
                <button className="my-5 w-36 h-16 border-2 border-emerald-300 text-emerald-800 font-medium rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-emerald-300 group-hover:bg-emerald-500 group-hover:duration-500 -z-10"></span>
                <Link to="/dashboard">Let's Explore</Link>
                </button>
            </div>
            <div className='md:w-1/2 mx-auto w-full'>
                <img src="https://img.freepik.com/premium-vector/attendees-will-leave-this-workshop-with-personalized-action-plan-incorporating-sustainable_216520-74230.jpg?w=826" alt="hero section" className='w-full' />
            </div>
        </div>
    )
}

export default Banner
