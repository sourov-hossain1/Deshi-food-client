import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Shared/Navbar/Blog";

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
            }
        ]
    }

]);

export default router;