import { Route, Routes, Navigate} from 'react-router-dom'
import { LoginPages } from '../auth';
import { CalendarPages } from '../calendar';

export const AppRouter = () => {
    const authStatus = 'autenticated' // authenticated // not-autenticated

    
  return (
    <>
        <Routes>
                {( authStatus === 'not-autenticated')
                        ?<Route path='/auth/*' element={ <LoginPages/> } />
                        : <Route path='/*' element={ <CalendarPages/> }/>            
                }
            
            
            <Route path='/*' element={ <Navigate to="/auth/login" /> }/>
        </Routes>
    </>
  )
}
