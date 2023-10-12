import { createContext, useContext, useState  } from 'react';
import { createTasksRequest, getTasksRequest, deleteTasksRequest, getTaskRequest, updateTasksRequest } from '../api/tasks'
import { useEffect } from 'react';

export const TasksContext = createContext();

export const useTasks = () => {
    const context = useContext( TasksContext );

    if( !context ){
        throw new Error('UseTasks must be used whithin a TaskProvider')
    }
    return context;
};

export const TaskProvider = ( { children }) => {
    const [ isLoading, setIsLoading ] = useState( true );
    const [ tasks, setTasks ] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            if( !res ){
                setTasks([]);
                setIsLoading( false );
                return
            }

            setTasks( res.data );
            setIsLoading ( false );
        } catch (error) {
            console.log( error );
            setTasks([]);
            setIsLoading( false );
        }
    }

    const getTask = async ( id ) => {
        try {
            const res = await getTaskRequest( id );
            return res.data;

        } catch (error) {
            console.log( error );
        }
    }


    const createTask = async ( task ) => {
        try {
            const res = await createTasksRequest( task );
            console.log( res );
        } catch (error) {
            console.log( error.response.data )
        }
    }

    const deletTask = async ( id ) => {
        try {
            const res = await deleteTasksRequest( id );
            console.log( res)
           if( res.status === 204) {
                setTasks(tasks.filter( task => task._id !== id))

            }

        } catch (error) {
            console.log( error);
        }
    }

    const updateTask = async ( id, task ) => {
        try {

           await updateTasksRequest(id, task );


        } catch (error) {
            console.log( error.response.data )
        }
    }

   return (
    <TasksContext.Provider 
            value={{
                createTask,
                getTasks,
                deletTask,
                getTask,
                updateTask,
                tasks,
                isLoading,
            }}
        >
        { children }
    </TasksContext.Provider>
   )


}
