import React, { useEffect, useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ToDoCard from '../Components/ToDoCard/ToDoCard';
import { useDrop } from 'react-dnd';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const [{ isOngoingOver }, dropOngoingRef] = useDrop({
        accept: 'task',
        drop: (item) => setOngoingTasks((ongoingTasks) => 
                            !ongoingTasks.includes(item) ? [...ongoingTasks, item] : ongoingTasks),
        collect: (monitor) => ({
            isOngoingOver: monitor.isOver()
        })
    })

    const [{ isCompletedOver }, dropCompletedRef] = useDrop({
        accept: 'task',
        drop: (item) => setCompletedTasks((completedTasks) => 
                            !completedTasks.includes(item) ? [...completedTasks, item] : completedTasks),
        collect: (monitor) => ({
            isCompletedOver: monitor.isOver()
        })
    })

    useEffect(() => {
        fetch("https://task-management-backend-zeta.vercel.app/allTasks")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTasks(data)
            });
    }, [])

    const handleDelete = async (id) => {
        await fetch(`https://task-management-backend-zeta.vercel.app/allTasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTasks(tasks.filter((task) => task._id !== id));
            });
    }

    return (
        <div className='mx-10'>
            <div className="flex justify-between items-center my-10">
                <h2 className="text-2xl font-semibold">Task Management </h2>
                <Link to="/dashboard/add-task" className='bg-emerald-950 px-4 py-2 text-white rounded-md font-semibold'>
                    <FaCirclePlus className='w-4 h-4 mr-3 text-white inline' />Create task</Link>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                <div className='bg-white h-[400px]'>
                    <h3 className='text-center text-lg font-medium'>To-Do List</h3>
                    {
                        tasks.map((task, index) =>
                            <ToDoCard key={index} draggable title={task.title} id={task._id} />
                        )
                    }
                </div>
                <div className='bg-white h-[400px]' ref={dropOngoingRef}>
                    <h3 className='text-center text-lg font-medium'>Ongoing List</h3>
                    {ongoingTasks.map(task => <ToDoCard title={task.title} id={task._id} handleDelete={handleDelete} />)}
                    {isOngoingOver && <div>Drop Here!</div>}
                </div>
                <div className='bg-white h-[400px]' ref={dropCompletedRef}>
                    <h3 className='text-center text-lg font-medium'>Completed</h3>
                    {completedTasks.map(task => <ToDoCard title={task.title} id={task._id}  />)}
                    {isCompletedOver && <div>Drop Here!</div>}
                </div>
            </div>
        </div>
    )
}

export default TaskList
