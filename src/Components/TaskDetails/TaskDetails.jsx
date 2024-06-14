import React from 'react'
import { useLoaderData } from 'react-router-dom'

const TaskDetails = () => {
    const task = useLoaderData();
  return (
    <div className='w-1/2 mx-auto shadow-xl space-y-3 p-5'>
      <h2 className="text-2xl"><span className='font-bold'>Project:</span> {task.title}</h2>
      <p> <span className='font-bold'>Description:</span>  {task.description}</p>
      <p><span className='font-bold'>Category:</span> {task.category}</p>
      <p><span className='font-bold'>Deadline:</span> {task.endDate}</p>
    </div>
  )
}

export default TaskDetails
