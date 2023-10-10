import { createContext, useContext, useState  } from 'react';
import { createTasksRequest, getTasksRequest} from '../api/tasks'
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


    const createTask = async ( task ) => {
        try {
            const res = await createTasksRequest( task );
            console.log( res );
        } catch (error) {
            console.log( error.response.data);
            //setErrors( error.response.data);
        }
    }

   return (
    <TasksContext.Provider 
            value={{
                createTask,
                getTasks,
                tasks,
                isLoading,
            }}
        >
        { children }
    </TasksContext.Provider>
   )
}
