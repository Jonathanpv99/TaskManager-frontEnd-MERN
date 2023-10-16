import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const LoginPage = () => {

    const { register, handleSubmit, formState:{
        errors
    }} = useForm();

    const navigate = useNavigate();

    const { signin, errors: SigninErrors, isAutenticated} = useAuth();

    const onSubmit = handleSubmit( ( data ) => {
        signin( data );
    });

    useEffect( () => {
        if( isAutenticated ) navigate('/tasks');
    },[isAutenticated])

    return (
        <div className='flex h-[calc(100vh-150px)] items-center justify-center desk-bg'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {
                    SigninErrors.map( (error, i) => (
                        <div className='bg-red-500 p-2 text-white text-center my-2' key={ `RegisterError ${i}`}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-2xl font-bold'>Login</h1>
                
                <form onSubmit={ onSubmit }>
                    <input type="email" 
                        { ...register('email', { required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Email@email.com'
                    />
                    {
                        errors.email && (
                            <p className='text-red-500'>Email is required</p>
                        )
                    }
                    <input type="password" 
                        { ...register('password', { required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Password'
                    />
                    {
                        errors.password && (
                            <p className='text-red-500'>Password is required</p>
                        )
                    }
                    <button type='submit' className='bg-emerald-700 px-4 py-1 rounded-md mt-2'>
                        Login
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between mt-4'>
                    Don´t have an account? 
                    <Link to='/register' className='text-sky-400'> Sign Up</Link>
                </p>
            </div>
            
        </div>
    )
}

export default LoginPage;