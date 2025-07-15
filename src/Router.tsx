import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/signin',
                element: <SignIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
        ]
    },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
