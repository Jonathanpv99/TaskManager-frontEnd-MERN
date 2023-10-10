import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, LoginRequest, verifyTokenRequest, logoutRequest } from '../api/auth';
import Cookie from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext( AuthContext );
    if(!context) {
        throw new Error(" useAuth must he used whith an AuthProvider")
    }

    return context;
}

export const AuthProvider = ( { children } ) => {

    const [user, Setuser] = useState( null );
    const [isAutenticated, setIsAutenticated] = useState( false );
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    useEffect( () => {
        if( errors.length > 0 ){
            const timer = setTimeout( () => {
                setErrors([]);
            }, 6000)
            return () => clearTimeout(timer);
        }
    }, [errors]);
    
    useEffect( () => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        const cookies = Cookie.get();
        
        if( !cookies.token ){
            setIsAutenticated( false );
            Setuser( null );
            setIsLoading( false );
            return
        }
        try {
            
            const res = await verifyTokenRequest( cookies.token );
            if( !res ) {
                setIsAutenticated(false);
                setIsLoading( false );
                setIsLoading( false );
                return
            }
            
            console.log( res )
            setIsAutenticated(true);
            Setuser( res.data );
        } catch (error) {
            setIsAutenticated(false);
            Setuser(null);
            setIsLoading( false )
        }
        
    }
    

    const singup = async ( user ) => {
        try {
            const res = await registerRequest( user );
            //console.log( res.data );
            Setuser( res.data );
            setIsAutenticated( true );
        } catch (error) {
            setErrors(error.response.data);
        }
    }

    const signin = async ( user ) => {

        try {
            const res = await LoginRequest( user );
            //console.log( res );
            setIsAutenticated(true);
            Setuser( res.data );
        } catch (error) {
            setErrors(error.response.data);
        }
    }

    const logout = async () => {
        try {
            const res = await logoutRequest();
            console.log( res );
            setIsAutenticated(false);
            Setuser( [] );
        } catch (error) {
           console.log(error.response.data);
        }
    }

    
    return (
        <AuthContext.Provider value={{
            singup,
            signin,
            logout,
            user,
            isAutenticated,
            isLoading,
            errors,
        }}>
            { children }
        </AuthContext.Provider>
    )
    
}