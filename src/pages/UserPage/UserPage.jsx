import React from 'react';
import {getPathLastWord} from "../../pages-functions/CategoriesPage/getPathLastWord";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import UserPageData from "./components/UserPageData";
import UserPageProducts from "./components/UserPageProducts/UserPageProducts";

const UserPage = () => {

    const userId = getPathLastWord(window.location.pathname);
    const userData = useGetUser(`/users/${userId}`);
    console.log(userData,'data in UserPage');

    return (
        <div className={`UserPage container`}>

            <UserPageData data={userData} />

            <UserPageProducts userId={userId} />

        </div>
    );
};

export default UserPage;
