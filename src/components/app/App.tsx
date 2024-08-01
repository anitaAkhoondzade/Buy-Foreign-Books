import { useEffect } from "react";
import {Outlet, useNavigate} from "react-router-dom";

export default function App() {
    
    const navigate = useNavigate()
    useEffect(() =>{ 
        if(!localStorage.getItem('token')){
            navigate('/auth')
        }
    },[])
    // localStorage.getItem('phone')
    // localStorage.setItem('phone', '09104964383')
    return (
        <div className="min-w-[360px] max-w-[600px] mx-auto h-full">
            <Outlet/>            
        </div>
    )
}


