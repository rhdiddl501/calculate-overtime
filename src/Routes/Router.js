import {Routes, Route} from 'react-router-dom'

import MainPage from '../pages/MainPage';
import BodyPage from '../pages/BodyPage';
import LoginPage from '../pages/LoginPage';

import MemberRouter from './MemberRouter'

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>} />

            <Route element={<MemberRouter/>} >
                <Route index path="/" element={<MainPage/>} />
                <Route path="/body" element={<BodyPage/>} />
            </Route>

        </Routes>
    )
}

export default Router;