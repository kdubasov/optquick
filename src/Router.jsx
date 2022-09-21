import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import NavbarTop from "./general-components/NavbarTop/NavbarTop";

const Router = () => {
    return (
        <>
            <NavbarTop />
            <Routes>
                <Route path={`/`} element={<MainPage />} />
            </Routes>
        </>
    );
};

export default Router;