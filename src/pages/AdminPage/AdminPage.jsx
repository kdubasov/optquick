import React, {useState} from 'react';
import AddCategory from "../../pages-components/AdminPage/Categories/AddCategory";
import MessageAlert from "../../general-components/MessageAlert/MessageAlert";
import ListCategory from "../../pages-components/AdminPage/Categories/ListCategory";


const AdminPage = () => {

    //for res after func or error
    const [res,setRes] = useState({error:false,res:false})

    return (
        <div className={`container`}>

            <MessageAlert res={res} />

            <h3 className={"mt-3 mb-3"}>Админ. страница</h3>
            <AddCategory setRes={setRes}  />
            <ListCategory />
        </div>
    );
};

export default AdminPage;