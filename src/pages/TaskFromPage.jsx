import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const TaskFormPage = () => {

    const { register, handleSubmit, setValue, formState:{
        errors
    }} = useForm();
    const { createTask, getTask, updateTask } = useTasks();

    const navigate = useNavigate();
    const params = useParams();

    useEffect( () => {
        if( params.id ){
           loadTask( params.id );
        }
    }, []);

    const loadTask = async ( id ) => {
        const res = await getTask( id );
        setValue('title', res.title);
        setValue('description', res.description);
    }

    const onSubmit = handleSubmit( ( data ) => {
        if( params.id ){
            updateTask(params.id, data );        
        }else{
            createTask( data );
        }

         navigate('/tasks');
        
    })

    return (
        <div className='bg-zinc-800 max-w-md w-full- p-10 rounded-md my-2'>

            <form onSubmit={ onSubmit }>
                <input type="text" placeholder='Title'
                    {...register('title', { required: true} )}
                    autoFocus
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                />
                {
                        errors.title && (
                            <p className='text-red-500'>Title is required</p>
                        )
                }
                
                <textarea  rows="3" placeholder='description'
                    {...register('description', { required: true} )}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                ></textarea>
                {
                        errors.description && (
                            <p className='text-red-500'>Description is required</p>
                        )
                }
                <button>
                    Save
                </button>
            </form>
        </div>
    )
}

export default TaskFormPage;