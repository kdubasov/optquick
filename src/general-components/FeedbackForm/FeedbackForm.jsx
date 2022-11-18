import React, {useState} from 'react';
import {Alert, Badge, Button, Form} from "react-bootstrap";
import {addFeedbackForm} from "../../functions/FeedbackForm/addFeedbackForm";

const FeedbackForm = () => {

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

    return (
        <Form onSubmit={handleSend} className={"w-50 my-2 p-2 border"} style={{borderRadius:10}}>
            <h5><Badge>Вы можете задать нам свои вопросы</Badge></h5>

            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
                <Form.Label>Введите ваше сообщение</Form.Label>
                <Form.Control
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    size={"sm"}
                    as={"textarea"}
                    placeholder={"Если вы не заполните текст заявки, то мы сами напишем вам на почту."}
                />
            </Form.Group>

            <Form.Check
                className={"mb-3 small"}
                type="checkbox"
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

            <Button size={"sm"} variant="outline-primary" type="submit">
                Отправить
            </Button>
        </Form>
    );
};

export default FeedbackForm;