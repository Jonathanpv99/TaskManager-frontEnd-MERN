import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext.jsx';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

const RegisterPage = () => {
    const { register, handleSubmit, formState: {
        errors
    }} = useForm();
    const { singup, user, isAutenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect( () => {
        if(isAutenticated) navigate('/task');
    }, [isAutenticated]);

    const onSubmit = handleSubmit( async (valores) => {
        try {
            console.log( user );
             singup( valores );
        } catch (error) {
            alert( error.response.data.error[0] );
        }
        //console.log(valores);        
        
        
    });
    
    return (
        <div className='flex h-[calc(100vh-150px)] items-center justify-center desk-bg'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {
                    RegisterErrors.map( (error, i) => (
                        <div className='bg-red-500 m-2 p-2 text-white text-center' key={ `RegisterError ${i}`}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-2xl font-bold'>Register</h1>
                <form onSubmit={ onSubmit }>
                    <input type="text" 
                        { ...register('username', { required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Username'
                    />
                    {
                        errors.username && (
                            <p className='text-red-500'>Username is required</p>
                        )
                    }
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
                    <button type='submit'  className='bg-emerald-700 px-4 py-1 rounded-md mt-2' >
                        Register
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between mt-4'>
                        Already have an account? 
                        <Link to='/login' className='text-sky-400'> Login Up</Link>
                    </p>
            </div>
        </div>
       
    )
}

export default RegisterPage;