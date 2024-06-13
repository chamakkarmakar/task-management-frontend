import React, { useContext } from 'react'
import { RiMenu2Fill } from 'react-icons/ri'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { IoMdSearch } from 'react-icons/io';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open bg-cyan-500/20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start mt-5">
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
          <RiMenu2Fill className=' w-7 h-7 ' />
        </label>
        
        <div className=' w-full mx-auto '>
          {/* Profile  */}
        <div className='flex items-center justify-end'>
          <h3 className='text-black font-medium'>{user?.displayName}</h3>
          <img width={100} height={100} className=" h-[60px] w-[60px]  rounded-full border-4 border-white bg-gray-400 " src={user?.photoURL} alt={user?.name} />
        </div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side md:my-10 md:mx-5 md:rounded-xl">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className=' flex flex-col md:w-80 w-60 items-center bg-cyan-600 text-center md:pt-32 pt-20 h-full'>
          <li className='text-white mb-5 md:text-lg text-md '>
            <NavLink to="/dashboard" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-cyan-800 w-auto md:px-20 px-10 py-2" : ""
            }>Dashboard</NavLink>
          </li>

          <li className='text-white mb-5 md:text-lg text-md '>
            <NavLink to="task-list" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-cyan-800 w-auto md:px-20 px-10 py-2" : ""
            }>Task List</NavLink>
          </li>
          <li className='text-white mb-5 md:text-lg text-md '>
            <NavLink to="add-task" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-cyan-800 w-auto md:px-20 px-10 py-2" : ""
            }>Add Task</NavLink>
          </li>
          <li className='text-white mb-5 md:text-lg text-md '>
            <NavLink to="/" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-cyan-800 w-auto md:px-20 px-10 py-2" : ""
            }>Home</NavLink>
          </li>

        </ul>

      </div >
    </div >
  )
}

export default DashboardLayout
