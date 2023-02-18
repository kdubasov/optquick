import React from 'react';

//css
import "./CreatorsBlock.css";
import "./CreatorsBlockMedia.css";

const CreatorsBlock = () => {

    const getLink = (link,img) => {
        return (
            <a href={link} rel={"noreferrer"} target={"_blank"}>
                <img src={`/images/icons/${img}.svg`} alt={img}/>
            </a>
        )
    }

    return (
        <div className={"CreatorsBlock"}>
            <img src="/images/static/creators-title.png" alt="creators" className="title"/>

            <div className="inner-container">
                <div className="inner">
                    <div className="img-dev mihail"/>
                    <div className="text">
                        <h5>Воробушков Михаил</h5>
                        <h6 className="warning">
                            UI-UX дизайнер, Front-end разработчик
                        </h6>
                        <p className={"small"}>
                            Зачастую говорят, что мотивации хватает ненадолго.
                            Но то же самое происходит и с освежающим душем,
                            поэтому и рекомендуют принимать его ежедневно.
                        </p>
                    </div>
                    <div className="links">
                        {getLink("https://t.me/pokemzed","tg")}
                        {getLink("https://vk.com/pokemzed","vk")}
                        {getLink("https://github.com/pokemzed","github")}
                    </div>
                </div>

                <div className="inner">
                    <div className="img-dev kirill"/>
                    <div className="text">
                        <h5>Дубасов Кирилл</h5>
                        <h6 className="warning">
                            Full-stack разработчик
                        </h6>
                        <p className={"small"}>
                            Через 20 лет вы будете разочарованы теми вещами,
                            которые не воплотили в жизнь.
                            Пробуя, вы набираетесь опыта.
                            Двигайтесь вперед, действуйте, открывайте!
                        </p>
                    </div>
                    <div className="links">
                        {getLink("https://t.me/kdubasov","tg")}
                        {getLink("https://vk.com/id510381583","vk")}
                        {getLink("https://github.com/kdubasov","github")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatorsBlock;
