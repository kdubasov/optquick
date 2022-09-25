import React from 'react';
import {Alert} from "react-bootstrap";
import './MessageAlert.css';

const MessageAlert = ({res}) => {

    if (res.error || res.res){
        return (
            <Alert className={`MessageAlert`} variant={res.res?"success":"danger"}>
                {res.res?res.res:res.error}
            </Alert>
        );
    }else return false
};

export default MessageAlert;
