import React from 'react'
import './../../../styles/CardExp.css'

function CardExp() {
    return (
        <div className="container mt-5">
            <h2 className="title">Khám phá Trải nghiệm Airbnb</h2>
            <div className="menu">
                <div className=" card">
                    <img  src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=720" />
                    <div className="text">
                        <p className="title">Những điều nên trải nghiệm trong chuyến đi của bạn</p>
                        <a className="exp" href="#">Trải nghiệm</a>
                    </div>
                </div>
                <div className=" card">
                    <img  src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720"/>
                    <div className="text">
                        <p className="title">Những điều nên trải nghiệm tại nhà</p>
                        <a className="exp" href="#">Trải nghiệm trực tuyến</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CardExp
