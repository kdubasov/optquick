import React from 'react';
import {Alert, Badge, Button} from "react-bootstrap";

const UserDataAdded = ({user,userDataAdded,redactProfile,setRedactProfile}) => {

    //get span with attributes
    const getSpanUserData = (text,value) =>{
        return (
            <span className={'my-1 d-flex'}>
                <Badge bg={"secondary"}>{text}:</Badge>
                <p className={'small m-0 mx-1'}>{userDataAdded[value] || 'Данные не внесены'}</p>
            </span>
        )
    }

    return (
        <div className={`UserDataAdded w-50 border p-3 mt-3 mx-3`}>
            <Badge>Данные профиля</Badge>

            {
                Object.values(userDataAdded).length ?

                <div className="box d-flex align-items-center mt-2 flex-wrap">
                    <img
                        src={userDataAdded.photo || 'https://vjoy.cc/wp-content/uploads/2020/06/znak_voprosa_16_17183605.png'}
                        alt={userDataAdded.name}
                        width={120}
                        style={{borderRadius:5}}
                    />

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
                        {getSpanUserData('Дата регистрации','dateRegistr')}
                    </div>

                    {//alert what show if user add not all data
                        (userDataAdded['vk'] || userDataAdded['telegram'] || userDataAdded['photo']) ?
                        <Alert className={'w-100 mt-2 p-2 small'} variant={"success"}>
                            Вы заполнили все данные профиля, теперь в ваших товарах появится специальная табличка.
                        </Alert>
                        :
                        <Alert className={'w-100 mt-2 p-2 small'} variant={"danger"}>
                            Вы добавли не все данные профиля, пожалуйста, заполните оставшиеся.
                        </Alert>
                    }

                    {//redact profile show/close button
                        redactProfile?
                            <Button variant={'outline-danger'} size={"sm"} onClick={() => setRedactProfile(false)}>Закрыть поле редактирования</Button>:
                            <Button size={"sm"} variant={"outline-secondary"} onClick={() => setRedactProfile(true)}>
                                Редактировать данные профиля
                            </Button>
                    }
                </div>
                :
                <Alert className={'mt-2 w-100 small'}>
                    Заполните форму и ваши данные отобразятся здесь,
                    а также появится возможность размещать объявления.
                </Alert>
            }
        </div>
    );
};

export default UserDataAdded;
