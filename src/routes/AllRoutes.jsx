import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Blogs from "../pages/Blogs";

const AllRoutes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Outlet />,
            children:[
                {
                    index:true,
                    element:<Home />
                },
                {
                    path:'/blogs',
                    element:<Outlet />,
                    children:[
                        {
                            index:true,
                            element:<Blogs />,
                        },
                    ]
                },
                {
                    path:'*',
                    element:<NotFound />
                }
            ]
        }
    ])

    return <RouterProvider router={router}/>
}

export default AllRoutes;