import React, {useState} from 'react';
import AddCategory from "../../pages-components/AdminPage/Categories/AddCategory";
import MessageAlert from "../../general-components/MessageAlert/MessageAlert";
import ListCategory from "../../pages-components/AdminPage/Categories/ListCategory";
import {Badge} from "react-bootstrap";
import AddProduct from "../../pages-components/AdminPage/Products/AddProducts/AddProduct";


const AdminPage = () => {

    //for res after func or error
    const [res,setRes] = useState({error:false,res:false})

    return (
        <div className={`container`}>

            <MessageAlert res={res} />

            <h2 className={"mt-3 mb-3"}>
                <Badge bg={'success'}>Админ. страница</Badge>
            </h2>

            {/*add category or sub category*/}
            <AddCategory setRes={setRes}  />
            {/*add product*/}
            <AddProduct />
            {/*list categories or sub categories*/}
            <ListCategory />
        </div>
    );
};

export default AdminPage;