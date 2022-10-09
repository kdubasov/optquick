import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import NavbarTop from "./general-components/NavbarTop/NavbarTop";
import {UserAuthContextProvider} from "./context/AuthContext";
import CheckLoginRoute from "./general-components/Auth/CheckLoginRoute";
import UserProfile from "./general-components/Auth/UserProfile/UserProfile";
import Login from "./general-components/Auth/Login";
import AdminPage from "./pages/AdminPage/AdminPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import SubcategoriesPage from "./pages/SubcategoriesPage/SubcategoriesPage";


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
                            <AdminPage  />
                        </CheckLoginRoute>
                        }
                    />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/categories/:categoryID" element={<SubcategoriesPage />} />
                </Routes>
            </UserAuthContextProvider>
        </>
    );
};

export default Router;