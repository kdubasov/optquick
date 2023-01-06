import React from 'react';

const RedactCategoryButton = ({redact,setRedact}) => {
    return (
        <>
            {
                redact?
                    <button
                        className={"but-green"}
                        onClick={() => setRedact(false)}
                    >
                        Назад
                    </button>
                    :
                    <button
                        className={"but-green mx-2"}
                        onClick={() => setRedact(true)}
                        // onClick={() => handleRedactCategory()}
                    >
                        Редактировать
                    </button>
            }
        </>
    );
};

export default RedactCategoryButton;
