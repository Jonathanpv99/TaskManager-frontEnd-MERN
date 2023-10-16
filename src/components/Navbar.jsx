import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { isAutenticated, user, logout } = useAuth();

    return (
        <nav className="bg-zinc-700 text-white my-3 flex justify-around py-5 px-10 rounded-lg">
            <div className='flex justify-between gap-x-8 items-center'>
            {isAutenticated ? (
                <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-slate-200 rounded-full'></div>
                    <Link to='/profile'>
                    <h1>Profile</h1>
                    </Link>
                </div>
            ): (<></>)}
            <Link to='/'>
                <h1 className="text-2xl font-bold ">Tasks Manager</h1>
            </Link>
            
            </div>
            <ul className="flex gap-x-20 items-center">
                {isAutenticated ? (
                    <>
                        <li className='font-extrabold text-2xl text-emerald-500'>Welcome { user.username } </li>
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
                                className='bg-emerald-700 px-4 py-1 rounded-md'
                            > 
                                Login 
                            </Link>
                        </li>
                        <li>
                            <Link to='/register' 
                                className='bg-emerald-700 px-4 py-1 rounded-md'
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

