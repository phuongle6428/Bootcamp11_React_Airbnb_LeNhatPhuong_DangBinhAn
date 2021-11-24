import React from 'react'
import './../../../styles/CardLocation.css'

function CardLocation() {
    return (
        <div className="container">
            <h2 className="section_title">Cảm hứng cho chuyến đi tiếp theo của bạn</h2>
            <div className=" grid">
                <div className=" location_card">
                    <img src="https://a0.muscache.com/im/pictures/d7af7367-c8df-4eda-902f-fa90286472b1.jpg?im_w=480" alt="location1" />
                    <div className="location_text ">
                        <h2>Thành phố Kansas</h2>
                        <p>4,5 giờ lái xe</p>
                    </div>
                </div>
                <div className="location_card">
                    <img src="https://a0.muscache.com/im/pictures/12c42722-4e5a-4c2b-b6a1-ae6ddca46395.jpg?im_w=480" alt="location2" />
                    <div className="location_text ">
                        <h2>Thành phố Oklahoma</h2>
                        <p>4 giờ lái xe</p>
                    </div>
                </div>
                <div className=" location_card">
                    <img src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=480" alt="location3" />
                    <div className="location_text ">
                        <h2>Thành phố Branson</h2>
                        <p>7 giờ lái xe</p>
                    </div>
                </div>
                <div className=" location_card">
                    <img src="https://a0.muscache.com/im/pictures/987777cc-4ef6-4db7-93fe-b40770abd75d.jpg?im_w=480" alt="location4" />
                    <div className="location_text ">
                        <h2>Thành phố Tulsa</h2>
                        <p>4,5 giờ lái xe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLocation
