import React from 'react'

const TaskList = () => {
    return (
        <div>
            <div className="flex justify-between items-center my-10">
                <h2 className="text-xl font-semibold">Task Management</h2>
                <button>Create task</button>
            </div>
            <div className="grid grid-cols-3 gap-6">
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
