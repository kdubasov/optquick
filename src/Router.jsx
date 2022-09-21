import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import NavbarTop from "./general-components/NavbarTop/NavbarTop";
import {UserAuthContextProvider} from "./context/AuthContext";
import ProtectedRoute from "./general-components/Auth/ProtectedRoute";
import UserProfile from "./general-components/Auth/UserProfile/UserProfile";
import PhoneSignUp from "./general-components/Auth/PhoneSignUp";

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
                            <ProtectedRoute>
                                <UserProfile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<PhoneSignUp />} />
                </Routes>
            </UserAuthContextProvider>
        </>
    );
};

export default Router;