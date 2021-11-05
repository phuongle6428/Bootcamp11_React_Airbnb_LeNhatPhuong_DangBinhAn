import React from 'react'
import './../../../styles/Picture.css'
import {Button} from '@material-ui/core'

function Picture() {
    return (
        <div className="picture">
            <div className="picture__text">
                <h1>Thử đón tiếp khách</h1>
                <span>Kiếm thêm thu nhập và khám phá các cơ hội <br /> mới bằng cách chia sẻ nơi ở của bạn</span>
                
                <Button>Tìm hiểu thêm</Button>
            </div>
            <img  src="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_q=medq" alt="" />
        </div>
    )
}

export default Picture
