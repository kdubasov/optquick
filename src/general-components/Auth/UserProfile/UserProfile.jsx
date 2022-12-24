import React, {useState} from "react";
import AddUserData from "./components/AddUserData";
import UserDataNavigate from "./components/UserDataNavigate/UserDataNavigate";
import MessageAlert from "../../MessageAlert/MessageAlert";
import UserDataAdded from "./components/UserDataAdded";
import {useUserAuth} from "../../../context/AuthContext";
import {useGetUser} from "./functions/useGetUser";
import UserDataRedact from "./components/UserDataRedact";
import AuthUserProducts from "./components/AuthUserProducts/AuthUserProducts";
import UserReviewsList from "../../../pages/UserPage/components/UserReviews/UserReviewsList";
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

    //for redact profile check
    const [redactProfile,setRedactProfile] = useState(false);

    //выбираем какую страницу отображать
    const [selectPage, setSelectPage] = useState(1);

    return (
     <div className={'UserProfile'}>

         {/*самая верхняя картинка bg*/}
         <div className="top-image" />

         {/*alert*/}
         <MessageAlert res={res} />

         <Container>
             <div className="left">
                 <UserDataNavigate
                     data={data}
                     selectPage={selectPage}
                     setSelectPage={setSelectPage}
                 />
             </div>

             <div className="right">
                 {/*если (добавленные) данные о пользователе есть то показываем их если нет показываем форму*/}
                 {
                     (data.name && data.surname)?
                         <>
                             {
                                 selectPage === 3 &&
                                 <UserDataAdded
                                     user={user}
                                     userDataAdded={data}
                                     redactProfile={redactProfile}
                                     setRedactProfile={setRedactProfile}
                                 />
                             }
                             {
                                 selectPage === 2 &&
                                 <UserReviewsList userId={user.uid} />
                             }
                         </> :
                         <>
                             {
                                 selectPage === 3 &&
                                 <AddUserData setRes={setRes} user={user} />
                             }
                         </>
                 }


                 {redactProfile && <UserDataRedact userData={data} setRes={setRes} />}

                 {
                     selectPage === 1 &&
                     <AuthUserProducts userId={user.uid} />
                 }
             </div>
         </Container>
    </div>
  );
};

export default UserProfile;
