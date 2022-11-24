import React from 'react';
import {getPathLastWord} from "../../pages-functions/CategoriesPage/getPathLastWord";
import {useGetUser} from "../../general-components/Auth/UserProfile/functions/useGetUser";
import UserPageData from "./components/UserPageData";
import UserPageProducts from "./components/UserPageProducts/UserPageProducts";
import UserReviews from "./components/UserReviews/UserReviews";
import {useUserAuth} from "../../context/AuthContext";

const UserPage = () => {

    const { user } = useUserAuth();

    const userId = getPathLastWord(window.location.pathname);
    const userData = useGetUser(`/users/${userId}`);

    return (
        <div className={`UserPage container`}>

            <UserPageData userId={userId} data={userData} />

            {//елаем так чтобы пользователь не мог сам себе написать отзыв
                (user && (user.uid !== userId)) &&
                <UserReviews userId={userId} nowUser={user} />
            }

            <UserPageProducts userId={userId} />

        </div>
    );
};

export default UserPage;
