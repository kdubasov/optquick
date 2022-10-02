import React from 'react';
import {Alert, Badge} from "react-bootstrap";

const UserDataAdded = ({user,userDataAdded}) => {

    const getSpanUserData = (text,value) =>{
        return (
            <span className={'my-1 d-flex'}>
                <Badge bg={"secondary"}>{text}:</Badge>
                <p className={'small m-0 mx-1'}>{userDataAdded[value]}</p>
            </span>
        )
    }

    return (
        <div className={`UserDataAdded w-50 border p-3 mt-3 mx-3`}>
            <Badge>Данные профиля</Badge>

            {
                Object.values(userDataAdded).length ?

                <div className="box d-flex align-items-center mt-2">
                    <img src={userDataAdded.photo} alt={userDataAdded.name} width={120} style={{borderRadius:5}}/>

                    <div className="box-inner mx-3">
                        <h5 className={'m-0 fw-bold text-decoration-underline'}>{userDataAdded.surname} {userDataAdded.name}</h5>
                        <span className={'my-1 d-flex'}>
                        <Badge bg={"secondary"}>Телефон:</Badge>
                        <p className={'small m-0 mx-1'}>{user.phoneNumber}</p>
                    </span>

                        {getSpanUserData('Возраст','age')}
                        {getSpanUserData('Почта','email')}
                        {getSpanUserData('Вконтакте','vk')}
                        {getSpanUserData('Телеграм','telegram')}
                    </div>
                </div> :
                <Alert className={'mt-2 w-100 small'}>
                    Заполните форму и ваши данные отобразятся здесь,
                    а также появится возможность размещать объявления.
                </Alert>
            }
        </div>
    );
};

export default UserDataAdded;
