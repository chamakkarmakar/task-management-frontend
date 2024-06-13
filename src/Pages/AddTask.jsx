import React from 'react'

const AddTask = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const category = e.target.category.value;
        const startDate = e.target.start.value;
        const endDate = e.target.end.value;
        const description = e.target.description.value;

        const data = { title, category, startDate, endDate, description };

        console.log(data);

        await fetch("http://localhost:5000/allTasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                e.target.reset();
            });



    };
    return (
        <div className='my-20 w-3/4 mx-auto'>
            <h1 className="text-5xl font-bold text-center">Create Task</h1>

            <div className="w-full mx-auto my-16">
                <form onSubmit={handleSubmit}>

                    <div className="mb-2">
                        <label className='text-md font-medium' htmlFor="title">Project Name</label>
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="title"
                            placeholder="Project Name"
                        />
                    </div>

                    <div className="mb-2">
                        <label className='text-md font-medium' htmlFor="category">Category</label>
                        <input
                            className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            type="text"
                            name="category"
                            placeholder="Category"
                        />
                    </div>

                    <div className='flex md:flex-row flex-col justify-between items-center mb-2'>
                        <div>
                            <label className='text-md font-medium' htmlFor="start">Task Start Date</label>
                            <input type="date" id="start" name="start"
                                className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
                            />
                        </div>
                        <div>
                            <label className='text-md font-medium' htmlFor="end">Task End Date</label>
                            <input type="date" id="end" name="end"
                                className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
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
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="priority">Task Priority</label>
                        <select name="priority" id="priority" 
                         className="w-full rounded-lg border border-indigo-600 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 md:w-full"
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
                            value="Add Task"
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddTask
