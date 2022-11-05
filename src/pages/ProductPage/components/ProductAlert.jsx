import React from 'react';
import {Alert} from "react-bootstrap";

const ProductAlert = ({variant,show,text}) => {
    if(show){
        return (
            <Alert
                variant={variant}
                className={"p-2 small"}
            >
                {text}
            </Alert>
        );
    }
};

export default ProductAlert;
