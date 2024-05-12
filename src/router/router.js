import { createBrowserRouter } from "react-router-dom";
import Login from '../View/Login';
import Dashboard from '../View/Dashboard';
import CloudStatus from '../View/CloudStatus'
import App from "../App";
import CentralCloud from "../View/CentralCloud";

const isLogin=localStorage.getItem("loginData")
export const router=createBrowserRouter([
    {
    path:'/',
    element:isLogin?<App/>:<Login/>,
    children:isLogin?[
        {
            path:'/',
            element:<Dashboard/>
        },
        {
            path:'/cloudstatus',
            element:<CloudStatus />
        },
        {
            path:'/centralcloud',
            element:<CentralCloud />
        },
    ]:[]
    }
])