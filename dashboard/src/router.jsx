import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import { HomeAdminPage } from './pages/HomeAdminPage';
import { ListProductsPage } from './pages/ListProductsPage';
import { loader as loaderAdminHome} from './pages/HomeAdminPage/loader';
import { FormUser } from './components/FormUser';



export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                index : true,
                element : <HomeAdminPage/>,
                loader : loaderAdminHome
            },
            {
                path: '/products',
                element : <ListProductsPage/>
            },
            {
                path: '/users',
                element : <FormUser/>
            }
        ]
    }
])