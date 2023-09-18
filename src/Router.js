import {Routes, Route} from 'react-router-dom'

import Main from './pages/Main';

const Router = () => {
    console.log("hi")
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
        </Routes>
    )
}

export default Router;