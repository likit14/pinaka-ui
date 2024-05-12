import { createBrowserRouter } from "react-router-dom";
import Login from '../View/Login';
import Dashboard from '../View/Dashboard';
import CloudStatus from '../View/CloudStatus'
import App from "../App";
import CentralCloud from "../View/CentralCloud";

const loginData=JSON.parse(localStorage.getItem("loginData"))
const userData={userName:"Pinaka",password:"Pinaka@123"}
const isLogin=loginData&&(loginData.userName===userData.userName)&&(loginData.password===userData.password)
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