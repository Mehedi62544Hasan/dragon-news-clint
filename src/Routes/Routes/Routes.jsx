import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import News from '../../Pages/News/News/News'
import Home from "../../Pages/Home/component/Home";
import Login from "../../Pages/login/Login/Login";
import Register from "../../Pages/login/Register/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import TermsCondition from "../../Pages/TermsCondition/TermsCondition";
import Profile from "../../Shared/Profile/Profile";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/trams',
                element: <TermsCondition></TermsCondition>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            }
        ]
    }
])