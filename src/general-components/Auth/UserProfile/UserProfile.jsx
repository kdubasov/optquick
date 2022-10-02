import React, {useState} from "react";
import AddUserData from "./components/AddUserData";
import UserData from "./components/UserData";
import MessageAlert from "../../MessageAlert/MessageAlert";
import UserDataAdded from "./components/UserDataAdded";
import {useUserAuth} from "../../../context/AuthContext";
import {useGetUser} from "./functions/useGetUser";

const UserProfile = () => {

    //context user data
    const { user } = useUserAuth();

    //for res after func or error
    const [res,setRes] = useState({error:false,res:false})

    const data = useGetUser(`/users/${user.uid}`);
    // console.log(data,'UserDataAdded')

  return (
     <div className={'container d-flex flex-wrap'}>
         <MessageAlert res={res} />

         <UserData />

         {/*если (добавленные) данные о пользователе есть то показываем их если нет показываем форму*/}
         {
             Object.values(data).length?
                 <UserDataAdded user={user} userDataAdded={data} />:
                 <AddUserData setRes={setRes} user={user} />
         }
    </div>
  );
};

export default UserProfile;
