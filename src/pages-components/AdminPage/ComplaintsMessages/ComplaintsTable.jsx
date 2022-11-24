import React from 'react';
import {Alert, Badge, Table} from "react-bootstrap";
import {useGetCategory} from "../../../pages-functions/AdminPage/Categories/useGetCategory";
import ComplaintsTr from "./ComplaintsTr";

const ComplaintsTable = ({setRes}) => {

    const data = useGetCategory('/forms/complaint');
    // console.log(data,'ComplaintsTable data');

    if (data.length) {
        return (
            <div className={'ComplaintsTable p-1 my-2 border'}>
                <h5>
                    <Badge bg={"secondary"} className={"fw-light"}>
                        Жалобы
                    </Badge>
                </h5>

                <Table striped bordered>
                    <thead>
                    <tr className={"small"}>
                        <th>Дата</th>
                        <th>Отправил</th>
                        <th>На кого отправили</th>
                        <th>Сообщение</th>
                        <th>-</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        data.map((item, index) => (
                            <ComplaintsTr data={item} key={index} setRes={setRes} />
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }else {
        return (
            <Alert variant={"dark"} className={"my-2 small p-2"}>
                Список жалоб пуст
            </Alert>
        )
    }
};

export default ComplaintsTable;
