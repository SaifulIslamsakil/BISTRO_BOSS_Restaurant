import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import OurManu from "../Pages/OurManu/OurManu";
import OurShop from "../Pages/OurShop/OurShop";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ContactUs from "../Pages/ContactUs/ContactUs";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"manu",
                element:<OurManu></OurManu>

            },
            {
                path:"ourshop/:category",
                element:<OurShop></OurShop>
            },
            {
                path:"Dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"Contact-us",
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default Router