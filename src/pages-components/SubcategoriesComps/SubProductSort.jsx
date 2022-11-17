import React,{useEffect,useState} from 'react';
import {Dropdown} from "react-bootstrap";

const SubProductSort = ({listProducts,setDataSort}) => {

    //for sorting value
    const [sort,setSort] = useState("");

    useEffect(() => {
        if (listProducts.length){
            if (!sort){setDataSort([listProducts,false])}
            if (sort === 'price-min'){
                setDataSort([listProducts.sort((a,b) => Number(a.price) - Number(b.price)),"price-min"])
            }
            if (sort === 'price-max'){
                setDataSort([listProducts.sort((a,b) => Number(b.price) - Number(a.price)),"price-max"])
            }
            if (sort === 'date-new'){
                setDataSort([listProducts.sort((a,b) => a.dateNoRedact - b.dateNoRedact),"date-new"])
            }
            if (sort === 'date-old'){
                setDataSort([listProducts.sort((a,b) => b.dateNoRedact - a.dateNoRedact),"date-old"])
            }
        }
        //eslint-disable-next-line
    },[sort,listProducts])

    return (
        <Dropdown>
            <Dropdown.Toggle size={"sm"} variant="secondary">
                Сортировать по
                {sort === "price-min" && " цене (мин)"}
                {sort === "price-max" && " цене (макс)"}
                {sort === "date-new" && " дате (новые)"}
                {sort === "date-old" && " дате (старые)"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    sort !== "price-min" ?
                        <Dropdown.Item onClick={() => setSort("price-min")} className={"small"}>По цене (мин)</Dropdown.Item>:false
                }
                {
                    sort !== "price-max" ?
                        <Dropdown.Item onClick={() => setSort("price-max")} className={"small"}>По цене (макс)</Dropdown.Item>:false
                }
                {
                    sort !== "date-new" ?
                        <Dropdown.Item onClick={() => setSort("date-new")} className={"small"}>По дате (новые)</Dropdown.Item>:false
                }
                {
                    sort !== "date-old" ?
                        <Dropdown.Item onClick={() => setSort("date-old")} className={"small"}>По дате (старые)</Dropdown.Item>:false
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SubProductSort;
