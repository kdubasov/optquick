import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import NavbarTop from "./general-components/NavbarTop/NavbarTop";
import {UserAuthContextProvider} from "./context/AuthContext";
import CheckLoginRoute from "./general-components/Auth/CheckLoginRoute";
import UserProfile from "./general-components/Auth/UserProfile/UserProfile";
import Login from "./general-components/Auth/Login/Login";
import AdminPage from "./pages/AdminPage/AdminPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import SubcategoriesPage from "./pages/SubcategoriesPage/SubcategoriesPage";
import SubProductsPage from "./pages/SubProductsPage/SubProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import PostProductPage from "./pages/PostProductPage/PostProductPage";
import UserPage from "./pages/UserPage/UserPage";
import RedactUserProduct from "./general-components/Auth/UserProfile/components/RedactUserProduct/RedactUserProduct";
import BriefcasePage from "./pages/BriefcasePage/BriefcasePage";
import NotFoundPage from "./static-pages/NotFoundPage/NotFoundPage";
import FooterBottom from "./general-components/FooterBottom/FooterBottom";
import ScrollToTop from "./functions/scrollToTop";
import PrivacyPolicyPage from "./static-pages/PrivacyPolicyPage/PrivacyPolicyPage";
import FeedbackPage from "./static-pages/FeedbackPage/FeedbackPage";
import OneArticlePage from "./static-pages/OneArticlePage/OneArticlePage";
import SellerCommPage from "./static-pages/SellerCommPage/SellerCommPage";
import DeliveryPage from "./static-pages/DeliveryPage/DeliveryPage";
import ProductsReturnsPage from "./static-pages/ProductsReturnsPage/ProductsReturnsPage";
import PayRefundPage from "./static-pages/PayRefundPage/PayRefundPage";
import WebsiteRulesPage from "./static-pages/WebsiteRulesPage/WebsiteRulesPage";
import AnswersPage from "./static-pages/AnswersPage/AnswersPage";
import AboutProject from "./static-pages/AboutProject/AboutProject";
import ArticlesPage from "./static-pages/ArticlesPage/ArticlesPage";
import SupportProjectPage from "./static-pages/SupportProjectPage/SupportProjectPage";


const Router = () => {

    //поднимаем старницу вверх при переходе
    ScrollToTop();

    return (
        <>
            {/*user auth context*/}
            <UserAuthContextProvider>

                {/*NAVBAR TOP*/}
                <NavbarTop />

                <div style={{minHeight:"80vh"}}>
                    <Routes>
                        {/*main page*/}
                        <Route path={`/`} element={<MainPage />} />

                        {/*user profile*/}
                        <Route
                            path="/userProfile"
                            element={
                                <CheckLoginRoute>
                                    <UserProfile />
                                </CheckLoginRoute>
                            }
                        />

                        {/*login page*/}
                        <Route path="/login" element={<Login />} />

                        {/*admin page*/}
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


                        {/*страница пользователя не тот который сейчас зареган а тот чей товар*/}
                        <Route path="/user/:userUid" element={<UserPage />} />

                        {/*редактирование товара*/}
                        <Route path={"/userProfile/redactProduct/:productID"} element={<RedactUserProduct />} />

                        {/*избранные товары*/}
                        <Route
                            path={"/briefcase"}
                            element={
                                <CheckLoginRoute>
                                    <BriefcasePage />
                                </CheckLoginRoute>
                            }
                        />

                        {/*404*/}
                        <Route path={"*"} element={<NotFoundPage />} />

                        {/*политика конфеденциальности*/}
                        <Route path={"/privacyPolicy"} element={<PrivacyPolicyPage />} />
                        {/*страница с формой обртаной связи*/}
                        <Route path={"/feedback"} element={<FeedbackPage />} />
                        {/*страница с всеми статьями*/}
                        <Route path={"/articles"} element={<ArticlesPage />} />
                        {/*страница с одной статьей*/}
                        <Route path={"/articles/:articleID"} element={<OneArticlePage />} />
                        {/*страница "Связь с продавцом"*/}
                        <Route path={"/sellerComm"} element={<SellerCommPage />} />
                        {/*страница "доставка товара"*/}
                        <Route path={"/delivery"} element={<DeliveryPage />} />
                        {/*страница Возврат товара*/}
                        <Route path={"/productsReturns"} element={<ProductsReturnsPage />} />
                        {/*страница Возврат денежных средств*/}
                        <Route path={"/payRefund"} element={<PayRefundPage />} />
                        {/*страница Правила пользования площадкой*/}
                        <Route path={"/websiteRules"} element={<WebsiteRulesPage />} />
                        {/*страница Вопросы и ответы*/}
                        <Route path={"/answers"} element={<AnswersPage />} />
                        {/*страница О проекте*/}
                        <Route path={"/aboutProject"} element={<AboutProject />} />
                        {/*страница Поддержать проект*/}
                        <Route path={"/supportProject"} element={<SupportProjectPage />} />
                    </Routes>
                </div>

                {/*Footer*/}
                <FooterBottom />
            </UserAuthContextProvider>
        </>
    );
};

export default Router;
