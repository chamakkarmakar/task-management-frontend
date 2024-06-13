import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const TaskList = () => {
    return (
        <div className='mx-10'>
            <div className="flex justify-between items-center my-10">
                <h2 className="text-2xl font-semibold">Task Management</h2>
                <Link to="add-task" className='bg-emerald-950 px-4 py-2 text-white rounded-md font-semibold'>
                    <FaCirclePlus className='w-4 h-4 mr-3 text-white inline'/>Create task</Link>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                <div className='bg-white h-[400px]'>
                    <h3 className='text-center text-lg font-medium'>To-Do List</h3>
                </div>
                <div className='bg-white h-[400px]'>
                    <h3 className='text-center text-lg font-medium'>Ongoing List</h3>
                </div>
                <div className='bg-white h-[400px]'>
                    <h3 className='text-center text-lg font-medium'>Completed</h3>
                </div>
            </div>
        </div>
    )
}

export default TaskList
