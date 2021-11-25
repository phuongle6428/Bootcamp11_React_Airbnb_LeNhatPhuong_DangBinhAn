import { Card, CardActions, CardContent, CardMedia, Input, InputLabel, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Redirect } from 'react-router';
import {getuserProfile, postUserAva} from '../actions/profile';
import avaImg from './../../../image/avatar.png'
export default function Profile() {
    const { userDetail } = useSelector(state => state.profile);
    console.log(userDetail)
    const dispatch = useDispatch();
    //Lấy thông tin người dùng
    useEffect(() => {
        const userBackData = JSON.parse(localStorage.getItem("Auth"))
        dispatch(getuserProfile(userBackData.user._id))
    }, [])
    //Tạo ref
    const profileRef = useRef({})
    //Tạo nơi lưu trữ ImgAvatar dạng File
    const [imgAvaAsFile, setimgAvaAsFile] = useState()
    //Hàm Review ảnh đại diện khi chọn ảnh
    const getImg = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onload = () => {
            console.log(file)
            profileRef.current["imgAva"].src = reader.result
            setimgAvaAsFile(file)
        }
        if(file) {
            reader.readAsDataURL(file)
        }
    }
    // Dispatch ImgAva lên server
    const handleUpdateImg= () => {
        dispatch(postUserAva(imgAvaAsFile))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={userDetail.avatar ? userDetail.avatar : avaImg}
                            alt="user avatar"
                            onClick={() =>{profileRef.current["userAva"].children[0].click()}}
                            ref={e => profileRef.current["imgAva"] = e}
                        />
                        <Input type="file" ref={e => profileRef.current["userAva"] = e} onChange={(e) => getImg(e)} style={{display:'none'}}/>
                        <CardActions>
                            <button onClick={handleUpdateImg}>Cập nhập ảnh</button>
                        </CardActions>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Xác nhận danh tính
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Xác nhân danh tính của bạn với huy hiệu xác nhân danh tínhs
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-sm-8">
                    <h4>Xin chào tôi là {userDetail.name}</h4>
                    <button>Chỉnh sửa hồ sơ</button>
                </div>
            </div>
        </div>
    )
}
