import React, {useState} from 'react';
import {Button} from "react-bootstrap";

const ConfirmButton = ({text,func}) => {

    //для подтверждения удаления
    const [confirm,setConfirm] = useState(false)

    return (
        <>
            {
                confirm?
                    <>
                        <Button
                            size={"sm"}
                            variant={`outline-success`}
                            onClick={func}
                        >
                            Подтвердить
                        </Button>
                    </>:
                    <Button
                        size={"sm"}
                        variant={`outline-danger`}
                        onClick={() => setConfirm(true)}
                    >
                        {text}
                    </Button>
            }
        </>
    );
};

export default ConfirmButton;
