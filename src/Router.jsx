import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import NavbarTop from "./general-components/NavbarTop/NavbarTop";
import {UserAuthContextProvider} from "./context/AuthContext";
import CheckLoginRoute from "./general-components/Auth/CheckLoginRoute";
import UserProfile from "./general-components/Auth/UserProfile/UserProfile";
import Login from "./general-components/Auth/Login";
import AdminPage from "./pages/AdminPage/AdminPage";


const Router = () => {
    return (
        <>
            <UserAuthContextProvider>
                <NavbarTop />
                <Routes>
                    <Route path={`/`} element={<MainPage />} />
                    <Route
                        path="/userProfile"
                        element={
                            <CheckLoginRoute>
                                <UserProfile />
                            </CheckLoginRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/admin"
                        element={
                        <CheckLoginRoute>
                            <AdminPage />
                        </CheckLoginRoute>
                        }
                    />
                </Routes>
            </UserAuthContextProvider>
        </>
    );
};

export default Router;