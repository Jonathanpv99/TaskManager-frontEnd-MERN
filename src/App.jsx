import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFromPage';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/authContext';
import { TaskProvider } from './context/TasksContext';

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className='container mx-auto px-8 py-4'>
          <Navbar/>
            <Routes >
              { /*Public Routes */}
              <Route path='/' element={ <HomePage/> }/>
              <Route path='/login' element={ <LoginPage/> }/>
              <Route path='/register' element={ <RegisterPage/> }/>

              { /*Private Routes */}
              <Route element={ <ProtectedRoute/> }>
              <Route path='/tasks' element={ <TasksPage/> }/>
              <Route path='/add-task' element={ <TaskFormPage/> }/>
              <Route path='/task/:id' element={ <TaskFormPage/> }/>
              <Route path='/profile' element={ <ProfilePage/> }/>
              </Route>
                    
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App