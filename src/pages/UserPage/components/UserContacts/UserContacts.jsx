import React, {useState} from 'react';
import {useUserAuth} from "../../../../context/AuthContext";
import {handleCopy} from "../../../../functions/handleCopy";

//css
import "./UserContacts.css";
import "./UserContactsMedia.css";

const UserContacts = ({userData}) => {

    const { user } = useUserAuth();

    const [showValue,setShowValue] = useState([false,false]);

    // console.log(userData,'user data in userContacts');

    //set value in state array
    const handleChange = valueNum => {
        const copy = Object.assign([],showValue);
        copy[valueNum] = true;
        setShowValue(copy);
    }

    const getBlock = (text,value,num) => {
        if (userData[value]){
            return (
                <div className="def-block" onClick={() => handleChange(num)}>
                    {
                        showValue[num]?
                            <div className={"show"}>
                                <h6>{userData[value]}</h6>

                                <p className="small copy" onClick={() => handleCopy(userData[value])}>
                                    Скопировать
                                </p>
                            </div> :
                            <div className={"hide"}>
                                <img src={`/images/icons/${value}.svg`} alt={value} />
                                <h6>{text}</h6>
                                <img
                                    src="/images/icons/back-arrow.svg"
                                    alt={`show ${value}`}
                                    className={"arrow-back"}
                                />
                            </div>
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

                {
                    userData.telegram &&
                    <a
                        className={"soc-block-link"}
                        href={userData.telegram}
                        target={"_blank"}
                        rel={"noreferrer"}
                    >
                        <div className="soc-block tg">
                            <h4>Telegram</h4>
                            <img className={"arrow"} src="/images/icons/arrow.svg" alt="arrow"/>
                        </div>
                    </a>
                }

                {getBlock("Показать E-mail","email",0)}
                {getBlock("Показать телефон","phoneNumber",1)}
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
