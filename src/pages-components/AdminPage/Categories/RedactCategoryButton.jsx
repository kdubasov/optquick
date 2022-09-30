import React from 'react';
import {Button} from "react-bootstrap";

const RedactCategoryButton = ({redact,setRedact}) => {
    return (
        <>
            {
                redact?
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => setRedact(false)}
                    >
                        Назад
                    </Button>
                    :
                    <Button
                        size={"sm"}
                        className={`mx-2`}
                        variant={"secondary"}
                        onClick={() => setRedact(true)}
                        // onClick={() => handleRedactCategory()}
                    >
                        Редактировать
                    </Button>
            }
        </>
    );
};

export default RedactCategoryButton;
