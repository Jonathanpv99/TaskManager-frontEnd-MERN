import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/authContext';

const ProtectedRoute = () => {

    const {isLoading , isAutenticated } = useAuth();

    if( !isAutenticated && !isLoading ) return <Navigate to='/login' replace/>

  return (
    <Outlet/>
  )
}

export default ProtectedRoute