import React, {useState} from "react";
import AddUserData from "./components/AddUserData";
import UserData from "./components/UserData";
import MessageAlert from "../../MessageAlert/MessageAlert";
import UserDataAdded from "./components/UserDataAdded";
import {useUserAuth} from "../../../context/AuthContext";
import {useGetUser} from "./functions/useGetUser";
import UserDataRedact from "./components/UserDataRedact";

const UserProfile = () => {

    //context user data
    const { user } = useUserAuth();

    //for res after func or error
    const [res,setRes] = useState({error:false,res:false})

    //user data from database
    const data = useGetUser(`/users/${user.uid}`);
    // console.log(data,'UserDataAdded')

    //for redact profile check
    const [redactProfile,setRedactProfile] = useState(false);

  return (
     <div className={'container d-flex flex-wrap'}>

         <div className="w-100">
             <MessageAlert res={res} />
         </div>

         <UserData />

         {/*если (добавленные) данные о пользователе есть то показываем их если нет показываем форму*/}
         {
             Object.values(data).length?
                 <UserDataAdded
                     user={user}
                     userDataAdded={data}
                     redactProfile={redactProfile}
                     setRedactProfile={setRedactProfile}
                 />
                 :
                 <AddUserData setRes={setRes} user={user} />
         }

         {redactProfile && <UserDataRedact userData={data} res={res} setRes={setRes} />}
    </div>
  );
};

export default UserProfile;
