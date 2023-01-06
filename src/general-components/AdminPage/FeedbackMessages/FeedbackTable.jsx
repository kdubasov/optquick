import React from 'react';
import {Alert, Badge, Table} from "react-bootstrap";
import FeedbackTr from "./FeedbackTr";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";

const FeedbackTable = ({setRes}) => {

    const data = useGetCategory('/forms/feedbackForm');
    // console.log(data,'FeedbackTable');

    if (Boolean(data && data.length)){
        return (
            <div className={"FeedbackTable p-1 border"}>
                <h5>
                    <Badge bg={"secondary"} className={"fw-light"}>
                        Заявки с формы обратной связи
                    </Badge>
                </h5>

                <Table striped bordered>
                    <thead>
                        <tr className={"small"}>
                            <th>Дата</th>
                            <th>Email</th>
                            <th>Сообщение</th>
                            <th>Сотруд.</th>
                            <th>-</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        data.map((item, index) => (
                            <FeedbackTr data={item} key={index} setRes={setRes} />
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }else {
        return (
            <Alert className={"p-2 small"} variant={"dark"}>
                Сообщений с формы обратной связи пока нет.
            </Alert>
        )
    }
};

export default FeedbackTable;
