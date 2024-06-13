import React, { useContext } from 'react'
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { MdOutlineDoubleArrow } from "react-icons/md";
const Dashboard = () => {

  return (
    <div className='my-10 md:mx-0 mx-10 grid md:grid-cols-3 grid-cols-1 gap-6'>
      {/* Total task  */}
      <div className='flex justify-between items-center bg-white p-4 rounded-lg'>
        <BiTask className='w-10 h-10 text-amber-600' />
        <div>
          <h3>Total Task</h3>
          <p className="text-md">122</p>
        </div>
        <MdOutlineDoubleArrow className='w-12 h-12 ' />
      </div>
      {/* complete task  */}
      <div className='flex justify-between items-center bg-white p-4 rounded-lg'>
        <FaTasks className='w-10 h-10 text-blue-500' />
        <div>
          <h3>Complete Task</h3>
          <p className="text-md">122</p>
        </div>
        <MdOutlineDoubleArrow className='w-12 h-12' />
      </div>
      {/* progress task  */}
      <div className='flex justify-between items-center bg-white p-4 rounded-lg'>
        <GrTasks className='w-10 h-10 text-indigo-500' />
        <div>
          <h3>Progress Task</h3>
          <p className="text-md">122</p>
        </div>
        <MdOutlineDoubleArrow className='w-12 h-12' />
      </div>
    </div>
  )
}

export default Dashboard
