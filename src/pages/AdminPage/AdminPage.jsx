import React from 'react';
import AddCategory from "../../pages-components/AdminPage/Categories/AddCategory";


const AdminPage = () => {

    return (
        <div className={`container`}>
            <h3 className={"mt-3 mb-3"}>Админ. страница</h3>
            <AddCategory />
        </div>
    );
};

export default AdminPage;