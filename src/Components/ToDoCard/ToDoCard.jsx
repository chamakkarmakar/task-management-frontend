import React from 'react'
import { useDrag } from 'react-dnd'
import { Link } from 'react-router-dom'

const ToDoCard = ({ title,id }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'task',
        item: { title,id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div ref={dragRef} className='flex border-2 mx-2 my-4 border-red-700 p-2'>
            {/* {isDragging && '😱'} */}
           {title}
            {/* <button onClick={() => handleDelete(task._id)}>Delete</button>
            <Link to={`edit/${task._id}`} >Edit</Link> */}
        </div>
    )
}

export default ToDoCard
