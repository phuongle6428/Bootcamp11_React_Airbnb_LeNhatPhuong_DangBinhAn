import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router';
import getuserProfile from '../actions/profile';

export default function Profile() {
    const {userDetail} = useSelector(state => state.profile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getuserProfile(userBackData.user._id))
    }, [])
    const userBackData = JSON.parse(localStorage.getItem("Auth"))
    if(!userBackData) {
        return <Redirect to="/login" />
    }
    return (
        <div className="container">
            <div className="row"></div>
        </div>
    )
}
