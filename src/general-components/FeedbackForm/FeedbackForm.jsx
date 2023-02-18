import React, {useState, useEffect} from 'react';
import {Alert, Form} from "react-bootstrap";
import {addFeedbackForm} from "../../functions/FeedbackForm/addFeedbackForm";
import {useUserAuth} from "../../context/AuthContext";
import {useGetUser} from "../Auth/UserProfile/functions/useGetUser";

//css
import "./FeedbackForm.css";
import "./FeedbackFormMedia.css";

const FeedbackForm = () => {

    // user data form context
    const { user } = useUserAuth();
    //user data from database
    const userDataDatabase = useGetUser(`/users/${user?.uid}`);

    //data form
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [cooperation,setCooperation] = useState(false);

    //message after send
    const [sendMess,setSendMess] = useState({err:false,message:false})

    //send form data in database
    const handleSend = (event) => {
        event.preventDefault();
        addFeedbackForm(email,message,cooperation)
            .then(() => setSendMess({err: false, message: "Форма успешно отправлена."}))
            .catch(() => setSendMess({err: true, message: "Ошибка отправки формы."}))
            .finally(setTimeout(() => setSendMess({err:false,message:false}),5000))
        setEmail('')
        setMessage('')
        setCooperation(false)
    }

    //set user email if he has it in database
    useEffect(() => {
        if (userDataDatabase?.email){
            setEmail(userDataDatabase.email)
        }
    }, [userDataDatabase]);


    return (
        <Form onSubmit={handleSend} className={"FeedbackForm"}>
            <h4 className={"title"}>
                Оставьте заявку на обратную связь
            </h4>

            <Form.Group className="inner">
                <Form.Label>Введите вашу почту</Form.Label>
                <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size={"sm"}
                    type="email"
                    required
                    placeholder={"Обязательно к заполнению"}
                />
            </Form.Group>

            <Form.Group className="inner">
                <Form.Label>Введите ваше сообщение</Form.Label>
                <Form.Control
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    size={"sm"}
                    as={"textarea"}
                />
            </Form.Group>

            <Form.Check
                className={"switch-check small"}
                type="switch"
                label={"Отметьте, если вы хотите предложить нам сотрудничество."}
                checked={cooperation}
                onChange={() => setCooperation(!cooperation)}
            />

            {/*показываем после отправки*/}
            <Alert
                className={"my-2 small p-2"}
                variant={sendMess.err ? "danger" : "success"}
                hidden={!sendMess.message}
            >
                {sendMess.message}
            </Alert>

            <button className={"but-blue px-5"} type="submit">
                Отправить
            </button>
        </Form>
    );
};

export default FeedbackForm;