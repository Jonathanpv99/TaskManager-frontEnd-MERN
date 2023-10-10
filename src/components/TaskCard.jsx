
const TaskCard = ( {task} ) => {

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold"> { task.title } </h1>
                <div className="flex gap-x-2 items-center">
                    <button className='bg-sky-700 px-4 py-1 rounded-md '>edit</button>
                    <button className='bg-red-700 px-4 py-1 rounded-md'>delite</button>
                </div>
            </header>
            <p className="text-slate-300 my-6"> { task.description } </p>
            <p> {new Date( task.date).toLocaleDateString()} </p>
        </div>
    )
}

export default TaskCard;