import React, {useState} from "react";
import AddUserData from "./components/AddUserData/AddUserData";
import UserDataNavigate from "./components/UserDataNavigate/UserDataNavigate";
import MessageAlert from "../../MessageAlert/MessageAlert";
import {useUserAuth} from "../../../context/AuthContext";
import {useGetUser} from "./functions/useGetUser";
import UserDataRedact from "./components/UserDataRedact/UserDataRedact";
import AuthUserProducts from "./components/AuthUserProducts/AuthUserProducts";
import UserReviewsList from "../../../pages/UserPage/components/UserReviews/UserReviewsList/UserReviewsList";
import "./UserProfile.css";
import {Container} from "react-bootstrap";

const UserProfile = () => {

    //context user data
    const { user } = useUserAuth();

    //for res after func or error
    const [res,setRes] = useState({error:false,res:false})

    //user data from database
    const data = useGetUser(`/users/${user.uid}`);
    // console.log(data,'UserDataAdded');

    //выбираем какую страницу отображать
    const [selectPage, setSelectPage] = useState(1);

    return (
     <div className={'UserProfile'}>

         {/*самая верхняя картинка bg*/}
         <div className="top-image" />

         {/*alert*/}
         <MessageAlert res={res} />

         <Container>

             {/*левый блок с навигацией*/}
             <div className="left">
                 <UserDataNavigate
                     data={data}
                     selectPage={selectPage}
                     setSelectPage={setSelectPage}
                 />
             </div>

             <div className="right">

                 {/*табличка с предложением для заполенения данных (если их нет)*/
                     (!data.name && !data.surname) &&
                     <button className={"but-green mb-2"} onClick={() => setSelectPage(3)}>
                     Вы не заполнилил данные профиля, поэтому пока не можете выкладывать объявления,
                     вы можете нажать на эту надпись и перейдете к настройке профиля.
                     </button>
                 }

                 {/*если (добавленные) данные о пользователе есть то показываем их если нет показываем форму*/
                     (data.name && data.surname)?
                         selectPage === 3 &&
                         <UserDataRedact userData={data} setRes={setRes} /> :
                         selectPage === 3 &&
                         <AddUserData setRes={setRes} user={user} />
                 }

                 {//мои товары
                     selectPage === 1 &&
                     <AuthUserProducts userId={user.uid} />
                 }

                 {//отзывы
                     selectPage === 2 &&
                     <UserReviewsList userId={user.uid} />
                 }
             </div>
         </Container>
    </div>
  );
};

export default UserProfile;
