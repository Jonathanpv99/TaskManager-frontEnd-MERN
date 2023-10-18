import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import { FcTodoList, FcButtingIn} from 'react-icons/fc';

const Navbar = () => {
    const { isAutenticated, user, logout } = useAuth();

    return (
        <nav className="bg-zinc-700 text-white my-3 flex justify-around py-5 px-10 rounded-lg">
            <div className='flex justify-between gap-x-8 items-center'>
            {isAutenticated ? (
                <div className='flex flex-col items-center'>
                    <Link to='/profile'> 
                        <h1><FcButtingIn size={40}/> Profile </h1>
                    </Link>
                </div>
            ): (
                <Link to='/'> 
                    <FcTodoList size={40}/>
                </Link>
            )}
            <Link to='/'>
                <h1 className="text-2xl font-bold ">Tasks Manager</h1>
            </Link>
            
            </div>
            <ul className="flex gap-x-20 items-center">
                {isAutenticated ? (
                    <>
                        <li className='font-extrabold text-2xl text-teal-600'>Welcome { user.username } </li>
                        <li>
                            <Link to='/tasks' className='font-bold'> Task List </Link>
                        </li>
                        <li>
                            <Link to='/add-task' className='font-bold'> Add Task </Link>
                        </li>
                        <li>
                            <Link to='/' onClick={ logout } 
                                className='bg-orange-700 px-4 py-1 rounded-md'
                            > 
                                Logout 
                            </Link>
                        </li>
                    </>
                ):(
                    <div className='flex gap-x-10'>
                        <li>
                            <Link to='/login'
                                className='bg-teal-600 px-4 py-1 rounded-md'
                            > 
                                Login 
                            </Link>
                        </li>
                        <li>
                            <Link to='/register' 
                                className='bg-teal-600 px-4 py-1 rounded-md'
                            >
                                 Register 
                            </Link>
                        </li>
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;

