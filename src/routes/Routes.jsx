import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Shared/Navbar/Blog";
import Login from "../components/Login/Login";
import Logout from "../components/Logout/Logout";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/logout",
                element: <Logout></Logout>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }

]);

export default router;