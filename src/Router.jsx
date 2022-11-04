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
import SubProductsPage from "./pages/SubProductsPage/SubProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import PostProductPage from "./pages/PostProductPage/PostProductPage";
import UserPage from "./pages/UserPage/UserPage";
import RedactUserProduct from "./general-components/Auth/UserProfile/components/RedactUserProduct/RedactUserProduct";


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
                    {/*categories routes*/}
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/categories/:categoryID" element={<SubcategoriesPage />} />
                    <Route path="/categories/:categoryID/:subcategoryID" element={<SubProductsPage />} />
                    <Route path="/categories/:categoryID/:subcategoryID/:productID" element={<ProductPage />} />
                    {/*categories routes end*/}

                    {/*post product without admin*/}
                    <Route
                        path="/postProduct"
                        element={
                            <CheckLoginRoute>
                                <PostProductPage />
                            </CheckLoginRoute>
                        }
                    />

                    <Route path="/user/:userUid" element={<UserPage />} />
                    <Route path={`/userProfile/redactProduct/:productID`} element={<RedactUserProduct />} />
                </Routes>
            </UserAuthContextProvider>
        </>
    );
};

export default Router;
