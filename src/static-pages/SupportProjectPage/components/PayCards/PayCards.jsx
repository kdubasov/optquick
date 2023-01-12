import React from 'react';
import "./PayCards.css";

const PayCards = () => {
    return (
        <div className={"PayCards"}>
            <div className="inner">
                <img src="/images/static/bank-card.svg" alt="bank card"/>

                <div className="text">
                    <h5>Банковские реквизиты</h5>
                    <h6>
                        Tinkoff:<br />
                        <b>5536 9139 8852 7798</b>
                        <br /><br />
                        Сбербанк:<br />
                        <b>5469 4200 2071 0987</b>
                    </h6>
                </div>
            </div>

            <div className="inner">
                <img src="/images/static/crypto.svg" alt="bank card"/>

                <div className="text">
                    <h5>Криптовалюта</h5>
                    <h6>
                        Bitcoin (Bitcoin):<br />
                        <b>1ANNn6qM9ugeGEWVLq6F6PXDvMs3RrZFfo</b>
                        <br /><br />
                        Ethereum (ERC20):<br />
                        <b>0x19e54cc79cfce1bcab15d8575d0a23dfd0c435fd</b>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default PayCards;
