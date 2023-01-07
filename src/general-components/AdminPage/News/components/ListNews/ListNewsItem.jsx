import React from 'react';
import DeleteCategoryButton from "../../../Categories/DeleteCategoryButton";

const ListNewsItem = ({data}) => {
    return (
        <div className={"ListNewsItem border p-2 m-2 d-flex"}>
            <img className={"card-img"} src={data.cardPhoto} alt={data.title} />
            {data.innerPhoto !== "-" && <img className={"card-img"} src={data.innerPhoto} alt={data.title} />}

            <div className="content">
                <h5 className={"color"} style={{color:`${data.cardBG}`}}>Такой цвет у фона карточки</h5>
                {data.innerPhoto === "-" && <p>Внутренне фото не добавлено</p>}
                <p><b>Дата:</b> {data.date}</p>
                <p><b>Заголовок:</b> {data.title}</p>
                <p><b>Текст карточки:</b> {data.openingText}</p>
                <p><b>Внутр. текст:</b> {data.innerText.slice(0,80) + "..."}</p>
                <p><b>Показывать:</b> {data.show ? "Да" : "Нет"}</p>

                <DeleteCategoryButton text={"Удалить статью"} url={`/articles/${data.id}`} />
            </div>
        </div>
    );
};

export default ListNewsItem;
