import React from "react";
import {Outlet} from 'react-router-dom';
import {SideBar} from "../components/header/SideBar";
import './MainLayout.style.css';

export const MainLayout = () => {
    return (
        <div className={'main-container'}>
            <SideBar/>
            <Outlet/>

        </div>
    );
}