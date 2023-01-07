import React, {useState} from 'react';
import "./UserContacts.css";
import {useUserAuth} from "../../../../context/AuthContext";

const UserContacts = ({userData}) => {

    const { user } = useUserAuth();

    const [showValue,setShowValue] = useState([false,false,false]);

    // console.log(userData,'user data in userContacts');

    //set value in state array
    const handleChange = valueNum => {
        const copy = Object.assign([],showValue);
        copy[valueNum] = !copy[valueNum];
        setShowValue(copy);
    }

    const getBlock = (text,value,num) => {
        if (userData[value]){
            return (
                <div className="def-block" onClick={() => handleChange(num)}>
                    {
                        showValue[num]?
                            <h5 className={"w-100 m-0"}>{userData[value]}</h5>:
                            <>
                                <p className="small m-0 w-100">Нажмите, чтобы увидеть</p>
                                <h5 className={"w-100 m-0"}>{text}</h5>
                            </>
                    }
                </div>
            )
        }
        return false;
    }

    if (user){
        return (
            <div className={"UserContacts"}>
                <h4>Связаться с продавцом</h4>

                {
                    userData.vk &&
                    <a
                        className={"soc-block-link"}
                        href={userData.vk}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                        <div className="soc-block vk">
                            <h4>Вконтакте</h4>
                            <img className={"arrow"} src="/images/icons/arrow.svg" alt="arrow"/>
                        </div>
                    </a>
                }

                {getBlock("Email","email",0)}
                {getBlock("Номер телефона","phoneNumber",1)}
                {getBlock("Telegram","telegram",2)}
            </div>
        );
    }else {
        return (
            <div className={"UserContacts"}>
                <h4>Связаться с продавцом</h4>

                <p className="small warning">
                    Для того чтобы видеть контакты других пользователей вы должны пройти авторизацию.
                    Процесс авторизации занимает около 20 секунд вашего времени. Спасибо за понимание!
                </p>
            </div>
        )
    }
};

export default UserContacts;
