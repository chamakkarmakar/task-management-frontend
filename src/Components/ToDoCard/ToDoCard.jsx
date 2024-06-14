import React from 'react'
import { useDrag } from 'react-dnd'
import { Link } from 'react-router-dom'
import { MdOutlineDelete, MdEditSquare } from "react-icons/md";

const ToDoCard = ({ title, id, handleDelete }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'task',
        item: { title, id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div ref={dragRef} className='flex justify-between items-center border-2 mx-2 my-4 border-red-700 p-2'>
            {/* {isDragging && '😱'} */}
            <Link to={`${id}`} className='hover:text-blue-600 font-medium'>{title}</Link>
            <div className='flex items-center'>
                <button onClick={() => handleDelete(id)}><MdOutlineDelete className='text-red-600 w-5 h-5 mr-2' /></button>
                <Link to={`edit/${id}`}><MdEditSquare className='text-emerald-700 w-5 h-5' /> </Link>
            </div>
        </div>
    )
}

export default ToDoCard
