import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthRequireLayout from "./layouts/AuthRequireLayout";
import CarsPage from "./pages/CarsPage/CarsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>

                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;