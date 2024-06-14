import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const EditTask = () => {
    const task = useLoaderData()
    console.log()

    const [title, setTitle] = useState(task.title);
    const [category, setCategory] = useState(task.category);
    const [taskStart, setTaskStart] = useState(task.taskStart);
    const [taskEnd, setTaskEnd] = useState(task.taskEnd);
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState(task.priority);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const category = e.target.category.value;
        const startDate = e.target.start.value;
        const endDate = e.target.end.value;
        const description = e.target.description.value;

        const data = { title, category, startDate, endDate, description };

        await fetch(`https://task-management-backend-zeta.vercel.app/allTasks/${task._id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTitle('')
                setCategory('')
                setTaskStart('')
                setTaskEnd('')
                setDescription('')
                setPriority('')
            });
    }

    return (
        <div className='my-20 w-3/4 mx-auto'>
            <h1 className="text-5xl font-bold text-center">Edit Task</h1>

            <div className="w-full mx-auto my-16">
                <form onSubmit={handleSubmit}>

                    <div className="mb-2">
                        <label className='text-md font-medium' htmlFor="title">Project Name</label>
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="title"
                            placeholder="Project Name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label className='text-md font-medium' htmlFor="category">Category</label>
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <div className='flex md:flex-row flex-col justify-between items-center mb-2'>
                        <div>
                            <label className='text-md font-medium' htmlFor="start">Task Start Date</label>
                            <input type="date" id="start" name="start"
                                className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                                value={taskStart}
                                onChange={(e) => setTaskStart(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='text-md font-medium' htmlFor="end">Task End Date</label>
                            <input type="date" id="end" name="end"
                                className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                                value={taskEnd}
                                onChange={(e) => setTaskEnd(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mb-2">
                        <label className='text-md font-medium' htmlFor="description">Task Description</label>
                        <textarea style={{ resize: "none" }}
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="priority">Task Priority</label>
                        <select name="priority" id="priority"
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="highest">Highest</option>
                            <option value="moderate">Moderate</option>
                            <option value="low">Low</option>
                            <option value="lowest">Lowest</option>
                        </select>
                    </div>

                    <div className="mb-2 flex justify-center items-center">
                        <input
                            className="btn mt-4 w-full bg-indigo-600 hover:bg-indigo-800 cursor-pointer rounded-xl font-semibold text-white p-4"
                            type="submit"
                            value="Update Task"
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default EditTask
