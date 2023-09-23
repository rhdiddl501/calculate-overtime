// import { Route, Routes } from "react-router-dom";
import { getAccessToken } from 'Hooks/useBrowser'
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const MemberRouter = () => {
    const accessToken = getAccessToken();
    const navigate = useNavigate();

    console.log(accessToken)
    
    useEffect(() => {
        if (!accessToken) {
            navigate('login')
        }
    },[accessToken])

    return(
        <Outlet/>
    )
    
}

export default MemberRouter;