import React from 'react';
import {getPathLastWord} from "../../pages-functions/CategoriesPage/getPathLastWord";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import UserPageData from "./components/UserPageData";

const UserPage = () => {

    const userId = getPathLastWord(window.location.pathname);
    const userData = useGetUser(`/users/${userId}`);
    console.log(userData,'data in UserPage');

    return (
        <div className={`UserPage container`}>

            <UserPageData data={userData} />

        </div>
    );
};

export default UserPage;
