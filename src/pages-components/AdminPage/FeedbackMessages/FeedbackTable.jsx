import React from 'react';
import {Badge, Table} from "react-bootstrap";
import FeedbackTr from "./FeedbackTr";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";

const FeedbackTable = ({setRes}) => {

    const data = useGetCategory('/forms/feedbackForm');
    // console.log(data,'FeedbackTable');

    if (Boolean(data && data.length)){
        return (
            <div className={"FeedbackTable"}>
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
            <h5>
                <Badge bg={"secondary"} className={"fw-light"}>
                    Сообщений с формы обратной связи пока нет.
                </Badge>
            </h5>
        )
    }
};

export default FeedbackTable;
