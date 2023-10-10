import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { isAutenticated, user, logout } = useAuth();

    return (
        <nav className="bg-zinc-700 text-white my-3 flex justify-between py-5 px-10 rounded-lg">
           <Link to='/'>
                <h1 className="text-2xl font-bold ">Tasks Manager</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAutenticated ? (
                    <>
                        <li>Welcom { user.username } </li>
                        <li>
                            <Link to='/add-task'> Add Task </Link>
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
                    <>
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
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;

