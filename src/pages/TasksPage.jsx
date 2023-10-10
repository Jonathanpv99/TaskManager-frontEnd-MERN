import { useEffect, useState } from 'react';
import { useTasks } from '../context/TasksContext';
import TaskCard from '../components/TaskCard';

const TasksPage = () => {
    const { getTasks, tasks, isLoading } = useTasks();

    useEffect( () => {
        getTasks();
    }, []);

    if( tasks.length === 0 && !isLoading ) return ( <h1> no tasks </h1>);

    return (
        <div className='grid grid-cols-3 gap-2'>
            {tasks.map( (task) => (
                <TaskCard key={ task._id} task={ task } />
            ))}
        </div>
    )
}

export default TasksPage;